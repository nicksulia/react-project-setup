import React from 'react';
import { CircularProgress as MUICircularProgress, CircularProgressProps } from '@mui/material';
import { cn } from '@shared/utils/tailwind';

interface LoadingProps extends Omit<CircularProgressProps, 'size' | 'variant'> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'white';
  muiVariant?: CircularProgressProps['variant'];
  className?: string;
  fullScreen?: boolean;
  text?: string;
}

/**
 * Loading component that combines MUI CircularProgress with TailwindCSS styling
 * Following SOLID principles - Single Responsibility for loading states
 * KISS - Simple size and color variants
 * DRY - Centralized loading spinner styling
 */
const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  variant = 'primary',
  muiVariant = 'indeterminate',
  className,
  fullScreen = false,
  text,
  ...props
}) => {
  const sizeMap = {
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
  };

  const colorStyles = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    white: 'text-white',
  };

  const spinner = (
    <div className={cn('flex flex-col items-center gap-2', className)}>
      <MUICircularProgress
        {...props}
        variant={muiVariant}
        size={sizeMap[size]}
        className={cn(colorStyles[variant])}
        sx={{
          color: 'currentColor',
          ...props.sx,
        }}
      />
      {text && (
        <span className={cn(
          'text-sm font-medium',
          variant === 'white' ? 'text-white' : 'text-gray-600'
        )}>
          {text}
        </span>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default Loading;
