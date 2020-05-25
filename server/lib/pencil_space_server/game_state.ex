defmodule PencilSpaceServer.GameState do
  @moduledoc """
  Game state for keeping a log of the state changes.
  """

  defstruct host: :bot,
            participants: []
end
