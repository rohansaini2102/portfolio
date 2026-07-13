import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Puzzle Dojo",
  description:
    "Puzzle Dojo — a minimalist brain-training puzzle game. Sharpen your mind one puzzle at a time.",
};

const features = [
  {
    title: "Handcrafted puzzles",
    description:
      "Dozens of levels tuned to ramp from a gentle warm-up to a proper brain workout.",
  },
  {
    title: "Play offline, anywhere",
    description:
      "No account, no clutter. Progress is saved right on your device so you can play on the go.",
  },
  {
    title: "Clean, calm design",
    description:
      "A distraction-free board and smooth motion that keep you in the flow.",
  },
];

const tags = ["Mobile Game", "Puzzle", "iOS", "Android", "Offline"];

export default function PuzzleDojoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-white to-indigo-50 text-slate-900">
      <div className="pointer-events-none absolute -left-24 top-[-10%] h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-24 pt-10">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm shadow-white/40 backdrop-blur-xl transition hover:bg-white"
          >
            <span aria-hidden="true">←</span> Back to portfolio
          </Link>
          <a
            href="/puzzle-dojo/privacy/index.html"
            className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/40 px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm shadow-white/30 backdrop-blur-xl transition hover:bg-white/70"
          >
            Privacy Policy
          </a>
        </div>

        <section className="mt-16 flex flex-col items-start gap-8 sm:flex-row sm:items-center">
          <div className="grid h-28 w-28 flex-none place-items-center rounded-[28px] bg-gradient-to-br from-indigo-500 to-cyan-400 text-6xl shadow-xl shadow-indigo-500/30">
            🧩
          </div>
          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-white/70 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 shadow-sm shadow-white/40 backdrop-blur-xl">
              Mobile Game
            </span>
            <h1 className="text-4xl font-semibold text-slate-900 sm:text-6xl">
              Puzzle Dojo
            </h1>
            <p className="max-w-xl text-base text-slate-600 sm:text-lg">
              A minimalist brain-training puzzle game. Sharpen your mind one
              puzzle at a time — calm visuals, satisfying logic, zero clutter.
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/70 bg-white/60 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm shadow-white/40 backdrop-blur-xl"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 grid gap-5 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/60 bg-white/50 p-6 shadow-xl shadow-slate-900/10 backdrop-blur-2xl"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {feature.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-14 rounded-3xl border border-white/60 bg-white/50 p-8 shadow-xl shadow-slate-900/10 backdrop-blur-2xl">
          <h2 className="text-xl font-semibold text-slate-900">Legal</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Puzzle Dojo respects your privacy. Read how the app handles your
            information in the full privacy policy — this is also the public URL
            used for app store submission.
          </p>
          <a
            href="/puzzle-dojo/privacy/index.html"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-900/80 bg-slate-900/90 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-slate-900"
          >
            View Privacy Policy
            <span aria-hidden="true">→</span>
          </a>
        </section>
      </div>
    </main>
  );
}
