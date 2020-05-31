(ns src.chat.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub :chat-history
 (fn [db]
   (:chat-history db)))
