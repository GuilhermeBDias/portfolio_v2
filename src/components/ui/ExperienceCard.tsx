import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

export const ExperienceCard = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center 70%", "end 60%"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.2, 1]);
  const borderColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#3a3a3a", "#bc13fe", "#bc13fe"]
  )

  return (
    <article ref={ref} className="relative flex gap-6  w-full md:px-10 py-6 md:bg-[#131212]">
      {/* TIMELINE */}
      <div className="relative flex flex-col items-center">
        {/* square */}
        <div className="w-2 h-2 primary-color z-10" />

        {/* LINE */}
        <div className="relative w-0.5 flex-1 bg-neutral-800 mt-2">
          {/* ANIMATED LINE */}
          <motion.div
            style={{ height }}
            className="absolute top-0 left-0 w-full tertiary-color origin-top"
          />
        </div>
      </div>
      {/* Card */}
      <div className="flex flex-col  gap-4">
        <div className="flex flex-col md:flex-row-reverse md:justify-between gap-2">
          <motion.span className="tertiary-text-color text-sm md:text-xl" style={{opacity}}>2025 - PRESENT</motion.span>
          <h2 className="text-base md:text-3xl">SOFTWARE ENGINEER INTERN</h2>
        </div>
        <p className="text-color-2 text-base md:text-2xl">
          Defining core infrastructured for next-gen fintech solutions.
          Orchestrating monolithic deployments and microservice bridges.
        </p>

        <div>
          <ul className="flex gap-2 text-sm md:text-lg">
            <motion.li 
              className="border-l-3 p-2 bg-[#201e1e]" 
              style={{ borderColor,opacity }}
            >
              REACT
            </motion.li>
            <motion.li 
              className="border-l-3 p-2 bg-[#201e1e]" 
              style={{ borderColor,opacity }}
            >
              TYPESCRIPT
            </motion.li>
            <motion.li 
              className="border-l-3 p-2 bg-[#201e1e]" 
              style={{ borderColor,opacity }}
            >
              EXPRESS
            </motion.li>
          </ul>
        </div>
      </div>
    </article>
  );
};
