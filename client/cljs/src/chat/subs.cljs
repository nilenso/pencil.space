(ns src.chat.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub :chat-history
 (fn [db]
   (:chat-history db)))

(reg-sub :nick-name
 (fn [db]
   (:nick-name db)))

(reg-sub :avatar
 (fn [db]
   (:avatar db)))
