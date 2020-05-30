defmodule PencilSpaceServer.Game do
  @moduledoc """
  Coordinate the game overall: state, updates, process life-cycles etc.
  """

  alias PencilSpaceServer.Game.Monitor, as: GameMonitor
  alias PencilSpaceServer.Game.Registry, as: GameRegistry
  alias PencilSpaceServer.Game.Supervisor, as: GameSupervisor

  def start(host) do
    name = Nanoid.generate()
    case GameSupervisor.supervise({GameMonitor, name: ref(name), host: host}) do
      {:ok, _pid} -> {:ok, name}
      {:error, _} -> {:error}
    end
  end

  def presence(name) do
    case GameMonitor.whereis(ref(name)) do
      nil -> {:error, :does_not_exist}
      __g -> {:ok, :exists}
    end
  end

  @doc """
  Synchronously updates the participants on the Game state.

  Returns a Game.State.

  ## Examples

      iex> PencilSpaceServer.Game.update("name-of-game", %{participant: 1})
      %PencilSpaceServer.Game.State{participant: 1}
  """
  def update(name, %{"participant" => participant}) do
    GameMonitor.call(ref(name), {:participant, participant})
  end

  defp ref(name) do
    {:via, Registry, {GameRegistry, name}}
  end
end
