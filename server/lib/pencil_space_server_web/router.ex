defmodule PencilSpaceServerWeb.Router do
  use PencilSpaceServerWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  pipeline :browser do
    plug :accepts, ["html"]
  end

  scope "/api/v1", PencilSpaceServerWeb do
    pipe_through :api
    post "/game", GameController, :create
    post "/game/:name", GameController, :join
    post "/*path", ApiController, :route_not_found
  end

  scope "/", PencilSpaceServerWeb do
    pipe_through :browser
    get "/*path", ApiController, :index
  end
end
