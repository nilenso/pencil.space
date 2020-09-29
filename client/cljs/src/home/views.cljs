(ns src.home.views
  (:require [re-frame.core :as re-frame]
            [reitit.frontend.easy :as rfe]
            [src.game.events :as game-events]
            [src.home.events :as events]
            [src.home.subs :as subs]
            [src.sundry :refer [>evt <sub
                                ->js ->input
                                rand-hex-color]]))

(defn page []
  (fn []
    (let [nick (<sub [::subs/name])]
      [:div.row.flex-center
       [:div.col
        [:div.row
         [:div.sm-12.col
          [:h1 "✏ This is pencil.space"]]]

        [:div.row.flex-center.flex-middle
         [:div.sm-4.col.margin-left-large
          [:label {:for "paperInputs1"}]
          [:input#paperInputs1 {:placeholder "Enter a nick name...",
                                :type "text"
                                :auto-focus true
                                :value nick
                                :on-change #(>evt [::events/nick-change (->input %)])}]]
         [:div.sm-4.col.margin-left-large
          [:canvas#nick-sine {:width "100px" :height "100px"}]]]

        [:div.row
         [:div.sm-12.col
          [:button.btn-success.btn-block
           {:on-click #(>evt [::game-events/create-or-join
                              nick
                              (.toDataURL (.getElementById js/document "nick-sine") "image/jpeg," 0.1)])}
           "Begin"]]]]])))
