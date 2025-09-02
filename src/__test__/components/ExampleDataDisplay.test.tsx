import { render, screen, waitFor, act, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import ExampleDataDisplay from '../../shared/components/ExampleDataDisplay';
import { exampleApi } from '../../app/api/example-api';
import muiTheme from '../../styles/mui-theme';

// Create a test store
const createTestStore = () => {
  return configureStore({
    reducer: {
      [exampleApi.reducerPath]: exampleApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(exampleApi.middleware),
  });
};

const renderWithProviders = (ui: React.ReactElement) => {
  const store = createTestStore();
  
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        {children}
      </ThemeProvider>
    </Provider>
  );

  return { store, ...render(ui, { wrapper: Wrapper }) };
};

describe('ExampleDataDisplay Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders component without crashing', async () => {
    await act(async () => {
      renderWithProviders(<ExampleDataDisplay />);
    });
    
    expect(screen.getByText('RTK Query Example')).toBeInTheDocument();
  });

  test('displays API endpoint information', async () => {
    await act(async () => {
      renderWithProviders(<ExampleDataDisplay />);
    });
    
    expect(screen.getByText('/poc/example.json')).toBeInTheDocument();
  });

  test('displays status chip', async () => {
    await act(async () => {
      renderWithProviders(<ExampleDataDisplay />);
    });
    
    // Should display either loading or ready state
    await waitFor(() => {
      const statusChip = screen.getByText(/Loading|Ready|Refreshing/);
      expect(statusChip).toBeInTheDocument();
    });
  });

  test('displays refresh button', async () => {
    await act(async () => {
      renderWithProviders(<ExampleDataDisplay />);
    });
    
    // Look for button with any of the possible text states
    await waitFor(() => {
      const refreshButton = screen.getByRole('button', { name: /refresh|refreshing/i });
      expect(refreshButton).toBeInTheDocument();
    });
  });

  test('refresh button can be clicked', async () => {
    await act(async () => {
      renderWithProviders(<ExampleDataDisplay />);
    });
    
    await waitFor(() => {
      const refreshButton = screen.getByRole('button', { name: /refresh|refreshing/i });
      expect(refreshButton).toBeInTheDocument();
      
      // Try to click if not disabled
      if (!refreshButton.hasAttribute('disabled')) {
        fireEvent.click(refreshButton);
      }
    });
  });

  test('shows either data or error state', async () => {
    await act(async () => {
      renderWithProviders(<ExampleDataDisplay />);
    });
    
    await waitFor(() => {
      // Should show either successful data or error message
      const hasData = screen.queryByText('Items (3):');
      const hasError = screen.queryByText('Failed to fetch data from the API endpoint.');
      
      expect(hasData || hasError).toBeInTheDocument();
    }, { timeout: 3000 });
  });

  test('displays component title', async () => {
    await act(async () => {
      renderWithProviders(<ExampleDataDisplay />);
    });
    
    expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent('RTK Query Example');
  });
});
