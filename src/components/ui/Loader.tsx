import { useEffect, useState } from "react";
import { useTypewriter } from "../../hooks/useTypewriter";
import { useLoaderProgress } from "../../hooks/useLoaderProgress";
import { AnimatePresence, motion } from "motion/react";

const loaderSpeed = 20;

const getDelay = (text: string) => text.length * loaderSpeed + 500;

const loaderStages = [
  {
    text: "Initializing system...",
    duration: getDelay("Initializing system..."),
    pause: 250,
  },
  {
    text: "Loading modules...",
    duration: getDelay("Loading modules..."),
    pause: 160,
  },
  {
    text: "Connecting to server...",
    duration: getDelay("Connecting to server..."),
    pause: 200,
  },
  {
    text: "Starting UI...",
    duration: getDelay("Starting UI..."),
    pause: 0,
  },
] as const;

export const Loader = ({ onFinish }: { onFinish: () => void }) => {
  const [activeStage, setActiveStage] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const progress = useLoaderProgress(loaderStages);

  const { displayedText: currentText } = useTypewriter(
    loaderStages[activeStage].text,
    loaderSpeed,
    true,
  );

  useEffect(() => {
    let elapsed = 0;

    const timers = loaderStages.slice(0, -1).map((stage, index) => {
      elapsed += stage.duration + stage.pause;

      return setTimeout(() => {
        setActiveStage(index + 1);
      }, elapsed);
    });

    const totalTime = loaderStages.reduce(
      (total, stage) => total + stage.duration + stage.pause,
      0,
    );

    const finishTimer = setTimeout(() => {
      setShowButton(true);
    }, totalTime);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(finishTimer);
    };
  }, []);

  return (
    <div className="flex flex-col w-full h-screen bg-black justify-center primary-text-color font-mono p-6 items-center">
      <div className="flex flex-col w-70">
        <div className="h-28 text-sm leading-7">
          {loaderStages.map((stage, index) => (
            <p
              key={stage.text}
              aria-hidden={index > activeStage}
              className={`h-7 whitespace-nowrap ${
                index > activeStage
                  ? "opacity-0"
                  : index === activeStage
                    ? "primary-text-color"
                    : "opacity-50"
              }`}
            >
              <span className="opacity-50">{">"}</span>{" "}
              {index === activeStage ? currentText : stage.text}
              {index === activeStage && (
                <span className="animate-pulse">|</span>
              )}
            </p>
          ))}
        </div>
      </div>
      {/* Progress */}
      <div className="mt-6 w-50">
        <div className="flex justify-between text-xs mb-2">
          <span>Loading system...</span>
          <span>{Math.floor(progress)}%</span>
        </div>

        <div className="h-2 w-full bg-green-950 border border-green-500/30">
          <div
            className="h-full primary-color transition-[width] duration-75"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      {/* Button */}
      <div className="mt-8 h-32 w-full md:w-[50%] flex justify-center">
        <AnimatePresence>
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col items-center gap-4 w-full"
            >
              <motion.button
                onClick={onFinish}
                className="
                  border
                  border-[#bc13fe]
                  px-6
                  py-3
                  text-[#bc13fe]
                  hover:bg-[#bc13fe]
                  hover:text-black
                  transition-colors
                  duration-200
                  w-full
                  md:w-[60%]
                "
                whileTap={{ scale: 0.95 }}
              >
                [ ENTER SYSTEM ]
              </motion.button>
              <p className="text-sm md:text-lg text-center w-full md:w-[70%]">
                This portfolio is just a prototype; not all the information is
                true.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
