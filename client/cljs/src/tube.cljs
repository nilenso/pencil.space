(ns src.tube
  (:require ["phoenix" :refer (Socket)]))

(def socket
  (new Socket
       "ws://localhost:4000/socket"
       (clj->js {:params {:token ""}})))

(.connect socket)

(def channel (.channel socket "room:lobby" (clj->js {})))

(defn push
  ([msg_type msg_body]
   (push msg_type
         msg_body
         (fn [resp]
           (let [resp_clj (js->clj resp)]
             (js/console.log "Received", resp_clj)))))

  ([msg_type msg_body on_ok]
   (push msg_type
         msg_body
         on_ok
         (fn [resp]
           (let [resp_clj (js->clj resp)]
             (js/console.log "Received error" (pr-str resp_clj))))))

  ([msg_type msg_body on_ok on_error]
   (push msg_type
         msg_body
         on_ok
         on_error
         (fn [resp]
           (let [resp_clj (js->clj resp)]
             (js/console.log "Received Timeout" (pr-str resp_clj))))))

  ([msg_type msg_body on_ok on_error on_timeout]
   (let [pushEvent (.push channel msg_type (clj->js msg_body))]
     (-> pushEvent
         (.receive "ok" #(on_ok (js->clj %)))
         (.receive "error" #(on_error (js->clj %)))
         (.receive "timeout" #(on_timeout (js->clj %)))))))

(def joinedChannel (.join channel))

(defn join [callback]
  (.receive joinedChannel "ok"
            (fn [resp]
              (js/console.log "Joined successfully")
              (push "get_actors", {} callback)))

  (.receive joinedChannel
            "error"
            (fn [resp] (js/console.log "Unable to join", resp)))

  (.on channel
       "event"
       (fn [resp] (js/console.log "Event"))))
