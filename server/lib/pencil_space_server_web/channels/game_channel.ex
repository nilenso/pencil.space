defmodule PencilSpaceServerWeb.GameChannel do
  use Phoenix.Channel

  def join("game:" <> _anything, _message, socket) do
    {:ok, socket}
  end

  def handle_in("chat", payload, socket) do
    broadcast!(socket, "chat", payload_with_room(payload, socket))
    {:noreply, socket}
  end

  def handle_in("draw", payload, socket) do
    broadcast!(socket, "draw", payload_with_room(payload, socket))
    {:noreply, socket}
  end

  defp payload_with_room(payload, socket) do
    "game:" <> room = socket.topic
    Map.merge(payload, %{"room" => room})
  end
end
