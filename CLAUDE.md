# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BokuNoTodo is a simple AI-assisted TODO application built with React + TypeScript. The project emphasizes simplicity over complexity, focusing on essential features like voice input + AI assistance, Pomodoro timer, and daily scheduling.

**Key Philosophy**: シンプルであること (Keep it simple) - Limit features to maintain simple usability.

## Development Environment

This project is developed on **Windows 11 + Git Bash (MSYS2)** environment.

### Commands

```bash
# Navigate to React project
cd src_react

# Development
npm run dev          # Start development server on http://localhost:3000
npm run build        # Production build
npm run preview      # Serve production build

# Code Quality
npm run lint         # Biome linting check
npm run lint:fix     # Biome linting fix with write
npm run format       # Biome code formatting
npm run typecheck    # TypeScript type checking
```

### MSYS2 Considerations
- Use Unix-style commands (`ls`, `mkdir -p`, etc.) in Git Bash
- Windows paths work: `C:\path\to\file`
- npm commands work directly from MSYS2 terminal
- Git operations optimized for MSYS2

## Architecture

### Project Structure
```
boku-no-todo/
├── doc/                    # Documentation (Japanese)
│   ├── やりたいこと.md       # Feature requirements & project vision
│   ├── youken.md           # Requirements definition guidelines
│   └── integrated_specification.md
├── src_react/              # React application
│   ├── src/
│   │   ├── App.tsx         # Main application component
│   │   ├── index.tsx       # React entry point
│   │   └── index.css       # Manual Tailwind-like CSS classes
│   ├── public/
│   │   └── index.html      # HTML template
│   ├── package.json        # Dependencies and scripts
│   ├── rspack.config.js    # Rspack bundler configuration
│   ├── tsconfig.json       # TypeScript configuration
│   └── biome.json          # Biome linting/formatting config
└── src_dotnet/             # Future .NET backend (planned)
```

### Tech Stack

**Frontend Core**:
- **React 18** + **TypeScript** - UI framework with type safety
- **Rspack** - High-speed Webpack-compatible bundler (replaces Vite)
- **Biome** - Unified ESLint + Prettier replacement for code quality

**CSS Strategy**:
- Currently using **manual CSS classes** (Tailwind-like utilities in `index.css`)
- Planned migration to **Tailwind CSS** in future
- CSS loaded via `css-loader` + `style-loader` (not Lightning CSS due to compatibility)

**Build Configuration**:
- **SWC** for TypeScript/JSX compilation (via Rspack builtin:swc-loader)
- **React Fast Refresh** for hot reloading in development
- Path alias: `@/*` maps to `src/*`

### Current Implementation Status

**✅ Completed**:
- Basic React + TypeScript environment with Rspack
- Development server with hot reload
- Code quality setup (Biome for linting/formatting)
- Build system and production compilation
- Project documentation structure

**🚧 Next Priorities** (from doc/やりたいこと.md):
1. TODO functionality - Basic CRUD operations
2. Pomodoro timer - 25-minute timer with notifications
3. Voice input - Web Speech API integration
4. AI integration - Claude Code SDK for task analysis
5. Daily scheduling - Task arrangement functionality

### Key Design Decisions

**Bundler Choice**: Rspack over Vite for better Windows compatibility and faster build times
**CSS Strategy**: Manual utility classes over Tailwind for immediate setup without PostCSS complexity
**Linting**: Biome over ESLint+Prettier for unified, faster tooling
**State Management**: Planned Jotai or MobX (not yet implemented)

### Future Architecture

**Planned Features**:
- **Voice Input**: Web Speech API for natural task creation
- **AI Integration**: Claude Code SDK for task analysis and breakdown
- **Time Management**: Pomodoro/Ultradian Rhythm/Flowtime techniques
- **Productivity Methods**: Eisenhower Matrix, 2-minute rule, Eat That Frog
- **Backend**: C# ASP.NET Core API (Phase 2)
- **Storage**: IndexedDB (Phase 1) → Database (Phase 2)

### Important Conventions

**Language**: Documentation and UI are primarily in Japanese
**File Organization**: Keep React code in `src_react/`, documentation in `doc/`
**Simplicity**: Prefer simple solutions over complex architectures - avoid enterprise patterns
**MVP Approach**: Build minimum viable features first, iterate based on usage

## Development Notes

- Run type checking before commits to ensure code quality
- Use Biome for consistent formatting (2-space indentation, LF line endings)
- Follow React functional component patterns with hooks
- Maintain TypeScript strict mode compliance
- Keep feature scope minimal - resist adding unnecessary complexity