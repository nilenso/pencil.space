(ns src.lobby.views
  (:require [re-frame.core :as re-frame]
            [src.lobby.subs :as subs]
            [src.sundry :refer [>evt <sub ->clj]]
            [src.tube.core :as tube]))

(defn page []
  (fn []
    [:div
     [:h2 "Lobby"]
     [:ol
      (for [{:keys [id name avatar] :as participants} (<sub [::subs/get-participants])]
        ^{:key (str (random-uuid))}
        [:li
         [:span name]
         [:img {:src avatar}]
         [:span id]])]]))
