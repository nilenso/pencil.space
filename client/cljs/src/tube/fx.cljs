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
 (fn [events]
   (doseq [[event-type on-event-cb] events]
     (tube/subscribe event-type on-event-cb))))

(re-frame/reg-fx
 ::push
 (fn [[event-type msg]]
   (tube/push event-type (->js msg))))
