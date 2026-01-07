"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import RiveBackground from "@/components/RiveBackground";

type IconProps = {
  className?: string;
};

function CalendarIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 2v4M16 2v4M3 9h18" />
      <rect x="3" y="5" width="18" height="17" rx="2" />
    </svg>
  );
}

function LockIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 1 1 8 0v3" />
    </svg>
  );
}

function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

const profile = {
  name: "Rohan Saini",
  location: "India, Remote",
  email: "rohansaini2102@gmail.com",
  headline:
    "I design and build modern web products with clean UX, scalable systems, and fast execution.",
};

const themes = [
  {
    id: "original",
    label: "Original",
    overlayClass: "from-transparent via-transparent to-transparent",
    previewClass: "from-slate-200 to-white",
  },
  {
    id: "pearl",
    label: "Pearl",
    overlayClass: "from-slate-200/30 via-rose-100/20 to-white/10",
    previewClass: "from-slate-300 to-rose-200",
  },
  {
    id: "ocean",
    label: "Ocean",
    overlayClass: "from-sky-200/30 via-cyan-100/20 to-emerald-100/20",
    previewClass: "from-sky-300 to-emerald-200",
  },
  {
    id: "mono",
    label: "Mono",
    overlayClass: "from-slate-300/25 via-slate-100/20 to-white/15",
    previewClass: "from-slate-400 to-slate-200",
  },
  {
    id: "royal",
    label: "Royal",
    overlayClass: "from-indigo-200/25 via-blue-100/20 to-cyan-100/20",
    previewClass: "from-indigo-300 to-cyan-200",
  },
];

const navItems = [
  { id: "home", label: "Home", isActive: true },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "articles", label: "Articles" },
];

type QuickLinkPreview = {
  theme: "light" | "dark";
  coverClass: string;
  platform: string;
  platformClass: string;
  title: string;
  handle: string;
  role: string;
  location: string;
  actionLabel: string;
  actionClass: string;
  chips?: string[];
};

type QuickLink = {
  label: string;
  href: string;
  preview?: QuickLinkPreview;
};

const quickLinks: QuickLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/rohansaini2102",
    preview: {
      theme: "dark",
      coverClass: "from-slate-950 via-slate-900 to-slate-950",
      platform: "GH",
      platformClass: "border-white/20 bg-white/10 text-white/80",
      title: "Rohan Saini",
      handle: "@rohansaini2102",
      role: "Open-source projects, AI tools, and full-stack builds.",
      location: "Pinned repositories and contributions",
      actionLabel: "Edit profile",
      actionClass: "border-white/20 bg-white/10 text-white/80",
      chips: ["TypeScript", "JavaScript", "Open source"],
    },
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rohan-saini-852896233/",
    preview: {
      theme: "light",
      coverClass: "from-amber-300 via-amber-200 to-amber-100",
      platform: "in",
      platformClass: "border-white/80 bg-white/90 text-sky-600",
      title: "Rohan Saini",
      handle: "Student at MNIT Jaipur",
      role: "Web Developer and Software Engineer",
      location: "Jaipur, Rajasthan, India",
      actionLabel: "Open to",
      actionClass: "border-sky-600 bg-sky-600 text-white",
      chips: ["Add profile", "Resources", "Contact"],
    },
  },
  {
    label: "X/Twitter",
    href: "https://x.com/rohansaini2102",
    preview: {
      theme: "dark",
      coverClass: "from-neutral-950 via-neutral-900 to-neutral-950",
      platform: "X",
      platformClass: "border-white/20 bg-white/10 text-white/80",
      title: "Rohan Saini",
      handle: "@rohansaini2102",
      role: "Shipping AI products in public. Full-stack and LLMs.",
      location: "Joined Sep 2022",
      actionLabel: "Follow",
      actionClass: "border-white/20 bg-white text-slate-900",
      chips: ["AI", "Full-stack", "LLMs"],
    },
  },
  { label: "Resume", href: "#" },
  { label: "Email", href: "mailto:rohansaini2102@gmail.com" },
];

const focusAreas = ["Product", "Frontend", "Backend", "Automation", "AI"];

const highlights = [
  {
    title: "Product-minded execution",
    description:
      "Ship fast without sacrificing polish. Clear UX, strong systems, and reliable delivery.",
  },
  {
    title: "Design + engineering",
    description:
      "Bridge the gap between aesthetics and architecture with scalable, readable code.",
  },
];

const stats = [
  { label: "Focus", value: "Full-stack product builds" },
  { label: "Availability", value: "Open for select work" },
];

