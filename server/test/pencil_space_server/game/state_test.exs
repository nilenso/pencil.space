defmodule PencilSpaceServer.Game.StateTest do
  use ExUnit.Case

  alias PencilSpaceServer.Game.State
  alias PencilSpaceServer.Game.State.{Player}

  describe "create a game" do
    test "sets up basic game attributes" do
      id = 1
      host = %{id: 1, name: "rich"}

      expected_game = %{id: 1, max_rounds: 3, max_players: 20, status: :created}
      state = State.create(:game, %{id: id, host: host})

      assert Map.take(state.game, [:id, :max_rounds, :max_players, :status]) == expected_game
      assert length(state.game.rounds) == 3
    end

    test "sets up the host player" do
      id = 1
      host = %{id: 1, name: "rich"}

      expected_player = %Player{id: 1, name: "rich", avatar: nil, host: true}
      state = State.create(:game, %{id: id, host: host})

      assert Enum.at(state.players, 0) == expected_player
      assert length(state.players) == 1
    end
  end

  describe "add a player" do
    test "updates the list of players" do
      state =
        State.create(:game, %{id: 1, host: %{id: 1, name: "rich"}})
        |> State.add([:players, :player], %{id: 2, name: "hickey"})
        |> State.add([:players, :player], %{id: 3, name: "junior"})

      assert length(state.players) == 3
    end

    test "starts a new turn if game is started" do
      state =
        State.create(:game, %{id: 1, host: %{id: 1, name: "rich"}})
        |> State.add([:players, :player], %{id: 2, name: "hickey"})
        |> State.start()
        |> State.add([:players, :player], %{id: 3, name: "junior"})

      assert length(state.players) == 3
      assert Enum.at(state.game.rounds, 0).current_turn.status == :started
      assert state.game.current_round.current_turn.status == :started
    end
  end

  describe "start a game" do
    test "updates the game status" do
      state =
        State.create(:game, %{id: 1, host: %{id: 1, name: "rich"}})
        |> State.add([:players, :player], %{id: 2, name: "hickey"})
        |> State.start()

      assert state.game.status == :started
    end
  end
end
