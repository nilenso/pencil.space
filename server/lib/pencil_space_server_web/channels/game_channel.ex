defmodule PencilSpaceServerWeb.GameChannel do
  use Phoenix.Channel
  alias PencilSpaceServer.Game

  #
  # host
  # /
  # start
  # game:<client-id>
  # Game.launch
  # push -> details
  #
  # participant
  # HTTP
  # /game/client-id
  # join
  # game:<client-id>
  # Game.revise
  # broadcast -> details
  #

  def join("game:" <> name, %{"player" => player} = params, socket) do
    case Game.presence(name) do
      {:ok, :present} ->
        Game.revise(name, params)
      {:error, :not_present} ->
        Game.launch(name, params)
    end

    send(self(), :after_join)
    {:ok, socket}
  end

  def handle_info(:after_join, socket) do
    "game:" <> name = socket.topic
    {:ok, players} = Game.players(name)
    broadcast!(socket, "player:joined", %{players: players})
    {:noreply, socket}
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
