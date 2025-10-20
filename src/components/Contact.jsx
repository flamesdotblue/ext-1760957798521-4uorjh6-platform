import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Let’s talk</h2>
            <p className="mt-3 text-neutral-700">
              Request a detailed PDF brochure, learn about current collections, or start a custom brief. Our team will get back within one business day.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-neutral-700">
                <Phone className="h-5 w-5 text-neutral-900" />
                <span>+39 031 000 0000</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-700">
                <Mail className="h-5 w-5 text-neutral-900" />
                <span>hello@montefedele.co</span>
              </div>
              <div className="flex items-start gap-3 text-neutral-700">
                <MapPin className="mt-0.5 h-5 w-5 text-neutral-900" />
                <span>Via Monte Fedele 1, 22100, Como, Italy</span>
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-xl ring-1 ring-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1974&auto=format&fit=crop"
                alt="Studio exterior and surroundings"
                className="h-56 w-full object-cover"
              />
            </div>
          </div>

          <div>
            <form className="rounded-2xl bg-neutral-50 p-6 shadow-sm ring-1 ring-neutral-200">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-neutral-800">First name</label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-md border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 shadow-sm focus:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-800/10"
                    placeholder="Alex"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-neutral-800">Last name</label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-md border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 shadow-sm focus:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-800/10"
                    placeholder="Rossi"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-neutral-800">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-md border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 shadow-sm focus:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-800/10"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-neutral-800">What can we help with?</label>
                  <select className="mt-1 w-full rounded-md border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm focus:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-800/10">
                    <option>Request brochure PDF</option>
                    <option>Learn about collections</option>
                    <option>Start a bespoke project</option>
                    <option>Press & partnerships</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-neutral-800">Message</label>
                  <textarea
                    rows={4}
                    className="mt-1 w-full rounded-md border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 shadow-sm focus:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-800/10"
                    placeholder="Tell us a bit about your goals..."
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
                >
                  Send request
                </button>
                <p className="mt-3 text-xs text-neutral-500">
                  By submitting, you agree to our terms and acknowledge our privacy policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
