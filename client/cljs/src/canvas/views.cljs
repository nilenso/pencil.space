(ns src.canvas.views
  (:require ["paper" :as paper]
            [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [reagent.dom :as reagent-dom]
            [src.canvas.events :as events]
            [src.sundry :refer [>evt ->clj ->js now]]
            [src.tube.core :as tube]))

(defonce ^:private tube-event-type "draw")

(def current-path (atom nil))
(def path-buffer (atom nil))
(def buffer-duration-ms 30)
(def colour (atom "#555555"))
(def erase-sound (new js/Audio "assets/sounds/scratch_in.mp3"))

(def colour-pencils
  [{:filename "yellow.png" :colour-code "#fceb19"}
   {:filename "dark-yellow.png" :colour-code "#f0a806"}
   {:filename "orange.png" :colour-code "#ea7f15"}
   {:filename "red.png" :colour-code "#ef5336"}
   {:filename "dark-red.png" :colour-code "#b2212d"}
   {:filename "blue.png" :colour-code "#3c8cef"}
   {:filename "dark-blue.png" :colour-code "#3d48c7"}
   {:filename "green.png" :colour-code "#4db108"}
   {:filename "dark-green.png" :colour-code "#36684d"}
   {:filename "brown.png" :colour-code "#71594d"}
   {:filename "black.png" :colour-code "#555555"}])

(defn new-path [& [options]]
  (new paper/Path (clj->js (merge {:strokeColor  @colour
                                   :strokeWidth  3
                                   :strokeJoin   "round"
                                   :shadowColor  "#eee"
                                   :shadowBlur   2
                                   :shadowOffset [0, 0]
                                   :strokeCap    "round"}
                                  options))))

(defn new-path-buffer [& [options]]
  (merge {:segments  []
          :path-id   (.-id @current-path)
          :timestamp (now)}
         options))

;; temporary: draw sent path
(def external-current-path (atom nil))
(def external-current-path-id (atom nil))

(defn new-external-path
  [path-id segments]
  (reset! external-current-path-id path-id)
  (reset! external-current-path (new-path {:segments segments})))

(defn draw-received-drawing
  [path-data]
  (let [{:keys [segments path-id timestamp]} (->clj path-data)]
    (if (= @external-current-path-id path-id)
      (.addSegments @external-current-path (->js segments))
      (new-external-path path-id segments))))

(defn clear-path-buffer! []
  (reset! path-buffer (new-path-buffer)))

(defn send-buffer! []
  (when (not-empty (:segments @path-buffer))
    (>evt [::events/send-new-path @path-buffer tube-event-type])
    (clear-path-buffer!)))

(defn send-buffer-if-time! []
  (if (> (- (now)
            (:timestamp @path-buffer))
         buffer-duration-ms)
    (send-buffer!)))

(defn serialize-point
  [point]
  [(.-x point) (.-y point)])

(defn add-to-buffer!
  [point]
  (swap! path-buffer update :segments conj (serialize-point point)))

(defn add-to-current-path!
  [point]
  (-> @current-path
      (.add point)
      .smooth))

(defn on-mouse-down
  [event]
  (let [point (.-point event)]
    (reset! current-path (new-path {:segments [point]}))
    (reset! path-buffer (new-path-buffer {:segments [(serialize-point point)]}))))

(defn on-mouse-drag
  [event]
  (let [point (.-point event)]
    (add-to-current-path! point)
    (add-to-buffer! point)
    (send-buffer-if-time!)))

(defn on-mouse-up
  [event]
  (let [point (.-point event)]
    (add-to-current-path! point)
    (add-to-buffer! point)
    (send-buffer!)))

(defn erase []
  (let [overlay-div      (js/document.getElementById "scratcher")
        frame-duration   35
        background-frame (atom 0)
        js-interval      (atom nil)
        begin-animation  #(reset! js-interval (js/setInterval % frame-duration))
        stop-animation   #(js/clearInterval @js-interval)

        set-overlay   #(set! (.. overlay-div -style -display) "block")
        clear-overlay #(set! (.. overlay-div -style -display) "none")
        clear-canvas  #(.removeChildren (.-activeLayer paper/project))]
    (set-overlay)
    (.play erase-sound)
    (begin-animation
     #(if (< (swap! background-frame inc) 19) ;;hardcoded frame number from scratch.png
        (set! (.. overlay-div -style -backgroundPositionY) (str (* @background-frame -100) "%"))
        (do
          (stop-animation)
          (clear-canvas)
          (clear-overlay))))))

(defn page []
  (let [dom-node (reagent/atom nil)]
    (reagent/create-class
     {:component-did-mount
      (fn [this]
        (reset! dom-node (reagent-dom/dom-node this))
        (.setup paper (js/document.getElementById "drawing-board"))
        (set! (.-onMouseUp paper/view)   on-mouse-up)
        (set! (.-onMouseDown paper/view) on-mouse-down)
        (set! (.-onMouseDrag paper/view) on-mouse-drag)
        (new-external-path 0 []))

      :reagent-render
      (fn []
        [:div.drawing-canvas
         [:canvas#drawing-board]
         [:div.canvas-texture]
         [:div#scratcher]
         [:div.colour-pencils
          (for [{:keys [filename colour-code]} colour-pencils]
            [:img.colour-pencil {:key       colour-code
                                 :draggable "false"
                                 :src       (str "/assets/img/" filename)
                                 :on-click  #(reset! colour colour-code)}])]])})))
