## State

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

## Actions

| Action              | Reaction                    | State     | Data                                                    |
|---------------------+-----------------------------+-----------+---------------------------------------------------------|
| Start new game      | http 200, establish channel | unstarted | host: 1                                                 |
| New lobby join      | http 200, update state      | started   | players: 1                                              |
| New lobby join      | http 200, update state      | started   | players: 2                                              |
| Begin               | http 200, update state      | started   | players: 2, max_rounds: 3, drawer: 2                    |
| Drawing             | -                           | started   | -                                                       |
| Drawing             | -                           | started   | -                                                       |
| Chat (guess)        | update state                | started   | players: 2, max_rounds: 3, drawer: 2, guesses: Set(1)   |
| Chat (guess)        | update state                | started   | players: 2, max_rounds: 3, drawer: 2, guesses: Set(1,2) |
| Round over (for p1) | update state                | started   |                                                         |
|                     |                             |           |                                                         |
