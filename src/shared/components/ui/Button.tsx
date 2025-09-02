import React from 'react';
import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material';
import { cn } from '@shared/utils/tailwind';

interface ButtonProps extends Omit<MUIButtonProps, 'variant' | 'size'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fullWidth?: boolean;
}

/**
 * Button component that combines MUI Button with TailwindCSS styling
 * Following SOLID principles - Single Responsibility for button functionality
 * KISS - Simple interface with clear props
 * DRY - Reusable button variants defined in one place
 */
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  disabled,
  fullWidth,
  ...props
}) => {
  const baseStyles = 'transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-600 focus:ring-primary shadow-sm',
    secondary: 'bg-secondary text-white hover:bg-secondary-600 focus:ring-secondary shadow-sm',
    outline: 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus:ring-primary',
    ghost: 'text-primary bg-transparent hover:bg-primary-50 focus:ring-primary',
    destructive: 'bg-error text-white hover:bg-error-600 focus:ring-error shadow-sm',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-md',
    lg: 'px-6 py-3 text-lg rounded-lg',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';
  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <MUIButton
      {...props}
      disabled={disabled}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabledStyles,
        widthStyles,
        className
      )}
      // Override MUI default styles
      sx={{
        textTransform: 'none',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
        ...props.sx,
      }}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
