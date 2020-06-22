defmodule PencilSpaceServer.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    # List all child processes to be supervised
    children = [
      PencilSpaceServer.Repo,
      {Phoenix.PubSub, name: PencilSpaceServer.PubSub},
      PencilSpaceServerWeb.Endpoint,
      {Registry, keys: :unique, name: PencilSpaceServer.Game.Registry},
      {DynamicSupervisor, strategy: :one_for_one, name: PencilSpaceServer.Game.Supervisor}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: PencilSpaceServer.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    PencilSpaceServerWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
