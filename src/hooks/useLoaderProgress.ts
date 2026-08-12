import { useEffect, useState } from "react";

type LoaderStage = {
  text: string;
  duration: number;
  pause: number;
};

export const useLoaderProgress = (
  stages: readonly LoaderStage[],
  start = true
) => {
  const [progress, setProgress] = useState(0);

  const totalDuration = stages.reduce(
    (total, stage) =>
      total + stage.duration + stage.pause,
    0
  );

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now();

    let animationFrame: number;

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;

      let accumulatedTime = 0;
      let progress = 0;

      for (let i = 0; i < stages.length; i++) {
        const stage = stages[i];

        const stageStart = accumulatedTime;
        const stageEnd =
          stageStart + stage.duration;

        const pauseEnd =
          stageEnd + stage.pause;

        if (elapsed < stageEnd) {
          const stageProgress =
            (elapsed - stageStart) /
            stage.duration;

          progress =
            (i + stageProgress) /
            stages.length;

          break;
        }

        if (elapsed < pauseEnd) {
          progress =
            (i + 1) /
            stages.length;

          break;
        }

        accumulatedTime = pauseEnd;

        progress = (i + 1) / stages.length;
      }

      setProgress(progress * 100);

      if (elapsed < totalDuration) {
        animationFrame =
          requestAnimationFrame(update);
      } else {
        setProgress(100);
      }
    };

    animationFrame =
      requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [stages, start, totalDuration]);

  return progress;
};
