
# Smarter AI Video Player

This project is a customizable video player built using modern web technologies like **React (TypeScript)**, **Tailwind CSS**, and **Vite**. It leverages hooks, utility functions, and a component-based architecture to ensure scalability, maintainability, and ease of use.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Scripts](#scripts)
- [Configuration](#configuration)

---

## Installation

Ensure you have **Node.js** installed. Then follow these steps:

```bash
# Clone the repository
git clone <git@github.com:msherazy/smarter-ai-video-player.git>

# Navigate into the project directory
cd smarter-ai-video-player

# Install dependencies
npm install
```

---

## Features

- **React with TypeScript:** Strongly typed components for reliability.
- **Vite:** Lightning-fast development environment.
- **Tailwind CSS:** Utility-first CSS for rapid UI development.
- **PostCSS:** Custom CSS processing.
- **ESLint:** Linting configuration to ensure code quality.
- Modularized code with hooks, types, and utils for better maintainability.

---

## Project Structure

```plaintext
smarter-ai-video-player/
│
├── public/                # Static assets (e.g., images, favicon)
├── src/
│   ├── data/              # Data files or constants
│   ├── hooks/             # Custom React hooks
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Main React component
│   ├── main.tsx           # Entry point for the React app
│   ├── App.css            # Component-specific styles
│   └── index.css          # Global styles
│
├── index.html             # Main HTML template
├── package.json           # Project metadata and dependencies
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── eslint.config.js       # ESLint configuration
```

---

## Usage

After installing dependencies, you can start the development server with:

```bash
npm run dev
```

Open your browser at [http://localhost:5173](http://localhost:5173) to view the project.

To build the project for production, run:

```bash
npm run build
```

And to preview the production build:

```bash
npm run preview
```

---

## Scripts

- **`npm run dev`** - Start the development server.
- **`npm run build`** - Build the project for production.
- **`npm run preview`** - Preview the production build.
- **`npm run lint`** - Lint the code with ESLint.

---

## Configuration

- **Vite:** The configuration for Vite is available in `vite.config.ts`.
- **Tailwind CSS:** Adjust the Tailwind configuration in `tailwind.config.js`.
- **TypeScript:** Modify the TypeScript settings in `tsconfig.json`.

---

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
