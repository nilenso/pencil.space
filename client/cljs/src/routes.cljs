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
            [src.components.draw :as draw]
            [src.components.home :as home]
            [src.components.lobby :as lobby]
            [src.db :as db]
            [src.sundry :refer [>evt <sub]]
            [src.tube :as tube]))

(re-frame/reg-event-db
  ::update-game
  (fn [db [_ name]]
    (assoc db :game :starting :id name)))


(def routes
  ["/"
   [""
    {:name ::home
     :view home/page
     :controllers
     [{:start (fn [& params] (js/console.log "Entering home page"))
       :stop  (fn [& params] (js/console.log "Leaving home page"))}]}]

   ["chat"
    {:name ::chat
     :view chat/page
     :controllers
     [{:start (fn [& params]
                (chat/mount)
                (js/console.log "Entering sub-page 2"))

       :stop  (fn [& params] (js/console.log "Leaving sub-page 2"))}]}]

   ["game/:name"
    {:name ::game
     :view home/page
     :controllers
     [{:start (fn [& params]
                (js/console.log "Entering game" params))
       :stop  (fn [& params] (js/console.log "Leaving game"))}]}]

   ["lobby"
    {:name ::lobby
     :view lobby/page
     :controllers
     [{:start (fn [& params]
                (chat/mount)
                (js/console.log "Entering sub-page 2"))

       :stop  (fn [& params] (js/console.log "Leaving sub-page 2"))}]}]

   ["draw"
    {:name ::draw
     :view draw/page
     :controllers
     [{:start (fn [& params]
                (draw/mount)
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

(re-frame/reg-event-db
 ::navigated
 (fn [{current-route :current-route :as db} [_ new-match]]
   (let [controllers (rfc/apply-controllers (:controllers current-route) new-match)]
     (assoc db :current-route (assoc new-match :controllers controllers)))))

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
