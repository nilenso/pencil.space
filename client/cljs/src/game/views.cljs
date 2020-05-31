(ns src.game.views
  (:require [src.canvas.views :as canvas]
            [src.chat.views :as chat]))

(defn page []
  [:div.row
   [:div.xs-1.sm-2.md-2]
   [:div.xs-10.sm-8.md-8
    [:div.board.row
     [:div.xs-12.lg-8
      [canvas/page]]
     [:div.xs-12.lg-4
      [chat/page]]]]
   [:div.xs-1.sm-2.md-2]])

(defn mount []
  (canvas/mount)
  (chat/mount))
