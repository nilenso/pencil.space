(ns src.sundry
  (:require [cljs-time.coerce :as tc]
            [cljs-time.core :as t]
            [cljs-time.format :as tf]
            [re-frame.core :as re-frame]))

;;
;; data
;;
(def ->clj (fn [data] (js->clj data :keywordize-keys true)))
(def ->js  (fn [data] (clj->js data)))
(def ->input (fn [data] (-> data .-target .-value) ))

;;
;; re-frame
;;
(def >evt re-frame/dispatch)
(def <sub (comp deref re-frame/subscribe))

;;
;; time
;;
(def ^:private default-time-formatter (tf/formatter "HH:ss (dd-mm-yy)"))
(def now (comp tc/to-long t/now))

(defn epoch->local
  "Return time in browser timezone for given unix time, optionally formatted"
  ([millis format?]
   (if format?
     (tf/unparse default-time-formatter (epoch->local millis))
     (epoch->local millis)))

  ([millis]
   (-> millis
       tc/from-long
       tc/to-local-date-time)))

;;
;; misc
;;
(defn rand-hex-color
  "Return a random hex color code in #RRGGBB format"
  []
  (str "#" (-> (.random js/Math)
               (* (bit-shift-left 1 24))
               (bit-or 0)
               (.toString 16))))
