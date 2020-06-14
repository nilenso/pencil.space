(ns src.tube.fx
  (:require [re-frame.core :as re-frame]
            [src.tube.core :as tube]
            [src.sundry :refer [->js]]))

(re-frame/reg-fx
 ::connect
 (fn [[name params]]
   (tube/connect name params)))

(re-frame/reg-fx
 ::subscribe
 (fn [[tube-event-type on-event-cb]]
   (tube/subscribe tube-event-type on-event-cb)))

(re-frame/reg-fx
 ::push
 (fn [[tube-event-type msg]]
   (tube/push tube-event-type (->js msg))))
