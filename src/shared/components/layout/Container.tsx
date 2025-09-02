import React from 'react';
import { Container as MUIContainer, ContainerProps } from '@mui/material';
import { cn } from '@shared/utils/tailwind';

interface LayoutContainerProps extends Omit<ContainerProps, 'maxWidth'> {
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * Container component that combines MUI Container with TailwindCSS responsive design
 * Following SOLID principles - Single Responsibility for layout containment
 * KISS - Simple responsive breakpoints and padding options
 * DRY - Centralized container logic with consistent spacing
 */
const Container: React.FC<LayoutContainerProps> = ({
  maxWidth = 'lg',
  className,
  padding = 'md',
  children,
  ...props
}) => {
  const maxWidthStyles = {
    xs: 'max-w-xs',
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  const paddingStyles = {
    none: '',
    sm: 'px-4 py-2',
    md: 'px-6 py-4',
    lg: 'px-8 py-6',
  };

  return (
    <MUIContainer
      {...props}
      maxWidth={false} // Disable MUI maxWidth to use Tailwind
      className={cn(
        'mx-auto',
        maxWidthStyles[maxWidth],
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </MUIContainer>
  );
};

export default Container;
