defmodule PencilSpaceServerWeb.Router do
  use PencilSpaceServerWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  pipeline :browser do
    plug :accepts, ["html"]
  end

  pipeline :js do
    plug :accepts, ["js"]
  end

  pipeline :css do
    plug :accepts, ["css"]
  end

  scope "/api/v1", PencilSpaceServerWeb do
    pipe_through :api

    post  "/game", GameController, :create
    post  "/game/:name", GameController, :join
    post  "/*path", ApiController, :route_not_found
  end

  scope "/", PencilSpaceServerWeb do
    pipe_through :browser
    get "/*path", ApiController, :index
    get "/assets/*", ApiController, :index
  end

  scope "/", PencilSpaceServerWeb do
    pipe_through :js
    get "/assets/*.js", ApiController, :index
  end

  scope "/", PencilSpaceServerWeb do
    pipe_through :css
    get "/assets/css/*", ApiController, :index
  end
end
