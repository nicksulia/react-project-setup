import { render, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import AboutPage from '../../pages/AboutPage';
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
      <BrowserRouter>
        <ThemeProvider theme={muiTheme}>
          {children}
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );

  return { store, ...render(ui, { wrapper: Wrapper }) };
};

describe('AboutPage Component', () => {
  test('renders about page without crashing', async () => {
    await act(async () => {
      renderWithProviders(<AboutPage />);
    });
    
    expect(screen.getByText('About This Project')).toBeInTheDocument();
  });

  test('displays the main heading', async () => {
    await act(async () => {
      renderWithProviders(<AboutPage />);
    });
    
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('About This Project');
  });

  test('displays technology list', async () => {
    await act(async () => {
      renderWithProviders(<AboutPage />);
    });
    
    expect(screen.getByText('React 18.3.1 with TypeScript 5.5.4')).toBeInTheDocument();
    expect(screen.getByText('Redux Toolkit for state management')).toBeInTheDocument();
    expect(screen.getByText('RTK Query for data fetching')).toBeInTheDocument();
    expect(screen.getByText('Material-UI components')).toBeInTheDocument();
    expect(screen.getByText('TailwindCSS for styling')).toBeInTheDocument();
    expect(screen.getByText('Vite for fast development')).toBeInTheDocument();
    expect(screen.getByText('Jest and React Testing Library')).toBeInTheDocument();
  });

  test('displays RTK Query Demo section', async () => {
    await act(async () => {
      renderWithProviders(<AboutPage />);
    });
    
    expect(screen.getByRole('heading', { name: 'RTK Query Demonstration' })).toBeInTheDocument();
  });

  test('displays back to home button with correct link', async () => {
    await act(async () => {
      renderWithProviders(<AboutPage />);
    });
    
    const backButton = screen.getByRole('link', { name: /back to home/i });
    expect(backButton).toBeInTheDocument();
    expect(backButton).toHaveAttribute('href', '/');
  });

  test('renders ExampleDataDisplay component', async () => {
    await act(async () => {
      renderWithProviders(<AboutPage />);
    });
    
    // The ExampleDataDisplay component should be rendered
    expect(screen.getByText('RTK Query Example')).toBeInTheDocument();
  });
});
