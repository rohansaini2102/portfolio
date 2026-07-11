"use client";

import { useCallback, useSyncExternalStore } from "react";
import { THEME_STORAGE_KEY, themes } from "./theme";

/**
 * Theme index backed by localStorage and shared between the home page and every
 * project detail page. Implemented with useSyncExternalStore so the value is
 * read on the client without a hydration mismatch (the server snapshot is always
 * index 0) and updates propagate within the tab and across tabs.
 */

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function emit() {
  listeners.forEach((listener) => listener());
}

function readIndex(): number {
  const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (saved === null) {
    return 0;
  }
  const parsed = Number(saved);
  if (Number.isInteger(parsed) && parsed >= 0 && parsed < themes.length) {
    return parsed;
  }
  return 0;
}

function getServerSnapshot(): number {
  return 0;
}

export function useThemeIndex() {
  const themeIndex = useSyncExternalStore(subscribe, readIndex, getServerSnapshot);

  const selectTheme = useCallback((index: number) => {
    const clamped = ((index % themes.length) + themes.length) % themes.length;
    window.localStorage.setItem(THEME_STORAGE_KEY, String(clamped));
    emit();
  }, []);

  const cycleTheme = useCallback(() => {
    selectTheme(readIndex() + 1);
  }, [selectTheme]);

  return { themeIndex, activeTheme: themes[themeIndex], cycleTheme, selectTheme };
}
