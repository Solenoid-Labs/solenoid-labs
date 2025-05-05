# Solenoid Labs

<div align="center">

*Elegant solutions using AI, Data Science, Mathematical Modeling, and Experimental Research.*

</div>

<br/>
<div align="center">───────  §  ───────</div>
<br/>

## Vision & Motivation: Elegant Solutions

#TODO: Add vision and motivation

<br/>
<div align="center">───────  §  ───────</div>
<br/>

## Overview

This repository serves as the central coordination point for the entire Solenoid Labs system, providing:

- Design system and component library
- Documentation for all system components
- Configuration and standards
- Development environment setup

## Components

Solenoid Labs is structured as a monorepo using [pnpm](https://pnpm.io/) workspaces and [Turborepo](https://turbo.build/) for build orchestration. All components are located under the `packages/` directory.

The Solenoid Labs ecosystem consists of the following components:

#TODO: Change to Solenoid Labs

- [**phantom-api**](./packages/phantom-api): API layer for accessing Phantom services
- [**phantom-canon**](./packages/phantom-canon): Core content catalog and canon management
- [**phantom-core**](./packages/phantom-core): Central hub, documentation, and design system
- [**phantom-eda**](./packages/phantom-eda): Exploratory data analysis tools
- [**phantom-editor**](./packages/phantom-editor): Content editing and management interface
- [**phantom-enrichment**](./packages/phantom-enrichment): Content enrichment and metadata generation
- [**phantom-explorer**](./packages/phantom-explorer): Interface for exploring the canon
- [**phantom-folio**](./packages/phantom-folio): User collections and reading lists
- [**phantom-glacier**](./packages/phantom-glacier): Digital asset storage
- [**phantom-intake**](./packages/phantom-intake): Content ingestion pipeline
- [**phantom-query**](./packages/phantom-query): Search and querying infrastructure
- [**phantom-rd**](./packages/phantom-rd): eBook reader component
- [**phantom-vector**](./packages/phantom-vector): Vector embedding and semantic search capabilities
- [**phantomklange**](./packages/phantomklange): Digital catalogue and user interface

## Getting Started

This project uses pnpm for package management and Turborepo for task running. To get started:

```bash
# Install dependencies
pnpm install

# Run development server for all packages
pnpm run dev

# Build all packages using monorepo build command
pnpm run build
```

## Documentation

The documentation for Phantom is organized into the following sections:

- **[Architecture](./docs/architecture/)**: System architecture, design decisions, and technical specifications
- **[Packages](./docs/packages/)**: Documentation for individual packages in the monorepo
- **[Guides](./docs/guides/)**: Developer guides, tutorials, and how-to documentation
- **[API](./docs/api/)**: API documentation and reference

For full documentation, see the [docs directory](./docs/).

## License

[MIT](./LICENSE)
