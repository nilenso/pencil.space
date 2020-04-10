defmodule PencilSpaceServer.Repo do
  use Ecto.Repo,
    otp_app: :pencil_space_server,
    adapter: Ecto.Adapters.Postgres
end
