defmodule PencilSpaceServer.Game.State do
  @moduledoc """
  Game state for keeping a log of the state changes.
  """

  defstruct host: nil,
            participants: []

  def update(state, key, value) do
    state |> Map.put(key, value)
  end
end
