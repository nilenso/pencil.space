defmodule PencilSpaceServer.Game.State do
  @moduledoc """
  For atomically manipulating state.
  """

  defstruct host: nil,
            participants: []

  def update(state, :host, value) do
    state
    |> Map.put(:host, value)
  end

  def update(state, :participant, value) do
    state
    |> Map.put(:participants, [value | state.participants])
  end
end
