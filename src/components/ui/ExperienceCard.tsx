import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

interface ExperienceCardProps {
  title?: string;
  company?: string;
  mobile_company?: string;
  startDate?: string;
  endDate?: string | null;
  description?: string;
  skills: string[];
}

export const ExperienceCard = ({
  title,
  company,
  mobile_company,
  startDate,
  endDate,
  description,
  skills,
}: ExperienceCardProps) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center 70%", "end 60%"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [0.2, 1]);
  const borderColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#3a3a3a", "#bc13fe", "#bc13fe"],
  );

  return (
    <article
      ref={ref}
      className="relative flex gap-6  w-full md:px-10 py-6 md:bg-[#131212]"
    >
      {/* TIMELINE */}
      <div className="relative flex flex-col items-center">
        {/* square */}
        <motion.div
          style={{ opacity }}
          className="w-2 h-2 primary-color z-10 rounded-full shadow-[0px_0px_8px_3px_rgba(203,52,223,0.7)]"
        />

        {/* LINE */}
        <div className="relative w-0.5 flex-1 bg-neutral-800 mt-2">
          {/* ANIMATED LINE */}
          <motion.div
            style={{ height, opacity }}
            className="absolute top-0 left-0 w-full bg-linear-to-b from-[#00f0ff] from-30% to-[#bc13fe] to-60% origin-top"
          />
        </div>
      </div>
      {/* Card */}
      <div className="flex flex-col  gap-4">
        <motion.div className="flex flex-col md:flex-row-reverse md:justify-between gap-2">
          <motion.span
            className="flex flex-col gap-1 tertiary-text-color text-sm md:text-xl"
            style={{ opacity }}
          >
            {startDate && endDate
              ? `${startDate} - ${endDate}`
              : `${startDate} - Present`}
            <span className="text-base text-color">Current - Node</span>
          </motion.span>
          <motion.h2 style={{ opacity }} className="text-base md:text-3xl flex justify-between md:flex-col gap-2 items-center md:items-start ">
            {title}
            <span className="text-lg hidden md:block">@{company}</span>
            <span className="text-sm md:hidden">@{mobile_company}</span>
          </motion.h2>
        </motion.div>
        <motion.p
          style={{ opacity }}
          className="text-color-2 text-base md:text-2xl w-full md:w-[80%] text-justify"
        >
          {description}
        </motion.p>

        <div>
          <ul className="flex flex-wrap gap-2 text-sm md:text-lg">
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                className="border-l-3 px-4 py-1  bg-[#201e1e]"
                style={{ borderColor, opacity }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};
