(ns src.game
  (:require [re-frame.core :as re-frame]
            [clojure.string :as str]
            [src.tube.fx :as tube]
            [src.sundry :refer [>evt ->clj]]))

(def state {:unstarted :joined
            :joined    :lobby
            :lobby     :in-game
            :in-game   :finished})

(re-frame/reg-event-db
 :populate-players
 (fn [db [_ msg]]
   (assoc db :participants (:players msg))))

(defn player-joined
  [resp]
  (>evt [:populate-players (->clj resp)]))

(re-frame/reg-event-fx
 ::create-or-join
 (fn [{db :db} _]
   (let [game-name (if (str/blank? (:id db))
                     (rand-int 1000)
                     (:id db))]
     {:src.tube.fx/connect [game-name {:player {:id (rand-int 1000) :name (:nick-name db) :avatar (:avatar db)}}]
      :src.tube.fx/subscribe ["player:joined" player-joined]
      :src.routes/redirect [:src.routes/game {:name game-name}]})))
