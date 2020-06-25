defmodule PencilSpaceServer.Game.State.Turn do
  @status [:unstarted, :started, :finished]

  alias PencilSpaceServer.Dict

  defstruct [:id,
             :word,
             scores: [],
             correct_guessers: [],
             player: nil,
             status: hd(@status)]

  def create(player) do
    %PencilSpaceServer.Game.State.Turn{id: Nanoid.generate(), player: player}
  end

  def update(round, [:turn, key], value) when key in [:correct_guessers, :status] do
    Map.put(round, key, value)
  end

  def change_turn?(turn, players) do
    length(turn.correct_guessers) == length(players)
  end

  def next_turn(turns) do
    Enum.find(turns, fn turn -> started?(turn) || unstarted?(turn) end)
  end

  def update(turn, [:turn, :correct_guesser], correct_guesser) do
    if started?(turn) do
      update(turn, [:turn, :correct_guessers], [correct_guesser | turn.correct_guessers])
    else
      turn
    end
  end

  def pick(turns) do
    start(Enum.random(Enum.filter(turns, fn turn -> unstarted?(turn) end)))
  end

  def start(turn) do
    turn
    |> Map.put(:word, Dict.word)
    |> Map.put(:status, :started)
  end

  def stop(turn) do
    update(turn, [:turn, :status], :finished)
  end

  def correct_guess?(turn, guess) do
    turn.word == guess
  end

  def find_turn_index(turns, turn) do
    Enum.find_index(turns, fn t -> same?(t, turn) end)
  end

  def same?(turn_1, turn_2) do
    turn_1.id == turn_2.id
  end

  def started?(turn) do
    turn.status == Enum.at(@status, 1)
  end

  def unstarted?(turn) do
    turn.status == Enum.at(@status, 0)
  end
end
