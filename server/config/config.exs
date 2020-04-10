# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :pencil_space_server,
  ecto_repos: [PencilSpaceServer.Repo]

# Configures the endpoint
config :pencil_space_server, PencilSpaceServerWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "WUo5Hii8tDVqXE2NZFoT4agUrSonYbEqTQ8xoBcqOHHawG/N/P06Pl5sBBITcTer",
  render_errors: [view: PencilSpaceServerWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: PencilSpaceServer.PubSub, adapter: Phoenix.PubSub.PG2],
  live_view: [signing_salt: "z7fNXkUN"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
