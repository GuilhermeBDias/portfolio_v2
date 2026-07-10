import { useEffect, useState } from "react";

export const useProgress = (
  duration = 1500,
  max = 100,
  start = true
) => {
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!start) return;

    const frameInterval = 16; // ~60fps
    const increment = max / (duration / frameInterval);

    const resetTimer = window.setTimeout(() => {
      setProgress(0);
      setCompleted(false);
    }, 0);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;

        if (next >= max) {
          clearInterval(progressTimer);
          setCompleted(true);
          return max;
        }

        return next;
      });
    }, frameInterval);

    const finishTimer = window.setTimeout(() => {
      setProgress(max);
      setCompleted(true);
      clearInterval(progressTimer);
    }, duration);

    return () => {
      clearTimeout(resetTimer);
      clearInterval(progressTimer);
      clearTimeout(finishTimer);
    };
  }, [duration, max, start]);

  return {
    progress,
    completed,
  };
};