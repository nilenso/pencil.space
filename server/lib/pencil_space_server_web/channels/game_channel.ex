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
        Game.revise(name, :player, params)

      {:error, :not_present} ->
        Game.launch(name, params)
    end

    socket =
      socket
      |> assign(:player, player)
      |> assign(:game_name, name)

    send(self(), :after_join)
    {:ok, socket}
  end

  def handle_info(:after_join, socket) do
    {:ok, players} = Game.players(socket.assigns.game_name)
    broadcast!(socket, "player:joined", %{players: players})
    {:noreply, socket}
  end

  def handle_info(:game_update, socket) do
    #
    # handle-game:
    # check if all players are done:
    #   yes: turn:change
    #    no: trigger turn:change
    # check if all turns are done:
    #   yes: round:start
    #    no: do nothing, broadcast
    {:noreply, socket}
  end

  def handle_info(:game_update, socket) do
    # check if game is over?
    #  yes: wrap up game.
    #   no: check if round is over?
    #        yes: round_update
    #         no: check if turn is over?
    #              yes: turn_update
    #               no: update responder
  end

  def handle_in("player:chat" = subtopic, payload, socket) do
    # check if player is correct
    #   yes: check if message is answer
    #          yes: broadcast correct player, game_update
    #           no: broadcast raw chat
    #    no: throw error
    broadcast!(socket, subtopic, payload)
    {:noreply, socket}
  end

  def handle_in("game:start" = subtopic, payload, socket) do
    # change state
    # start round
    # start turn
    Game.revise(socket.assigns.game_name, :status, :started)
    send(self(), :round_start)
    {:noreply, socket}
  end

  def handle_info(:round_start, socket) do
    # check if game hasn't ended
    #  yes: do nothing, broadcast
    #   no: check if round is over
    #         yes: check if more rounds are available
    #                yes: start round
    #                 no: game over
    #          no: do nothing
    Game.revise(socket.assigns.game_name, :add_round)
    broadcast!(socket, "round:started", %{})
    {:noreply, socket}
  end

  def handle_in("player:draw" = subtopic, payload, socket) do
    # only if the current player is a drawer
    broadcast!(socket, subtopic, payload)
    {:noreply, socket}
  end
end

# p1:
# game-start =
#  start game
#  start round
#  start turn
