(ns src.core
  (:require ["paper" :as paper]))

(defn draw []
  (let [path  (new paper/Path)
        start (new paper/Point 100 100)]
    (set! (.-strokeColor path) "black")
    (.moveTo path start)
    (.lineTo path (.add start 100 100))
    (.draw paper/view)))

(defn init
  []
  (let [canvas (.getElementById js/document "canvas")]
    (.setup paper canvas)
    (draw)))

(defn main []
  (init)
  (.log js/console "hey"))
