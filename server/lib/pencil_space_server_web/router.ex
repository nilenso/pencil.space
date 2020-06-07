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
    post "/game", GameController, :new
    get "/game/:name", GameController, :check
    post "/game/:name", GameController, :update
    get "/*path", ApiController, :route_not_found
    post "/*path", ApiController, :route_not_found
  end

  scope "/", PencilSpaceServerWeb do
    pipe_through :browser
    get "/*path", ApiController, :index
  end
end
