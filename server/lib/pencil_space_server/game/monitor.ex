defmodule PencilSpaceServer.Game.Monitor do
  @moduledoc """
  Game monitor that keeps an eye on the running game.
  """

  use GenServer
  alias PencilSpaceServer.Game.{State}

  def start_link(options) do
    GenServer.start_link(__MODULE__, %State{}, options)
  end

  def init(state) do
    {:ok, state}
  end

  def handle_call({:host, info}, _from, state) do
    new_state = State.update(state, :host, info)
    {:reply, new_state, new_state}
  end

  def handle_call({:participant, info}, _from, state) do
    new_state = State.update(state, :participant, info)
    {:reply, new_state, new_state}
  end
end
