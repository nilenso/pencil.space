defmodule PencilSpaceServerWeb.GameChannel do
  use Phoenix.Channel
  alias PencilSpaceServer.Game

  def join("game:" <> _anything, _message, socket) do
    "game:" <> name = socket.topic

    case Game.presence(name) do
      {:ok, :exists} -> {:ok, assign(socket, :room, name)}
      {:error, :does_not_exist} -> {:error, :does_not_exist}
    end
  end

  def handle_in("chat", payload, socket) do
    broadcast!(socket, "chat", payload)
    {:noreply, socket}
  end

  def handle_in("draw", payload, socket) do
    broadcast!(socket, "draw", payload)
    {:noreply, socket}
  end
end
