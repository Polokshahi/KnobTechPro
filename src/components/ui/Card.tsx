import React from 'react';
import { cn } from '@/lib/utils';

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn('bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm', className)}>
      {children}
    </div>
  );
};