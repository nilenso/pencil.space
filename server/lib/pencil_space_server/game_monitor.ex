defmodule PencilSpaceServer.GameMonitor do
  @moduledoc """
  Game monitor that keeps an eye on the running game.
  """

  use GenServer
  alias PencilSpaceServer.{GameMonitor, GameSupervisor, GameState, GameRegistry}

  # Client API

  def start(name) do
    DynamicSupervisor.start_child(GameSupervisor, {__MODULE__, name: ref(name)})
  end

  def presence(name) do
    case GenServer.whereis(ref(name)) do
      nil ->
        {:error, :does_not_exist}
      _game ->
        {:ok, :exists}
    end
  end

  def add_host(name, host) do
    GenServer.cast(ref(name), host)
  end

  def host(name) do
    GenServer.call(ref(name), :host)
  end

  def start_link(options) do
    GenServer.start_link(__MODULE__, %GameState{}, options)
  end

  def handle_cast(%{host: host}, game) do
    {:noreply, GameState.add_host(game, host)}
  end

  def handle_call(:host, _from, %{host: host}) do
    {:reply, host, host}
  end

  def init(game) do
    {:ok, game}
  end

  # Helpers

  defp ref(name) do
    {:via, Registry, {GameRegistry, name}}
  end
end
