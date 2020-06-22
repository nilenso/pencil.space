defmodule PencilSpaceServerWeb.Router do
  use PencilSpaceServerWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", PencilSpaceServerWeb do
    pipe_through :api
  end
end
