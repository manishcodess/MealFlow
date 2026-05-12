// ===== DOWNLOAD COMPONENT =====
// Shows a neutral mobile-experience call to action

import { Link } from "react-router-dom";

export default function Download() {
  return (
    <section id="download" className="px-4 pb-10 pt-2">
      <div className="mx-auto w-full max-w-5xl rounded-3xl bg-slate-100 px-6 py-8 text-center shadow-lg shadow-slate-200/60 ring-1 ring-slate-200 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">
          Mobile experience
        </p>
        <p className="mt-3 text-xl font-bold text-slate-900 sm:text-2xl">
          Use the app-like view on any device.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
          Fast search, saved login, and route-based browsing keep the project
          feeling polished without tying it to a specific brand.
        </p>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            to="/restaurant"
          >
            Browse restaurants
          </Link>
          <a
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            href="#search2"
          >
            Jump to search
          </a>
        </div>
      </div>
    </section>
  );
}
