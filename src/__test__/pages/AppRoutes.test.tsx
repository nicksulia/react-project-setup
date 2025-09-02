import { render, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from '../../pages/index';
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

const renderWithProviders = (
  ui: React.ReactElement,
  { initialEntries = ['/'] } = {}
) => {
  const store = createTestStore();
  
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <MemoryRouter initialEntries={initialEntries}>
          {children}
        </MemoryRouter>
      </ThemeProvider>
    </Provider>
  );

  return { store, ...render(ui, { wrapper: Wrapper }) };
};

// Mock the pages to avoid complex rendering during route testing
jest.mock('../../pages/HomePage', () => {
  return function MockHomePage() {
    return <div>Home Page Component</div>;
  };
});

jest.mock('../../pages/AboutPage', () => {
  return function MockAboutPage() {
    return <div>About Page Component</div>;
  };
});

describe('AppRoutes', () => {
  test('renders home page at root path', async () => {
    await act(async () => {
      renderWithProviders(<AppRoutes />, { initialEntries: ['/'] });
    });
    
    expect(screen.getByText('Home Page Component')).toBeInTheDocument();
  });

  test('renders about page at /about path', async () => {
    await act(async () => {
      renderWithProviders(<AppRoutes />, { initialEntries: ['/about'] });
    });
    
    expect(screen.getByText('About Page Component')).toBeInTheDocument();
  });

  test('renders without crashing', async () => {
    await act(async () => {
      renderWithProviders(<AppRoutes />);
    });
    
    expect(screen.getByText('Home Page Component')).toBeInTheDocument();
  });
});
