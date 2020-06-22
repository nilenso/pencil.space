(ns src.chat.events
  (:require [re-frame.core :as re-frame]
            [src.sundry :refer [now]]
            [src.db :as db]
            [src.tube.fx :as tube]))

(re-frame/reg-event-fx
 ::send-msg
 (fn [{db :db} [_ tube-event-type msg]]
   (let [{:keys [name avatar]} (db/you db)]
     {::tube/push [tube-event-type {:body msg
                                    :avatar avatar
                                    :name name
                                    :publish-time (now)}]})))
