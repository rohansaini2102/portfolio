export type Accent = {
  text: string;
  soft: string;
  bar: string;
  track: string;
  border: string;
  glow: string;
  badge: string;
};

export type ProjectStat = { label: string; value: string; sub?: string };
export type PipelineStep = { name: string; detail: string };
export type ArchitectureLayer = { layer: string; caption?: string; items: string[] };
export type EndpointGroup = { name: string; count: number };
export type Feature = { title: string; description: string };
export type StackGroup = { group: string; items: string[] };

export type ProjectArtworkKind = "devops" | "commerce" | "backend";

export type Project = {
  slug: string;
  title: string;
  timeline: string;
  level: string;
  summary: string;
  confidentiality: string;
  coverClass: string;
  artwork: ProjectArtworkKind;
  accent: Accent;
  tags: string[];
  /** How many tags to show on the home card before collapsing into "+N". */
  cardTagCount: number;
  kind: "detailed" | "comingSoon";

  // kind === "detailed"
  tagline?: string;
  overview?: string[];
  stats?: ProjectStat[];
  pipeline?: PipelineStep[];
  architecture?: ArchitectureLayer[];
  endpointGroups?: EndpointGroup[];
  features?: Feature[];
  stack?: StackGroup[];

  // kind === "comingSoon"
  comingSoon?: {
    headline: string;
    blurb: string;
    platforms: string[];
    note: string;
  };
};

const emerald: Accent = {
  text: "text-emerald-700",
  soft: "bg-emerald-50/70",
  bar: "bg-emerald-400",
  track: "bg-emerald-100",
  border: "border-emerald-200",
  glow: "bg-emerald-300/40",
  badge: "border-emerald-200 bg-emerald-50 text-emerald-700",
};

const rose: Accent = {
  text: "text-rose-600",
  soft: "bg-rose-50/70",
  bar: "bg-rose-400",
  track: "bg-rose-100",
  border: "border-rose-200",
  glow: "bg-amber-300/40",
  badge: "border-rose-200 bg-rose-50 text-rose-600",
};

const sky: Accent = {
  text: "text-sky-700",
  soft: "bg-sky-50/70",
  bar: "bg-sky-400",
  track: "bg-sky-100",
  border: "border-sky-200",
  glow: "bg-sky-300/40",
  badge: "border-sky-200 bg-sky-50 text-sky-700",
};

