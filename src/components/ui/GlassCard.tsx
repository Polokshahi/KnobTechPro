import React from 'react';

export const GlassCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`bg-white/85 backdrop-blur-md border border-slate-200 rounded-2xl p-6 shadow-xl ${className || ''}`}>
      {children}
    </div>
  );
};