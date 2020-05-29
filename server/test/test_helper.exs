Bureaucrat.start(
  writer: Bureaucrat.SwaggerSlateMarkdownWriter,
  default_path: "doc/source/index.html.md",
  env_var: "DOC",
  swagger: "priv/static/swagger.json" |> File.read!() |> Poison.decode!())
ExUnit.start(formatters: [ExUnit.CLIFormatter, Bureaucrat.Formatter])
Ecto.Adapters.SQL.Sandbox.mode(PencilSpaceServer.Repo, :manual)
