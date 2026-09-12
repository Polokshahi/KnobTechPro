import React from 'react';
import { caseStudiesData } from '@/data/case-studies';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const CaseStudies = () => {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Real projects. Real outcomes.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudiesData.map((cs) => (
            <div key={cs.id} className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full mb-4 inline-block">{cs.industry}</span>
                <h3 className="text-xl font-bold mb-3">{cs.title}</h3>
                <p className="text-xs text-slate-600 mb-6">{cs.challenge}</p>
              </div>
              <Link href="/case-studies" className="text-blue-600 font-semibold text-sm inline-flex items-center gap-2">View Case Study <ArrowRight className="w-4 h-4" /></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};