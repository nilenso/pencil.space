(ns src.db)

(def default
  {:app-name "pencil.space"
   :id nil
   :game nil
   :you 1
   :players [{:you true}]
   :chat-history []
   :current-route nil})

(defn you?
  "Check if player is you"
  [{:keys [you]}]
  (true? you))

(defn update-players [existing-players players]
  (prn existing-players)
  (prn players)
  (->> (concat existing-players players)
       (sort-by :id)
       (partition-by :id)
       (map #(apply merge %))))

(defn update-you
  "Update your player details and leave the rest intact"
  [players player-updates]
  (map (fn [player]
         (if (you? player)
           (merge player player-updates)
           player))
       players))

(defn you
  "Pull yourself out from the list of players"
  [db]
  (->> db
       :players
       (filter you?)
       first))
