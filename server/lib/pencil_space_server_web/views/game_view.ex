defmodule PencilSpaceServerWeb.GameView do
  use PencilSpaceServerWeb, :view

  def render("create.json", %{id: id}) do
    %{status: :ok, game: id}
  end
end
