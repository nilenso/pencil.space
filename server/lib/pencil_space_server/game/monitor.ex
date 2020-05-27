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
    {:reply, State.update(state, :host, info)}
  end
end
