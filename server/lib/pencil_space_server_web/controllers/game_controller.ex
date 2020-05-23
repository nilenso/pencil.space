defmodule PencilSpaceServerWeb.GameController do
  use PencilSpaceServerWeb, :controller

  def create(conn, _params) do
    render(conn, "create.json", %{id: Ecto.UUID.generate})
  end
end
