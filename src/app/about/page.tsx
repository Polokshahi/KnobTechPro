import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CheckCircle2, ShieldCheck, Cpu, Users, ArrowRight, Code2, Target } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const pillars = [
    {
      icon: Users,
      title: 'B2B Growth & Intelligence',
      description: 'We build precise ICP databases, extract verified Apollo and LinkedIn Sales Navigator intelligence, and ensure clean, actionable pipelines.'
    },
    {
      icon: Cpu,
      title: 'Automated Outbound Systems',
      description: 'We deploy robust cold email infrastructure, domain warm-up strategies, and custom sequence frameworks designed for maximum reply rates.'
    },
    {
      icon: Code2,
      title: 'Full-Stack Engineering',
      description: 'Beyond outbound marketing, we engineer high-performance web applications, custom CRM integrations, and data scraping microservices.'
    }
  ];

  const stats = [
    { value: '14K+', label: 'Prospects Vetted' },
    { value: '35K+', label: 'Research Records' },
    { value: '145+', label: 'Projects Delivered' },
    { value: '72+', label: 'Unique Clients' }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Header Banner */}
      <div className="pt-32 pb-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase mb-4">
            <Target className="w-4 h-4" /> About KnobTech Pro
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Your growth partner, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              not just another vendor.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We combine B2B research, outbound marketing and modern software development to help businesses create scalable growth systems.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Built to eliminate manual prospecting bottlenecks.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Most scaling companies starve their sales pipeline because they rely on outdated databases, manual web research, and unverified contact lists. 
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              KnobTech Pro was founded on a simple principle: combine rigorous data engineering with elite software development so your team can focus on closing deals rather than hunting for leads.
            </p>
            <div className="space-y-3 pt-2">
              {['Rigorous multi-tier email verification', 'Tailored Ideal Customer Profile (ICP) segmentation', 'Custom web applications built around your exact workflow'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 font-semibold text-slate-800 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
              <span className="font-bold text-slate-900">The KnobTech Pro Standard</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              From finding key decision-makers on LinkedIn Sales Navigator and Apollo to deploying robust Next.js and Node.js applications, we hold every deliverable to enterprise-grade standards.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-4 text-center">
                  <div className="text-xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pillars / Core Focus */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">Our Core Pillars</h2>
            <p className="text-slate-600">The integrated disciplines that drive predictable pipeline velocity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="bg-slate-50/50 border border-slate-200 rounded-3xl p-8 shadow-sm hover:border-blue-300 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-12 text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 relative z-10">Ready to accelerate your business growth?</h2>
          <p className="text-blue-100 text-base max-w-xl mx-auto mb-8 relative z-10">
            Whether you need qualified B2B leads, a cold email campaign, or custom software engineering — let&apos;s build it together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-600 font-semibold text-base shadow-xl hover:bg-slate-50 transition-all relative z-10"
          >
            <span>Book a Free Strategy Call</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>

      <Footer />
    </main>
  );
}