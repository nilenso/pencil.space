(ns src.lobby.views
  (:require [re-frame.core :as re-frame]
            [src.chat.views :as chat]
            [src.lobby.subs :as subs]
            [src.game.events :as game-events]
            [src.sundry :refer [>evt <sub ->clj]]
            [src.tube.core :as tube]))

(defn page []
  (fn []
    [:div
     [:div.row.flex-center
      [:div.player-list.sm-3.col.content
       [:ol
        (for [{:keys [id name avatar] :as players} (<sub [::subs/get-players])]
          ^{:key (str (random-uuid))}
          [:li.row.flex-middle
           [:span.sm-6.col
            name]
           [:div.sm-6.col
            [:div.row.flex-right
             [:div.col
              [:img.avatar {:src avatar}]]]]])]]
      [:div.sm-3.col
       [chat/page]]]

     [:div.row
      [:div.sm-12.col.content
       [:button.btn-success.btn-block
        {:on-click #(>evt [::game-events/start-game])}
        "Start"]]]]))
