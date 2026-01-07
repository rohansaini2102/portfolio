"use client";

import { useEffect } from "react";
import { Alignment, EventType, Fit, Layout, useRive } from "@rive-app/react-canvas";

type RiveBackgroundProps = {
  className?: string;
};

const defaultTextRunNames = [
  "Breathe in",
  "Breathe out",
  "Breath in",
  "Breath out",
  "Inhale",
  "Exhale",
];

const candidateNamePattern = /^[A-Za-z0-9 ._-]{3,40}$/;

const extractCandidateNames = (buffer: ArrayBuffer) => {
  const bytes = new Uint8Array(buffer);
  const names: string[] = [];
  let current: number[] = [];

  const pushCurrent = () => {
    if (current.length >= 3 && current.length <= 40) {
      const value = String.fromCharCode(...current);
      if (candidateNamePattern.test(value) && /[A-Za-z]/.test(value)) {
        names.push(value);
      }
    }
    current = [];
  };

  bytes.forEach((byte) => {
    if (byte >= 32 && byte <= 126) {
      current.push(byte);
    } else {
      pushCurrent();
    }
  });
  pushCurrent();

  const seen = new Set<string>();
  return names.filter((name) => {
    if (seen.has(name)) {
      return false;
    }
    seen.add(name);
    return true;
  });
};

export default function RiveBackground({ className }: RiveBackgroundProps) {
  const { RiveComponent, rive } = useRive({
    src: "/12653-23995-breathing-animation.riv",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });

  useEffect(() => {
    if (!rive) {
      return;
    }

    const artboard = (
      rive as { artboard?: { textRun?: (name: string) => { text?: string } | null } }
    ).artboard;
    if (!artboard?.textRun) {
      return;
    }

    let cancelled = false;
    const textRuns: { text?: string }[] = [];

    const clearRuns = () => {
      textRuns.forEach((run) => {
        run.text = "";
      });
    };

    const tryName = (name: string) => {
      if (cancelled) {
        return;
      }
      const textRun = artboard.textRun(name);
      if (textRun) {
        textRun.text = "";
        textRuns.push(textRun);
      }
    };

    defaultTextRunNames.forEach(tryName);
    clearRuns();

    const handleAdvance = () => {
      clearRuns();
    };

    const attachAdvance = () => {
      if (textRuns.length > 0) {
        rive.on(EventType.Advance, handleAdvance);
      }
    };

    if (textRuns.length > 0) {
      attachAdvance();
      return () => {
        cancelled = true;
        rive.off(EventType.Advance, handleAdvance);
      };
    }

    const findTextRuns = async () => {
      try {
        const response = await fetch("/12653-23995-breathing-animation.riv");
        const buffer = await response.arrayBuffer();
        if (cancelled) {
          return;
        }
        extractCandidateNames(buffer).forEach(tryName);
        clearRuns();
        attachAdvance();
      } catch {
        // Ignore: if parsing fails, the default names are the only attempt.
      }
    };

    void findTextRuns();
    return () => {
      cancelled = true;
      rive.off(EventType.Advance, handleAdvance);
    };
  }, [rive]);

  return (
    <div className={className}>
      <RiveComponent className="h-full w-full" />
    </div>
  );
}
