import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { caseStudiesData } from '@/data/case-studies';
import { notFound } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return caseStudiesData.map((cs) => ({ slug: cs.slug }));
}

export default function CaseStudyDetailPage({ params }: PageProps) {
  const caseStudy = caseStudiesData.find((cs) => cs.slug === params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-4 inline-block">{caseStudy.industry}</span>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">{caseStudy.title}</h1>
        </div>
      </div>

      <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">The Challenge</h2>
          <p className="text-slate-600 leading-relaxed">{caseStudy.challenge}</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">Our Solution</h2>
          <p className="text-slate-600 leading-relaxed">{caseStudy.solution}</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">Key Results</h2>
          <div className="space-y-3">
            {caseStudy.results.map((res, idx) => (
              <div key={idx} className="flex items-center gap-3 font-semibold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span>{res}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {caseStudy.technologies.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 font-semibold text-xs rounded-lg">{tech}</span>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200">
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700">
            Start a Similar Project →
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}