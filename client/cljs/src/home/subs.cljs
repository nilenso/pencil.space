(ns src.home.subs
  (:require [re-frame.core :as re-frame]
            [src.db :as db]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (when (not (nil? db))
     (:name (db/you db)))))
