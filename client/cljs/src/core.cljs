(ns src.core
  (:require [re-frame.core :as re-frame]
            [reagent.dom :as reagent-dom]
            [src.dev :as dev]
            [src.db :as db]
            [src.routes :as routes]
            [src.canvas.events]
            [src.chat.events]
            [src.chat.subs]
            [src.tube.fx]))

(re-frame/reg-event-db
 ::initialize-db
 (fn [db _] db/default))

(def page-root
  (.getElementById js/document "app"))

(defn loading
  "Shows a loader message while waiting for page load."
  []
  (reagent-dom/render [:h2 "Loading"] page-root))

(defn ^:export init
  []
  (js/console.log "Initializing...")

  (dev/setup)
  (re-frame/dispatch-sync [::initialize-db])
  (loading)
  (routes/mount page-root))
