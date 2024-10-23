
# Smarter AI Video Player

A modern, customizable video player built using **React (TypeScript)**, **Tailwind CSS**, and **Vite**.
Designed with scalability and maintainability in mind, it leverages React hooks, component-based architecture, and utility functions.

---

## Table of Contents
- [Installation](#installation)
- [Features](#features)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Scripts](#scripts)
- [Testing](#testing)
- [Configuration](#configuration)


---

## Installation

Make sure you have **Node.js** installed. Then follow these steps:

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

- **React with TypeScript:** Typed components for reliability.
- **Vite:** Fast development with hot reloading.
- **Tailwind CSS:** Utility-first CSS framework.
- **PostCSS:** Custom CSS processing pipeline.
- **Jest Testing:** Unit and snapshot tests.
- **ESLint:** Enforce consistent code style and quality.

---

## Project Structure

```plaintext
smarter-ai-video-player/
│
├── public/                  # Static assets (e.g., images, favicon)
├── src/
│   ├── __tests__/           # Unit and snapshot tests
│   │   └── __snapshots__/   # Snapshot files
│   │   └── VideoPlayerControls.test.tsx
│   ├── components/          # UI Components
│   │   ├── PreloadVideoPlayer.tsx
│   │   ├── VideoPlayer.tsx
│   │   └── VideoPlayerControls.tsx
│   ├── data/                # Static data files
│   ├── hooks/               # Custom hooks
│   ├── types/               # Type definitions
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Main component
│   ├── main.tsx             # Application entry point
│   ├── App.css              # Component styles
│   └── index.css            # Global styles
│
├── index.html               # HTML template
├── jest.config.cjs          # Jest configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
├── eslint.config.js         # ESLint configuration
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation
```

---

## Usage

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### Build for Production

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build for production.
- **`npm run preview`**: Preview the production build.
- **`npm run lint`**: Run ESLint to check code style.
- **`npm test`**: Run tests using Jest.

---

## Testing

This project uses **Jest** for unit and snapshot testing.

### Running Tests

```bash
npm test
```

### Snapshot Testing

If changes are made to the components, you may need to update snapshots:

```bash
jest --updateSnapshot
```


---

## Configuration

- **Vite:** `vite.config.ts` controls the development server and build process.
- **Tailwind CSS:** Configure styles with `tailwind.config.js`.
- **TypeScript:** Adjust type settings in `tsconfig.json`.
- **Jest:** Configure testing in `jest.config.cjs`.

---

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)

---
