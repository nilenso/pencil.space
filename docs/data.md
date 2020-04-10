This is a rough estimation of the game state that the server would keep and coordinate (it's just written in clj datastructures, but it can be implemented in whatever)

```clojure
(def game-state
  {:players [{:id 1, :nick "kitallis"}
             {:id 2, :nick "udit"}]

   :rounds [{:}, {}]

   :current-round
   :current-drawer

   })
```
