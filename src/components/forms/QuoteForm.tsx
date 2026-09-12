'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, CheckCircle2 } from 'lucide-react';

const quoteSchema = z.object({
  fullName: z.string().min(2, { message: 'Name is required' }),
  email: z.string().email({ message: 'Valid email is required' }),
  service: z.string({ message: 'Select service' }),
  scope: z.string({ message: 'Select scope' })
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

export const QuoteForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema)
  });

  const onSubmit = async (data: QuoteFormValues) => {
    await new Promise((res) => setTimeout(res, 1000));
    console.log(data);
    setSubmitted(true);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm max-w-xl mx-auto">
      {submitted ? (
        <div className="text-center py-8">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-900">Quote Request Sent!</h3>
          <p className="text-sm text-slate-600 mt-2">We will review your scope and send a customized proposal shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Request Custom Quote</h3>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name</label>
            <input type="text" {...register('fullName')} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600" />
            {errors.fullName && <span className="text-xs text-rose-500 mt-1 block">{errors.fullName.message}</span>}
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Work Email</label>
            <input type="email" {...register('email')} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600" />
            {errors.email && <span className="text-xs text-rose-500 mt-1 block">{errors.email.message}</span>}
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Service Needed</label>
            <select {...register('service')} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600">
              <option value="">Select...</option>
              <option value="Lead Generation">Lead Generation</option>
              <option value="Cold Email Outreach">Cold Email Outreach</option>
              <option value="Full-Stack Dev">Full-Stack Development</option>
            </select>
            {errors.service && <span className="text-xs text-rose-500 mt-1 block">{errors.service.message}</span>}
          </div>
          <button type="submit" disabled={isSubmitting} className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-all">
            {isSubmitting ? 'Sending...' : 'Get Custom Proposal'}
          </button>
        </form>
      )}
    </div>
  );
};