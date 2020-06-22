(ns src.api
  (:require [ajax.core :as ajax]
            [day8.re-frame.http-fx]
            [src.sundry :refer [>evt]]
            [reitit.frontend.easy :as rfe]
            [re-frame.core :as re-frame]
            [clojure.string :as str]))

(defonce ^:private game-api "http://localhost:4000/api/v1/game")

(defn join-game-params
  [game-name player-params]
  {:method          :post
   :uri             (str game-api "/" game-name)
   :timeout         5000
   :params          {:player player-params}
   :format          (ajax/json-request-format)
   :response-format (ajax/json-response-format {:keywords? true})
   :on-success      [::create-game-success]
   :on-failure      [::create-game-failure]})

(defn create-game-params
  [player-params]
  {:method          :post
   :uri             game-api
   :timeout         5000
   :params          {:player player-params}
   :format          (ajax/json-request-format)
   :response-format (ajax/json-response-format {:keywords? true})
   :on-success      [::create-game-success]
   :on-failure      [::create-game-failure]})

(re-frame/reg-event-fx
  ::create-game-success
  (fn [{:keys [db] :as cofx} [_ {:keys [game player] :as params}]]
    {:db (update (assoc db
                        :game :lobby
                        :id (:name game))
                 :participants
                 conj
                 player)
     :src.routes/redirect [:src.routes/game game]}))

(re-frame/reg-event-db
  ::create-game-failure
  (fn [db [_ result]]
    (assoc db :game :failed)))

(re-frame/reg-event-fx
 ::create-game
 (fn [{db :db} _]
   (let [player-params {:id (rand-int 100), :name (:nick-name db) :avatar (:avatar db)}
         params (if (str/blank? (:id db))
                  (create-game-params player-params)
                  (join-game-params (:id db) player-params))]
     {:http-xhrio params
      :db  (assoc db :game :starting)})))
