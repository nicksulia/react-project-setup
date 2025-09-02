import React from 'react';
import { TextField as MUITextField, TextFieldProps as MUITextFieldProps } from '@mui/material';
import { cn } from '@shared/utils/tailwind';

interface InputProps extends Omit<MUITextFieldProps, 'variant' | 'size'> {
  variant?: 'default' | 'error' | 'success';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  helperTextClassName?: string;
}

/**
 * Input component that combines MUI TextField with TailwindCSS styling
 * Following SOLID principles - Single Responsibility for input functionality
 * KISS - Simple interface with essential variants
 * DRY - Reusable input styling and state handling
 */
const Input: React.FC<InputProps> = ({
  variant = 'default',
  size = 'md',
  className,
  helperTextClassName,
  error,
  ...props
}) => {
  const baseStyles = 'w-full';
  
  const variantStyles = {
    default: 'border-gray-300 focus:border-primary focus:ring-primary',
    error: 'border-error focus:border-error focus:ring-error',
    success: 'border-success focus:border-success focus:ring-success',
  };

  const sizeStyles = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  // Determine the effective variant based on error state
  const effectiveVariant = error ? 'error' : variant;

  return (
    <MUITextField
      {...props}
      error={error}
      className={cn(baseStyles, className)}
      InputProps={{
        className: cn(
          'rounded-md transition-colors duration-200',
          variantStyles[effectiveVariant],
          sizeStyles[size]
        ),
        ...props.InputProps,
      }}
      FormHelperTextProps={{
        className: cn(
          'text-sm mt-1',
          error ? 'text-error' : 'text-gray-600',
          helperTextClassName
        ),
        ...props.FormHelperTextProps,
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'rgb(209 213 219)', // gray-300
          },
          '&:hover fieldset': {
            borderColor: 'rgb(156 163 175)', // gray-400
          },
          '&.Mui-focused fieldset': {
            borderWidth: '2px',
            borderColor: effectiveVariant === 'error' 
              ? 'rgb(239 68 68)' // error red
              : effectiveVariant === 'success'
              ? 'rgb(34 197 94)' // success green
              : 'rgb(25 118 210)', // primary blue
          },
          '&.Mui-error fieldset': {
            borderColor: 'rgb(239 68 68)', // error red
          },
        },
        ...props.sx,
      }}
    />
  );
};

export default Input;
