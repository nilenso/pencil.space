(ns src.home
  (:require [re-frame.core :as re-frame]
            [reitit.frontend.easy :as rfe]
            [cljs.pprint :refer [pprint]]))

(re-frame/reg-event-fx
 ::navigate
 (fn [db [_ & route]]
   {::navigate! route}))

(re-frame/reg-fx
 ::navigate!
 (fn [route]
   (apply rfe/push-state route)))

(defn page []
  [:div
   [:pre (with-out-str (pprint @re-frame.db/app-db))]
   [:h1 "This is pencil.space"]
   [:button
    ;; Dispatch navigate event that triggers a (side)effect.
    {:on-click #(re-frame/dispatch [::navigate :src.routes/sub-page2])}
    "Go to sub-page 2"]])
