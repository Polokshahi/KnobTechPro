import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6">Ready to build your next growth engine?</h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">Let&apos;s build verified B2B pipelines and modern web apps together.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-600 font-semibold shadow-xl">
          <span>Book a Free Strategy Call</span> <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};