defmodule PencilSpaceServerWeb.GameController do
  @moduledoc """
  Creating/joining games over HTTP.
  """

  use PencilSpaceServerWeb, :controller
  alias PencilSpaceServer.Game
  import PencilSpaceServerWeb.ControllerHelpers, only: [render_json: 3, render_error: 2, head: 2]

  def check(conn, %{"name" => name}) do
    case Game.presence(name) do
      {:ok, :present} -> head(conn, :no_content)
      {:error, :not_present} -> head(conn, :not_found)
    end
  end

  def check(conn, _params),
    do: render_error(conn, 400)

  def new(
        conn,
        %{"player" => %{"id" => _id, "name" => _name, "avatar" => _avatar}} = player
      ) do
    case Game.launch(player) do
      {:ok, name} ->
        render_json(conn, :created, %{game: %{name: name}, player: player})

      {:error} ->
        render_json(conn, :service_unavailable, %{error: "Could not create a new game"})
    end
  end

  def new(conn, _params),
    do: render_error(conn, 400)

  def update(
        conn,
        %{"name" => name, "player" => %{"id" => _id, "name" => _name, "avatar" => _avatar}} =
          params
      ) do
    player_params = Map.take(params, ["player"])
    case Game.revise(name, player_params) do
      {:ok, _state} ->
        render_json(conn, :created, %{game: %{name: name}, player: player_params})

      {:error, :not_present} ->
        render_json(conn, :not_found, %{error: "Game with name: #{name} does not exist"})

      {:error, :update_failed} ->
        render_json(conn, :service_unavailable, %{
          error: "Could not update the game with name: #{name}"
        })
    end
  end

  def update(conn, _params),
    do: render_error(conn, 400)
end
