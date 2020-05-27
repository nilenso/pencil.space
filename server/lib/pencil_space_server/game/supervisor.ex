defmodule PencilSpaceServer.Game.Supervisor do
  @moduledoc """
    Game supervisor for running game monitors.
  """

  use DynamicSupervisor

  def start_link(init_arg) do
    DynamicSupervisor.start_link(__MODULE__, init_arg, name: __MODULE__)
  end

  def init(_init_arg) do
    DynamicSupervisor.init(strategy: :one_for_one)
  end

  def supervise(spec) do
    IO.inspect spec
    DynamicSupervisor.start_child(__MODULE__, spec)
  end
end
