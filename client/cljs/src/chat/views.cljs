(ns src.chat.views
  (:require [reagent.core :as reagent]
            [src.sundry :refer [>evt <sub
                                ->clj ->input
                                epoch->local]]
            [src.tube.core :as tube]
            [src.chat.subs :as subs]
            [src.chat.events :as events]
            [re-frame.core :as re-frame]))

(defonce ^:private tube-event-type "player:chat")

(defn chat-box []
  (let [value (reagent/atom nil)]
    (fn []
      [:form.form-group.row.chat-box {:on-submit (fn [e]
                                                   (.preventDefault e)
                                                   (>evt [::events/send-msg tube-event-type @value])
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
       [:span (str " by " (:name msg))]
       [:span (str " at " (epoch->local (:publish-time msg) true))]])]])

(defn page []
  (fn []
    [:div.chat
     [history (<sub [::subs/chat-history])]
     [chat-box]]))

(defn mount [])
