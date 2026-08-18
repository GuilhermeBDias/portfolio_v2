import { motion } from "motion/react";
import { useEffect, useState } from "react";

const signalLevels = [0, 1, 2, 3, 4, 3, 2, 1];

export const SignalIndicator = () => {
  const [signalIndex, setSignalIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSignalIndex((current) => {
        return (current + 1) % signalLevels.length;
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const signal = signalLevels[signalIndex];

  return (
    <div className="flex items-end gap-0.5 h-6">
      {[1, 2, 3, 4].map((bar) => (
        <motion.div
          key={bar}
          className="w-1 rounded-sm bg-[#00f0ff]"
          style={{
            height: `${bar * 5}px`,
          }}
          animate={{
            opacity: signal >= bar ? 1 : 0.15,
            scaleY: signal >= bar ? 1 : 0.5,
            filter:
              signal >= bar
                ? "drop-shadow(0 0 4px #00f0ff)"
                : "drop-shadow(0 0 0px #00f0ff)",
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};