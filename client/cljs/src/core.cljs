(ns src.core
  (:require ["paper" :as paper]))

(def current-path (atom nil))

#_(defn draw []
  (let [path  (new paper/Path)
        start (new paper/Point 100 100)]
    (set! (.-strokeColor path) "black")
    (.moveTo path start)
    (.lineTo path (.add start 100 130))))

(defn onMouseDown
  [event]
  (reset! current-path (new paper/Path (clj->js {:strokeColor "red"
                                                :strokeWidth 4
                                                :strokeJoin  "round"
                                                :strokeCap   "round"})))
  (.add @current-path (.-point event)))

(defn onMouseDrag
  [event]
  (.add @current-path (.-point event))
  (.smooth @current-path))

(defn main []
  (let [canvas (.getElementById js/document "canvas")]
    (.setup paper canvas)
    (set! (.-onMouseDown paper/view) onMouseDown)
    (set! (.-onMouseDrag paper/view) onMouseDrag)
    (set! (.-onMouseUp paper/view) #(.log js/console @current-path))))
