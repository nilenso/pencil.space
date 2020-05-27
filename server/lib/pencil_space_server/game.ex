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

  def update(name, %{host: host}) do
    GenServer.call(ref(name), {:host, host})
  end

  defp whereis(name) do
    GenServer.whereis(ref(name))
  end

  defp ref(name) do
    {:via, Registry, {PencilSpaceServer.Game.Registry, name}}
  end
end
