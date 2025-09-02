import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import '@testing-library/jest-dom';
import { ExampleComponent } from '../../features/example/components/ExampleComponent';
import muiTheme from '../../styles/mui-theme';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider theme={muiTheme}>
      {ui}
    </ThemeProvider>
  );
};

describe('ExampleComponent', () => {
  test('renders without crashing', () => {
    renderWithTheme(<ExampleComponent />);
    expect(screen.getByText('Example Feature Component')).toBeInTheDocument();
  });

  test('displays the fetch button', () => {
    renderWithTheme(<ExampleComponent />);
    expect(screen.getByRole('button', { name: 'Fetch Example Data' })).toBeInTheDocument();
  });

  test('button click triggers data fetch', () => {
    renderWithTheme(<ExampleComponent />);
    
    const fetchButton = screen.getByRole('button', { name: 'Fetch Example Data' });
    fireEvent.click(fetchButton);
    
    // After click, data should be displayed
    expect(screen.getByText('ID:')).toBeInTheDocument();
    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.getByText('Example 1')).toBeInTheDocument();
  });

  test('displays data after fetch', () => {
    renderWithTheme(<ExampleComponent id="test-123" />);
    
    const fetchButton = screen.getByRole('button', { name: 'Fetch Example Data' });
    fireEvent.click(fetchButton);
    
    expect(screen.getByText('test-123')).toBeInTheDocument();
    expect(screen.getByText('Example test-123')).toBeInTheDocument();
    expect(screen.getByText('This is an example item')).toBeInTheDocument();
  });

  test('uses default id when none provided', () => {
    renderWithTheme(<ExampleComponent />);
    
    const fetchButton = screen.getByRole('button', { name: 'Fetch Example Data' });
    fireEvent.click(fetchButton);
    
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Example 1')).toBeInTheDocument();
  });

  test('accepts custom id prop', () => {
    renderWithTheme(<ExampleComponent id="custom-id" />);
    
    const fetchButton = screen.getByRole('button', { name: 'Fetch Example Data' });
    fireEvent.click(fetchButton);
    
    expect(screen.getByText('custom-id')).toBeInTheDocument();
    expect(screen.getByText('Example custom-id')).toBeInTheDocument();
  });
});
