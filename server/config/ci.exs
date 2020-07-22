use Mix.Config

# Configure your database
config :pencil_space_server, PencilSpaceServer.Repo,
  username: "postgres",
  password: "postgres",
  database: "pencil_space_server_test",
  hostname: System.get_env("POSTGRES_HOST"),
  port: System.get_env("POSTGRES_PORT", "5432"),
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :pencil_space_server, PencilSpaceServerWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn
