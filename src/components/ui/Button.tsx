import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Button = ({ className, variant = 'primary', children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all active:scale-[0.98] shadow-sm',
        variant === 'primary' && 'bg-blue-600 text-white shadow-blue-600/25 hover:bg-blue-700',
        variant === 'secondary' && 'bg-slate-900 text-white hover:bg-blue-600',
        variant === 'outline' && 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};