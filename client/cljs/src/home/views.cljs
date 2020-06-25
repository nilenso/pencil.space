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
      [:div.row.flex-center.title-box-container.mt-5
       [:div.content.title-box.text-center.border.border-primary
        [:h1 "✏" [:br] "pencil.space"]
        [:div.row
         [:canvas#nick-sine.border.border-primary.border-2 {:width "100px" :height "100px"}]]
        [:div.row
         [:div.col-12.text-center
          [:input.nick-input {:placeholder "Enter a nick name...",
                             :type        "text"
                             :auto-focus  true
                             :value       nick
                             :on-change   #(>evt [::events/nick-change (->input %)])}]]]

        [:div.row
         [:div.sm-12.col
          [:button.btn-primary.no-hover.btn-block
           {:on-click #(>evt [::game-events/create-or-join
                              nick
                              (.toDataURL (.getElementById js/document "nick-sine") "image/jpeg," 0.1)])}
           ; TODO: Say "start a game" or "Join game" depending on state
           "Start a game"]]]]])))