const experiences = [
  {
    id: "devops",
    title: "Multi-Environment DevOps Automation",
    timeline: "Jan 2025 - Present",
    level: "Advanced",
    summary:
      "A practical DevOps project demonstrating multi-environment containerization, automated CI/CD pipelines, and production-grade deployment flows.",
    confidentiality: "Codebase is confidential",
    coverClass: "from-emerald-200 via-slate-100 to-emerald-100",
    tags: ["Docker", "GitHub Actions", "PM2", "NGINX", "Node.js", "Bash"],
    extraTags: 4,
  },
  {
    id: "formula",
    title: "Formula",
    timeline: "Oct 2024 - Present",
    level: "Advanced",
    summary:
      "A full-scale ecommerce platform built as a direct competitor to Tira Beauty. Architected and developed end-to-end with 70,000+ lines of code.",
    confidentiality: "Codebase is confidential",
    coverClass: "from-rose-200 via-amber-100 to-rose-100",
    tags: ["Next.js", "React", "Tailwind CSS", "Shiprocket", "Razorpay"],
    extraTags: 1,
  },
  {
    id: "win",
    title: "Word Impact Network Backend",
    timeline: "Apr 2025 - Present",
    level: "Advanced",
    summary:
      "A production-grade LMS backend with 88+ API endpoints, dual authentication, course management, progress tracking, and assessment workflows.",
    confidentiality: "Codebase is confidential",
    coverClass: "from-slate-200 via-sky-100 to-slate-100",
    tags: ["Node.js", "Express.js", "TypeScript", "Prisma ORM", "PostgreSQL", "Redis"],
    extraTags: 6,
  },
];

const formatTime = () =>
  new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());

