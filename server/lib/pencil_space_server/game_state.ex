defmodule PencilSpaceServer.GameState do
  @moduledoc """
  Game state for keeping a log of the state changes.
  """

  defstruct host: nil,
            participants: []

  def add_host(state, new_host) do
    state
    |> Map.put(:host, new_host)
  end
end
