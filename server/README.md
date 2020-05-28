# pencil.space (server)

## Local dev setup

To install Elixir:

```
brew upgrade
brew install elixir@1.10.3

$ iex -v
IEx 1.10.3
```


To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Install postgres with `docker-compose up -d`
  * Create and migrate your database with `mix ecto.setup`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

### Gotchas

Installing `elixir` with `brew` on OS X may land you with issues around OpenSSL. To fix, switch back:

```bash
brew switch openssl 1.0.2s
```


### REPL

```bash
iex -S mix
```

...with a running server at [`localhost:4000`](http://localhost:4000)
```bash
iex -S mix phx.server
```
