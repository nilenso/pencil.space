# MVP for alpha.pencil.space

## 13.04.2020

**Landing page**

* Pick a nick name
* Uniquely identify the user (fingerprint / cookie etc.)
* Generate avatar

**Lobby**

* Establish master player connection
* Establish a room hyperlink (shareable)
* Allow others to join
* Chat is available
* &gt;1 player allows to transition into the Game screen

**Game**

* Default to N rounds
* Default to N seconds of draw time
* Only 1 way to draw, black pencil, that’s it (no other drawing toolchain)
* Randomly pick a drawer
* Keep a track of rounds
* Monitor and parse chat to detect correct answers
* Disallow the drawer from chatting
* Push summarised score state after every drawing not every round
* Push final score state after all rounds
* Keep a dictionary of some words (currently no hints are displayed)
* Current score sidebar
* Disconnects should retain people’s score if they join back in
* Rooms should expire after they finish
