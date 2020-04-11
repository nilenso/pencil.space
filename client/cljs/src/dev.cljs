(ns src.dev
  (:require [devtools.core :as devtools]))

(def debug? ^boolean goog.DEBUG)

(defn setup []
  (when debug?
    (devtools/install!)
    (enable-console-print!)
    (println "dev mode")))
