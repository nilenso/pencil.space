(ns src.components.chat
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [src.sundry :refer [>evt <sub
                                ->clj ->js
                                ->input
                                now epoch->local]]
            [src.tube :as tube]))

(defonce ^:private tube-event-type "chat")

(defn create-msg [{:keys [nick-name avatar]} msg]
  {:body msg
   :avatar avatar
   :publish-time (now)
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
      [:form.form-group.row.chat-box {:on-submit (fn [e]
                                                   (.preventDefault e)
                                                   (>evt [::send-msg @value])
                                                   (reset! value ""))}
       [:input.no-resize.chat-input.col-9 {:placeholder "Type your msg..."
                                           :on-change   #(reset! value (->input %))
                                           :value       @value}]

       [:button.chat-submit.border-4.col-3 {:type :submit} "Send"]])))

(defn history
  [msgs]
  [:div.chat-history
   [:ul
    (for [msg msgs]
      ^{:key (str (random-uuid))}
      [:li (:body msg)
       [:img {:src (:avatar msg)}]
       [:span (str " by " (:nick-name msg))]
       [:span (str " at " (epoch->local (:publish-time msg)
                                        true))]])]])

(defn page []
  (fn []
    [:div.chat
     [history (<sub [::chat-history])]
     [chat-box]]))

(defn mount []
  (tube/connect)
  (tube/join tube-event-type receive-msg))
