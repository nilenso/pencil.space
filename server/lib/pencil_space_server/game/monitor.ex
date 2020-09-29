defmodule PencilSpaceServer.Game.Monitor do
  @moduledoc """
  Keep an eye on the running game.
  """

  use GenServer
  alias PencilSpaceServer.Game.State

  # 1 hour
  @timeout 3600 * 1000

  def start_link(options) do
    GenServer.start_link(
      __MODULE__,
      State.update(%State{}, :host, Keyword.get(options, :host)),
      options
    )
  end

  def init(state) do
    {:ok, state, @timeout}
  end

  def whereis(name) do
    GenServer.whereis(name)
  end

  def players(name, :players) do
    GenServer.call(name, :players)
  end

  def update(name, {:player, _player} = params) do
    GenServer.call(name, params)
  end

  def handle_call({:player, info}, _from, state) do
    new_state = State.update(state, :players, info)
    {:reply, new_state, new_state}
  end

  def handle_call(:players, _from, state) do
    {:reply, State.fetch(state, :players), state}
  end
end
