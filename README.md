# SpotRoom Project Setup Guide

Welcome to the SpotRoom project! We're excited to have you contribute. This guide will help you set up your development environment and get started with the project.

## Prerequisites

Before you begin, make sure you have the following tools and software installed on your machine:

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [Yarn](https://yarnpkg.com/) (v1.22.0 or higher)

## Project Structure

Our project follows a monorepo structure using Yarn Workspaces. Here's an overview of the project structure:

- `SpotRoom/`
  - `yarn/`
  - `contribution/`
  - `documentation/`
  - `frontend/`
  - `mobile-app/`
  - `node_modules/`
  - `packages/` (contains microservices backend)
  - `setup/`
  - `shared-components/`

## Getting Started

1. **Clone the Repository:**
   ```bash
    git clone https://github.com/SpotRoom/SpotRoom.git
    cd SpotRoom
   ```
2. **Install Dependencies**

```bash
yarn install
```
