(ns src.sundry
  (:require [reitit.frontend.easy :as rfe]
            [re-frame.core :as re-frame]))

(defn href
  "Return relative url for given route. Url can be used in HTML links."
  ([k]
   (href k nil nil))
  ([k params]
   (href k params nil))
  ([k params query]
   (rfe/href k params query)))

(def >evt re-frame/dispatch)
(def <sub (comp deref re-frame/subscribe))
(def ->clj (fn [data] (js->clj data :keywordize-keys true)))
(def ->js  (fn [data] (clj->js data)))
(def ->input (fn [data] (-> data .-target .-value) ))
