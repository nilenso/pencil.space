defmodule PencilSpaceServer.Dict do
  @moduledoc """
  Manage words in the database.
  """

  def word do
    Enum.random(["pencil",
                 "soul",
                 "black lives matter",
                 "ありがとう",
                 "alienware",
                 "com truise",
                 "covid",
                 "whisky",
                 "spike buster",
                 "in utero"])
  end
end
