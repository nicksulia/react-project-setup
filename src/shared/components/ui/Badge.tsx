import React from 'react';
import { Chip as MUIChip, ChipProps as MUIChipProps } from '@mui/material';
import { cn } from '@shared/utils/tailwind';

interface BadgeProps extends Omit<MUIChipProps, 'variant' | 'color' | 'size'> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Badge component that combines MUI Chip with TailwindCSS styling
 * Following SOLID principles - Single Responsibility for badge/chip display
 * KISS - Simple color variants and sizes
 * DRY - Centralized badge styling and color system
 */
const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  className,
  ...props
}) => {
  const baseStyles = 'font-medium transition-colors duration-200';
  
  const variantStyles = {
    default: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    primary: 'bg-primary-100 text-primary-800 hover:bg-primary-200',
    secondary: 'bg-secondary-100 text-secondary-800 hover:bg-secondary-200',
    success: 'bg-success-100 text-success-800 hover:bg-success-200',
    warning: 'bg-warning-100 text-warning-800 hover:bg-warning-200',
    error: 'bg-error-100 text-error-800 hover:bg-error-200',
    info: 'bg-info-100 text-info-800 hover:bg-info-200',
  };

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-base',
  };

  return (
    <MUIChip
      {...props}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      sx={{
        borderRadius: '9999px', // Full rounded
        height: 'auto',
        '& .MuiChip-label': {
          padding: 0,
        },
        ...props.sx,
      }}
    />
  );
};

export default Badge;
