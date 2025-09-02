import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock the pages to test routing without complexity
const MockHomePage = () => <div data-testid="home-page">Home Page Mock</div>;

// Mock the pages
jest.mock('../../pages/HomePage', () => () => <MockHomePage />);
jest.mock('../../pages/AboutPage', () => () => <div data-testid="about-page">About Page Mock</div>);

// Mock the RTK Query API to avoid real API calls
jest.mock('../../app/api/example-api', () => ({
  useGetExampleDataQuery: () => ({
    data: {
      id: 1,
      title: 'Mock Example',
      description: 'Mock description',
      items: [],
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

// Import App after mocking
import App from '../../App';

const renderApp = () => {
  // App component includes all providers, so we can render it directly
  return render(<App />);
};

describe('App Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders app with home page by default', async () => {
    await act(async () => {
      renderApp();
    });
    
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  test('app structure includes all providers', async () => {
    await act(async () => {
      renderApp();
    });
    
    // Check that the app renders without throwing errors
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  test('app renders without crashing', async () => {
    await act(async () => {
      renderApp();
    });
    
    // Check for home page content to verify app rendered
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
});
