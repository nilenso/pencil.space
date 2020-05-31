(ns src.chat.events
  (:require [re-frame.core :as re-frame]
            [src.sundry :refer [->js]]
            [src.chat.views :as views]
            [src.tube :as tube]))

;; effects: TODO move to tube/
(re-frame/reg-fx
 :send-msg!
 (fn [[msg tube-event-type]]
   (tube/push tube-event-type (->js msg))))

;;events
(re-frame/reg-event-fx
 :send-msg
 (fn [{:keys [db]} [_ msg tube-event-type]]
   {:send-msg! [msg tube-event-type]}))

(re-frame/reg-event-db
 :populate-msg
 (fn [db [_ msg]]
   (update db :chat-history conj msg)))
