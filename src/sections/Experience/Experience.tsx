import { ExperienceCard } from "../../components/ui/ExperienceCard";
import { experiences } from "../../constants/experience_constants";
import { MdHistory } from "react-icons/md";
import { motion } from "motion/react";

export const Experience = () => {
  return (
    <section
      id="experience"
      className=" flex w-full min-h-screen items-center py-12 md:py-0  "
    >
      <div className="md:absolute md:right-0 flex flex-col w-full md:w-[85%] items-center md:justify-start px-8 md:px-20 z-10 gap-10 md:py-10">
        {/* Content */}
        <div className="flex gap-4 items-center justify-start w-full">
          <div className="tertiary-color w-3 h-3" />
          <motion.h3 className="flex items-center justify-between w-full tertiary-text-color text-lg md:text-2xl tracking-[0.3rem] font-extralight">
            DATA_LOG_HISTORY
            <motion.span>
              <MdHistory
                size={25}
                className="hidden md:flex tertiary-text-color animate-pulse"
              />
            </motion.span>
          </motion.h3>
        </div>
        <div className="w-full flex flex-col gap-10">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              title={experience.title}
              company={experience.company}
              mobile_company={experience.mobile_company}
              startDate={experience.startDate}
              endDate={experience.endDate}
              description={experience.description}
              skills={experience.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
