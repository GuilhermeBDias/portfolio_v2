import { ExperienceCard } from "../../components/ui/ExperienceCard";
import { experiences } from "../../constants/experience_constants";
import { MdHistory } from "react-icons/md";
import { motion } from "motion/react";
import {
  createRevealVariants,
  createStaggerVariants,
} from "../../utils/motionVariants";

export const Experience = () => {
  const contentVariants = createStaggerVariants({
    delayChildren: 0.2,
    staggerChildren: 0.3,
  });

  const itemVariants = createRevealVariants({
    hiddenX: -28,
    duration: 0.6,
  });
  const itemVariants2 = createRevealVariants({
    hiddenX: 48,
    duration: 0.6,
  });
  return (
    <section
      id="experience"
      className="scroll-mt-20 flex w-full min-h-screen items-center py-12 md:py-0  "
    >
      <motion.div
        variants={contentVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="md:absolute md:right-0 flex flex-col w-full md:w-[85%] items-center md:justify-start px-8 md:px-20 z-10 gap-10 md:py-10"
      >
        {/* Content */}
        <motion.div
          variants={contentVariants}
          className="flex gap-4 items-center justify-start w-full"
        >
          <motion.div
            variants={itemVariants}
            className="tertiary-color w-3 h-3"
          />
          <motion.h3
            variants={itemVariants}
            className="flex items-center justify-between w-full tertiary-text-color text-lg md:text-2xl tracking-[0.3rem] font-extralight"
          >
            DATA_LOG_HISTORY
            <motion.span variants={itemVariants2}>
              <MdHistory
                size={25}
                className="hidden md:flex tertiary-text-color animate-pulse"
              />
            </motion.span>
          </motion.h3>
        </motion.div>
        <motion.div
          variants={contentVariants}
          className="w-full flex flex-col gap-10"
        >
          {experiences.map((experience, index) => (
            <motion.div variants={itemVariants} key={index}>
              <ExperienceCard
                title={experience.title}
                company={experience.company}
                mobileCompany={experience.mobileCompany}
                startDate={experience.startDate}
                endDate={experience.endDate}
                description={experience.description}
                skills={experience.skills}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
