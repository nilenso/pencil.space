defmodule PencilSpaceServer.Game.State do
  @moduledoc """
  For atomically manipulating state.
  """
  alias PencilSpaceServer.Utils, as: Utils
  alias PencilSpaceServer.Game.State.{Player, Turn, Round}

  @game_status [:unstarted, :created, :started, :finished]

  defstruct players: [],
            game: %{
              id: nil,
              status: hd(@game_status),
              max_rounds: 0,
              max_players: 0,
              min_players: 2,
              rounds: [],
              current_round: 0
            }

  def create(:game, %{id: id, host: host}) do
    # TODO: check if valid player
    state = %PencilSpaceServer.Game.State{}

    state
    |> update([:game, :id], id)
    |> update([:game, :max_rounds], 3)
    |> update([:game, :max_players], 20)
    |> update([:game, :status], Enum.at(@game_status, 1))
    |> add([:game, :rounds])
    |> add([:players, :host], host)
  end

  def fetch(state, key) do
    cond do
      is_atom(key) -> Map.fetch(state, key)
      is_list(key) && length(key) > 1 -> get_in(state, key)
      true -> {:error, "Invalid key expression"}
    end
  end

  def acquire(state, [:game, :scores]) do
    state.game.rounds
    |> Enum.map(fn round -> Round.fetch(round, [:round, :scores]) end)
    |> Enum.reduce(%{}, fn score, acc ->
      Map.merge(score, acc, fn player, score1, score2 -> score1 + score2 end)
    end)
  end

  def acquire(state, [:game, :current_drawer]) do
    state.game.current_round.current_turn.player
  end

  def add(state, [:players, :host], player) do
    if Player.exists?(state.players, player) do
      {:error, {:player, :already_exists}}
    else
      player = Player.create(player, true)
      state = Map.put(state, :players, [player | state.players])
    end
  end

  def add(state, [:players, :player], player) do
    if Player.exists?(state.players, player) do
      {:error, {:player, :already_exists}}
    else
      player = Player.create(player)
      state = Map.put(state, :players, [player | state.players])

      if game_started?(state) do
        round = Round.add(state.game.current_round, [:round, :turn], player)
        update(state, [:game, :round], round)
      else
        state
      end
    end
  end

  def add(state, [:game, :rounds]) do
    rounds = Enum.map(1..state.game.max_rounds, fn _ -> Round.create() end)
    update(state, [:game, :rounds], rounds)
  end

  def start(state) do
    if length(state.players) >= state.game.min_players do
      state
      |> update([:game, :status], :started)
      |> start([:game, :round])
    else
      {:error, {:game, :not_enough_players}}
    end
  end

  def start(state, [:game, :round]) do
    if game_started?(state) do
      next_round = Round.next_round(state.game.rounds)
      updated_round = Round.start(next_round, state.players)

      if next_round do
        update(state, [:game, :round], updated_round)
      else
        state
      end
    else
      {:error, {:game, :game_not_started}}
    end
  end

  def stop(state, [:game, :round]) do
    if game_started?(state) && Round.started?(state.game.current_round) do
      updated_round = Round.update(state.game.current_round, [:round, :status], :finished)
      update(state, [:game, :round], updated_round)
    else
      {:error, {:game, :game_not_started}}
    end
  end

  def update(state, [:game, :round], updated_round) do
    round_pos = Round.find_round_index(state.game.rounds, updated_round)
    # TODO: consider replacing the item with the id instead of using index
    rounds = List.replace_at(state.game.rounds, round_pos, updated_round)

    state
    |> update([:game, :rounds], rounds)
    |> update([:game, :current_round], updated_round)
  end

  def update(state, [:game, :turn, :word], word) do
    current_round = state.game.current_round
    current_turn = current_round.current_turn
    turn = Turn.update(current_turn, [:turn, :word], word)
    round = Round.update(current_round, [:round, :turn], turn)
    update(state, [:game, :round], round)
  end

  def update(state, [:game, :turn, :guess], %{"player" => guesser, guess: guess}) do
    current_round = state.game.current_round
    current_turn = current_round.current_turn

    if Turn.correct_guess?(current_turn, guess) do
      turn = Turn.update(current_turn, [:turn, :correct_guesser], guesser)
      round = Round.update(current_round, [:round, :turn], turn)
      update(state, [:game, :round], round)
    else
      {:error, {:game, :incorrect_guess}}
    end
  end

  def update(state, [:game, key], val)
      when key in [
             :id,
             :status,
             :max_rounds,
             :max_players,
             :words,
             :rounds,
             :turns,
             :score,
             :current_round
           ] do
    Map.put(state, :game, Map.put(state.game, key, val))
  end

  defp game_started?(state) do
    state.game.status == :started
  end

  defp p(thing) do
    IO.inspect(thing)
  end
end
