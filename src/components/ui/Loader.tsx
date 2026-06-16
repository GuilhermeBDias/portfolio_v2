import { useEffect, useState } from "react";

export const useTypewriter = (text: string, speed: number, start: boolean) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!start) return;

    let i = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;

      if (i === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, start]);

  return displayedText;
};

export const Loader = ({ onFinish }: { onFinish: () => void }) => {
  const [step, setStep] = useState(0);
  const speed = 60;

  const texts = [
    "Initializing system...",
    "Loading modules...",
    "Connecting to server...",
    "Starting UI...",
  ];

  const getDelay = (text: string) => text.length * speed + 500;

  const totalTime =
    getDelay(texts[0]) +
    getDelay(texts[1]) +
    getDelay(texts[2]) +
    getDelay(texts[3]);

  const line1 = useTypewriter(texts[0], speed, step >= 0);
  const line2 = useTypewriter(texts[1], speed, step >= 1);
  const line3 = useTypewriter(texts[2], speed, step >= 2);
  const line4 = useTypewriter(texts[3], speed, step >= 3);

  useEffect(() => {
    const delay1 = getDelay(texts[0]);
    const delay2 = getDelay(texts[1]);
    const delay3 = getDelay(texts[2]);

    const timers = [
      setTimeout(() => setStep(1), delay1),
      setTimeout(() => setStep(2), delay1 + delay2),
      setTimeout(() => setStep(3), delay1 + delay2 + delay3),
    ];

    setTimeout(onFinish, totalTime);
    return () => timers.forEach(clearTimeout);
  }, []);

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
