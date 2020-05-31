(ns src.tube.fx
  (:require [re-frame.core :as re-frame]
            [src.tube.core :as tube]
            [src.sundry :refer [->js]]))

#_(re-frame/reg-fx
 :tube-connect
 (fn []
   (tube/connect)))

#_(re-frame/reg-fx
 :tube-join
 (fn [[tube-event-type on-event-cb]]
   (tube/join tube-event-type on-event-cb)))

(re-frame/reg-fx
 :tube-push
 (fn [[tube-event-type msg]]
   (tube/push tube-event-type (->js msg))))
