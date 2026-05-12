// ===== FOOTER COMPONENT =====
// Dark section highlighting the app experience

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full bg-slate-950 px-4 py-8 text-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-center shadow-2xl shadow-slate-950/30">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
          App experience
        </p>
        <p className="mt-3 text-xl font-bold sm:text-2xl">
          Save favorites, revisit recent orders, and move faster.
        </p>
        <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
          This project is built as a standalone food ordering UI with browsing,
          search, and authentication flows.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Link
            className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            to="/restaurant"
          >
            Browse restaurants
          </Link>
          <a
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            href="#download"
          >
            Jump to mobile view
          </a>
        </div>
      </div>
    </div>
  );
}
