import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleComponent from '../../shared/components/SampleComponent';

describe('SampleComponent', () => {
  test('renders sample component with TailwindCSS styling', () => {
    render(<SampleComponent />);
    expect(screen.getByText('Sample Component with TailwindCSS')).toBeInTheDocument();
  });

  test('renders without crashing', () => {
    const { container } = render(<SampleComponent />);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('has correct TailwindCSS classes', () => {
    const { container } = render(<SampleComponent />);
    const componentDiv = container.firstChild;
    expect(componentDiv).toHaveClass('bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
  });

  test('renders description text', () => {
    render(<SampleComponent />);
    expect(screen.getByText(/This component demonstrates TailwindCSS styling/)).toBeInTheDocument();
  });

  test('renders click me button', () => {
    render(<SampleComponent />);
    expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument();
  });
});
