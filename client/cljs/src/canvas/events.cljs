(ns src.canvas.events
  (:require [re-frame.core :as re-frame]
            [src.tube.fx :as tube]))

(re-frame/reg-event-fx
 ::send-new-path
 (fn [db [_ path tube-event-type]]
   {::tube/push [tube-event-type path]}))
