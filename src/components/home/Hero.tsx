'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Network,
  Workflow,
  Target,
  Code2,
  Mail,
  ArrowUpRight, } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white bg-grid-pattern">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-50/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              B2B Growth & Technology Agency
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Build a Stronger B2B Pipeline.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Find the Right Prospects. Build Better Technology.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mb-8 leading-relaxed">
              KnobTech Pro helps B2B companies generate qualified leads,
              research decision-makers, run targeted cold email campaigns,
              automate data workflows, and build modern web applications.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors"
              >
                <span>Book a Free Strategy Call</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-slate-700 font-semibold border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>

          

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
  {[
    "Targeted B2B lead generation",
    "Verified prospect & contact data",
    "Decision-maker & LinkedIn research",
    "Cold email setup & outreach",
    "Sales & workflow automation",
    "Custom scalable web development",
  ].map((item) => (
    <div
      key={item}
      className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition-all duration-200 hover:border-blue-200 hover:shadow-md"
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
        ✓
      </span>

      <span className="font-medium">
        {item}
      </span>
    </div>
  ))}
</div>





          </motion.div>

          {/* Prospect Intelligence Dashboard */}

          

<motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="w-full min-w-0 lg:col-span-5"
>
  <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.18)] sm:rounded-3xl sm:p-8">

    {/* Header */}
    <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
          <Network className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-bold tracking-tight text-slate-900">
            KnobTech Pro
          </p>
          <p className="mt-0.5 text-xs text-slate-500">
            Growth & Technology
          </p>
        </div>
      </div>

      <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
        Your growth partner
      </span>
    </div>

    {/* Main message */}
    <div className="py-7 sm:py-9">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
        What we do
      </p>

      <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
        Everything you need to
        <span className="text-teal-700"> grow smarter.</span>
      </h3>

      <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
        We help businesses find the right people, reach potential
        customers, automate repetitive work, and build better digital products.
      </p>
    </div>

    {/* Services grid */}
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

      <div className="group rounded-2xl border border-slate-200/80 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md">
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
          <Target className="h-5 w-5" />
        </div>
        <h4 className="text-sm font-bold text-slate-900">
          B2B Lead Generation
        </h4>
        <p className="mt-2 text-xs leading-5 text-slate-500">
          Find relevant companies and decision-makers for your business.
        </p>
      </div>

      <div className="group rounded-2xl border border-slate-200/80 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md">
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
          <Mail className="h-5 w-5" />
        </div>
        <h4 className="text-sm font-bold text-slate-900">
          Cold Email Outreach
        </h4>
        <p className="mt-2 text-xs leading-5 text-slate-500">
          Reach targeted prospects through structured email campaigns.
        </p>
      </div>

      <div className="group rounded-2xl border border-slate-200/80 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md">
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
          <Workflow className="h-5 w-5" />
        </div>
        <h4 className="text-sm font-bold text-slate-900">
          Workflow Automation
        </h4>
        <p className="mt-2 text-xs leading-5 text-slate-500">
          Reduce manual work and connect your everyday business tools.
        </p>
      </div>

      <div className="group rounded-2xl border border-slate-200/80 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md">
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
          <Code2 className="h-5 w-5" />
        </div>
        <h4 className="text-sm font-bold text-slate-900">
          Web Development
        </h4>
        <p className="mt-2 text-xs leading-5 text-slate-500">
          Build modern websites, web applications, and business dashboards.
        </p>
      </div>

    </div>

    {/* CTA */}
    <div className="mt-5 flex flex-col gap-4 rounded-2xl bg-slate-950 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-semibold text-white">
          Ready to move your business forward?
        </p>
        <p className="mt-1 text-xs leading-5 text-slate-400">
          Let’s find the right solution for your goals.
        </p>
      </div>

      <a
        href="/contact"
        className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-teal-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-teal-300 sm:self-auto"
      >
        Get in Touch
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>

  </div>
</motion.div>



          
          

        </div>
      </div>
    </section>
  );
};