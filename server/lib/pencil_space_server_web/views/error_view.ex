defmodule PencilSpaceServerWeb.ErrorView do
  use PencilSpaceServerWeb, :view

  def render("400.json", _assigns) do
    %{errors: %{detail: "Bad params"}}
  end

  def render("404.json", _assigns) do
    %{errors: %{detail: "Resource not found"}}
  end

  def render("500.json", _assigns) do
    %{errors: %{detail: "Internal server error"}}
  end

  def template_not_found(_template, assigns) do
    render "500.json", assigns
  end
end
