(ns src.home.events
  (:require [re-frame.core :as re-frame]
            [src.home.fx :as fx]
            [src.db :as db]
            [src.sundry :refer [rand-hex-color]]))

(re-frame/reg-event-fx
 ::nick-change
 (fn [{:keys [db] :as cofx} [_ name]]
   {:db (update db :players db/update-you {:name name})
    ::fx/draw-sine! [(empty? name) (rand-hex-color)]}))
