import type { ProjectArtworkKind } from "@/lib/projects";

type ProjectArtworkProps = {
  kind: ProjectArtworkKind;
  className?: string;
};

/**
 * Lightweight, on-theme SVG illustrations used as the "cover image" for each
 * project (on the home cards and, larger, on the detail hero). Line-art on a
 * translucent white panel so it reads cleanly over any theme gradient.
 */
export default function ProjectArtwork({ kind, className }: ProjectArtworkProps) {
  return (
    <svg
      viewBox="0 0 400 220"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-hidden="true"
    >
      {/* screen / panel */}
      <rect
        x="24"
        y="20"
        width="352"
        height="180"
        rx="18"
        fill="rgba(255,255,255,0.72)"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="1.5"
      />
      <rect
        x="24"
        y="20"
        width="352"
        height="40"
        rx="18"
        fill="rgba(255,255,255,0.55)"
      />
      <circle cx="46" cy="40" r="4" fill="#cbd5e1" />
      <circle cx="60" cy="40" r="4" fill="#e2e8f0" />
      <circle cx="74" cy="40" r="4" fill="#e2e8f0" />

      {kind === "devops" ? <DevOpsArt /> : null}
      {kind === "commerce" ? <CommerceArt /> : null}
      {kind === "backend" ? <BackendArt /> : null}
    </svg>
  );
}

function DevOpsArt() {
  const accent = "#10b981";
  const line = "#475569";
  // A CI/CD pipeline: commit -> build -> container -> ship, connected by a flow line.
  const y = 130;
  const xs = [80, 165, 250, 335];
  return (
    <g>
      {/* connecting flow line */}
      <line x1={xs[0]} y1={y} x2={xs[3]} y2={y} stroke={accent} strokeWidth="2.5" strokeDasharray="1 8" strokeLinecap="round" />
      {/* commit node */}
      <circle cx={xs[0]} cy={y} r="18" fill="#fff" stroke={line} strokeWidth="2" />
      <circle cx={xs[0]} cy={y} r="4.5" fill={accent} />
      <line x1={xs[0]} y1={y - 18} x2={xs[0]} y2={y - 6} stroke={line} strokeWidth="2" />
      <line x1={xs[0]} y1={y + 6} x2={xs[0]} y2={y + 18} stroke={line} strokeWidth="2" />
      {/* build gear */}
      <circle cx={xs[1]} cy={y} r="18" fill="#fff" stroke={line} strokeWidth="2" />
      <circle cx={xs[1]} cy={y} r="7" fill="none" stroke={accent} strokeWidth="2.5" />
      <circle cx={xs[1]} cy={y} r="2" fill={line} />
      {/* container box */}
      <rect x={xs[2] - 18} y={y - 16} width="36" height="32" rx="5" fill="#fff" stroke={line} strokeWidth="2" />
      <line x1={xs[2] - 18} y1={y - 4} x2={xs[2] + 18} y2={y - 4} stroke={line} strokeWidth="1.5" />
      <line x1={xs[2] - 5} y1={y - 16} x2={xs[2] - 5} y2={y - 4} stroke={line} strokeWidth="1.5" />
      <line x1={xs[2] + 8} y1={y - 16} x2={xs[2] + 8} y2={y - 4} stroke={line} strokeWidth="1.5" />
      {/* server / ship */}
      <rect x={xs[3] - 18} y={y - 18} width="36" height="14" rx="3" fill="#fff" stroke={line} strokeWidth="2" />
      <rect x={xs[3] - 18} y={y + 2} width="36" height="14" rx="3" fill="#fff" stroke={line} strokeWidth="2" />
      <circle cx={xs[3] - 10} cy={y - 11} r="2" fill={accent} />
      <circle cx={xs[3] - 10} cy={y + 9} r="2" fill={accent} />
      {/* header status bars */}
      <rect x="150" y="34" width="120" height="6" rx="3" fill="#e2e8f0" />
      <rect x="150" y="34" width="70" height="6" rx="3" fill={accent} opacity="0.7" />
      {/* labels row */}
      <rect x={xs[0] - 22} y={y + 30} width="44" height="6" rx="3" fill="#cbd5e1" />
      <rect x={xs[1] - 22} y={y + 30} width="44" height="6" rx="3" fill="#cbd5e1" />
      <rect x={xs[2] - 22} y={y + 30} width="44" height="6" rx="3" fill="#cbd5e1" />
      <rect x={xs[3] - 22} y={y + 30} width="44" height="6" rx="3" fill="#cbd5e1" />
    </g>
  );
}

