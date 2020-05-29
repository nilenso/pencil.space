defmodule PencilSpaceServer.Game do
  @moduledoc """
  Coordinate the game overall: state, updates, process life-cycles etc.
  """

  alias PencilSpaceServer.Game.{Monitor, Supervisor}

  def start do
    name = Nanoid.generate()
    case Supervisor.supervise({Monitor, name: ref(name)}) do
      {:ok, _pid} -> {:ok, name}
      {:error, _} -> {:error}
    end
  end

  def presence(name) do
    case whereis(name) do
      nil -> {:error, :does_not_exist}
      __g -> {:ok, :exists}
    end
  end

  @doc """
  Synchronously updates the host on the Game state.

  Returns a Game.State.

  ## Examples

      iex> PencilSpaceServer.Game.update("name-of-game", %{host: 1})
      %PencilSpaceServer.Game.State{host: 1}
  """
  def update(name, %{"host" => host}) do
    GenServer.call(ref(name), {:host, host})
  end

  @doc """
  Synchronously updates the participants on the Game state.

  Returns a Game.State.

  ## Examples

      iex> PencilSpaceServer.Game.update("name-of-game", %{participant: 1})
      %PencilSpaceServer.Game.State{participant: 1}
  """
  def update(name, %{"participant" => participant}) do
    GenServer.call(ref(name), {:participant, participant})
  end

  defp whereis(name) do
    GenServer.whereis(ref(name))
  end

  defp ref(name) do
    {:via, Registry, {PencilSpaceServer.Game.Registry, name}}
  end
end
