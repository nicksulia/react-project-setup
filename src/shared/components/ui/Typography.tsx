import React from 'react';
import { Typography as MUITypography, TypographyProps as MUITypographyProps } from '@mui/material';
import { cn } from '@shared/utils/tailwind';

interface TypographyProps extends Omit<MUITypographyProps, 'variant'> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'overline' | 'lead' | 'muted';
  className?: string;
}

/**
 * Typography component that combines MUI Typography with TailwindCSS styling
 * Following SOLID principles - Single Responsibility for text display
 * KISS - Simple variant system aligned with design system
 * DRY - Centralized typography styles and spacing
 */
const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  className,
  children,
  ...props
}) => {
  const variantStyles = {
    h1: 'text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl',
    h2: 'text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl',
    h3: 'text-2xl font-semibold tracking-tight text-gray-900',
    h4: 'text-xl font-semibold text-gray-900',
    h5: 'text-lg font-semibold text-gray-900',
    h6: 'text-base font-semibold text-gray-900',
    body1: 'text-base text-gray-700 leading-relaxed',
    body2: 'text-sm text-gray-600 leading-relaxed',
    caption: 'text-xs text-gray-500',
    overline: 'text-xs font-medium uppercase tracking-wide text-gray-500',
    lead: 'text-lg text-gray-600 leading-relaxed',
    muted: 'text-sm text-gray-500',
  };

  // Map custom variants to MUI variants
  const muiVariantMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body1: 'body1',
    body2: 'body2',
    caption: 'caption',
    overline: 'overline',
    lead: 'body1',
    muted: 'body2',
  } as const;

  return (
    <MUITypography
      {...props}
      variant={muiVariantMap[variant] as MUITypographyProps['variant']}
      className={cn(variantStyles[variant], className)}
    >
      {children}
    </MUITypography>
  );
};

export default Typography;
