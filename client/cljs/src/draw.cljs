(ns src.draw
  (:require ["paper" :as paper]
            [reagent.core :as reagent]
            [reagent.dom :as reagent-dom]))

(def current-path (atom nil))
(def path-buffer (atom nil))
(def buffer-duration-ms 100)

(def external-current-path (atom nil))
(def external-current-path-id (atom nil))

(defn new-path [& [options]]
  (new paper/Path (clj->js (merge {:strokeColor "red"
                                   :strokeWidth 4
                                   :strokeJoin  "round"
                                   :strokeCap   "round"}
                                  options))))
(defn current-time []
  (.getTime (js/Date.)))

(defn new-external-path
  [path-id segments]
  (reset! external-current-path-id path-id)
  (reset! external-current-path (new-path {:segments segments})))

(defn draw-received-drawing
  [{:keys [segments path-id timestamp]}]
  (let [segments (map (fn [s] [(+ 100 (first s)) (second s)]) segments)]
    (if (= @external-current-path-id path-id)
      (.addSegments @external-current-path (clj->js segments))
      (new-external-path path-id segments))))

(defn send-drawing
  [path]
  (draw-received-drawing path))

(defn send-drawing-buffered
  [event]
  (let [x (.-x (.-point event))
        y (.-y (.-point event))]
    (if (> (- (.getTime (js/Date.)) (:timestamp @path-buffer)) buffer-duration-ms)
      (do
        (send-drawing @path-buffer)
        (swap! path-buffer assoc :segments [])
        (swap! path-buffer assoc :timestamp (current-time)))
      (swap! path-buffer update :segments conj [x y]))))

(defn on-mouse-down
  [event]
  (js/console.log "mouse down")

  (reset! current-path (new-path))
  (.add @current-path (.-point event))
  (reset! path-buffer {:segments  []
                       :path-id   (.-id @current-path)
                       :timestamp (current-time)}))

(defn on-mouse-drag
  [event]

  (js/console.log "mouse drag")

  (.add @current-path (.-point event))
  (.smooth @current-path)

  (send-drawing-buffered event))

(defn on-mouse-up
  [event]

  (js/console.log "mouse up")

  (.add @current-path (.-point event))
  (.smooth @current-path)

  (send-drawing @path-buffer))

(defn page []
  (.addEventListener js/window "resize" on-window-resize)
  (let [dom-node (reagent/atom nil)]
    (reagent/create-class
     {:component-did-update
      (fn [this] (js/console.log "did update"))

      :component-did-mount
      (fn [this]
        (reset! dom-node (reagent-dom/dom-node this))

        (.setup paper (.-first-child dom-node))

        (set! (.-onMouseUp paper/view)   on-mouse-up)
        (set! (.-onMouseDown paper/view) on-mouse-down)
        (set! (.-onMouseDrag paper/view) on-mouse-drag)

        (new-external-path 0 []))

      :reagent-render
      (fn []
        [:div.board
         [:canvas#drawing-board]])})))
