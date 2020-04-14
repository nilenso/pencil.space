(ns src.chat
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [src.time :as time]
            [src.sundry :as sundry :refer [>evt <sub ->clj ->js ->input]]
            [src.tube :as tube]))

(defonce ^:private tube-event-type "[CHAT]")

(defn create-msg [{:keys [nick-name avatar]} msg]
  {:body msg
   :avatar avatar
   :publish-time (time/now)
   :nick-name nick-name})

(re-frame/reg-event-fx
 ::send-msg
 (fn [{:keys [db]} [_ msg]]
   {::dispatch! (create-msg db msg)}))

(re-frame/reg-fx
 ::dispatch!
 (fn [msg]
   (tube/push tube-event-type (->js msg))))

(re-frame/reg-event-db
 ::populate-msg
 (fn [db [_ msg]]
   (update db :chat-history conj msg)))

(re-frame/reg-sub
 ::chat-history
 (fn [db]
   (:chat-history db)))

(defn receive-msg
  [resp]
  (>evt [::populate-msg (->clj resp)]))

(defn chat-box []
  (let [value (reagent/atom nil)]
    (fn []
      [:div
       [:textarea.no-resize {:placeholder "Type your msg..."
                             :on-change #(reset! value (->input %))}]

       [:button
        {:on-click #(>evt [::send-msg @value])}
        "Send"]])))

(defn history
  [msgs]
  [:ul
   (for [msg msgs]
     ^{:key (str (random-uuid))}
     [:li (:body msg)
      [:img {:src (:avatar msg)}]
      [:span (str " by " (:nick-name msg))]
      [:span (str " at " (time/epoch->local (:publish-time msg) true))]])])

(defn page []
  (fn []
    [:div.chat
     [:div.sm-6.md-6.clg-2.col
      [:div.chat-history
       [history (<sub [::chat-history])]]]
     [:div.form-group.chat-box
      [chat-box]]]))

(defn mount []
  (tube/connect)
  (tube/join tube-event-type receive-msg))
