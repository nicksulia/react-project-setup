// TailwindCSS utility functions and patterns

/**
 * Conditional class name utility - similar to clsx but simpler
 */
export const cn = (...classes: (string | undefined | null | boolean)[]): string => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Common component variants using TailwindCSS
 */
export const componentVariants = {
  button: {
    base: 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    variants: {
      primary: 'bg-primary text-white hover:bg-primary-600 focus-visible:ring-primary',
      secondary: 'bg-secondary text-white hover:bg-secondary-600 focus-visible:ring-secondary',
      outline: 'border border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary',
      ghost: 'text-primary hover:bg-primary-50 focus-visible:ring-primary',
      destructive: 'bg-error text-white hover:bg-error-600 focus-visible:ring-error',
    },
    sizes: {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4',
      lg: 'h-12 px-6 text-lg',
    },
  },
  card: {
    base: 'rounded-lg border bg-white shadow-sm',
    variants: {
      default: 'border-gray-200',
      elevated: 'border-gray-200 shadow-md',
      outlined: 'border-gray-300',
    },
    padding: {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    },
  },
  input: {
    base: 'flex w-full rounded-md border bg-white px-3 py-2 text-sm transition-colors placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    variants: {
      default: 'border-gray-300 focus-visible:ring-primary',
      error: 'border-error focus-visible:ring-error',
      success: 'border-success focus-visible:ring-success',
    },
    sizes: {
      sm: 'h-8 text-xs',
      md: 'h-10 text-sm',
      lg: 'h-12 text-base',
    },
  },
  badge: {
    base: 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
    variants: {
      default: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
      primary: 'bg-primary-100 text-primary-800 hover:bg-primary-200',
      secondary: 'bg-secondary-100 text-secondary-800 hover:bg-secondary-200',
      success: 'bg-success-100 text-success-800 hover:bg-success-200',
      warning: 'bg-warning-100 text-warning-800 hover:bg-warning-200',
      error: 'bg-error-100 text-error-800 hover:bg-error-200',
      info: 'bg-info-100 text-info-800 hover:bg-info-200',
    },
  },
};

/**
 * Responsive breakpoint utilities
 */
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

/**
 * Animation and transition utilities
 */
export const animations = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  spin: 'animate-spin',
  pulse: 'animate-pulse',
  bounce: 'animate-bounce',
};

/**
 * Common layout patterns
 */
export const layouts = {
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  containerSm: 'max-w-3xl mx-auto px-4 sm:px-6 lg:px-8',
  containerXs: 'max-w-xl mx-auto px-4 sm:px-6 lg:px-8',
  flexCenter: 'flex items-center justify-center',
  flexBetween: 'flex items-center justify-between',
  gridResponsive: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6',
  stack: 'flex flex-col space-y-4',
  stackSm: 'flex flex-col space-y-2',
  stackLg: 'flex flex-col space-y-6',
};

/**
 * Color palette helpers
 */
export const colorPalette = {
  primary: {
    50: '#e3f2fd',
    100: '#bbdefb',
    500: '#1976d2',
    600: '#1565c0',
    700: '#0d47a1',
    900: '#0d47a1',
  },
  secondary: {
    50: '#fce4ec',
    100: '#f8bbd9',
    500: '#dc004e',
    600: '#c2185b',
    700: '#ad1457',
    900: '#880e4f',
  },
  success: {
    50: '#e8f5e8',
    100: '#c8e6c9',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    900: '#1b5e20',
  },
  warning: {
    50: '#fff3e0',
    100: '#ffe0b2',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    900: '#e65100',
  },
  error: {
    50: '#ffebee',
    100: '#ffcdd2',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    900: '#b71c1c',
  },
  info: {
    50: '#e3f2fd',
    100: '#bbdefb',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    900: '#0d47a1',
  },
};

/**
 * Shadow utilities
 */
export const shadows = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
  none: 'shadow-none',
};

/**
 * Typography utilities
 */
export const typography = {
  h1: 'text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl',
  h2: 'text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl',
  h3: 'text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl',
  h4: 'text-xl font-bold tracking-tight text-gray-900 sm:text-2xl',
  h5: 'text-lg font-bold tracking-tight text-gray-900 sm:text-xl',
  h6: 'text-base font-bold tracking-tight text-gray-900 sm:text-lg',
  body: 'text-base text-gray-700',
  bodySm: 'text-sm text-gray-600',
  caption: 'text-xs text-gray-500',
  lead: 'text-lg text-gray-600',
};
