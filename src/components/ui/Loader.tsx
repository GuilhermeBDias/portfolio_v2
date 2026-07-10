import { useEffect, useState } from "react";
import { useTypewriter } from "../../hooks/useTypewriter";

const loaderTexts = [
  "Initializing system...",
  "Loading modules...",
  "Connecting to server...",
  "Starting UI...",
] as const;

const loaderSpeed = 60;

const getDelay = (text: string) => text.length * loaderSpeed + 500;

const totalTime =
  getDelay(loaderTexts[0]) +
  getDelay(loaderTexts[1]) +
  getDelay(loaderTexts[2]) +
  getDelay(loaderTexts[3]);

export const Loader = ({ onFinish }: { onFinish: () => void }) => {
  const [step, setStep] = useState(0);
  const line1 = useTypewriter(loaderTexts[0], loaderSpeed, step >= 0);
  const line2 = useTypewriter(loaderTexts[1], loaderSpeed, step >= 1);
  const line3 = useTypewriter(loaderTexts[2], loaderSpeed, step >= 2);
  const line4 = useTypewriter(loaderTexts[3], loaderSpeed, step >= 3);

  useEffect(() => {
    const delay1 = getDelay(loaderTexts[0]);
    const delay2 = getDelay(loaderTexts[1]);
    const delay3 = getDelay(loaderTexts[2]);

    const timers = [
      setTimeout(() => setStep(1), delay1),
      setTimeout(() => setStep(2), delay1 + delay2),
      setTimeout(() => setStep(3), delay1 + delay2 + delay3),
    ];

    const finishTimer = setTimeout(onFinish, totalTime);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className="flex flex-col w-full h-screen bg-black justify-center text-green-400 font-mono p-6 items-center">
      {step >= 0 && (
        <p>
          {line1} {step === 0 && <span>|</span>}
        </p>
      )}
      {step >= 1 && (
        <p>
          {line2} {step === 1 && <span>|</span>}
        </p>
      )}
      {step >= 2 && (
        <p>
          {line3} {step === 2 && <span>|</span>}
        </p>
      )}
      {step >= 3 && (
        <p>
          {line4} {step === 3 && <span>|</span>}
        </p>
      )}
    </div>
  );
};
