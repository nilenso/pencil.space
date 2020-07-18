defmodule PencilSpaceServer.Game.State.Round do
  @enforce_keys [:id]
  @status [:unstarted, :started, :finished]

  alias PencilSpaceServer.Game.State.Turn

  defstruct [:id, status: hd(@status), current_turn: nil, turns: []]

  def create do
    %PencilSpaceServer.Game.State.Round{id: Nanoid.generate()}
  end

  def update(round, [:round, key], value) when key in [:status, :turns, :current_turn] do
    Map.put(round, key, value)
  end

  def start(round, players) do
    # TODO: disallow same player from starting another turn
    round = update(round, [:round, :status], :started)

    round =
      Enum.reduce(players, round, fn player, updated_round ->
        add(updated_round, [:round, :turn], player)
      end)

    turn = Turn.pick(round.turns, players)
    update(round, [:round, :turn], turn)
  end

  def add(round, [:round, :turn], player) do
    if started?(round) && !active_turn(round) do
      Map.put(round, :turns, [Turn.create(player) | round.turns])
    else
      round
    end
  end

  def fetch(round, [:round, :scores]) do
    round.turns
    |> Enum.filter(fn turn -> Turn.started?(turn) || Turn.finished?(turn) end)
    |> Enum.map(fn turn -> turn.scores end)
    |> Enum.reduce(%{}, fn score, acc ->
      Map.merge(score, acc, fn player, score1, score2 -> score1 + score2 end)
    end)
  end

  def update(round, [:round, :turn], updated_turn) do
    turn_pos = Turn.find_turn_index(round.turns, updated_turn)
    turns = List.replace_at(round.turns, turn_pos, updated_turn)

    round
    |> update([:round, :turns], turns)
    |> update([:round, :current_turn], updated_turn)
  end

  def active_turn(round) do
    Enum.find(round.turns, fn turn -> Turn.started?(turn) end)
  end

  def next_round(rounds) do
    Enum.find(rounds, fn round -> started?(round) || unstarted?(round) end)
  end

  def find_round_index(rounds, round) do
    Enum.find_index(rounds, fn r -> same?(r, round) end)
  end

  def same?(round_1, round_2) do
    round_1.id == round_2.id
  end

  def started?(round) do
    round.status == Enum.at(@status, 1)
  end

  def unstarted?(round) do
    round.status == Enum.at(@status, 0)
  end
end
