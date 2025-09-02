import React from 'react';
import { Card as MUICard, CardContent, CardActions, CardProps as MUICardProps } from '@mui/material';
import { cn } from '@shared/utils/tailwind';

interface CardProps extends Omit<MUICardProps, 'variant'> {
  variant?: 'default' | 'elevated' | 'outlined' | 'flat';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

/**
 * Card component that combines MUI Card with TailwindCSS styling
 * Following SOLID principles - Single Responsibility for card layout
 * KISS - Simple variants and clear structure
 * DRY - Centralized card styling logic
 */
const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  className,
  children,
  actions,
  ...props
}) => {
  const baseStyles = 'bg-white rounded-lg transition-shadow duration-200';
  
  const variantStyles = {
    default: 'border border-gray-200 shadow-sm hover:shadow-md',
    elevated: 'shadow-md hover:shadow-lg border-0',
    outlined: 'border-2 border-gray-300 shadow-none hover:shadow-sm',
    flat: 'border-0 shadow-none',
  };

  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <MUICard
      {...props}
      className={cn(
        baseStyles,
        variantStyles[variant],
        className
      )}
      sx={{
        boxShadow: 'none', // Use TailwindCSS shadows instead
        ...props.sx,
      }}
    >
      <CardContent className={cn(paddingStyles[padding], 'last:pb-4')}>
        {children}
      </CardContent>
      {actions && (
        <CardActions className="px-6 pb-6 pt-0">
          {actions}
        </CardActions>
      )}
    </MUICard>
  );
};

export default Card;
