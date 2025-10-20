import React from "react";
import { Mountain, Building2, Leaf, CheckCircle2 } from "lucide-react";

const OfferCard = ({ icon: Icon, title, description, bullets, image }) => (
  <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200 transition hover:shadow-md">
    <div className="relative h-44 w-full overflow-hidden">
      <img src={image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
    <div className="flex flex-1 flex-col gap-4 p-6">
      <div className="inline-flex w-fit items-center gap-2 rounded-md bg-neutral-100 px-2.5 py-1 text-neutral-700">
        <Icon className="h-4 w-4" />
        <span className="text-xs font-medium">{title}</span>
      </div>
      <p className="text-sm leading-relaxed text-neutral-700">{description}</p>
      <ul className="mt-1 space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">What we offer</h2>
          <p className="mt-3 text-neutral-700">
            A curated suite of services that connect design, production, and experience—tailored to your ambitions.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <OfferCard
            icon={Mountain}
            title="Signature Collections"
            description="Small-batch lines that celebrate natural materials and regional identity."
            bullets={["Limited runs, meticulous quality", "Material-forward aesthetics", "Timeless, functional design"]}
            image="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1974&auto=format&fit=crop"
          />
          <OfferCard
            icon={Building2}
            title="Spaces & Hospitality"
            description="From cozy interiors to destination venues, we shape spaces that feel grounded and welcoming."
            bullets={["Concept to completion", "Local artisan network", "Sensory-first guest journeys"]}
            image="https://images.unsplash.com/photo-1519710164239-6fbb5a9a2f73?q=80&w=1974&auto=format&fit=crop"
          />
          <OfferCard
            icon={Leaf}
            title="Bespoke Projects"
            description="Custom commissions and collaborations built around your story, site, and sustainability goals."
            bullets={["Transparent planning", "Sustainable sourcing", "Dedicated project stewardship"]}
            image="https://images.unsplash.com/photo-1604014237800-1c9102c0a1f3?q=80&w=1974&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
