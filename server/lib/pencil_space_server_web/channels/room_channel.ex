defmodule PencilSpaceServerWeb.RoomChannel do
  use Phoenix.Channel

  def join("room:" <> _anything, _message, socket) do
    # 1. player joins
    # 2. Initialize genServer for that room
    {:ok, socket}
  end

  def handle_in(message, body, socket) do
    # 1. player starts drawing
    # 2. drawing is broadcasted
    broadcast!(socket, message, %{id: 1, body: body})
    {:noreply, socket}
  end
end
