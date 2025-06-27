# afi-agents

This repository contains the `afi-agents` module for AFI Protocol.
# AFI CLI

## Installation

To use the CLI, ensure dependencies are installed:

```bash
npm install
```

Then make the script executable:

```bash
chmod +x cli/afi-cli.ts
```

Run it with:

```bash
node cli/afi-cli.ts list
node cli/afi-cli.ts run athena-q
```

## Structure

- `cli/afi-cli.ts`: Entry-point for the CLI
- `loaders/PersonaLoader.ts`: Dynamically loads agents from `personas/`
- `tests/afi_cli.test.ts`: Jest test for basic CLI functionality
