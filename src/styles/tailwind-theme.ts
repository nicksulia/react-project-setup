// Custom Tailwind theme extensions and utilities
export const tailwindTheme = {
  extend: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    spacing: {
      '18': '4.5rem',
      '88': '22rem',
    },
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in-out',
      'slide-up': 'slideUp 0.3s ease-out',
    },
  },
  colors: {
    // Custom color palette matching Material-UI theme
    primary: {
      50: '#e3f2fd',
      100: '#bbdefb',
      500: '#1976d2',
      600: '#1565c0',
      700: '#0d47a1',
      900: '#0d47a1',
      DEFAULT: '#1976d2',
    },
    secondary: {
      50: '#fce4ec',
      100: '#f8bbd9',
      500: '#dc004e',
      600: '#c2185b',
      700: '#ad1457',
      900: '#880e4f',
      DEFAULT: '#dc004e',
    },
    error: {
      50: '#ffebee',
      100: '#ffcdd2',
      500: '#f44336',
      600: '#e53935',
      700: '#d32f2f',
      900: '#b71c1c',
      DEFAULT: '#f44336',
    },
    warning: {
      50: '#fff3e0',
      100: '#ffe0b2',
      500: '#ff9800',
      600: '#fb8c00',
      700: '#f57c00',
      900: '#e65100',
      DEFAULT: '#ff9800',
    },
    info: {
      50: '#e3f2fd',
      100: '#bbdefb',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#1976d2',
      900: '#0d47a1',
      DEFAULT: '#2196f3',
    },
    success: {
      50: '#e8f5e8',
      100: '#c8e6c9',
      500: '#4caf50',
      600: '#43a047',
      700: '#388e3c',
      900: '#1b5e20',
      DEFAULT: '#4caf50',
    },
  },
};

// Utility classes for common patterns
export const tailwindUtilities = {
  card: 'bg-white rounded-lg shadow-md p-6 border border-gray-200',
  button: {
    primary: 'bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors duration-200 font-semibold',
    secondary: 'bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-600 transition-colors duration-200 font-semibold',
    outline: 'border-2 border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition-colors duration-200 font-semibold',
  },
  input: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
};
