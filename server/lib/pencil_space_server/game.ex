defmodule PencilSpaceServer.Game do
  @moduledoc """
  Coordinate the game overall: state, updates, process life-cycles etc.
  """

  alias PencilSpaceServer.Game.Monitor, as: GameMonitor
  alias PencilSpaceServer.Game.Registry, as: GameRegistry
  alias PencilSpaceServer.Game.Supervisor, as: GameSupervisor
  alias PencilSpaceServer.Dict, as: Dict

  def launch(name, %{"player" => player}) do
    case GameSupervisor.supervise({GameMonitor, id: citation(name), host: player}) do
      {:ok, _pid} -> {:ok, name}
      {:error, e} -> {:error, e}
    end
  end

  def presence(name) do
    case GameMonitor.whereis(citation(name)) do
      nil -> {:error, :not_present}
      __g -> {:ok, :present}
    end
  end

  def revise(name, :status, status) do
    GameMonitor.update(citation(name), {:status, status})
  end

  def revise(name, :add_round) do
    GameMonitor.add(citation(name), :round)
  end

  def revise(name, :player, %{"player" => player}) do
    case presence(name) do
      {:ok, :present} -> {:ok, add(name, player)}
      {:error, :not_present} -> {:error, :not_present}
    end
  end

  def players(name) do
    GameMonitor.state(citation(name), :players)
  end

  defp add(name, player) do
    GameMonitor.add(citation(name), {:player, player})
  end

  def game(name) do
    :sys.get_state(citation(name))
  end

  defp citation(name) do
    {:via, Registry, {GameRegistry, name}}
  end
end

# r PencilSpaceServerWeb.GameChannel; r PencilSpaceServer.Game.State; r PencilSpaceServer.Game.Monitor; PencilSpaceServer.Game.Monitor
# alias PencilSpaceServer.Game, as: G
