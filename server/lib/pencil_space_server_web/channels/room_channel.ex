defmodule PencilSpaceServerWeb.RoomChannel do
  use Phoenix.Channel

  def join("room:" <> _anything, _message, socket) do
    # 1. player joins
    # 2. Initialize genServer for that room
    {:ok, socket}
  end

  def handle_in("[CHAT]", body, socket) do
    # 1. player starts drawing
    # 2. drawing is broadcasted
    broadcast!(socket, "[CHAT]", body)
    {:noreply, socket}
  end

  def handle_in("[DRAW]", body, socket) do
    # 1. player starts drawing
    # 2. drawing is broadcasted
    broadcast!(socket, "[DRAW]", body)
    {:noreply, socket}
  end
end
