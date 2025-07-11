# hadolint global ignore=DL3008
# hadolint global ignore=DL3006
# hadolint global ignore=SC1091
ARG RUNTIME_BASE="ubuntu:24.04"
ARG FOUNDRY_VERSION="latest"
ARG USERNAME="dev"
ARG NODE_VERSION="22.4.0"
ARG RUST_VERSION="1.77.1"
ARG BUILD_DATE
ARG VCS_REF
FROM ghcr.io/foundry-rs/foundry:${FOUNDRY_VERSION} AS builder
ARG USERNAME

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# Switch to root for system package installation (builder stage only)
# hadolint ignore=DL3002
USER root

LABEL org.opencontainers.image.source="https://github.com/storm-labs/dev-env"

# --------------------------
# 1. System packages & dependencies
# --------------------------
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update -y && \
    apt-get install -y --no-install-recommends \
        git \
        curl \
        unzip \
        build-essential \
        pkg-config \
        libssl-dev \
        ca-certificates \
        gnupg \
        lsb-release && \
    rm -rf /var/lib/apt/lists/*

# --------------------------
# 2. pnpm, Node.js, Rust (Foundry pre-installed in base image)
# --------------------------

ENV PNPM_HOME="/root/.local/share/pnpm" \
    CARGO_HOME="/root/.cargo"
ENV PATH="$PNPM_HOME:/root/.cargo/bin:${PATH}"

RUN curl -fsSL https://get.pnpm.io/install.sh | bash -s -- && \
    pnpm env use -g "${NODE_VERSION}" && \
    curl https://sh.rustup.rs -sSf | bash -s -- -y --no-modify-path && \
    # shellcheck source=/dev/null
    . "$CARGO_HOME/env" && \
    rustup toolchain install "${RUST_VERSION}" && \
    rustup default "${RUST_VERSION}"

# --------------------------
# 3. Python 3.12 (from Noble) + pipx + uv
# --------------------------
RUN apt-get update -y && \
    apt-get install -y --no-install-recommends software-properties-common && \
    add-apt-repository ppa:deadsnakes/ppa -y && \
    apt-get update -y && \
    apt-get install -y --no-install-recommends python3.12 python3.12-venv && \
    curl -sS https://bootstrap.pypa.io/get-pip.py | python3.12 && \
    python3.12 -m pip install --no-cache-dir pipx==1.7.1 && \
    pipx install uv==0.7.18 && \
    rm -rf /var/lib/apt/lists/*

# Switch to non-root user in builder stage for safer defaults
RUN useradd -m "${USERNAME}" && chown -R "${USERNAME}:${USERNAME}" /root
USER ${USERNAME}

# ---------------------------------------------------------------------------
# Final minimal runtime image
# ---------------------------------------------------------------------------
FROM ${RUNTIME_BASE} AS runtime
ARG USERNAME

ARG BUILD_DATE
ARG VCS_REF

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

LABEL org.opencontainers.image.source="https://github.com/storm-labs/dev-env"
LABEL org.opencontainers.image.description="Storm Labs Dev Env with Foundry, Rust, Python, and Node tooling — Cursor ready"
LABEL org.opencontainers.image.created=$BUILD_DATE
LABEL org.opencontainers.image.revision=$VCS_REF

COPY --from=builder /usr/local /usr/local
COPY --from=builder /root/.local /home/${USERNAME}/.local
COPY --from=builder /root/.cargo /root/.cargo
COPY --from=builder /root/.rustup /root/.rustup

# Fix node symlink to point to the correct location
RUN rm -f /home/"${USERNAME}"/.local/share/pnpm/node && \
    ln -s /home/"${USERNAME}"/.local/share/pnpm/nodejs/"${NODE_VERSION}"/bin/node /home/"${USERNAME}"/.local/share/pnpm/node

ENV PNPM_HOME="/home/${USERNAME}/.local/share/pnpm"
ENV PATH="$PNPM_HOME:/home/${USERNAME}/.local/bin:/usr/local/bin:/root/.cargo/bin:${PATH}" \
    HOME="/home/${USERNAME}" \
    DEBIAN_FRONTEND=noninteractive

# Add offline documentation
COPY docs /usr/share/docs
ENV DOCS_HOME="/usr/share/docs"

# Copy MCP configuration files
COPY dev-env/mcp.json /tmp/mcp.json

# Install git and essential tools with verification
RUN apt-get update -y && \
    apt-get install -y --no-install-recommends \
        ca-certificates \
        git && \
    apt-get clean && rm -rf /var/lib/apt/lists/* && \
    # Verify git is installed and executable
    which git && git --version

# Create non-root user for safer defaults (configurable)
RUN useradd -m "${USERNAME}" && chown -R "${USERNAME}:${USERNAME}" /home/"${USERNAME}" /usr/share/docs

# Set bash as the default shell for the user
RUN chsh -s /bin/bash "${USERNAME}"

# Set up MCP configuration for the user
RUN mkdir -p /home/"${USERNAME}"/.cursor && \
    cp /tmp/mcp.json /home/"${USERNAME}"/.cursor/mcp.json && \
    chown -R "${USERNAME}:${USERNAME}" /home/"${USERNAME}"/.cursor && \
    # Clean up temp files
    rm -f /tmp/mcp.json

USER ${USERNAME}
WORKDIR /home/${USERNAME}

# Basic healthcheck (can be overridden)
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s CMD echo "ok"

ENTRYPOINT ["bash", "-lc"]