(ns src.routes
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [reagent.dom :as reagent-dom]
            [reitit.coercion.spec :as rss]
            [reitit.core :as r]
            [reitit.frontend :as rf]
            [reitit.frontend.controllers :as rfc]
            [reitit.frontend.easy :as rfe]
            [src.chat.views :as chat]
            [src.game.views :as game]
            [src.home.views :as home]
            [src.lobby.views :as lobby]
            [src.db :as db]
            [src.sundry :refer [>evt <sub ->js]]
            [clojure.string :as str]))

(re-frame/reg-event-db
  ::update-game
  (fn [db [_ name]]
    (assoc db :game :starting :id name)))

(def routes
  ["/"
   ["" {:name ::home
        :view home/page
        :controllers
        [{:start (fn [& params] (js/console.log "Entering home page"))
          :stop  (fn [& params] (js/console.log "Leaving home page"))}]}]

   ["chat" {:name ::chat
            :view chat/page
            :controllers
            [{:start (fn [& params]
                       (chat/mount)
                       (js/console.log "Entering sub-page 2"))
              :stop  (fn [& params] (js/console.log "Leaving sub-page 2"))}]}]

   ["game/:name" {:name ::game
                  :view lobby/page
                  :parameters {:path {:name string?}}
                  :controllers
                  [{:parameters {:path [:name]}
                    :start (fn [& params] (js/console.log "Entering game"))
                    :stop  (fn [& params] (js/console.log "Leaving game"))}]}]

   ["lobby" {:name ::lobby
             :view lobby/page
             :controllers
             [{:start (fn [& params] (js/console.log "Entering sub-page 2"))
               :stop  (fn [& params] (js/console.log "Leaving sub-page 2"))}]}]

   ["draw"
    {:name ::draw
     :view game/page
     :controllers
     [{:start (fn [& params]
                (game/mount)
                (js/console.log "Entering sub-page 2"))
       :stop  (fn [& params] (js/console.log "Leaving sub-page 2"))}]}]])

(def router
  (rf/router
   routes
   {:data {:coercion rss/coercion}}))

(re-frame/reg-sub
 ::current-route
 (fn [db]
   (:current-route db)))

(re-frame/reg-fx
 ::redirect
 (fn [route-info]
   (apply rfe/push-state route-info)))

;; if they are new-player?
;; send them to home page
;; which will again check if they are new plater
(re-frame/reg-event-fx
 ::navigated
 (fn [{db :db} [_ new-match]]
   (let [current-route (:current-route db)
         game?         (= (-> (r/match-by-name router ::game) :data :name)
                          (-> new-match :data :name))

         game-id       (when game? (-> new-match :path-params :name))

         new-match     (if (and game? (str/blank? (:name (db/you db))))
                         (rf/match-by-name router ::home)
                         new-match)

         controllers   (rfc/apply-controllers (:controllers current-route) new-match)

         new-route     (assoc new-match :controllers controllers)]
     {:db (assoc db :current-route new-route :id game-id)})))

(defn on-navigate [new-match]
  (when new-match
    (>evt [::navigated new-match])))

(defn router-component []
  (let [current-route (<sub [::current-route])]
    [:div
     (when current-route
       [(-> current-route :data :view)])]))

(defn init []
  (js/console.log "Initializing routes")

  (rfe/start!
   router
   on-navigate
   {:use-fragment false}))

(defn mount [page-root]
  (re-frame/clear-subscription-cache!)
  (init)
  (reagent-dom/render [router-component] page-root))
