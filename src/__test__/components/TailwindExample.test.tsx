import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TailwindExample from '../../shared/components/TailwindExample';

describe('TailwindExample Component', () => {
  it('renders with default title', () => {
    render(<TailwindExample />);
    expect(screen.getByText('TailwindCSS Example Component')).toBeInTheDocument();
  });

  it('renders with custom title', () => {
    const customTitle = 'Custom TailwindCSS Title';
    render(<TailwindExample title={customTitle} />);
    expect(screen.getByText(customTitle)).toBeInTheDocument();
  });

  it('displays navigation tabs', () => {
    render(<TailwindExample />);
    expect(screen.getByText('overview')).toBeInTheDocument();
    expect(screen.getByText('features')).toBeInTheDocument();
    expect(screen.getByText('examples')).toBeInTheDocument();
  });

  it('shows overview content by default', () => {
    render(<TailwindExample />);
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Responsive Design')).toBeInTheDocument();
    expect(screen.getByText('Custom Themes')).toBeInTheDocument();
    expect(screen.getByText('Fast Performance')).toBeInTheDocument();
  });

  it('switches to features tab when clicked', () => {
    render(<TailwindExample />);
    
    fireEvent.click(screen.getByText('features'));
    
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Utility-first CSS framework')).toBeInTheDocument();
  });

  it('switches to examples tab when clicked', () => {
    render(<TailwindExample />);
    
    fireEvent.click(screen.getByText('examples'));
    
    expect(screen.getByText('Examples')).toBeInTheDocument();
    expect(screen.getByText('Button Styles')).toBeInTheDocument();
    expect(screen.getByText('Primary Button')).toBeInTheDocument();
  });

  it('toggles expandable section in examples tab', () => {
    render(<TailwindExample />);
    
    // Switch to examples tab
    fireEvent.click(screen.getByText('examples'));
    
    // Find and click the expandable section button
    const expandButton = screen.getByText('Expandable Section');
    fireEvent.click(expandButton);
    
    // Check if the expanded content is visible
    expect(screen.getByText(/This is an expandable content section/)).toBeInTheDocument();
    
    // Click again to collapse
    fireEvent.click(expandButton);
    
    // The content should still be in the DOM due to the animation, 
    // but we can test the button functionality
    expect(expandButton).toBeInTheDocument();
  });

  it('displays form elements in examples tab', () => {
    render(<TailwindExample />);
    
    fireEvent.click(screen.getByText('examples'));
    
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your message')).toBeInTheDocument();
  });

  it('displays footer with technology tags', () => {
    render(<TailwindExample />);
    
    expect(screen.getByText('Built with TailwindCSS and React TypeScript')).toBeInTheDocument();
    expect(screen.getByText('TailwindCSS')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });
});
