(ns src.lobby.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::get-participants
 (fn [db]
   (:participants db)))
