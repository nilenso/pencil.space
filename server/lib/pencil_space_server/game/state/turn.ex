defmodule PencilSpaceServer.Game.State.Turn do
  @status [:unstarted, :started, :finished]

  alias PencilSpaceServer.Dict

  defstruct [:id,
             :word,
             scores: %{},
             current_players: [],
             correct_guessers: [],
             player: nil,
             status: hd(@status)]

  def create(player) do
    %PencilSpaceServer.Game.State.Turn{id: Nanoid.generate(), player: player}
  end

  def update(turn, [:turn, key], value) when key in [:word, :current_players, :correct_guessers, :status, :scores, :status] do
    if started?(turn) do
      Map.put(turn, key, value)
    else
      turn
    end
  end

  def update(turn, [:turn, :correct_guesser], correct_guesser) do
    turn
    |> update([:turn, :correct_guessers], [correct_guesser | turn.correct_guessers])
    |> update([:turn, :scores], compute_scores(turn, correct_guesser))
    |> turn_status_check()
  end

  def turn_status_check(turn) do
    if current_players_have_guessed?(turn) do
      update(turn, [:turn, :status], :finished)
    else
      turn
    end
  end

  def current_players_have_guessed?(turn) do
    length(turn.current_players -- turn.correct_guessers) == 0
  end

  def compute_scores(turn, new_guesser) do
    score =
      case length(turn.correct_guessers) do
        0 -> 200
        1 -> 150
        _ -> 100
      end

    Map.put(turn.scores, new_guesser, score)
  end

  def change_turn?(turn, players) do
    length(turn.correct_guessers) == length(players)
  end

  def next_turn(turns) do
    Enum.find(turns, fn turn -> started?(turn) || unstarted?(turn) end)
  end

  def pick(turns, players) do
    Enum.random(Enum.filter(turns, fn turn -> unstarted?(turn) end))
    |> Map.put(:status, :started)
    |> update([:turn, :current_players], players)
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

  def finished?(turn) do
    turn.status == Enum.at(@status, 2)
  end

  def unstarted?(turn) do
    turn.status == Enum.at(@status, 0)
  end
end
