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
  (let [nick (<sub [::subs/nick-name])]
    (fn []
      [:div.row.flex-center
       [:div.sm-4.col
        [:h1 "✏ This is pencil.space"]
        [:div.form-group
         [:div.row.flex-right
          [:div.sm-4.col
           [:label {:for "paperInputs1"}]
           [:input#paperInputs1 {:placeholder "Enter a nick name...",
                                 :type "text"
                                 :auto-focus true
                                 :on-change #(>evt [::events/nick-change (->input %)])}]]
          [:div.sm-8.col
           [:canvas#nick-sine {:width "800" :height "100"}]]]
         [:button.btn-success.btn-block
          {:on-click #(>evt [::game-events/create-or-join])}
          "Begin"]]]])))
