defmodule PencilSpaceServer.Utils do
  @moduledoc """
  Map, String, List utilities
  """

  def map2atom(map) do
    Map.new(map, fn {k, v} -> {String.to_atom(k), v} end)
  end
end
