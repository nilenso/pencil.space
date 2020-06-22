(ns src.core
  (:require ["paper" :as paper]))

(def current-path (atom nil))
(def path-buffer (atom nil))
(def buffer-duration-ms 100)

#_(defn draw-received-drawing
  [path]
  (let [path (clj->js (map (fn [point] [(+ (first point) 35) (second point)]) path))]
    (new paper/Path (clj->js {:strokeColor "red"
                              :strokeWidth 4
                              :strokeJoin  "round"
                              :strokeCap   "round"
                              :segments    path}))))

(defn send-drawing
  [path]
  (.log js/console (clj->js path))
  #_(draw-received-drawing (:path @path-buffer)))

(defn send-drawing-buffered
  [event]
  (let [x (.-x (.-point event))
        y (.-y (.-point event))]
    (if (> (- (.getTime (js/Date.)) (:timestamp @path-buffer)) buffer-duration-ms)
      (do
        (send-drawing (:path @path-buffer))
        (swap! path-buffer assoc :path [])
        (swap! path-buffer assoc :timestamp (.getTime (js/Date.))))
      (swap! path-buffer update :path conj [x y]))))

(defn onMouseDown
  [event]
  (reset! current-path (new paper/Path (clj->js {:strokeColor "red"
                                                 :strokeWidth 4
                                                 :strokeJoin  "round"
                                                 :strokeCap   "round"})))
  (.add @current-path (.-point event))
  (reset! path-buffer {:path      []
                       :timestamp (.getTime (js/Date.))}))

(defn onMouseDrag
  [event]
  (.add @current-path (.-point event))
  (.smooth @current-path)
  (send-drawing-buffered event))

(defn main []
  (let [canvas (.getElementById js/document "canvas")]
    (.setup paper canvas)
    (set! (.-onMouseDown paper/view) onMouseDown)
    (set! (.-onMouseDrag paper/view) onMouseDrag)))
