defmodule PencilSpaceServerWeb.ApiController do
  @moduledoc """
  Generic API controller.
  """

  use PencilSpaceServerWeb, :controller
  import PencilSpaceServerWeb.ControllerHelpers

  def route_not_found(conn, _params),
      do: render_error(conn, 404)
end
