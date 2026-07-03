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

    setProgress(0);
    setCompleted(false);

    const interval = 16; // ~60fps
    const increment = max / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;

        if (next >= max) {
          clearInterval(timer);
          setCompleted(true);
          return max;
        }

        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [duration, max, start]);

  return {
    progress,
    completed,
  };
};