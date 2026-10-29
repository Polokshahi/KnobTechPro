import React from 'react';

export const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase shadow-sm">
      <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
      {children}
    </div>
  );
};