# Storm Labs ▸ Dev Environment

A self-contained Docker image that bundles the complete tool-chain required for **Solidity** and modern **full-stack** development across all Storm Labs projects. The image can be consumed directly from GHCR or built locally and is fully integrated with Cursor for a one-click setup.

## ✨ What's Inside

| Category | Tooling |
|-----------|---------|
| Blockchain | Foundry (`forge`, `cast`, `anvil`) |
| JavaScript | Node.js 22, `pnpm` |
| Python     | Python 3.12, [`pipx`](https://pypa.github.io/pipx), [`uv`](https://github.com/astral-sh/uv) |
| Rust       | `rustup` + stable tool-chain |
| Utilities  | `git`, `curl`, `build-essential`, many more |

The multi-stage `Dockerfile` lives in `dev-env/` and produces a minimal runtime layer that contains **only what's required at runtime**—keeping final images small and secure.

## 🚀 Quick-start (Docker CLI)

```bash
# 1. Build the image locally and tag it as :local
just build

# 2. Open an ephemeral shell inside the container
docker run -it --rm ghcr.io/storm-labs/dev-env:local
```

Once inside you'll have access to the full tool-chain, e.g.

```bash
forge --version
node -v
python3.12 -m uv --version
```

## 🐭 Quick-start (Cursor)

Opening this repository in **[Cursor](https://cursor.sh)** automatically starts the dev container thanks to [`.cursor/environment.json`](./.cursor/environment.json). Cursor additionally:

1. Executes `just dev-install` during provisioning (currently a no-op) so you can layer extra project-specific dependencies later.
2. Spawns two convenience terminals:
   * **Anvil** – local Ethereum node (`anvil -p 8545`)
   * **Foundry Tests** – executes `forge test -vvv`

## 🧰 just Recipes

| Recipe | Description |
|--------|-------------|
| `just build` | Build the dev image and tag it as `:local`. |
| `just lint` | Lint the Dockerfile with [hadolint](https://github.com/hadolint/hadolint). |
| `just dev-install` | Hook executed by Cursor to install extra dependencies (currently does nothing). |
| `just` | List all available recipes. |

> **Tip**: Running `just` with no arguments prints the recipe list—ideal for discoverability.

## 📦 Publishing

A GitHub Actions workflow (`.github/workflows/publish-image.yml`) automatically **builds and pushes** the image to `ghcr.io/storm-labs/dev-env` on every commit to `master` _and_ for any semantic version tag (e.g. `v1.2.3`).

## 🖇️ Related Files

* **`dev-env/Dockerfile`** – Multi-stage build producing a stripped-down runtime image.
* **`.cursor/environment.json`** – Instructions for Cursor-based dev-containers.
* **`justfile`** – Helper scripts for building, linting, and future automation.

## 📚 Offline Documentation

The container now ships with an **offline mirror** of the following documentation sources:

1. [secure-contracts.com](https://secure-contracts.com)
2. Solidity docs (v0.8.28)
3. Foundry ‣ forge reference docs
4. Storm's internal Cove docs

At runtime the mirror is mounted at `$DOCS_HOME` (`/usr/share/docs`). Open any `index.html` inside that directory to browse completely offline—perfect for flights, air-gapped CI, or when the public sites go down.

The mirror is refreshed weekly by the `update-docs.yml` workflow so it's always up-to-date without manual intervention.