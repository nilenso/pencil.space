(ns src.chat.views
  (:require [reagent.core :as reagent]
            [src.sundry :refer [>evt <sub
                                ->clj ->input
                                now
                                epoch->local]]
            [src.tube.core :as tube]
            [re-frame.core :as re-frame]))

(defonce ^:private tube-event-type "chat")

(defn create-message [msg]
  {:body         msg
   :avatar       (<sub [:avatar])
   :publish-time (now)
   :nick-name    (<sub [:nick-name])})

(defn receive-msg
  [resp]
  (>evt [:populate-msg (->clj resp)]))

(defn chat-box []
  (let [value (reagent/atom nil)]
    (fn []
      [:form.form-group.row.chat-box {:on-submit (fn [e]
                                                   (.preventDefault e)
                                                   (>evt [:send-msg (create-message @value) tube-event-type])
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
     [history (<sub [:chat-history])]
     [chat-box]]))

(defn mount []
  (comment
    (tube/connect "garbage" {})
    (tube/subscribe tube-event-type receive-msg)))
