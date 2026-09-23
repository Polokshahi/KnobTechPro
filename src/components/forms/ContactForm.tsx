
'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormValues } from '@/lib/validations';
import {
  Mail,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSendError('');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          fullName: data.fullName,
          workEmail: data.workEmail,
          company: data.company,
          website: data.website || 'Not provided',
          serviceNeeded: data.serviceNeeded,
          budget: data.budget,
          message: data.message,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      setSubmitted(true);
      reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSendError(
        'Something went wrong while sending your inquiry. Please try again.'
      );
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

      {/* Left Content */}
      <div className="lg:col-span-5">

        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
          Let&apos;s talk about your project.
        </h2>

        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Fill out the form and our growth leadership team will review your
          requirements within 24 hours.
        </p>

        <div className="space-y-6">

          {/* Email */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>

            <div>
              <div className="text-xs font-bold text-slate-400 uppercase">
                Direct Email
              </div>

              <div className="text-sm font-bold text-slate-900">
                polok@knobtechpro.online
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <FaWhatsapp className="w-5 h-5" />
            </div>

            <div>
              <div className="text-xs font-bold text-slate-400 uppercase">
                WhatsApp
              </div>

              <div  className="text-sm font-bold text-slate-900">
               <a target='_blank' href="https://wa.me/8801718175422" > +8801718175422</a>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <FaMapMarkerAlt className="w-5 h-5" />
            </div>

            <div>
              <div className="text-xs font-bold text-slate-400 uppercase">
                Location
              </div>

              <div className="text-sm font-bold text-slate-900">
                Dhaka, Bangladesh
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-7 bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm">

        {submitted ? (

          /* Success State */
          <div className="py-16 text-center">

            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Inquiry Received!
            </h3>

            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Thank you for reaching out. We will review your requirements
              and contact you shortly.
            </p>

          </div>

        ) : (

          /* Form */
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >

            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase mb-2">
                  Full Name *
                </label>

                <input
                  type="text"
                  {...register('fullName')}
                  placeholder="John Smith"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />

                {errors.fullName && (
                  <span className="text-xs text-rose-500 mt-1 block">
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase mb-2">
                  Work Email *
                </label>

                <input
                  type="email"
                  {...register('workEmail')}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />

                {errors.workEmail && (
                  <span className="text-xs text-rose-500 mt-1 block">
                    {errors.workEmail.message}
                  </span>
                )}
              </div>

            </div>

            {/* Company + Website */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase mb-2">
                  Company *
                </label>

                <input
                  type="text"
                  {...register('company')}
                  placeholder="Acme Corp"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />

                {errors.company && (
                  <span className="text-xs text-rose-500 mt-1 block">
                    {errors.company.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase mb-2">
                  Website
                </label>

                <input
                  type="text"
                  {...register('website')}
                  placeholder="https://company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

            </div>

            {/* Service + Scope */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase mb-2">
                  Service Needed *
                </label>

                <select
                  {...register('serviceNeeded')}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                >
                  <option value="">Select a service...</option>
                  <option value="B2B Lead Generation">
                    B2B Lead Generation
                  </option>
                  <option value="Cold Email Outreach">
                    Cold Email Outreach
                  </option>
                  <option value="Sales Automation">
                    Sales Automation
                  </option>
                  <option value="Custom Web Development">
                    Custom Web Development
                  </option>
                  <option value="Others">
                    Others
                  </option>
                </select>

                {errors.serviceNeeded && (
                  <span className="text-xs text-rose-500 mt-1 block">
                    {errors.serviceNeeded.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase mb-2">
                  Project Scope *
                </label>

                <select
                  {...register('budget')}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                >
                  <option value="">Select scope...</option>
                  <option value="Lead Generation">
                    Lead Generation
                  </option>
                  <option value="Cold Email & Outreach">
                    Cold Email & Outreach
                  </option>
                  <option value="Automation">
                    Automation
                  </option>
                  <option value="Custom Web Development">
                    Custom Web Development
                  </option>
                  <option value="Multiple Services">
                    Multiple Services
                  </option>
                  <option value="Others">
                    Others
                  </option>
                </select>

                {errors.budget && (
                  <span className="text-xs text-rose-500 mt-1 block">
                    {errors.budget.message}
                  </span>
                )}
              </div>

            </div>

            {/* Message */}
            <div>

              <label className="block text-xs font-bold text-slate-900 uppercase mb-2">
                Project Details *
              </label>

              <textarea
                rows={4}
                {...register('message')}
                placeholder="Tell us about your target audience, project requirements, or business goals..."
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
              />

              {errors.message && (
                <span className="text-xs text-rose-500 mt-1 block">
                  {errors.message.message}
                </span>
              )}

            </div>

            {/* Email Error */}
            {sendError && (
              <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600">
                {sendError}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold text-base shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span>
                {isSubmitting
                  ? 'Sending...'
                  : 'Send Project Inquiry'}
              </span>

              <Send className="w-4 h-4" />
            </button>

          </form>
        )}
      </div>

    </div>
  );
};

