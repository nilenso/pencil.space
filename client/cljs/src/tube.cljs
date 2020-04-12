(ns src.tube
  (:require ["phoenix" :refer (Socket)]))

(def socket
  (new Socket
       "ws://localhost:4000/socket"
       (clj->js {:params {:token ""}})))

(def channel (.channel socket "room:lobby" (clj->js {})))
(def joined-channel (.join channel))

(defn connect []
  (.connect socket))

(defn push
  ([msg-type msg-body]
   (push msg-type
         msg-body
         (fn [resp]
           (let [resp-clj (js->clj resp)]
             (js/console.log "Received", (pr-str resp-clj))))))

  ([msg-type msg-body on-ok]
   (push msg-type
         msg-body
         on-ok
         (fn [resp]
           (let [resp-clj (js->clj resp)]
             (js/console.log "Received error" (pr-str resp-clj))))))

  ([msg-type msg-body on-ok on-error]
   (push msg-type
         msg-body
         on-ok
         on-error
         (fn [resp]
           (let [resp-clj (js->clj resp)]
             (js/console.log "Received Timeout" (pr-str resp-clj))))))

  ([msg-type msg-body on-ok on-error on-timeout]
   (let [pushEvent (.push channel msg-type (clj->js msg-body))]
     (-> pushEvent
         (.receive "ok" #(on-ok (js->clj %)))
         (.receive "error" #(on-error (js->clj %)))
         (.receive "timeout" #(on-timeout (js->clj %)))))))

(defn join
  [callback]

  (.on channel "[CHAT]" callback)

  (.receive joined-channel
            "ok"
            (fn [resp]
              (js/console.log "Joined successfully" (clj->js resp))))

  (.receive joined-channel
            "error"
            (fn [resp]
              (js/console.log "Unable to join", resp))))
