defmodule PencilSpaceServerWeb.Router do
  use PencilSpaceServerWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api/v1", PencilSpaceServerWeb do
    pipe_through :api

    post  "/game", GameController, :create
    post  "/game/:name", GameController, :join
  end
end
