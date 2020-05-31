(ns src.canvas.views
  (:require ["paper" :as paper]
            [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [reagent.dom :as reagent-dom]
            [src.sundry :refer [>evt ->clj ->js]]
            [src.tube.core :as tube]))

(defonce ^:private tube-event-type "draw")

(def current-path (atom nil))
(def path-buffer (atom nil))
(def buffer-duration-ms 30)

(defn current-time []
  (.getTime (js/Date.)))

(defn new-path [& [options]]
  (new paper/Path (clj->js (merge {:strokeColor "red"
                                   :strokeWidth 4
                                   :strokeJoin  "round"
                                   :strokeCap   "round"}
                                  options))))

(defn new-path-buffer [& [options]]
  (merge {:segments  []
          :path-id   (.-id @current-path)
          :timestamp (current-time)}
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
    (>evt [:send-new-path @path-buffer tube-event-type])
    (clear-path-buffer!)))

(defn send-buffer-if-time! []
  (if (> (- (current-time)
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
    (send-buffer!)))

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
        [:canvas#drawing-board])})))

(defn mount []
  (tube/connect)
  (tube/join tube-event-type draw-received-drawing))
