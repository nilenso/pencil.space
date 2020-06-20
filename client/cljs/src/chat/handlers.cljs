(ns chat.handlers
              [src.sundry :refer [>evt <sub
                                ->clj ->input
                                now
                                epoch->local]])

(defn receive-msg
  [resp]
  (>evt [:populate-msg (->clj resp)]))
