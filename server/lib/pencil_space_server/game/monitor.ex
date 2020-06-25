defmodule PencilSpaceServer.Game.Monitor do
  @moduledoc """
  Keep an eye on the running game.
  """

  use GenServer
  alias PencilSpaceServer.Game.State

  # 1 hour
  @timeout 3600 * 1000

  def start_link(options) do
    GenServer.start_link(__MODULE__, State.create(:game, options), options)
  end

  def init(state) do
    {:ok, state, @timeout}
  end

  def whereis(name) do
    GenServer.whereis(name)
  end

  def state(name, :players) do
    GenServer.call(name, :players)
  end

  def add(name, {:player, _player} = params) do
    GenServer.call(name, params)
  end

  def add(name, :round) do
    GenServer.call(name, :round)
  end

  def update(name, {:status, _status} = params) do
    GenServer.call(name, params)
  end

  def handle_call({:player, info}, _from, state) do
    new_state = State.add(state, :players, info)
    {:reply, new_state, new_state}
  end

  def handle_call(:round, _from, state) do
    new_state = State.add(state, [:game, :round])
    {:reply, new_state, new_state}
  end

  def handle_call({:status, status}, _from, state) do
    new_state = State.update(state, :status, status)
    {:reply, new_state, new_state}
  end

  def handle_call(fetch_key, _from, state) do
    {:reply, State.fetch(state, fetch_key), state}
  end
end
