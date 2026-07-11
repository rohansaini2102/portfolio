"use client";

import Link from "next/link";
import RiveBackground from "@/components/RiveBackground";
import ProjectArtwork from "@/components/ProjectArtwork";
import { useThemeIndex } from "@/lib/useThemeIndex";
import type {
  Accent,
  ArchitectureLayer,
  EndpointGroup,
  Feature,
  PipelineStep,
  Project,
  ProjectStat,
  StackGroup,
} from "@/lib/projects";

type IconProps = { className?: string };

function ArrowLeftIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M19 12H5" />
      <path d="M12 19l-7-7 7-7" />
    </svg>
  );
}

function CalendarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M8 2v4M16 2v4M3 9h18" />
      <rect x="3" y="5" width="18" height="17" rx="2" />
    </svg>
  );
}

function LockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 1 1 8 0v3" />
    </svg>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
    </div>
  );
}

const glass =
  "rounded-3xl border border-white/60 bg-white/40 shadow-xl shadow-slate-900/10 backdrop-blur-2xl";

export default function ProjectDetail({ project }: { project: Project }) {
  const { activeTheme, cycleTheme } = useThemeIndex();
  const accent = project.accent;

  return (
    <main className="relative min-h-screen overflow-hidden text-slate-900">
      <RiveBackground className="pointer-events-none absolute inset-0" />
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${activeTheme.overlayClass}`} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-white/60 via-white/20 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-24 pt-10">
        {/* top bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/50 px-4 py-2 text-sm font-semibold text-slate-700 shadow-lg shadow-white/30 backdrop-blur-2xl transition hover:bg-white/70"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to portfolio
          </Link>
          <button
            type="button"
            onClick={cycleTheme}
            className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/40 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm shadow-white/30 backdrop-blur-xl transition hover:bg-white/60"
          >
            <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-br ${activeTheme.previewClass}`} aria-hidden="true" />
            Theme
            <span className="font-medium text-slate-400">{activeTheme.label}</span>
          </button>
        </div>

        {/* hero */}
        <section className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-2 rounded-full border border-white/60 bg-white/40 px-3 py-1 font-semibold shadow-sm shadow-white/30 backdrop-blur-xl">
                <CalendarIcon className="h-3.5 w-3.5 text-slate-400" />
                {project.timeline}
              </span>
              <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${accent.badge}`}>
                {project.level}
              </span>
            </div>
            <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
              {project.title}
            </h1>
            {project.tagline ? (
              <p className="text-lg text-slate-600">{project.tagline}</p>
            ) : null}
            <p className="max-w-xl text-sm leading-relaxed text-slate-600">
              {project.summary}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <LockIcon className="h-4 w-4 text-slate-400" />
              <span>{project.confidentiality}</span>
            </div>
          </div>
          <div className={`relative overflow-hidden ${glass} p-3`}>
            <div className={`relative overflow-hidden rounded-2xl border border-white/80 bg-gradient-to-br ${project.coverClass}`}>
              <div className={`absolute -left-10 -top-10 h-28 w-28 rounded-full blur-2xl ${accent.glow}`} />
              <ProjectArtwork kind={project.artwork} className="relative h-56 w-full" />
            </div>
          </div>
        </section>

        {project.kind === "comingSoon" && project.comingSoon ? (
          <ComingSoon project={project} />
        ) : (
          <DetailedBody project={project} accent={accent} />
        )}

        {/* footer CTA */}
        <section className={`mt-16 flex flex-col items-start justify-between gap-4 ${glass} p-6 sm:flex-row sm:items-center`}>
          <div>
            <p className="text-lg font-semibold text-slate-900">
              Want the deeper walkthrough?
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Happy to talk through the architecture and trade-offs in detail.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:rohansaini2102@gmail.com"
              className="rounded-full border border-white/70 bg-white/70 px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-white/40 backdrop-blur-2xl transition hover:bg-white"
            >
              Get in touch
            </a>
            <Link
              href="/#experience"
              className="rounded-full border border-slate-200 bg-white/50 px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm shadow-white/30 backdrop-blur-xl transition hover:bg-white"
            >
              Back to projects
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function DetailedBody({ project, accent }: { project: Project; accent: Accent }) {
  return (
    <>
      {project.stats ? (
        <section className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {project.stats.map((stat) => (
            <StatTile key={stat.label} stat={stat} accent={accent} />
          ))}
        </section>
      ) : null}

      {project.overview ? (
        <section className="mt-14 space-y-4">
          <SectionHeading eyebrow="Overview" title="What it is" />
          <div className={`${glass} space-y-4 p-6`}>
            {project.overview.map((paragraph, index) => (
              <p key={index} className="text-sm leading-relaxed text-slate-600 sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ) : null}

      {project.pipeline ? (
        <section className="mt-14 space-y-5">
          <SectionHeading eyebrow="Delivery" title="From commit to production" />
          <PipelineFlow steps={project.pipeline} accent={accent} />
        </section>
      ) : null}

      {project.endpointGroups ? (
        <section className="mt-14 space-y-5">
          <SectionHeading eyebrow="API surface" title="Endpoints by domain" />
          <EndpointBar groups={project.endpointGroups} />
        </section>
      ) : null}

      {project.architecture ? (
        <section className="mt-14 space-y-5">
          <SectionHeading eyebrow="Architecture" title="How it fits together" />
          <LayerStack layers={project.architecture} accent={accent} />
        </section>
      ) : null}

      {project.features ? (
        <section className="mt-14 space-y-5">
          <SectionHeading eyebrow="Capabilities" title="Key features" />
          <FeatureGrid features={project.features} accent={accent} />
        </section>
      ) : null}

      {project.stack ? (
        <section className="mt-14 space-y-5">
          <SectionHeading eyebrow="Toolbox" title="Tech stack" />
          <StackGroups stack={project.stack} />
        </section>
      ) : null}
    </>
  );
}

function StatTile({ stat, accent }: { stat: ProjectStat; accent: Accent }) {
  return (
    <div className={`${glass} p-4`}>
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
      <p className={`mt-2 text-2xl font-semibold ${accent.text}`}>{stat.value}</p>
      {stat.sub ? <p className="mt-1 text-xs text-slate-500">{stat.sub}</p> : null}
    </div>
  );
}

function PipelineFlow({ steps, accent }: { steps: PipelineStep[]; accent: Accent }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => (
        <div key={step.name} className={`relative ${glass} p-5`}>
          <div className="flex items-center gap-3">
            <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-white ${accent.bar}`}>
              {index + 1}
            </span>
            <p className="text-sm font-semibold text-slate-900">{step.name}</p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.detail}</p>
        </div>
      ))}
    </div>
  );
}

