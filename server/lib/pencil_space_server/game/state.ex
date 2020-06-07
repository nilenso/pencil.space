defmodule PencilSpaceServer.Game.State do
  @moduledoc """
  For atomically manipulating state.
  """

  defstruct players: []

  def fetch(state, key) do
    state
    |> Map.fetch(key)
  end

  def update(state, :host, player) do
    state
    |> update(:players, Map.put(player, :host, true))
  end

  def update(state, :players, player) do
    case player_exists?(state, player) do
      true ->
        state

      false ->
        state
        |> Map.put(:players, [player | state.players])
    end
  end

  def player_exists?(state, %{"id" => id}) do
    {:ok, players} = fetch(state, :players)
    Enum.any?(players, fn player -> player["id"] == id end)
  end
end
