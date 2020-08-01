defmodule PencilSpaceServer.Game.State.Player do
  @enforce_keys [:id, :name, :avatar, :host]

  defstruct [:id,
             :name,
             :avatar,
             host: false]

  def create(player, host \\ false) do
    struct(PencilSpaceServer.Game.State.Player, Map.put(player, :host, host))
  end

  def exists?(players, player) do
    Enum.any?(players, fn p -> p.id == player.id end)
  end
end

# STATE: turn has ended of correct guess
# MONITOR: turn has ended -> start a new turn
# BROADCAST: fact
