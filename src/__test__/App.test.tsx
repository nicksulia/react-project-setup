import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/mui-theme';
import { AppRoutes } from '../pages';
import ErrorBoundary from '../shared/components/ErrorBoundary';

// Mock the RTK Query hook to provide clean test data
jest.mock('../app/api/example-api', () => ({
  useGetExampleDataQuery: () => ({
    data: {
      id: 1,
      title: 'Mock Example',
      description: 'Mock description',
      items: [
        { id: 1, name: 'Item 1', value: 'Value 1' },
        { id: 2, name: 'Item 2', value: 'Value 2' }
      ],
      metadata: {
        createdAt: '2023-01-01',
        version: '1.0.0'
      }
    },
    error: null,
    isLoading: false,
  }),
  exampleApi: {
    middleware: () => (next: any) => (action: any) => next(action),
    reducer: (state = {}) => state,
    reducerPath: 'exampleApi',
  },
}));

// Create a mock store for testing
const createMockStore = () => {
  return configureStore({
    reducer: {
      feature: (state = {}) => state,
      exampleApi: (state = {}) => state,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware(),
  });
};

// Test component with all necessary providers
const TestApp: React.FC = () => {
  const store = createMockStore();
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
};

describe('App Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', async () => {
    await act(async () => {
      render(<TestApp />);
    });
    
    await waitFor(() => {
      expect(screen.getByText('Welcome to React TypeScript App')).toBeInTheDocument();
    });
  });

  test('displays the main heading', async () => {
    await act(async () => {
      render(<TestApp />);
    });
    
    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
      expect(screen.getByText('Welcome to React TypeScript App')).toBeInTheDocument();
    });
  });

  test('renders RTK Query section', async () => {
    await act(async () => {
      render(<TestApp />);
    });
    
    await waitFor(() => {
      expect(screen.getByText('RTK Query Example')).toBeInTheDocument();
    });
  });

  test('renders learn more button', async () => {
    await act(async () => {
      render(<TestApp />);
    });
    
    await waitFor(() => {
      const learnMoreButton = screen.getByRole('link', { name: /learn more/i });
      expect(learnMoreButton).toBeInTheDocument();
      expect(learnMoreButton).toHaveAttribute('href', '/about');
    });
  });
});
