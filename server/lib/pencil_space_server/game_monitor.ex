defmodule PencilSpaceServer.GameMonitor do
  @moduledoc """
  Game monitor that keeps an eye on the running game.
  """

  use GenServer
  alias PencilSpaceServer.{GameMonitor, GameSupervisor, GameState, GameRegistry}
  defstruct history: [%GameState{}]

  # Client API

  def new(name) do
    case GenServer.whereis(ref(name)) do
      nil -> start_game(name)
      _game -> {:error, :game_exists}
    end
  end

  def start_link(options) do
    GenServer.start_link(__MODULE__, %GameMonitor{}, options)
  end

  def init(game) do
    {:ok, game}
  end

  # Helpers

  def state(%GameMonitor{history: [state | _]}) do
    state
  end

  defp start_game(name) do
    DynamicSupervisor.start_child(GameSupervisor, {__MODULE__, name: ref(name)})
  end

  defp ref(name) do
    {:via, Registry, {GameRegistry, name}}
  end
end
