'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormValues } from '@/lib/validations';
import { Mail, Linkedin, Globe, Send, CheckCircle2 } from 'lucide-react';

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((res) => setTimeout(res, 1000));
    console.log(data);
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">Let&apos;s talk about your project.</h2>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">Fill out the form and our growth leadership team will review your requirements within 24 hours.</p>

        <div className="space-y-6">

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center"><Mail className="w-5 h-5" /></div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase">Direct Email</div>
              <div className="text-sm font-bold text-slate-900">contact@knobtechpro.com</div>
            </div>
          </div>
        </div>



        





      </div>

      <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm">
        {submitted ? (
          <div className="py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6"><CheckCircle2 className="w-10 h-10" /></div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Received!</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto">Thank you for reaching out. We will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Full Name *</label>
                <input type="text" {...register('fullName')} placeholder="John Smith" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-blue-600" />
                {errors.fullName && <span className="text-xs text-rose-500 mt-1 block">{errors.fullName.message}</span>}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Work Email *</label>
                <input type="email" {...register('workEmail')} placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-blue-600" />
                {errors.workEmail && <span className="text-xs text-rose-500 mt-1 block">{errors.workEmail.message}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Company *</label>
                <input type="text" {...register('company')} placeholder="Acme Corp" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-blue-600" />
                {errors.company && <span className="text-xs text-rose-500 mt-1 block">{errors.company.message}</span>}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Website</label>
                <input type="text" {...register('website')} placeholder="https://company.com" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-blue-600" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Service Needed *</label>
                <select {...register('serviceNeeded')} className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-blue-600">
                  <option value="">Select a service...</option>
                  <option value="B2B Lead Generation">B2B Lead Generation</option>
                  <option value="Cold Email Outreach">Cold Email Outreach</option>
                  <option value="Full-Stack Development">Full-Stack Development</option>
                </select>
                {errors.serviceNeeded && <span className="text-xs text-rose-500 mt-1 block">{errors.serviceNeeded.message}</span>}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Monthly Budget *</label>
                <select {...register('budget')} className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-blue-600">
                  <option value="">Select scope...</option>
                  <option value="1k - 5k Leads">1k - 5k Leads / Custom Project</option>
                  <option value="5k - 15k Leads">5k - 15k Leads / Full Outbound</option>
                </select>
                {errors.budget && <span className="text-xs text-rose-500 mt-1 block">{errors.budget.message}</span>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Project Details *</label>
              <textarea rows={4} {...register('message')} placeholder="Tell us about your target audience..." className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-blue-600 resize-none" />
              {errors.message && <span className="text-xs text-rose-500 mt-1 block">{errors.message.message}</span>}
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold text-base shadow-lg hover:bg-blue-700 transition-all">
              <span>{isSubmitting ? 'Sending...' : 'Send Project Inquiry'}</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};