function CommerceArt() {
  const accent = "#f43f5e";
  const line = "#475569";
  // A storefront product card + cart badge.
  return (
    <g>
      {/* product image */}
      <rect x="52" y="78" width="90" height="72" rx="10" fill="#fff" stroke={line} strokeWidth="2" />
      <rect x="66" y="92" width="62" height="34" rx="6" fill="#fecdd3" />
      <circle cx="84" cy="108" r="8" fill="#fb7185" />
      <path d="M100 122 l12 -14 l14 18" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* title + price lines */}
      <rect x="168" y="86" width="150" height="8" rx="4" fill="#cbd5e1" />
      <rect x="168" y="104" width="110" height="7" rx="3.5" fill="#e2e8f0" />
      <rect x="168" y="120" width="64" height="14" rx="7" fill={accent} opacity="0.85" />
      {/* add to cart pill */}
      <rect x="168" y="150" width="120" height="20" rx="10" fill="#fff" stroke={line} strokeWidth="2" />
      <circle cx="184" cy="160" r="4" fill={accent} />
      <rect x="196" y="157" width="60" height="6" rx="3" fill="#cbd5e1" />
      {/* floating cart badge */}
      <circle cx="330" cy="86" r="18" fill="#fff" stroke={line} strokeWidth="2" />
      <path d="M322 80 h13 l-2 10 h-9 z" fill="none" stroke={line} strokeWidth="2" strokeLinejoin="round" />
      <circle cx="325" cy="93" r="1.6" fill={line} />
      <circle cx="332" cy="93" r="1.6" fill={line} />
      <circle cx="339" cy="76" r="6" fill={accent} />
      {/* header search bar */}
      <rect x="150" y="34" width="150" height="6" rx="3" fill="#e2e8f0" />
      <rect x="150" y="34" width="46" height="6" rx="3" fill={accent} opacity="0.6" />
    </g>
  );
}

function BackendArt() {
  const accent = "#0ea5e9";
  const line = "#475569";
  // API layer -> database cylinder + cache, with connectors.
  return (
    <g>
      {/* API endpoint rows */}
      <rect x="52" y="80" width="120" height="70" rx="10" fill="#fff" stroke={line} strokeWidth="2" />
      {[92, 108, 124, 140].map((cy, i) => (
        <g key={cy}>
          <circle cx="66" cy={cy} r="3.5" fill={i === 0 ? accent : "#94a3b8"} />
          <rect x="78" y={cy - 3} width={i % 2 === 0 ? 74 : 58} height="6" rx="3" fill="#e2e8f0" />
        </g>
      ))}
      {/* connectors */}
      <line x1="172" y1="104" x2="236" y2="104" stroke={accent} strokeWidth="2.5" strokeDasharray="1 7" strokeLinecap="round" />
      <line x1="172" y1="128" x2="236" y2="150" stroke={accent} strokeWidth="2.5" strokeDasharray="1 7" strokeLinecap="round" />
      {/* database cylinder */}
      <g stroke={line} strokeWidth="2" fill="#fff">
        <ellipse cx="286" cy="90" rx="34" ry="11" />
        <path d="M252 90 v34 a34 11 0 0 0 68 0 v-34" fill="#fff" />
      </g>
      <ellipse cx="286" cy="90" rx="34" ry="11" fill="none" stroke={line} strokeWidth="2" />
      <path d="M252 107 a34 11 0 0 0 68 0" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
      <ellipse cx="286" cy="90" rx="20" ry="6" fill={accent} opacity="0.18" />
      {/* redis cache chip */}
      <rect x="252" y="140" width="60" height="26" rx="6" fill="#fff" stroke={line} strokeWidth="2" />
      <circle cx="266" cy="153" r="4" fill={accent} />
      <rect x="278" y="150" width="26" height="6" rx="3" fill="#cbd5e1" />
      {/* header bar */}
      <rect x="150" y="34" width="130" height="6" rx="3" fill="#e2e8f0" />
      <rect x="150" y="34" width="52" height="6" rx="3" fill={accent} opacity="0.6" />
    </g>
  );
}