function EndpointBar({ groups }: { groups: EndpointGroup[] }) {
  const total = groups.reduce((sum, group) => sum + group.count, 0);
  const segmentColors = [
    "bg-sky-400",
    "bg-indigo-400",
    "bg-cyan-400",
    "bg-blue-400",
    "bg-teal-400",
    "bg-violet-400",
  ];
  return (
    <div className={`${glass} space-y-5 p-6`}>
      <div className="flex items-baseline justify-between">
        <p className="text-sm text-slate-600">Across {groups.length} core domains</p>
        <p className="text-2xl font-semibold text-slate-900">
          {total}
          <span className="text-sm font-medium text-slate-500">+ endpoints</span>
        </p>
      </div>
      <div className="flex h-4 w-full overflow-hidden rounded-full border border-white/70 bg-white/50">
        {groups.map((group, index) => (
          <div
            key={group.name}
            className={segmentColors[index % segmentColors.length]}
            style={{ width: `${(group.count / total) * 100}%` }}
            title={`${group.name}: ${group.count}`}
          />
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, index) => (
          <div key={group.name} className="flex items-center gap-2 text-sm">
            <span className={`h-3 w-3 rounded-full ${segmentColors[index % segmentColors.length]}`} />
            <span className="text-slate-700">{group.name}</span>
            <span className="ml-auto font-semibold text-slate-500">{group.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LayerStack({ layers, accent }: { layers: ArchitectureLayer[]; accent: Accent }) {
  return (
    <div className="space-y-3">
      {layers.map((layer) => (
        <div key={layer.layer} className={`${glass} flex flex-col gap-3 p-5 sm:flex-row sm:items-center`}>
          <div className="sm:w-44 sm:shrink-0">
            <p className="text-sm font-semibold text-slate-900">{layer.layer}</p>
            {layer.caption ? <p className="text-xs text-slate-500">{layer.caption}</p> : null}
          </div>
          <div className="flex flex-wrap gap-2">
            {layer.items.map((item) => (
              <span
                key={item}
                className={`rounded-full border bg-white/60 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm shadow-white/40 ${accent.border}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function FeatureGrid({ features, accent }: { features: Feature[]; accent: Accent }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {features.map((feature) => (
        <div key={feature.title} className={`${glass} p-5`}>
          <div className="flex items-center gap-3">
            <span className={`h-2.5 w-2.5 rounded-full ${accent.bar}`} />
            <p className="text-sm font-semibold text-slate-900">{feature.title}</p>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

function StackGroups({ stack }: { stack: StackGroup[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stack.map((group) => (
        <div key={group.group} className={`${glass} p-5`}>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{group.group}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/70 bg-white/60 px-2.5 py-1 text-xs text-slate-600 shadow-sm shadow-white/40"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ComingSoon({ project }: { project: Project }) {
  const details = project.comingSoon;
  if (!details) {
    return null;
  }
  return (
    <section className="mt-12">
      <div className={`relative overflow-hidden ${glass} p-8 sm:p-10`}>
        <div className={`absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl ${project.accent.glow}`} />
        <div className="relative space-y-6">
          <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${project.accent.badge}`}>
            <span className={`h-2 w-2 animate-pulse rounded-full ${project.accent.bar}`} />
            In progress
          </span>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            {details.headline}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600">
            {details.blurb}
          </p>
          <div className="flex flex-wrap gap-3">
            {details.platforms.map((platform) => (
              <span
                key={platform}
                className="rounded-full border border-white/70 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm shadow-white/40 backdrop-blur-xl"
              >
                {platform}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/70 bg-white/50 px-2.5 py-1 text-xs text-slate-600 shadow-sm shadow-white/40 backdrop-blur-xl"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="max-w-2xl border-t border-white/60 pt-5 text-sm text-slate-500">
            {details.note}
          </p>
        </div>
      </div>
    </section>
  );
}
