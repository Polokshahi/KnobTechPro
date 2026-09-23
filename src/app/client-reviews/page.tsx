"use client";

import { useEffect, useState } from "react";
import reviews from "../../data/review";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export const ClientReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleReviews = 3;

  useEffect(() => {
    if (reviews.length <= visibleReviews) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;

        return next >= reviews.length ? 0 : next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleReviews = () => {
    return Array.from({ length: visibleReviews }, (_, index) => {
      return reviews[(currentIndex + index) % reviews.length];
    });
  };

  const nextReviews = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const previousReviews = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600">
            Client Feedback
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Clients Say
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Feedback from businesses we’ve helped with lead generation,
            outreach, automation, and web solutions.
          </p>
        </div>

        {/* Reviews */}
        <div className="relative">

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {getVisibleReviews().map((review, idx) => (
              <div
                key={`${review.clientName}-${currentIndex}-${idx}`}
                className="group relative flex min-h-[260px] flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Quote + Stars */}
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Quote size={20} />
                    </div>

                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={15}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Review */}
                  <p className="text-[15px] leading-7 text-slate-600">
                    “{review.review}”
                  </p>
                </div>

                {/* Client */}
                <div className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                    {review.clientName
                      .split(" ")
                      .map((name) => name[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {review.clientName}
                    </h3>

                    <p className="mt-0.5 text-xs text-slate-500">
                      KnobTech Pro Client
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          {reviews.length > 3 && (
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={previousReviews}
                aria-label="Previous reviews"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-1.5">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to review ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-6 bg-blue-600"
                        : "w-1.5 bg-slate-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextReviews}
                aria-label="Next reviews"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};