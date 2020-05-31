(ns src.canvas.events
  (:require [re-frame.core :as re-frame]
            [src.tube :as tube]))

;TODO move to tube/
(re-frame/reg-fx
 :send!
 (fn [[path tube-event-type]]
   (tube/push tube-event-type path)))

(re-frame/reg-event-fx
 :send-new-path
 (fn [db [_ path tube-event-type]]
   {:send! [path tube-event-type]}))
