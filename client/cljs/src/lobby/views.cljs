(ns src.lobby.views
  (:require [re-frame.core :as re-frame]
            [src.tube.core :as tube]
            [src.sundry :refer [>evt <sub ->clj]]))

(re-frame/reg-sub
 ::get-participants
 (fn [db]
   (prn (:participants db))
   (:participants db)))

(defn page []
  (fn []
    [:div
     [:h2 "Lobby"]
     [:ol
      (for [{:keys [id name avatar] :as participants} (<sub [::get-participants])]
        ^{:key (str (random-uuid))}
        [:li
         [:span name]
         [:img {:src avatar}]
         [:span id]])]]))


(defn mount [_])
