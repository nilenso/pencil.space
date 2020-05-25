defmodule PencilSpaceServerWeb.GameController do
  @moduledoc """
  Game controller that deals with creating/joining games over HTTP.
  """

  use PencilSpaceServerWeb, :controller
  alias PencilSpaceServer.{GameMonitor}

  def create(conn, _params) do
    game_id = Nanoid.generate()

    case GameMonitor.start(game_id) do
      {:ok, _pid} ->
        conn
        |> put_status(200)
        |> json(%{id: game_id})
      {:error} ->
        conn
        |> put_status(503)
        |> json(%{error: "Could not create a new game"})
    end
  end

  def join(conn, %{"id" => game_id}) do
    case GameMonitor.presence(game_id) do
      {:ok, :exists} ->
        conn
        |> put_status(200)
        |> json(%{id: game_id})
      {:error, :does_not_exist} ->
        conn
        |> put_status(404)
        |> json(%{error: "Game with name: #{game_id} does not exist"})
    end
  end
end
