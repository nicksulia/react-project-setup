# React TypeScript Project Setup

A modern, scalable React TypeScript application built with best practices for 2024/2025. This project features a feature-based architecture, absolute imports, and a comprehensive development setup.

## 🚀 Features

- **Modern Stack**: React 18, TypeScript, Vite
- **UI Framework**: Material-UI (MUI) with Emotion styling
- **State Management**: Redux Toolkit with React Redux
- **Routing**: React Router v6
- **Styling**: TailwindCSS + Material-UI + Emotion
- **Testing**: Jest + Testing Library
- **Code Quality**: ESLint + Prettier
- **Build Tool**: Vite with optimized bundling

## 🏗️ Project Structure

```
src/
├── app/                     # Application configuration
│   ├── providers/           # Context providers, theme providers
│   ├── store/              # Redux store configuration
│   └── router/             # Router configuration
├── features/               # Feature-based organization
│   └── example/            # Example feature
│       ├── components/     # Feature-specific components
│       ├── hooks/          # Feature-specific hooks
│       ├── services/       # Feature-specific services
│       ├── types/          # Feature-specific types
│       └── index.ts        # Public API exports
├── shared/                 # Shared utilities
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # Pure UI components
│   │   └── layout/        # Layout components
│   ├── hooks/             # Shared custom hooks
│   ├── utils/             # Utility functions
│   ├── constants/         # Application constants
│   ├── types/             # Shared TypeScript types
│   └── services/          # Shared services
├── pages/                 # Page components
├── styles/                # Global styles and themes
├── assets/                # Static assets
└── types/                 # Global type definitions
```

## 🛠️ Technology Stack

### Core Dependencies

- **React**: ^18.3.1
- **TypeScript**: ^5.5.4
- **Vite**: ^6.1.0
- **Material-UI**: ^6.4.4
- **Redux Toolkit**: ^2.2.7
- **React Router**: ^6.25.1
- **TailwindCSS**: ^3.4.7

### Development Tools

- **ESLint**: ^9.20.0 with TypeScript support
- **Prettier**: ^3.3.3 for code formatting
- **Jest**: ^29.7.0 for testing
- **Testing Library**: ^16.0.0 for component testing

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd react-project-setup
```

2. Install dependencies:

```bash
npm install
```

3. Create environment file:

```bash
cp .env.local.example .env.local
# Edit .env.local with your configuration
```

4. Start development server:

```bash
npm run dev
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier

## 🔧 Development Setup

### VSCode Configuration

Add this to your VSCode `settings.json` for optimal development experience:

```json
{
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": ["source.formatDocument", "source.fixAll.eslint"]
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": ["source.formatDocument", "source.fixAll.eslint"]
  },
  "editor.quickSuggestions": {
    "strings": "on"
  },
  "typescript.preferences.importModuleSpecifier": "non-relative"
}
```

### Recommended VSCode Extensions

- TypeScript Importer
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Bracket Pair Colorizer
- Material Icon Theme

## 📝 Usage Examples

### Absolute Imports

```typescript
// Instead of relative imports
import { store } from '../../../app/store/store';

// Use absolute imports
import { store } from '@app/store/store';
import { API_BASE_URL } from '@shared/constants';
import { ExampleComponent } from '@features/example';
```

### Feature Development

```typescript
// features/myFeature/index.ts
export { MyComponent } from './components/MyComponent';
export { useMyFeature } from './hooks/useMyFeature';
export type { MyFeatureData } from './types';

// Usage in other parts of the app
import { MyComponent, useMyFeature, type MyFeatureData } from '@features/myFeature';
```

### Environment Variables

```typescript
// Use Vite-specific environment variables
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const appTitle = import.meta.env.VITE_APP_TITLE;
```

## 🎨 Styling

This project supports multiple styling approaches:

1. **TailwindCSS**: Utility-first CSS framework
2. **Material-UI**: React components with Material Design
3. **Emotion**: CSS-in-JS for styled components

```tsx
// Example component using all three
import { Card, CardContent, Typography } from '@mui/material';
import styled from '@emotion/styled';

const StyledCard = styled(Card)`
  border-radius: 12px;
`;

const MyComponent = () => (
  <StyledCard className="shadow-lg p-4">
    <CardContent>
      <Typography variant="h5">Styled Component</Typography>
    </CardContent>
  </StyledCard>
);
```

## 🧪 Testing

The project uses Jest and Testing Library for comprehensive testing:

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests with coverage
npm run test -- --coverage
```

### Testing Structure

- Unit tests: `src/**/*.test.{ts,tsx}`
- Integration tests: `src/__test__/`
- Test utilities: `src/__test__/utils/`

## 🔍 Code Quality

### ESLint Configuration

- TypeScript-aware linting
- React best practices
- Import/export validation
- Accessibility rules

### Prettier Configuration

- Consistent code formatting
- Automatic formatting on save
- Integration with ESLint

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Environment Variables

Configure these environment variables for deployment:

```env
VITE_API_BASE_URL=https://your-api-url.com/api
VITE_APP_TITLE=Your App Title
VITE_NODE_ENV=production
```

## 📚 Architecture Decisions

### Feature-Based Organization

- Scalable structure for large applications
- Clear separation of concerns
- Easy to locate and maintain code
- Supports team collaboration

### Absolute Imports

- Cleaner import statements
- Easier refactoring
- Consistent import paths
- Better IDE support

### Modern tooling

- Vite for fast development and builds
- TypeScript for type safety
- Material-UI for consistent design
- Redux Toolkit for predictable state management

## 🤝 Contributing

1. Follow the established folder structure
2. Use absolute imports consistently
3. Write tests for new features
4. Follow TypeScript best practices
5. Ensure code passes ESLint and Prettier checks
