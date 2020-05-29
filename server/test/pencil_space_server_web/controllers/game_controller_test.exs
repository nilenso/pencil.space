defmodule PencilSpaceServerWeb.GameControllerTest do
  use PencilSpaceServerWeb.ConnCase
  import Bureaucrat.Helpers

  describe "POST /api/v1/game" do
    @valid_create_attrs %{
      "host" => %{
        "avatar" => "TWFuIGlzIGRpc=",
        "id" => "cookie1",
        "name" => "pencil.boy"
      }
    }

    test "creates a new game", %{conn: conn} do
      path = conn |> Routes.game_path(:create)
      conn = conn |> post(path, @valid_create_attrs) |> doc(operation_id: "create game")

      assert %{"name" => name} = json_response(conn, 201)
    end
  end
end
