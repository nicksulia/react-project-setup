import React from 'react';
import { Alert as MUIAlert, AlertProps as MUIAlertProps } from '@mui/material';
import { cn } from '@shared/utils/tailwind';

interface AlertProps extends Omit<MUIAlertProps, 'severity' | 'variant'> {
  variant?: 'success' | 'warning' | 'error' | 'info';
  className?: string;
}

/**
 * Alert component that combines MUI Alert with TailwindCSS styling
 * Following SOLID principles - Single Responsibility for alert/notification display
 * KISS - Simple variant system for different alert types
 * DRY - Centralized alert styling with consistent color system
 */
const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'rounded-lg border transition-colors duration-200';
  
  const variantStyles = {
    success: 'bg-success-50 border-success-200 text-success-800',
    warning: 'bg-warning-50 border-warning-200 text-warning-800',
    error: 'bg-error-50 border-error-200 text-error-800',
    info: 'bg-info-50 border-info-200 text-info-800',
  };

  return (
    <MUIAlert
      {...props}
      severity={variant}
      className={cn(
        baseStyles,
        variantStyles[variant],
        className
      )}
      sx={{
        '& .MuiAlert-icon': {
          color: 'inherit',
        },
        '& .MuiAlert-message': {
          padding: 0,
        },
        ...props.sx,
      }}
    >
      {children}
    </MUIAlert>
  );
};

export default Alert;
