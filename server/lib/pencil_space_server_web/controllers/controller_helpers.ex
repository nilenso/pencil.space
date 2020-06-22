defmodule PencilSpaceServerWeb.ControllerHelpers do
  @moduledoc """
  Functions to simplify controllers
  """

  import Plug.Conn
  import Phoenix.Controller
  alias PencilSpaceServerWeb.ErrorView

  def render_json(conn, status, payload) do
    conn
    |> put_status(status)
    |> json(payload)
  end

  def render_error(conn, error_status) do
    conn
    |> put_status(error_status)
    |> put_view(ErrorView)
    |> render(Enum.join([error_status, "json"], "."), [])
  end

  def head(conn, status) do
    send_resp(conn, status, "")
  end
end
