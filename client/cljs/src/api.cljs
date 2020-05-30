(ns src.api
  (:require [ajax.core :as ajax]
            [day8.re-frame.http-fx]
            [reitit.frontend.easy :as rfe]
            [re-frame.core :as re-frame]))

(defonce ^:private game-api "http://localhost:8080/api/v1/game")

(re-frame/reg-fx
 ::navigate!
 (fn [route]
   (apply rfe/push-state route)))

(re-frame/reg-event-fx
  ::create-game-success
  (fn [{:keys [db] :as cofx} [_ result]]
    (prn "hi2u")
    {:db (assoc db
                :game :lobby
                :id (:name result))

     ::navigate! [:src.routes/lobby]}))

(re-frame/reg-event-db
  ::create-game-failure
  (fn [db [_ result]]
    (assoc db :game :failed)))


(re-frame/reg-event-fx
 ::create-game
 (fn [{db :db} _]
   {:http-xhrio {:method          :post
                 :uri             game-api
                 :timeout         5000
                 :params          {:host {:id 1, :name (:nick-name db) :avatar (:avatar db)}}
                 :format          (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [::create-game-success]
                 :on-failure      [::create-game-failure]}
    :db  (assoc db :game :starting)}))
