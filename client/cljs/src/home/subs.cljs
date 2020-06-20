(ns src.home.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::nick-name
 (fn [{:keys [db] :as cofx}]
   (:nick-name db)))
