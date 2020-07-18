defmodule PencilSpaceServer.Game.StateTest do
  use ExUnit.Case

  alias PencilSpaceServer.Game.State
  alias PencilSpaceServer.Game.State.{Player}

  describe "/ game /" do
    test "set up the basic game attributes" do
      id = 1
      host = %{id: 1, name: "rich"}

      expected_game = %{
        id: 1,
        max_rounds: 3,
        max_players: 20,
        min_players: 2,
        status: :created,
        current_round: 0
      }

      state = State.create(:game, %{id: id, host: host})

      assert Map.delete(state.game, :rounds) == expected_game
      assert length(state.game.rounds) == 3
    end

    test "set up the host player" do
      id = 1
      host = %{id: 1, name: "rich"}

      expected_player = %Player{id: 1, name: "rich", avatar: nil, host: true}
      state = State.create(:game, %{id: id, host: host})

      assert Enum.at(state.players, 0) == expected_player
      assert length(state.players) == 1
    end

    test "update the game status" do
      state =
        State.create(:game, %{id: 1, host: %{id: 1, name: "rich"}})
        |> State.add([:players, :player], %{id: 2, name: "hickey"})
        |> State.start()

      assert state.game.status == :started
      assert state.game.current_round.status == :started
    end

    test "start a round" do
      state =
        State.create(:game, %{id: 1, host: %{id: 1, name: "rich"}})
        |> State.add([:players, :player], %{id: 2, name: "hickey"})
        |> State.start()

      assert state.game.current_round.status == :started
    end

    test "start a turn" do
      state =
        State.create(:game, %{id: 1, host: %{id: 1, name: "rich"}})
        |> State.add([:players, :player], %{id: 2, name: "hickey"})
        |> State.start()

      assert state.game.current_round.current_turn.status == :started
    end

    test "throw an error if there are not enough players in the game when starting" do
      state =
        State.create(:game, %{id: 1, host: %{id: 1, name: "rich"}})
        |> State.start()

      assert state == {:error, {:game, :not_enough_players}}
    end

    test "current scores are determined" do
      p1 = %{id: 1, name: "rich"}
      p2 = %{id: 2, name: "hickey"}
      word = "black lives matter"

      state =
        State.create(:game, %{id: 1, host: p1})
        |> State.add([:players, :player], p2)
        |> State.start()
        |> State.update([:game, :turn, :word], word)
        |> State.update([:game, :turn, :guess], %{"player" => p1, guess: word})
        |> State.update([:game, :turn, :guess], %{"player" => p2, guess: word})

      assert State.acquire(state, [:game, :scores]) == %{
               %{id: 1, name: "rich"} => 200,
               %{id: 2, name: "hickey"} => 150
             }
    end

    test "current drawer is determined" do
      p1 = %{id: 1, name: "rich"}
      p2 = %{id: 2, name: "hickey"}
      word = "black lives matter"

      state =
        State.create(:game, %{id: 1, host: p1})
        |> State.add([:players, :player], p2)
        |> State.start()
        |> State.update([:game, :turn, :word], word)
        |> State.update([:game, :turn, :guess], %{"player" => p1, guess: word})
        |> State.update([:game, :turn, :guess], %{"player" => p2, guess: word})

      potential_player_ids = Enum.map([p1, p2], fn p -> p.id end)

      assert Enum.any?(potential_player_ids, fn id ->
               State.acquire(state, [:game, :current_drawer]).id == id
             end) == true
    end
  end

  describe "/ add player /" do
    test "update the list of players" do
      state =
        State.create(:game, %{id: 1, host: %{id: 1, name: "rich"}})
        |> State.add([:players, :player], %{id: 2, name: "hickey"})
        |> State.add([:players, :player], %{id: 3, name: "junior"})

      assert length(state.players) == 3
    end

    test "starts a new turn if the game is started" do
      state =
        State.create(:game, %{id: 1, host: %{id: 1, name: "rich"}})
        |> State.add([:players, :player], %{id: 2, name: "hickey"})
        |> State.start()
        |> State.add([:players, :player], %{id: 3, name: "junior"})

      assert length(state.players) == 3
      assert state.game.current_round.current_turn.status == :started
      assert Enum.at(state.game.rounds, 0).current_turn.status == :started
    end

    test "returns an error if the player already exists in the game" do
    end
  end

  describe "/ remove player /" do
    test "removes their turn from the current round" do
    end

    test "finish the turn if they were the drawer" do
    end

    test "finish the round if it was the last round" do
    end

    test "finish the game if they were the last drawer" do
    end
  end

  describe "/ round /" do
    test "update the round status and start a turn" do
      state =
        State.create(:game, %{id: 1, host: %{id: 1, name: "rich"}})
        |> State.add([:players, :player], %{id: 2, name: "hickey"})
        |> State.update([:game, :status], :started)
        |> State.start([:game, :round])

      assert state.game.current_round.status == :started
      assert state.game.current_round.current_turn.status == :started
    end

    test "disallow starting a new turn if all players have played the round" do
    end

    test "disallow starting a round if the game has not started" do
      state =
        State.create(:game, %{id: 1, host: %{id: 1, name: "rich"}})
        |> State.add([:players, :player], %{id: 2, name: "hickey"})
        |> State.start([:game, :round])

      assert state == {:error, {:game, :game_not_started}}
    end

    test "finish the round if all the turns are finished" do
    end

    test "only one round can be active at a time" do
    end

    test "update current_turn when turn changes" do
    end

    test "round-level scores are computed" do
    end
  end

  describe "/ turn /" do
    test "update the word for the turn" do
      word = "black lives matter"

      state =
        State.create(:game, %{id: 1, host: %{id: 1, name: "rich"}})
        |> State.add([:players, :player], %{id: 2, name: "hickey"})
        |> State.start()
        |> State.update([:game, :turn, :word], word)

      assert state.game.current_round.current_turn.word == word
    end

    test "update the turn with the with the correct guessers" do
      word = "black lives matter"

      state =
        State.create(:game, %{id: 1, host: %{id: 1, name: "rich"}})
        |> State.add([:players, :player], %{id: 2, name: "hickey"})
        |> State.start()
        |> State.update([:game, :turn, :word], word)
        |> State.update([:game, :turn, :guess], %{
          "player" => %{id: 2, name: "rich"},
          guess: word
        })

      guessers = state.game.current_round.current_turn.correct_guessers
      assert guessers == [%{id: 2, name: "rich"}]
    end

    test "update scores for the correct guessers" do
      word = "black lives matter"

      state =
        State.create(:game, %{id: 1, host: %{id: 1, name: "rich"}})
        |> State.add([:players, :player], %{id: 2, name: "hickey"})
        |> State.start()
        |> State.update([:game, :turn, :word], word)
        |> State.update([:game, :turn, :guess], %{
          "player" => %{id: 1, name: "rich"},
          guess: word
        })

      assert state.game.current_round.current_turn.scores == %{%{id: 1, name: "rich"} => 200}
    end

    test "end the turn when the last guess is correct" do
    end

    test "only one turn can be active at a time" do
    end

    test "disallow the same player from starting another turn" do
    end

    test "disallow guessing if turn hasn't started yet" do
    end

    test "disallow assigning a word if the turn hasn't started yet" do
    end

    test "return an error if the guess is incorrect" do
      word = "black lives matter"

      state =
        State.create(:game, %{id: 1, host: %{id: 1, name: "rich"}})
        |> State.add([:players, :player], %{id: 2, name: "hickey"})
        |> State.start()
        |> State.update([:game, :turn, :word], word)
        |> State.update([:game, :turn, :guess], %{
          "player" => %{id: 1, name: "rich"},
          guess: "protest"
        })

      assert state == {:error, {:game, :incorrect_guess}}
    end
  end
end
