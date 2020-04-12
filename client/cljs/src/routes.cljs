(ns src.routes
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [reagent.dom :as reagent-dom]
            [reitit.coercion.spec :as rss]
            [reitit.core :as r]
            [reitit.frontend :as rf]
            [reitit.frontend.controllers :as rfc]
            [reitit.frontend.easy :as rfe]
            [src.db :as db]
            [src.draw :as draw]
            [src.home :as home]
            [src.lobby :as lobby]
            [src.subs]
            [src.sundry :as sundry]))

(def routes
  ["/"
   [""
    {:name ::home
     :view home/page
     :controllers
     [{:start (fn [& params] (js/console.log "Entering home page"))
       :stop  (fn [& params] (js/console.log "Leaving home page"))}]}]

   ["draw"
    {:name ::draw
     :view draw/page
     :controllers
     [{:start (fn [& params] (js/console.log "Entering sub-page 2"))
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
    (re-frame/dispatch [::navigated new-match])))

(defn router-component [{:keys [router]}]
  (let [current-route @(re-frame/subscribe [::current-route])]
    [:div
     (when current-route
       [(-> current-route :data :view)])]))

(defn init []
  (js/console.log "Initializing routes")

  (rfe/start!
   router
   on-navigate
   {:use-fragment true}))

(defn mount [page-root]
  (re-frame/clear-subscription-cache!)
  (init)
  (reagent-dom/render [router-component {:router router}] page-root))
