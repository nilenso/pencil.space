(ns src.home.events
  (:require [re-frame.core :as re-frame]
            [src.home.fx :as events]
            [src.sundry :refer [rand-hex-color]]))

(re-frame/reg-event-fx
 ::nick-change
 (fn [{:keys [db] :as cofx} [_ name]]
   {:db (assoc db
               :nick-name name
               :avatar (.toDataURL (.getElementById js/document "nick-sine")
                                   "image/jpeg,"
                                   0.1))
    ::events/draw-sine! [(empty? name) (rand-hex-color)]}))
