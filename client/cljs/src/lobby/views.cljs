(ns src.lobby.views
  (:require [re-frame.core :as re-frame]
            [src.sundry :refer [>evt <sub]]))

(re-frame/reg-sub
 ::players
 (fn [db]
   (select-keys db [:nick-name :avatar :id])))

(defn page []
  (let [{:keys [nick-name avatar id]} (<sub [::players])]
    [:div
     [:h1 "Lobby"]
     [:ul
      [:li [:span nick-name]]
      [:li [:img {:src avatar}]]
      [:li [:span id]]]]))
