import { useEffect, useState } from "react";

export const useTypewriter = (text: string, speed: number, start: boolean) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!start) return;

    let index = 0;
    const resetTimer = window.setTimeout(() => {
      setDisplayedText("");
    }, 0);

    const interval = setInterval(() => {
      index += 1;
      setDisplayedText(text.slice(0, index));

      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => {
      window.clearTimeout(resetTimer);
      clearInterval(interval);
    };
  }, [text, speed, start]);

  return displayedText;
};