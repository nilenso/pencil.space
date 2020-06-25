(ns src.game.events
  (:require [re-frame.core :as re-frame]
            [clojure.string :as str]
            [src.tube.fx :as tube]
            [src.db :as db]
            [src.sundry :refer [>evt ->clj]]))

(def next-state {:unstarted :lobby
                 :lobby     :started
                 :started   :finished})

(re-frame/reg-event-db
 ::populate-players
 (fn [db [_ msg]]
   (update db :players db/update-players (:players msg))))

(defn player-joined
  [resp]
  (>evt [::populate-players (->clj resp)]))

(re-frame/reg-event-db
 ::populate-msg
 (fn [db [_ msg]]
   (update db :chat-history conj msg)))

(defn receive-msg
  [resp]
  (>evt [::populate-msg (->clj resp)]))

(re-frame/reg-event-fx
 ::create-or-join
 (fn [{{:keys [id game] :as db} :db} [_ player-name player-avatar]]
   (let [game-name (if (str/blank? id)
                     (rand-int 1000)
                     id)
         player-deets {:id (rand-int 1000)
                       :name player-name
                       :avatar player-avatar}]
     {:db (assoc (update db :players db/update-you player-deets) :game (next-state game))
      :src.tube.fx/connect [game-name {:player player-deets}]
      :src.tube.fx/subscribe [["player:joined" player-joined]
                              ["player:chat" receive-msg]]
      :src.routes/redirect [:src.routes/game {:name game-name}]})))

(re-frame/reg-event-fx
 ::start-game
 (fn [{{:keys [id game] :as db} :db} _]
   {:db (assoc db :game (next-state game))
    :src.tube.fx/subscribe [["player:draw" src.canvas.views/draw-received-drawing]]
    :src.routes/redirect [:src.routes/game {:name id}]}))
