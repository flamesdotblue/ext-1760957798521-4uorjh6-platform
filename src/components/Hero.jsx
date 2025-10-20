import React from "react";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <header className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1960&auto=format&fit=crop)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32 text-white">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-inset ring-white/20 backdrop-blur">
            <Star className="h-4 w-4 text-amber-300" />
            <span className="text-xs font-medium tracking-wide">Craft. Culture. Care.</span>
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Montefedele Company
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-white/90">
            We create enduring value through thoughtful design, responsible sourcing, and hospitality-level service. Discover a modern company rooted in timeless principles.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-neutral-900 shadow-sm transition hover:bg-neutral-100"
            >
              Request the brochure <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 ring-1 ring-inset ring-white/20 transition hover:bg-white/20"
            >
              Explore our offer
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