export default function Home() {
  const [themeIndex, setThemeIndex] = useState(0);
  const [localTime, setLocalTime] = useState(formatTime);
  const activeTheme = themes[themeIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setLocalTime(formatTime());
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden text-slate-900">
      <RiveBackground className="pointer-events-none absolute inset-0" />
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${activeTheme.overlayClass}`}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-white/60 via-white/20 to-transparent" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-10">
        <div className="flex flex-wrap items-center justify-between gap-4" id="home">
          <div className="flex flex-1 flex-wrap items-center justify-between gap-3 rounded-full border border-white/70 bg-white/50 px-4 py-2 text-xs font-semibold text-slate-700 shadow-lg shadow-white/30 backdrop-blur-2xl">
            <span>{profile.location}</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {profile.email}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setThemeIndex((prev) => (prev + 1) % themes.length)}
              className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/40 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm shadow-white/30 backdrop-blur-xl transition hover:border-white/80 hover:bg-white/60"
            >
              <span
                className={`h-2.5 w-2.5 rounded-full bg-gradient-to-br ${activeTheme.previewClass}`}
                aria-hidden="true"
              />
              Theme
              <span className="font-medium text-slate-400">
                {activeTheme.label}
              </span>
            </button>
            <div className="rounded-full border border-slate-900/70 bg-slate-900/80 px-4 py-2 text-xs font-semibold text-white/90 shadow-lg shadow-black/20">
              {localTime} Local
            </div>
          </div>
        </div>

        <section className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold text-slate-600">
              Hey there, I am
            </p>
            <div className="flex flex-wrap items-start gap-5">
              <h1 className="text-4xl font-semibold text-slate-900 sm:text-6xl lg:text-7xl">
                {profile.name}
              </h1>
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/70 bg-white/40 shadow-lg shadow-white/40 backdrop-blur-xl sm:h-24 sm:w-24">
                <Image
                  src="/my-photo.png"
                  alt={profile.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <p className="max-w-xl text-base text-slate-600 sm:text-lg">
              {profile.headline}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-white/70 bg-white/70 px-6 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-white/40 backdrop-blur-2xl transition hover:bg-white"
              >
                Get in touch
              </a>
              <button
                type="button"
                className="rounded-full border border-slate-200 bg-white/50 px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm shadow-white/30 backdrop-blur-xl transition hover:bg-white"
              >
                Download Resume
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
              {quickLinks.map((link) => {
                const preview = link.preview;
                const isDark = preview?.theme === "dark";
                const isExternal = link.href.startsWith("http");
                return (
                  <div key={link.label} className="relative group">
                    <a
                      href={link.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="inline-flex rounded-full border border-white/60 bg-white/40 px-3 py-1 shadow-sm shadow-white/20 backdrop-blur-xl transition hover:bg-white/60"
                    >
                      {link.label}
                    </a>
                    {preview ? (
                      <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-5 w-[340px] -translate-x-1/2 translate-y-3 opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 sm:w-[380px]">
                        <div
                          className={`overflow-hidden rounded-2xl border shadow-2xl backdrop-blur-2xl ${
                            isDark
                              ? "border-white/10 bg-slate-900/95 text-white shadow-black/40"
                              : "border-white/80 bg-white/95 text-slate-900 shadow-slate-900/20"
                          }`}
                        >
                          <div
                            className={`relative h-28 bg-gradient-to-br ${preview.coverClass}`}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
                            <div
                              className={`absolute right-4 top-4 inline-flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-semibold ${
                                preview.platformClass
                              }`}
                            >
                              {preview.platform}
                            </div>
                          </div>
                          <div className="relative px-4 pb-4 pt-8">
                            <div className="absolute left-4 -top-7 h-14 w-14 overflow-hidden rounded-full border border-white/70 bg-white/60 shadow-lg shadow-black/10">
                              <Image
                                src="/my-photo.png"
                                alt={profile.name}
                                fill
                                sizes="56px"
                                className="object-cover"
                              />
                            </div>
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="text-sm font-semibold">
                                  {preview.title}
                                </p>
                                <p
                                  className={`text-xs ${
                                    isDark
                                      ? "text-white/70"
                                      : "text-slate-500"
                                  }`}
                                >
                                  {preview.handle}
                                </p>
                              </div>
                              <span
                                className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${preview.actionClass}`}
                              >
                                {preview.actionLabel}
                              </span>
                            </div>
                            <p
                              className={`mt-3 text-sm ${
                                isDark
                                  ? "text-white/80"
                                  : "text-slate-600"
                              }`}
                            >
                              {preview.role}
                            </p>
                            <p
                              className={`mt-1 text-xs ${
                                isDark
                                  ? "text-white/60"
                                  : "text-slate-500"
                              }`}
                            >
                              {preview.location}
                            </p>
                            {preview.chips ? (
                              <div className="mt-3 flex flex-wrap gap-2">
                                {preview.chips.map((chip) => (
                                  <span
                                    key={chip}
                                    className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
                                      isDark
                                        ? "border-white/15 bg-white/10 text-white/80"
                                        : "border-slate-200 bg-white text-slate-600"
                                    }`}
                                  >
                                    {chip}
                                  </span>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/60 bg-white/35 p-5 shadow-xl shadow-slate-900/10 backdrop-blur-2xl">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/70 bg-white/40 shadow-lg shadow-white/40 backdrop-blur-xl">
                  <Image
                    src="/my-photo.png"
                    alt={profile.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Profile
                  </p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">
                    {profile.name}
                  </p>
                  <p className="text-sm text-slate-600">{profile.location}</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/60 bg-white/35 p-5 shadow-xl shadow-slate-900/10 backdrop-blur-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Currently
              </p>
              <p className="mt-3 text-lg font-semibold text-slate-900">
                Building product systems, UI workflows, and performance-first
                engineering.
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Available for select freelance work and collaborations.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/60 bg-white/35 p-4 shadow-lg shadow-slate-900/10 backdrop-blur-2xl"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <nav className="mt-10 flex flex-wrap items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-current={item.isActive ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                item.isActive
                  ? "border border-white/70 bg-white/70 text-slate-900 shadow-sm shadow-white/40"
                  : "border border-white/40 bg-white/30 text-slate-600 hover:bg-white/60"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <section className="mt-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Focus Areas
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-500">
              {focusAreas.map((area) => (
                <span key={area} className="uppercase tracking-[0.25em]">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="rounded-3xl border border-white/60 bg-white/35 p-6 shadow-xl shadow-slate-900/10 backdrop-blur-2xl"
            >
              <p className="text-lg font-semibold text-slate-900">
                {highlight.title}
              </p>
              <p className="mt-2 text-sm text-slate-600">
                {highlight.description}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-16" id="experience">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Selected Experience
              </p>
              <h2 className="text-2xl font-semibold text-slate-900">
                Recent applications I built
              </h2>
            </div>
            <div className="rounded-full border border-white/60 bg-white/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm shadow-white/40 backdrop-blur-xl">
              2024 - 2025
            </div>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {experiences.map((experience) => (
              <article
                key={experience.id}
                className="flex h-full flex-col rounded-3xl border border-white/50 bg-white/45 p-4 shadow-xl shadow-slate-900/10 backdrop-blur-2xl ring-1 ring-white/30"
              >
                <div
                  className={`relative h-40 overflow-hidden rounded-2xl border border-white/80 bg-gradient-to-br ${experience.coverClass}`}
                >
                  <div className="absolute inset-4 rounded-2xl border border-white/80 bg-white/70 shadow-sm" />
                  <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-white/60 blur-2xl" />
                  <div className="absolute bottom-5 right-5 h-12 w-12 rounded-xl bg-white/80 shadow-sm" />
                </div>
                <div className="mt-4 flex flex-1 flex-col gap-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4 text-slate-400" />
                      <span>{experience.timeline}</span>
                    </div>
                    <span className="rounded-full border border-rose-200 bg-rose-50 px-2 py-1 text-[11px] font-semibold text-rose-600">
                      {experience.level}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {experience.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {experience.summary}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <LockIcon className="h-4 w-4 text-slate-400" />
                    <span>{experience.confidentiality}</span>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {experience.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/70 bg-white/60 px-2.5 py-1 text-xs text-slate-600 shadow-sm shadow-white/40 backdrop-blur-xl"
                      >
                        {tag}
                      </span>
                    ))}
                    {experience.extraTags ? (
                      <span className="rounded-full border border-white/70 bg-white/60 px-2.5 py-1 text-xs text-slate-500 shadow-sm shadow-white/40 backdrop-blur-xl">
                        +{experience.extraTags}
                      </span>
                    ) : null}
                  </div>
                  <button
                    type="button"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-slate-700"
                  >
                    View full detail
                    <ArrowUpRightIcon className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
