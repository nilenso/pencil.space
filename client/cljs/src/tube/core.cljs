(ns src.tube.core
  (:require ["phoenix" :refer (Socket)]))

(defonce chan (atom nil))

(defonce ^:private socket
  (new Socket
       "ws://localhost:4000/socket"
       (clj->js {:params {:token ""}})))

(defn ^:private channel* [name params]
  (.channel socket (str "game:" name) (clj->js params)))

(defn ^:private join* []
  (doto
    (.join @chan)
    (.receive "ok"
              (fn [resp]
                (js/console.log "Joined successfully" (clj->js resp))))
    (.receive "error"
              (fn [resp]
                (js/console.log "Unable to join", resp)))))

(defn connect [name params]
  (.connect socket)
  (swap! chan #(channel* name params))
  (join*))

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
   (let [pushEvent (.push @chan msg-type (clj->js msg-body))]
     (-> pushEvent
         (.receive "ok" #(on-ok (js->clj %)))
         (.receive "error" #(on-error (js->clj %)))
         (.receive "timeout" #(on-timeout (js->clj %)))))))

(defn subscribe [event callback]
  (.on @chan event callback))
