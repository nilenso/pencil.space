(ns src.dev
  (:require [cljs.pprint :refer [pprint]]))

(def debug? ^boolean goog.DEBUG)

(defn setup []
  (when debug?
    (enable-console-print!)
    (println "dev mode")))

(defn print-db []
  [:pre (with-out-str (pprint @re-frame.db/app-db))])
