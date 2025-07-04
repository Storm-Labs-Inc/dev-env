# Storm Labs ▸ Dev Environment

A self-contained Docker image that bundles the complete tool-chain required for **Solidity** and modern **full-stack** development across all Storm Labs projects. The image can be consumed directly from GHCR or built locally and is fully integrated with Cursor for a one-click setup.

## ✨ What's Inside

| Category | Tooling |
|-----------|---------|
| Blockchain | Foundry (`forge`, `cast`, `anvil`) |
| JavaScript | Node.js 22 (22.4.0), `pnpm` |
| Python     | Python 3.12, [`pipx`](https://pypa.github.io/pipx), [`uv`](https://github.com/astral-sh/uv) |
| Rust       | `rustup` + stable tool-chain |
| Utilities  | `git`, `curl`, `build-essential`, many more |

The multi-stage `Dockerfile` lives in `dev-env/` and produces a minimal runtime layer that contains **only what's required at runtime**—keeping final images small and secure.

## 🚀 Quick-start (Docker CLI)

```bash
# 0. (Optional) Use the pre-built image from GHCR – works on both amd64 & Apple Silicon/arm64
#    The `latest` tag always points to the most recent successful build from `master`.
docker pull ghcr.io/storm-labs/dev-env:latest

# 1. Build the image locally (if you need local changes) and tag it as :local
#    Both ghcr.io/** and docker.io/** aliases are produced for convenience.
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

## 🔧 Configuration & Build-time Arguments

The `dev-env/Dockerfile` is designed to be **highly configurable at build time**. The most common tweaks can be achieved by supplying `--build-arg` flags—no patching of the Dockerfile required.

| ARG | Default | Purpose |
|-----|---------|---------|
| `RUNTIME_BASE` | `ubuntu:24.04` | Base OS for the final runtime layer. Swap to `debian:bookworm-slim`, Alpine, etc. |
| `FOUNDRY_VERSION` | `latest` | Upstream [`foundry-rs/foundry`](https://github.com/foundry-rs/foundry) image tag (e.g. `nightly`, `v1.0.0`). |
| `NODE_VERSION` | `22.4.0` | Node.js version installed via `pnpm env use -g`. |
| `RUST_VERSION` | `1.77.1` | Rust tool-chain version managed by `rustup`. |
| `USERNAME` | `dev` | Non-root user created inside both build and runtime layers. |

Example: build the image against the **nightly Foundry** release and a newer Node.js version:

```bash
docker build \
  --build-arg FOUNDRY_VERSION=nightly \
  --build-arg NODE_VERSION=22.6.0 \
  -t ghcr.io/storm-labs/dev-env:nightly \
  -f dev-env/Dockerfile .
```

The resulting image preserves all other defaults (Python 3.12, `uv`, offline docs, etc.) while pulling in your custom tooling versions.

## 🧰 just Recipes

| Recipe | Description |
|--------|-------------|
| `just build` | Build the dev image and tag it as \`:local\` (both \`ghcr.io/storm-labs/**\` and \`storm-labs/**\`). |
| `just lint` | Lint the Dockerfile with [hadolint](https://github.com/hadolint/hadolint). |
| `just dev-install` | Hook executed by Cursor to install extra dependencies (currently does nothing). |
| `just` | List all available recipes. |

> **Tip**: Running `just` with no arguments prints the recipe list—ideal for discoverability.

## 📦 Publishing

A GitHub Actions workflow (`.github/workflows/publish-image.yml`) automatically **builds and pushes** a **multi-arch (amd64 + arm64)** image to `ghcr.io/storm-labs/dev-env` on every commit to `master` _and_ for any semantic version tag (e.g. `v1.2.3`). Each build is additionally tagged with the short commit SHA for deterministic pinning.

## 🖇️ Related Files

* **`dev-env/Dockerfile`** – Multi-stage build producing a stripped-down runtime image.
* **`.cursor/environment.json`** – Instructions for Cursor-based dev-containers.
* **`justfile`** – Helper scripts for building, linting, and future automation.
* **`.github/workflows/publish-image.yml`** – CI workflow that builds & publishes the multi-arch dev image to GHCR on every `master` commit and semantic tag.
* **`.github/workflows/update-docs.yml`** – Weekly cron that refreshes the offline documentation cache.

## 📚 Offline Documentation

The container now ships with an **offline mirror** of the following documentation sources:

1. [secure-contracts.com](https://secure-contracts.com)
2. Solidity docs (v0.8.28)
3. Foundry ‣ forge reference docs
4. [Cove docs](https://docs.cove.finance/)

At runtime the mirror is mounted at `$DOCS_HOME` (`/usr/share/docs`). Open any `index.html` inside that directory to browse completely offline—perfect for flights, air-gapped CI, or when the public sites go down.

The mirror is refreshed weekly by the `update-docs.yml` workflow so it's always up-to-date without manual intervention.

## 📝 License

This project is licensed under the [MIT License](./LICENSE).
