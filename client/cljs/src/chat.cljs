(ns src.chat
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [src.tube :as tube]))

(re-frame/reg-event-fx
 ::send-message
 (fn [db [_ msg]]
   {::dispatch! msg}))

(re-frame/reg-fx
 ::dispatch!
 (fn [msg]
   (tube/push "[CHAT]" (clj->js msg))))

(re-frame/reg-event-db
 ::populate-message
 (fn [db [_ msg]]
   (update db :chat-history conj msg)))

(re-frame/reg-sub
 ::chat-history
 (fn [db]
   (:chat-history db)))

(defn receive-message
  [resp]
  (re-frame/dispatch [::populate-message (:msg (js->clj resp :keywordize-keys true))]))

(defn chat-box []
  (let [value (reagent/atom nil)]
    (fn []
      [:div
       [:textarea.no-resize {:placeholder "Type your message..."
                             :on-change #(reset! value (-> % .-target .-value))}]

       [:button
        {:on-click #(re-frame/dispatch [::send-message @value])}
        "Send"]])))

(defn history
  [messages]
  [:ul
   (for [message messages]
     ^{:key (str (random-uuid))}
     [:li message])])

(defn page []
  (let [_ (tube/connect)
        _ (tube/join receive-message)
        messages (re-frame/subscribe [::chat-history])]
    (fn []
      [:div.chat
       [:div.sm-6.md-6.clg-2.col
        [:div.chat-history
         (history @messages)]]
       [:div.form-group.chat-box
        [chat-box]]])))