export const projects: Project[] = [
  {
    slug: "devops",
    title: "Multi-Environment DevOps Automation",
    timeline: "Jan 2025 - Present",
    level: "Advanced",
    summary:
      "A practical DevOps project demonstrating multi-environment containerization, automated CI/CD pipelines, and production-grade deployment flows.",
    confidentiality: "Codebase is confidential",
    coverClass: "from-emerald-200 via-slate-100 to-emerald-100",
    artwork: "devops",
    accent: emerald,
    tags: [
      "Docker",
      "GitHub Actions",
      "PM2",
      "NGINX",
      "Node.js",
      "Bash",
      "Docker Compose",
      "Linux",
      "Ubuntu VPS",
      "SSH",
    ],
    cardTagCount: 6,
    kind: "detailed",
    tagline:
      "Containerized delivery from a single git push to production — identical across dev, staging, and prod.",
    overview: [
      "A self-hosted deployment platform built to make shipping repeatable and boring. Every environment runs the same container image, so what passes in staging behaves the same in production.",
      "A single push to a tracked branch kicks off the whole pipeline: install, lint, test, build a lean Docker image, push it to a registry, and roll it out over SSH — with zero-downtime process reloads and an NGINX edge in front.",
      "The goal was operational confidence: no snowflake servers, no manual SSH-and-pray releases, and a clear, scripted path from commit to live.",
    ],
    stats: [
      { label: "Environments", value: "3", sub: "dev · staging · prod" },
      { label: "Pipeline stages", value: "6", sub: "commit → serve" },
      { label: "Release trigger", value: "Git push", sub: "fully automated" },
      { label: "Downtime", value: "Zero", sub: "PM2 graceful reload" },
    ],
    pipeline: [
      {
        name: "Commit & Push",
        detail:
          "A push to a tracked branch triggers GitHub Actions via branch-based rules.",
      },
      {
        name: "Install & Test",
        detail:
          "Dependencies installed in a clean runner, then lint and automated checks run.",
      },
      {
        name: "Build Image",
        detail:
          "A multi-stage Dockerfile produces a small, reproducible production image.",
      },
      {
        name: "Push to Registry",
        detail: "The versioned image is tagged and pushed to the container registry.",
      },
      {
        name: "Deploy",
        detail:
          "The target host pulls the image over SSH; environment-specific config is injected.",
      },
      {
        name: "Serve",
        detail:
          "PM2 supervises the Node process behind an NGINX reverse proxy with TLS.",
      },
    ],
    architecture: [
      {
        layer: "Source & CI",
        caption: "Where a release begins",
        items: ["GitHub", "GitHub Actions", "Branch-based triggers"],
      },
      {
        layer: "Build",
        caption: "Reproducible artifacts",
        items: ["Docker", "Multi-stage builds", "Docker Compose"],
      },
      {
        layer: "Runtime",
        caption: "How the app runs",
        items: ["Node.js", "PM2 process manager", "Per-env config"],
      },
      {
        layer: "Edge",
        caption: "What users hit",
        items: ["NGINX reverse proxy", "TLS / HTTPS", "Gzip & caching"],
      },
      {
        layer: "Ops",
        caption: "Keeping it healthy",
        items: ["Bash automation", "Health checks", "Log rotation"],
      },
    ],
    features: [
      {
        title: "Multi-environment parity",
        description:
          "The same containerized runtime powers dev, staging, and prod — no environment drift.",
      },
      {
        title: "Push-to-deploy CI/CD",
        description:
          "GitHub Actions turns a git push into a fully automated build-and-release.",
      },
      {
        title: "Zero-downtime releases",
        description:
          "PM2 gracefully reloads processes so traffic is never dropped during a deploy.",
      },
      {
        title: "NGINX edge + TLS",
        description:
          "A reverse proxy terminates TLS, compresses responses, and routes to app processes.",
      },
      {
        title: "Scripted operations",
        description:
          "Bash tooling handles provisioning, deploys, and routine maintenance repeatably.",
      },
      {
        title: "Isolated configuration",
        description:
          "Per-environment secrets and variables keep credentials scoped and out of the image.",
      },
    ],
    stack: [
      { group: "Containerization", items: ["Docker", "Docker Compose"] },
      { group: "CI/CD", items: ["GitHub Actions"] },
      { group: "Runtime", items: ["Node.js", "PM2"] },
      { group: "Edge", items: ["NGINX", "TLS"] },
      { group: "OS & Scripting", items: ["Linux", "Ubuntu VPS", "Bash", "SSH"] },
    ],
  },
  {
    slug: "formula",
    title: "Formula",
    timeline: "Oct 2024 - Present",
    level: "Advanced",
    summary:
      "A full-scale ecommerce platform built as a direct competitor to Tira Beauty. Architected and developed end-to-end with 70,000+ lines of code.",
    confidentiality: "Codebase is confidential",
    coverClass: "from-rose-200 via-amber-100 to-rose-100",
    artwork: "commerce",
    accent: rose,
    tags: ["Next.js", "React", "Tailwind CSS", "Shiprocket", "Razorpay", "Node.js"],
    cardTagCount: 5,
    kind: "comingSoon",
    tagline:
      "A full-scale beauty & cosmetics ecommerce platform — with native iOS and Android apps on the way.",
    comingSoon: {
      headline: "iOS & Android apps landing soon",
      blurb:
        "Formula is a full-scale ecommerce platform built end-to-end as a direct competitor to Tira Beauty. Native mobile apps for iOS and Android are in progress and will be hosted right here.",
      platforms: ["iOS", "Android", "Web"],
      note:
        "A deep product walkthrough — architecture, storefront, checkout, and infographics — will live on this page once the apps ship.",
    },
  },
  {
    slug: "win",
    title: "Word Impact Network Backend",
    timeline: "Apr 2025 - Present",
    level: "Advanced",
    summary:
      "A production-grade LMS backend with 88+ API endpoints, dual authentication, course management, progress tracking, and assessment workflows.",
    confidentiality: "Codebase is confidential",
    coverClass: "from-slate-200 via-sky-100 to-slate-100",
    artwork: "backend",
    accent: sky,
    tags: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "Redis",
      "JWT",
      "Zod",
      "Swagger",
      "Multer",
      "Nodemailer",
      "Docker",
    ],
    cardTagCount: 6,
    kind: "detailed",
    tagline:
      "The backbone of a learning platform — a typed REST API spanning courses, learners, progress, and assessments.",
    overview: [
      "A production-grade Learning Management System backend that powers the full learning experience: enrolling learners, delivering course content, tracking progress, and running assessments.",
      "The API surface spans 88+ REST endpoints across six core domains, served by Express and fully typed with TypeScript. Prisma sits over PostgreSQL as a typed data layer, with Redis for caching and sessions.",
      "Two distinct authentication flows separate learners from administrators, each with scoped access — so the same platform safely serves students and the team managing content.",
    ],
    stats: [
      { label: "API endpoints", value: "88+", sub: "REST" },
      { label: "Auth flows", value: "Dual", sub: "learner & admin" },
      { label: "Core domains", value: "6", sub: "auth → assessment" },
      { label: "Data layer", value: "Typed", sub: "Prisma + PostgreSQL" },
    ],
    endpointGroups: [
      { name: "Authentication", count: 12 },
      { name: "Courses & Modules", count: 22 },
      { name: "Lessons & Media", count: 14 },
      { name: "Progress Tracking", count: 12 },
      { name: "Assessments", count: 16 },
      { name: "Users & Admin", count: 12 },
    ],
    architecture: [
      {
        layer: "Consumers",
        caption: "Who calls the API",
        items: ["Learner web app", "Admin dashboard"],
      },
      {
        layer: "API",
        caption: "Express + TypeScript",
        items: ["REST controllers", "Auth middleware", "Zod validation", "Rate limiting"],
      },
      {
        layer: "Domain",
        caption: "Business logic",
        items: ["Courses", "Progress", "Assessments", "Users"],
      },
      {
        layer: "Data",
        caption: "Persistence & cache",
        items: ["Prisma ORM", "PostgreSQL", "Redis"],
      },
      {
        layer: "Integrations",
        caption: "Cross-cutting services",
        items: ["JWT auth", "File uploads (Multer)", "Email (Nodemailer)", "Swagger docs"],
      },
    ],
    features: [
      {
        title: "Dual authentication",
        description:
          "Separate learner and admin auth flows, each issuing scoped JWTs for least-privilege access.",
      },
      {
        title: "Course & module management",
        description:
          "Full CRUD over courses, modules, lessons, and media for the content team.",
      },
      {
        title: "Progress tracking",
        description:
          "Per-learner progress recorded across modules and lessons to drive the learning journey.",
      },
      {
        title: "Assessments & quizzes",
        description:
          "Assessment workflows with question banks, submissions, and scoring.",
      },
      {
        title: "Typed data layer",
        description:
          "Prisma over PostgreSQL with migrations keeps the schema and queries type-safe.",
      },
      {
        title: "Caching & sessions",
        description:
          "Redis backs performance-sensitive reads and session state under load.",
      },
      {
        title: "Documented API",
        description:
          "Swagger / OpenAPI describes the full endpoint surface for consumers.",
      },
      {
        title: "Validation & security",
        description:
          "Zod schemas, auth middleware, and rate limiting guard every request.",
      },
    ],
    stack: [
      { group: "Runtime", items: ["Node.js", "Express.js", "TypeScript"] },
      { group: "Data", items: ["Prisma ORM", "PostgreSQL", "Redis"] },
      { group: "Auth & Validation", items: ["JWT", "Zod"] },
      { group: "Tooling", items: ["Swagger", "Multer", "Nodemailer", "Docker"] },
    ],
  },
];

export const projectSlugs = projects.map((project) => project.slug);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
