(ns src.chat.events
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-event-fx
 :send-msg
 (fn [{:keys [db]} [_ msg tube-event-type]]
   {:tube-push [tube-event-type msg]}))
