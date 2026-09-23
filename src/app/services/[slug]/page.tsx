
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { servicesData } from "@/data/services";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CircleCheck,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import Link from "next/link";

interface ServiceDetailsProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServiceDetails({
  params,
}: ServiceDetailsProps) {
  const { slug } = await params;

  const service = servicesData.find((item) => item.id === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.Icon;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#f8fafc]">
        {/* Background grid */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "linear-gradient(to bottom, black, transparent 85%)",
            }}
          />
        </div>

        {/* Glow */}
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-0 h-[32rem] w-[32rem] rounded-full bg-indigo-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 sm:pb-28 sm:pt-32 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-14 flex items-center gap-2 text-sm text-slate-500">
            <Link
              href="/services"
              className="transition hover:text-blue-600"
            >
              Services
            </Link>

            <ChevronRight className="h-4 w-4 text-slate-400" />

            <span className="font-medium text-slate-700">
              {service.title}
            </span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.72fr] lg:gap-20">
            {/* Hero content */}
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                <span className="h-px w-7 bg-blue-600" />
                Professional Service
              </div>

              {/* Title */}
              <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                {service.title}
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                {service.description}
              </p>

              {/* CTA */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600"
                >
                  {service.ctaText}

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  View All Services
                </Link>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative hidden lg:block">
              <div className="relative mx-auto max-w-md">
                <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2rem] border border-blue-100 bg-blue-50/40" />

                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_25px_70px_-25px_rgba(15,23,42,0.2)]">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {service.title}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-500">
                          Business Solution
                        </p>
                      </div>
                    </div>

                    <Sparkles className="h-5 w-5 text-blue-500" />
                  </div>

                  <div className="space-y-4 pt-6">
                    {service.features.slice(0, 4).map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />

                        <span className="text-sm text-slate-600">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-slate-100 pt-6">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      Structured around your requirements
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROBLEMS
      ========================================================== */}
      <section className="border-b border-slate-200 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            {/* Intro */}
            <div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                <Target className="h-4 w-4" />
                Challenges
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Is your business facing these challenges?
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Many businesses lose time and opportunities because of
                inefficient processes, incomplete data, or disconnected
                systems. This service is designed to address those
                operational challenges.
              </p>
            </div>

            {/* Problem list */}
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {service.problemsSolved.map((problem, index) => (
                <div
                  key={problem}
                  className="group flex items-start gap-5 py-5"
                >
                  <span className="pt-0.5 text-xs font-bold tracking-wider text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm font-medium leading-7 text-slate-700 transition group-hover:text-slate-950 sm:text-base">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW WE HELP
      ========================================================== */}
      <section className="bg-[#f8fafc] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              <Workflow className="h-4 w-4" />
              Our Approach
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A practical approach to solving the problem
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              We structure each engagement around your business requirements,
              existing workflow, and operational goals. The objective is to
              create a solution that is useful, maintainable, and aligned with
              how your team actually works.
            </p>
          </div>

          {/* Solutions */}
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-2">
            {service.solutions.map((solution, index) => (
              <div
                key={solution}
                className="group bg-white p-7 transition hover:bg-slate-50 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold text-blue-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowRight className="h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600" />
                </div>

                <h3 className="mt-7 max-w-md text-base font-semibold leading-7 text-slate-900">
                  {solution}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SCOPE
      ========================================================== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_360px] lg:gap-20">
            {/* Scope */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Service Scope
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                What&apos;s included
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                Depending on your requirements and project scope, the service
                can include the following capabilities and deliverables.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 border-b border-slate-200 py-4"
                  >
                    <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

                    <span className="text-sm font-medium leading-6 text-slate-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <aside>
              <div className="sticky top-28 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 text-white shadow-xl">
                <div className="p-7 sm:p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-blue-400">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-7 text-xl font-semibold tracking-tight">
                    Discuss your requirements
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    Have a specific requirement or business challenge? Share
                    the details and we&apos;ll discuss the appropriate scope
                    and next steps.
                  </p>

                  <Link
                    href="/contact"
                    className="group mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-blue-600 hover:text-white"
                  >
                    Start a Conversation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className="border-t border-white/10 px-7 py-5 sm:px-8">
                  <p className="text-xs leading-5 text-slate-500">
                    Tell us what you need. We&apos;ll help define the right
                    solution for your project.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUE STRIP
      ========================================================== */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="px-0 py-8 sm:px-8">
              <p className="text-sm font-semibold text-slate-900">
                Business-focused
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Solutions designed around your actual business workflow.
              </p>
            </div>

            <div className="px-0 py-8 sm:px-8">
              <p className="text-sm font-semibold text-slate-900">
                Structured delivery
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Clear scope, organized data, and practical deliverables.
              </p>
            </div>

            <div className="px-0 py-8 sm:px-8">
              <p className="text-sm font-semibold text-slate-900">
                Scalable solutions
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Built to support your current requirements and future growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-slate-950 py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-blue-400">
            <Icon className="h-5 w-5" />
          </div>

          <span className="mt-7 block text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
            Start a Project
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s solve the right problem.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Share your requirements, current challenges, and goals. We&apos;ll
            discuss the appropriate service and a practical way forward.
          </p>

          <Link
            href="/contact"
            className="group mt-9 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-blue-600 hover:text-white"
          >
            Discuss Your Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

