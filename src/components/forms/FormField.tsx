import React from 'react';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormField = ({ label, error, ...props }: FormFieldProps) => {
  return (
    <div className="space-y-1">
      <label className="block text-xs font-bold text-slate-700 uppercase">{label}</label>
      <input className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-600" {...props} />
      {error && <span className="text-xs text-rose-500 block">{error}</span>}
    </div>
  );
};