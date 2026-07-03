import type { Project } from "../../types/project";
import { MdTerminal } from "react-icons/md";

import { motion } from "motion/react";
import { useProgress } from "../../hooks/useProgress";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const { progress, completed } = useProgress(2500);

  const container = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.45,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.45,
      },
    },
  };
  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-xs px-4"
      onClick={onClose}
    >
      {/* MODAL WINDOW */}
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col gap-12 relative w-full max-w-2xl second-background border-t-4 border-t-[#e6bcf5] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row w-full text-base md:text-xl items-start justify-between">
          <div className="flex gap-2 items-center">
            <MdTerminal
              size={30}
              className="hidden md:block tertiary-text-color"
            />
            <h1>SYSTEM_SPECIFICATION</h1>
          </div>
          <span className="tertiary-text-color">ACCESS_GRANTED</span>
        </div>
        {/* conteúdo */}
        <div className="flex flex-col w-full h-full gap-6">
          <div className="flex flex-col w-full gap-4 tracking-[0.12rem] tertiary-text-color text-base md:text-lg">
            <h2>
              {">>"} Initializing {project?.title}...
            </h2>

            <p className="text-xs md:text-base text-color-2">
              Loading system modules{" "}
              {!completed ? `[${progress.toFixed(1)}%]` : "COMPLETED"}
            </p>
            <span className="border border-dashed w-full border-[#e6bcf5]  "/>
          </div>
          <div>
            <h1 className="flex w-full gap-4 tracking-[0.12rem]">PROJECT: {project?.title} {project?.version}</h1>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
