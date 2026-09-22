'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
           




            <div className="relative">
  {/* Main Dashboard */}
  <div className="relative bg-white border border-slate-200 rounded-[28px] p-5 sm:p-6 shadow-[0_25px_70px_-20px_rgba(15,23,42,0.25)]">

    {/* Dashboard Header */}
    <div className="flex items-center justify-between mb-6">
      <div>
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
          Prospect Intelligence
        </p>
        <h3 className="text-lg font-bold text-slate-900 mt-1">
          B2B Growth Engine
        </h3>
      </div>

      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs font-semibold text-emerald-700">
          Active
        </span>
      </div>
    </div>

    {/* Main Metric */}
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-5 mb-4 text-white">
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

      <div className="relative">
        <p className="text-sm text-blue-100">
          Qualified Prospects
        </p>

        <div className="flex items-end justify-between mt-2">
          <h2 className="text-4xl font-bold tracking-tight">
            2,847
          </h2>

          <span className="flex items-center gap-1 text-xs font-semibold bg-white/15 px-2.5 py-1 rounded-full">
            <ArrowRight className="w-3 h-3 -rotate-45" />
            18.4%
          </span>
        </div>

        {/* Mini Chart */}
        <div className="flex items-end gap-1.5 h-10 mt-5">
          {[35, 48, 42, 62, 55, 72, 68, 84, 78, 94, 88, 100].map(
            (height, index) => (
              <div
                key={index}
                className="flex-1 bg-white/25 rounded-t-sm"
                style={{ height: `${height}%` }}
              />
            )
          )}
        </div>
      </div>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 gap-3 mb-4">
      <div className="border border-slate-100 rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Verified Emails
          </span>

          <span className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
            ✓
          </span>
        </div>

        <div className="text-xl font-bold text-slate-900 mt-3">
          2,416
        </div>

        <div className="text-[11px] text-emerald-600 font-medium mt-1">
          84.8% verified
        </div>
      </div>

      <div className="border border-slate-100 rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500">
            ICP Matches
          </span>

          <span className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
            ◉
          </span>
        </div>

        <div className="text-xl font-bold text-slate-900 mt-3">
          1,936
        </div>

        <div className="text-[11px] text-blue-600 font-medium mt-1">
          67.9% match rate
        </div>
      </div>
    </div>

    {/* Recent Prospects */}
    <div className="border border-slate-100 rounded-2xl p-4">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-slate-900">
          Recent Prospects
        </span>

        <span className="text-xs text-blue-600 font-medium">
          View all
        </span>
      </div>

      <div className="space-y-3">

        {/* Prospect 1 */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
            AC
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-slate-900 truncate">
              Acme Software
            </p>
            <p className="text-[11px] text-slate-500">
              CEO · SaaS · United States
            </p>
          </div>

          <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
            96% Match
          </span>
        </div>

        {/* Prospect 2 */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-xs font-bold text-blue-600">
            TC
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-slate-900 truncate">
              TechCore Inc.
            </p>
            <p className="text-[11px] text-slate-500">
              Founder · Technology · Canada
            </p>
          </div>

          <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
            92% Match
          </span>
        </div>

        {/* Prospect 3 */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center text-xs font-bold text-indigo-600">
            NH
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-slate-900 truncate">
              NorthHealth
            </p>
            <p className="text-[11px] text-slate-500">
              Marketing Director · Healthcare
            </p>
          </div>

          <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
            89% Match
          </span>
        </div>

      </div>
    </div>
  </div>

  {/* Floating Verification Card */}
  <motion.div
    initial={{ opacity: 0, x: 20, y: 10 }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    className="absolute -right-5 top-20 hidden xl:flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-xl"
  >
    <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold">
      ✓
    </div>

    <div>
      <p className="text-xs font-semibold text-slate-900">
        Email Verified
      </p>
      <p className="text-[11px] text-slate-500">
        Decision maker identified
      </p>
    </div>
  </motion.div>

  {/* Floating ICP Card */}
  <motion.div
    initial={{ opacity: 0, x: -20, y: 10 }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.6, delay: 0.7 }}
    className="absolute -left-6 bottom-16 hidden xl:flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-xl"
  >
    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
      96%
    </div>

    <div>
      <p className="text-xs font-semibold text-slate-900">
        ICP Match
      </p>
      <p className="text-[11px] text-slate-500">
        High-quality prospect
      </p>
    </div>
  </motion.div>
</div>










          </motion.div>

        </div>
      </div>
    </section>
  );
};