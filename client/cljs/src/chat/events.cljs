(ns src.chat.events
  (:require [re-frame.core :as re-frame]
            [src.sundry :refer [->js now]]
            [src.tube :as tube]))

(defonce ^:private tube-event-type "chat")

;; TODO move back to view
(defn create-msg [{:keys [nick-name avatar]} msg]
  {:body         msg
   :avatar       avatar
   :publish-time (now)
   :nick-name    nick-name})

;; effects: TODO move to tube/
(re-frame/reg-fx
 :send-msg!
 (fn [msg]
   (tube/push tube-event-type (->js msg))))

;;events
(re-frame/reg-event-fx
 :send-msg
 (fn [{:keys [db]} [_ msg]]
   {:send-msg! (create-msg db msg)}))

(re-frame/reg-event-db
 :populate-msg
 (fn [db [_ msg]]
   (update db :chat-history conj msg)))
