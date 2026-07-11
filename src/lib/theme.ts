export type Theme = {
  id: string;
  label: string;
  overlayClass: string;
  previewClass: string;
};

export const themes: Theme[] = [
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

// Shared across the home page and project detail pages so a visitor's chosen
// theme follows them as they navigate.
export const THEME_STORAGE_KEY = "portfolio-theme-index";
