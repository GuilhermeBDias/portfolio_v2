import { motion } from "motion/react";
import type { Project } from "../../types/project";
import {
  createPresenceFadeVariants,
  createRevealVariants,
  createStaggerVariants,
} from "../../utils/motionVariants";

export interface ProjectsCardProps extends Project {
  onOpen: () => void;
}

export const ProjectsCard = ({
  modulo,
  status,
  title,
  description,
  image,
  primary_stacks,
  onOpen,
}: ProjectsCardProps) => {
  const contentVariants = createStaggerVariants({delayChildren: 0.2, staggerChildren: 0.2});

  const itemVariants = createRevealVariants({ hiddenY: 38, duration: 0.6 });

  const stackItemVariants = createRevealVariants({
    hiddenX: -38,
    duration: 0.65,
  });

  const imageVariants = createPresenceFadeVariants({ duration: 1.2 });
  return (
    <motion.article
      className="flex flex-col w-full h-140 border border-gray-900"
      variants={contentVariants}
    >
      <motion.header
        variants={contentVariants}
        className="flex w-full items-center justify-between border-b border-gray-900 px-6 py-3 bg-[#0b0b0b]"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <div className="h-3 w-3 item primary-color animate-pulse" />
          <h2>{modulo}</h2>
        </motion.div>

        <motion.h3 variants={itemVariants}>{status}</motion.h3>
      </motion.header>
      <div className="relative flex flex-col h-full justify-end p-6 gap-4">
        <motion.div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{ backgroundImage: `url(${image})` }}
          variants={imageVariants}
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0b0b0b]/50 via-[#0b0b0b]/90 to-[#0b0b0b]" />

        <motion.div
          variants={contentVariants}
          className="flex flex-col items-center w-full z-10 gap-6"
        >
          <motion.div
            variants={contentVariants}
            className="absolute top-6 right-6 flex flex-col items-end gap-3"
          >
            {primary_stacks.map((stack) => (
              <motion.span
                key={stack}
                className="bg-[#0b0b0b] px-2 py-1 border border-[#00f0ff] tertiary-text-color"
                variants={stackItemVariants}
              >
                {stack}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            variants={contentVariants}
            className="flex flex-col w-full gap-2"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl font-serif font-bold"
            >
              {title}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-color"
            >
              {description}
            </motion.p>
            <motion.button
              variants={itemVariants}
              onClick={onOpen}
              className="cursor-pointer w-full md:w-[50%] self-center  p-2 border border-[#bc13fe] hover:bg-[#bc13fe] hover:text-[#0b0b0b] transition-colors mt-4"
              whileTap={{scale: 0.95}}
            >
              ACCESS_MODULE
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.article>
  );
};
