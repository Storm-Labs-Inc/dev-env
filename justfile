# Reference: https://github.com/casey/just

# Default recipe
default:
  @just --list

# ---------------------------------------------------------------------------
# Install commands (used by .cursor for container provisioning)
# ---------------------------------------------------------------------------
# Currently, all dependencies are baked into the Docker image, so this is a no-op.
# Having the recipe allows the same `just` invocation both inside and outside
# the container without conditional checks.
dev-install:
  @echo "All dependencies provided by dev-env Docker image — nothing to install."

# ---------------------------------------------------------------------------
# Convenience helpers
# ---------------------------------------------------------------------------

# Lint the Dockerfile using hadolint (requires hadolint installed on host).
lint:
  hadolint dev-env/Dockerfile

# Build the dev container locally.
# Usage: just build
build:
  docker build -t storm-labs/dev-env:local -f dev-env/Dockerfile .
