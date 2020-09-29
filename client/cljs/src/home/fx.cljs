(ns src.home.fx
  (:require ["roughjs/bin/rough" :default rough]
            [re-frame.core :as re-frame]
            [src.sundry :refer [->js]]))

(defn canvas []
  (.getElementById js/document "nick-sine"))

(defn nick-canvas []
  (.canvas rough (canvas)))

(defn clear-canvas
  [canvas]
  (.clearRect (.getContext canvas "2d") 0 0 (.-width canvas) (.-height canvas)))

(defn points []
  (reduce (fn [acc v]
            (let [x (+ 10 (* v (/ 100 15)))
                  x-deg (* (/ (.-PI js/Math) (rand 500)) x)
                  y-deg (* (.sin js/Math x-deg) 90)
                  y (+ (.round js/Math y-deg) 50)]
              (conj acc [x y])))
          []
          (range 0 20)))

(re-frame/reg-fx
 ::draw-sine!
 (fn [[clear? color]]
   (if clear?
     (clear-canvas (canvas))
     (.curve (nick-canvas)
             (->js (points))
             (->js {:roughness 1.2,
                    :stroke color,
                    :strokeWidth 5})))))
