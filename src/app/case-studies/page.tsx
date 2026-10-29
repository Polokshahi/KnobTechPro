
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { caseStudiesData } from "@/data/case-studies";
import {
  BarChart3,
  CheckCircle2,
  Target,
  Wrench,
} from "lucide-react";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue-600">
              CASE STUDIES
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Real challenges. Practical solutions.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Explore how we help businesses solve operational challenges
              through B2B lead generation, cold email infrastructure, prospect
              research, data management, and custom web development.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-16">
            {caseStudiesData.map((cs, index) => (
              <article
                key={cs.id}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                {/* CASE STUDY HEADER */}
                <div className="border-b border-slate-200 bg-slate-50 px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
                  <div className="flex items-start justify-between gap-6">
                    <div className="max-w-4xl">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold tracking-wider text-slate-300">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-semibold text-blue-600">
                          {cs.category}
                        </span>
                      </div>

                      <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                        {cs.title}
                      </h2>

                      <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                        {cs.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CHALLENGE / SOLUTION / RESULTS */}
                <div className="grid lg:grid-cols-3">

                  {/* CHALLENGE */}
                  <div className="border-b border-slate-200 p-7 sm:p-10 lg:border-b-0 lg:border-r">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                        <Target className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                          01
                        </p>

                        <h3 className="text-sm font-bold text-slate-900">
                          The Challenge
                        </h3>
                      </div>
                    </div>

                    <p className="mt-6 text-sm leading-7 text-slate-600">
                      {cs.challenge}
                    </p>
                  </div>

                  {/* SOLUTION */}
                  <div className="border-b border-slate-200 p-7 sm:p-10 lg:border-b-0 lg:border-r">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Wrench className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                          02
                        </p>

                        <h3 className="text-sm font-bold text-slate-900">
                          Our Approach
                        </h3>
                      </div>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {cs.solution.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-600" />

                          <span className="text-sm leading-6 text-slate-600">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* RESULTS */}
                  <div className="bg-slate-900 p-7 text-white sm:p-10">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                        <BarChart3 className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                          03
                        </p>

                        <h3 className="text-sm font-bold text-white">
                          Results
                        </h3>
                      </div>
                    </div>

                    <ul className="mt-6 space-y-4">
                      {cs.results.map((result) => (
                        <li
                          key={result}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-300" />

                          <span className="text-sm leading-6 text-slate-200">
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* TOOLS */}
                <div className="border-t border-slate-200 px-7 py-6 sm:px-10 lg:px-12">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        Tools & Technologies
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cs.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

