import { useEffect, useState } from "react";

export const useTypewriter = (
  text: string,
  speed: number,
  start: boolean,
  delay = 0,
) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!start) {
      return;
    }

    let index = 0;
    let interval: number | undefined;

    setIsComplete(false);

    const resetTimer = window.setTimeout(() => {
      setDisplayedText("");
    }, 0);

    const delayTimer = window.setTimeout(() => {
      interval = window.setInterval(() => {
        index += 1;
        setDisplayedText(text.slice(0, index));
        if (index >= text.length) {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(resetTimer);
      window.clearInterval(delayTimer);

      if (interval !== undefined) {
        window.clearInterval(interval);
      }
    };
  }, [text, speed, start, delay]);

  return { displayedText, isComplete };
};
