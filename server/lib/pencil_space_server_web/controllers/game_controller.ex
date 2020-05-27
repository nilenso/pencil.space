defmodule PencilSpaceServerWeb.GameController do
  @moduledoc """
  Game controller that deals with creating/joining games over HTTP.
  """

  use PencilSpaceServerWeb, :controller
  alias PencilSpaceServer.{Game}
  import PencilSpaceServerWeb.ControllerHelpers

  def create(conn, %{"host" => %{"id" => _id, "name" => _name, "avatar" => _avatar}} = host) do
    case Game.start do
      {:ok, name} ->
        Game.update(:host, name, host)
        render_json(conn, 201, %{name: name})
      {:error} ->
        render_json(conn, 503, %{error: "Could not create a new game"})
    end
  end

  def join(conn, %{"name" => name}) do
    case Game.presence(name) do
      {:ok, :exists} ->
        render_json(conn, 202, %{name: name})
      {:error, :does_not_exist} ->
        render_json(conn, 404, %{error: "Game with name: #{name} does not exist"})
    end
  end
end
