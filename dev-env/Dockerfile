ARG RUNTIME_BASE="ubuntu:22.04"
ARG FOUNDRY_VERSION="latest"
FROM ghcr.io/foundry-rs/foundry:${FOUNDRY_VERSION} AS builder

# Ensure we have root privileges for package installation
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
        lsb-release \
        software-properties-common && \
    rm -rf /var/lib/apt/lists/*

# --------------------------
# 2. pnpm, Node.js, Rust (Foundry pre-installed in base image)
# --------------------------
ARG NODE_VERSION="22.4.0"
ARG RUST_VERSION="1.77.1"

ENV PNPM_HOME="/root/.local/share/pnpm" \
    CARGO_HOME="/root/.cargo"
ENV PATH="$PNPM_HOME:/root/.cargo/bin:${PATH}"

RUN curl -fsSL https://get.pnpm.io/install.sh | bash -s -- && \
    pnpm env use -g ${NODE_VERSION} && \
    curl https://sh.rustup.rs -sSf | bash -s -- -y --no-modify-path && \
    . "$CARGO_HOME/env" && \
    rustup toolchain install ${RUST_VERSION} && \
    rustup default ${RUST_VERSION}

# --------------------------
# 3. Python 3.12 + pipx + uv
# --------------------------
RUN add-apt-repository ppa:deadsnakes/ppa && \
    apt-get update -y && \
    apt-get install -y --no-install-recommends python3.12 python3.12-venv && \
    curl -sS https://bootstrap.pypa.io/get-pip.py | python3.12 && \
    python3.12 -m pip install --no-cache-dir pipx && \
    pipx install uv && \
    rm -rf /var/lib/apt/lists/*

# ---------------------------------------------------------------------------
# Final minimal runtime image
# ---------------------------------------------------------------------------
FROM ${RUNTIME_BASE} AS runtime

LABEL org.opencontainers.image.source="https://github.com/storm-labs/dev-env"

COPY --from=builder /usr/local /usr/local
COPY --from=builder /root/.local /root/.local
COPY --from=builder /root/.cargo /root/.cargo
COPY --from=builder /root/.rustup /root/.rustup

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:/root/.local/bin:/usr/local/bin:/root/.cargo/bin:${PATH}" \
    DEBIAN_FRONTEND=noninteractive

# Add offline documentation
COPY docs /usr/share/docs
ENV DOCS_HOME="/usr/share/docs"

RUN apt-get update -y && \
    apt-get install -y --no-install-recommends ca-certificates libssl-dev && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Create non-root user for safer defaults
RUN useradd -m dev && chown -R dev:dev /root /usr/share/docs

USER dev

ENTRYPOINT ["bash", "-lc"]