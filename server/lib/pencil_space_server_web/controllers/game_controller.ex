defmodule PencilSpaceServerWeb.GameController do
  @moduledoc """
  Creating/joining games over HTTP.
  """

  use PencilSpaceServerWeb, :controller
  alias PencilSpaceServer.Game
  import PencilSpaceServerWeb.ControllerHelpers, only: [render_json: 3, render_error: 2]

  def create(
        conn,
        %{
          "host" => %{
            "id" => _id,
            "name" => _name,
            "avatar" => _avatar
          }
        } = host
      ) do

    case Game.start(host) do
      {:ok, name} ->
        render_json(conn, :created, %{name: name})
      {:error} ->
        render_json(conn, :service_unavailable, %{error: "Could not create a new game"})
    end
  end

  def create(conn, _params),
      do: render_error(conn, 400)

  def join(
        conn,
        %{
          "name" => name,
          "participant" => %{
            "id" => _id,
            "name" => _name,
            "avatar" => _avatar
          }
        } = params
      ) do

    case Game.presence(name) do
      {:ok, :exists} ->
        Game.update(name, Map.take(params, ["participant"]))
        render_json(conn, :accepted, %{name: name})
      {:error, :does_not_exist} ->
        render_json(conn, :not_found, %{error: "Game with name: #{name} does not exist"})
    end
  end

  def join(conn, _params),
      do: render_error(conn, 400)
end
