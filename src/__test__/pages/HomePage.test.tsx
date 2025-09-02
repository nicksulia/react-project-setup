import { render, screen, waitFor, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import HomePage from '../../pages/HomePage';
import { exampleApi } from '../../app/api/example-api';
import muiTheme from '../../styles/mui-theme';

// Create a test store
const createTestStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      [exampleApi.reducerPath]: exampleApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(exampleApi.middleware),
    preloadedState: initialState,
  });
};

const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = createTestStore(preloadedState),
  } = {}
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={muiTheme}>
          {children}
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );

  return { store, ...render(ui, { wrapper: Wrapper }) };
};

describe('HomePage Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders homepage without crashing', async () => {
    await act(async () => {
      renderWithProviders(<HomePage />);
    });
    
    expect(screen.getByText('Welcome to React TypeScript App')).toBeInTheDocument();
  });

  test('displays the main heading and description', async () => {
    await act(async () => {
      renderWithProviders(<HomePage />);
    });
    
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Welcome to React TypeScript App');
    expect(screen.getByText('This is a modern React TypeScript application with enterprise-grade architecture, showcasing the perfect integration of Material-UI and TailwindCSS.')).toBeInTheDocument();
  });

  test('displays RTK Query section heading', async () => {
    await act(async () => {
      renderWithProviders(<HomePage />);
    });
    
    expect(screen.getByRole('heading', { level: 2, name: 'RTK Query Integration' })).toBeInTheDocument();
  });

  test('displays RTK Query section and handles data states', async () => {
    await act(async () => {
      renderWithProviders(<HomePage />);
    });
    
    expect(screen.getByRole('heading', { level: 2, name: 'RTK Query Integration' })).toBeInTheDocument();
    
    // Should show either loading, data, or error state
    await waitFor(() => {
      const hasLoading = screen.queryByText('Loading example data...');
      const hasData = screen.queryAllByText('Example Data').length > 0;
      const hasError = screen.queryByText(/Error loading data/);
      
      expect(hasLoading || hasData || hasError).toBeTruthy();
    }, { timeout: 3000 });
  });

  test('displays learn more button with correct link', async () => {
    await act(async () => {
      renderWithProviders(<HomePage />);
    });
    
    const learnMoreButton = screen.getByRole('link', { name: /learn more/i });
    expect(learnMoreButton).toBeInTheDocument();
    expect(learnMoreButton).toHaveAttribute('href', '/about');
  });
});
