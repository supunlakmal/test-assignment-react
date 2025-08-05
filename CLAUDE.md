# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build for production**: `npm run build`
- **Start production server**: `npm start`
- **Lint code**: `npm run lint`

## Project Architecture

This is a Next.js 15 application using the App Router pattern with TypeScript and Tailwind CSS v4.

### Key Structure
- **Framework**: Next.js 15 with App Router (`src/app/`)
- **Styling**: Tailwind CSS v4 with custom CSS variables and dark mode support
- **TypeScript**: Strict mode enabled with path aliases (`@/*` → `./src/*`)
- **Fonts**: Geist Sans and Geist Mono from Google Fonts

### Application Structure
- `src/app/layout.tsx`: Root layout with font setup and global styling
- `src/app/page.tsx`: Home page component
- `src/app/globals.css`: Global styles with CSS variables for theming

### Styling System
- Uses Tailwind CSS v4 with `@theme inline` configuration
- CSS variables for colors: `--background`, `--foreground`
- Automatic dark mode support via `prefers-color-scheme`
- Custom font variables: `--font-geist-sans`, `--font-geist-mono`

### Configuration Files
- `tsconfig.json`: TypeScript configuration with strict mode and path mapping
- `eslint.config.mjs`: ESLint with Next.js recommended rules
- `next.config.ts`: Next.js configuration (currently minimal)