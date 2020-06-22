defmodule PencilSpaceServer.Game do
  @moduledoc """
  Coordinate the game overall: state, updates, process life-cycles etc.
  """

  alias PencilSpaceServer.Game.Monitor, as: GameMonitor
  alias PencilSpaceServer.Game.Registry, as: GameRegistry
  alias PencilSpaceServer.Game.Supervisor, as: GameSupervisor

  def launch(name, %{"player" => player}) do
    case GameSupervisor.supervise({GameMonitor, name: citation(name), host: player}) do
      {:ok, _pid} -> {:ok, name}
      {:error, _} -> {:error}
    end
  end

  def presence(name) do
    case GameMonitor.whereis(citation(name)) do
      nil -> {:error, :not_present}
      __g -> {:ok, :present}
    end
  end

  def revise(name, %{"player" => player}) do
    case presence(name) do
      {:ok, :present} -> {:ok, update(name, player)}
      {:error, :not_present} -> {:error, :not_present}
    end
  end

  def players(name) do
    GameMonitor.players(citation(name), :players)
  end

  defp update(name, player) do
    GameMonitor.update(citation(name), {:player, player})
  end

  defp citation(name) do
    {:via, Registry, {GameRegistry, name}}
  end
end
