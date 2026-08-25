import { useEffect, useState } from "react";

export const useProgress = (duration = 1500, max = 100, start = true) => {
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!start) {
      return;
    }

    let animationFrame: number;
    const startTime = performance.now();

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const percentage = Math.min(elapsed / duration, 1);

      setProgress(percentage * max);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateProgress);
        return;
      }

      setCompleted(true);
    };

    setProgress(0);
    setCompleted(false);
    animationFrame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [duration, max, start]);

  return {
    progress,
    completed,
  };
};
