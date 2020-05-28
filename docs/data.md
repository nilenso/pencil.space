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

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Action</th>
<th scope="col" class="org-left">Reaction</th>
<th scope="col" class="org-left">State</th>
<th scope="col" class="org-left">Data</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">Start new game</td>
<td class="org-left">http 200, establish channel</td>
<td class="org-left">unstarted</td>
<td class="org-left">host: 1</td>
</tr>

<tr>
<td class="org-left">New lobby join</td>
<td class="org-left">http 200, update state</td>
<td class="org-left">started</td>
<td class="org-left">players: 1</td>
</tr>

<tr>
<td class="org-left">New lobby join</td>
<td class="org-left">http 200, update state</td>
<td class="org-left">started</td>
<td class="org-left">players: 2</td>
</tr>

<tr>
<td class="org-left">Begin</td>
<td class="org-left">http 200, update state</td>
<td class="org-left">started</td>
<td class="org-left">players: 2, max<sub>rounds</sub>: 3, drawer: 2</td>
</tr>

<tr>
<td class="org-left">Drawing</td>
<td class="org-left">-</td>
<td class="org-left">started</td>
<td class="org-left">-</td>
</tr>

<tr>
<td class="org-left">Drawing</td>
<td class="org-left">-</td>
<td class="org-left">started</td>
<td class="org-left">-</td>
</tr>

<tr>
<td class="org-left">Chat (guess)</td>
<td class="org-left">update state</td>
<td class="org-left">started</td>
<td class="org-left">players: 2, max<sub>rounds</sub>: 3, drawer: 2, guesses: Set(1)</td>
</tr>

<tr>
<td class="org-left">Chat (guess)</td>
<td class="org-left">update state</td>
<td class="org-left">started</td>
<td class="org-left">players: 2, max<sub>rounds</sub>: 3, drawer: 2, guesses: Set(1,2)</td>
</tr>

<tr>
<td class="org-left">Round over (for p1)</td>
<td class="org-left">update state</td>
<td class="org-left">started</td>
<td class="org-left">&#xa0;</td>
</tr>

</tbody>
</table>
