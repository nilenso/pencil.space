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
            [src.home :as home]
            [src.lobby :as lobby]
            [src.sundry :as sundry]
            [src.subs]))

(def routes
  ["/"
   [""
    {:name      ::home
     :view      home/page
     :link-text "Home"
     :controllers
     [{:start (fn [& params](js/console.log "Entering home page"))
       :stop  (fn [& params] (js/console.log "Leaving home page"))}]}]

   ["sub-page1"
    {:name      ::sub-page1
     :view      lobby/page
     :link-text "Sub page 1"
     :controllers
     [{:start (fn [& params] (js/console.log "Entering sub-page 1"))
       :stop  (fn [& params] (js/console.log "Leaving sub-page 1"))}]}]

   ["sub-page2"
    {:name      ::sub-page2
     :view      lobby/page2
     :link-text "Sub-page 2"
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
   (let [controllers (rfc/apply-controllers (:controllers current-route)
                                            new-match)]
     (assoc db :current-route (assoc new-match :controllers controllers)))))

(defn nav [{:keys [router current-route]}]
  [:ul
   (for [route-name (r/route-names router)
         :let       [route (r/match-by-name router route-name)
                     text (-> route :data :link-text)]]
     [:li {:key route-name}
      (when (= route-name (-> current-route
                              :data
                              :name))
        "> ")
      [:a {:href (sundry/href route-name)} text]])])

(defn on-navigate [new-match]
  (when new-match
    (re-frame/dispatch [::navigated new-match])))

(defn router-component [{:keys [router]}]
  (let [current-route @(re-frame/subscribe [::current-route])]
    [:div
     [nav {:router router :current-route current-route}]
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
