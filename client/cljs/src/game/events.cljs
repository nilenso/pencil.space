(ns src.game.events
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

(re-frame/reg-event-db
 :populate-msg
 (fn [db [_ msg]]
   (update db :chat-history conj msg)))

(defn receive-msg
  [resp]
  (>evt [:populate-msg (->clj resp)]))

(re-frame/reg-event-fx
 ::subscribe
 (fn [{db :db} effect]
   {:src.tube.fx/subscribe effect}))

(re-frame/reg-event-fx
 ::create-or-join
 (fn [{{:keys [id nick-name avatar] :as db} :db} _]
   (let [game-name (if (str/blank? id)
                     (rand-int 1000)
                     id)]
     {:src.tube.fx/connect [game-name
                            {:player {:id (rand-int 1000)
                                      :name nick-name
                                      :avatar avatar}}]
      :src.tube.fx/subscribe [["player:joined" player-joined]
                              ["chat", receive-msg]]
      :src.routes/redirect [:src.routes/game {:name game-name}]})))

;; game
;; handles subscribing to chat, player:join, player:leave, draw
;; chat component just keeps populating stuff off of chat-history
;; new messages get sent an event that pushes on tube
