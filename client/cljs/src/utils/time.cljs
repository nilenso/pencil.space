(ns src.utils.time
  (:require [cljs-time.core :as t]
            [cljs-time.format :as tf]
            [cljs-time.coerce :as tc]))

(def default-formatter (tf/formatter "HH:ss (dd-mm-yy)"))
(def now (comp tc/to-long t/now))

(defn epoch->local
  ([millis format?]
   (if format?
     (tf/unparse default-formatter (epoch->local millis))
     (epoch->local millis)))

  ([millis]
   (-> millis
       tc/from-long
       tc/to-local-date-time)))
