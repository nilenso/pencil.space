defmodule PencilSpaceServerWeb.ControllerHelpers do
  @moduledoc false

  import Plug.Conn
  import Phoenix.Controller

  def render_json(conn, status, payload) do
    conn |> put_status(status) |> json(payload)
  end
end
