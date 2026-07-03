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