import React from "react";
import { Leaf, Shield, Building2 } from "lucide-react";

const Value = ({ icon: Icon, title, children }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1 rounded-md bg-neutral-100 p-2 text-neutral-700">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <h4 className="font-medium text-neutral-900">{title}</h4>
      <p className="text-sm text-neutral-600">{children}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Rooted in place. Driven by purpose.</h2>
          <p className="mt-4 text-neutral-700">
            Montefedele Company blends craftsmanship with contemporary thinking. From concept to delivery, we curate materials, partners, and experiences that honor local heritage while meeting modern needs.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Value icon={Building2} title="Craftsmanship">
              Meticulous standards guide every detail—built to last and designed to delight.
            </Value>
            <Value icon={Leaf} title="Sustainability">
              Responsible sourcing and low-impact operations are embedded in our process.
            </Value>
            <Value icon={Shield} title="Reliability">
              Transparent timelines, attentive service, and dependable outcomes.
            </Value>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-xl ring-1 ring-neutral-200">
            <img
              src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1974&auto=format&fit=crop"
              alt="Crafted details with natural materials"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
