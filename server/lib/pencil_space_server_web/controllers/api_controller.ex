defmodule PencilSpaceServerWeb.ApiController do
  @moduledoc """
  Generic API controller.
  """

  use PencilSpaceServerWeb, :controller
  import PencilSpaceServerWeb.ControllerHelpers, only: [render_error: 2]

  def index(conn, _params) do
    html(conn, File.read!("priv/static/index.html"))
  end

  def route_not_found(conn, _params),
      do: render_error(conn, 404)
end
