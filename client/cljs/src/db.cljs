(ns src.db
  (:require [clojure.string :as str]))

(def default
  {:app-name "pencil.space"
   :id nil
   :game :unstarted
   :players [{:you true}]
   :chat-history []
   :current-route nil})

(defn you?
  "Check if player is you"
  [{:keys [you]}]
  (true? you))

(defn you
  "Pull yourself out from the list of players"
  [db]
  (->> db
       :players
       (filter you?)
       first))

(defn you-have-a-name?
  "Check if you assigned yourself a name"
  [db]
  (-> db
      you
      :name
      str/blank?
      not))

(defn started? [{:keys [game]}]
  (= game :started))

(defn lobby? [{:keys [game]}]
  (= game :lobby))

(defn finished? [{:keys [game]}]
  (= game :finished))

(defn update-you
  "Update your player details and leave the rest intact"
  [players player-updates]
  (map (fn [player]
         (if (you? player)
           (merge player player-updates)
           player))
       players))

(defn update-players [existing-players players]
  (->> (concat existing-players players)
       (sort-by :id)
       (partition-by :id)
       (map #(apply merge %))))
