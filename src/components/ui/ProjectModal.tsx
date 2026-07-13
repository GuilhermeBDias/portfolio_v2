import type { Project } from "../../types/project";
import { MdClose, MdTerminal } from "react-icons/md";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { useProgress } from "../../hooks/useProgress";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const { progress, completed } = useProgress(1500);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!completed) {
      setShowContent(false);
      return;
    }

    const revealTimer = window.setTimeout(() => {
      setShowContent(true);
    }, 280);

    return () => {
      clearTimeout(revealTimer);
    };
  }, [completed, project?.title]);

  const container: Variants = {
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

  const content: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.6,
      },
    },
  };

  const itemVariants = {
    initial: {
      opacity: 0,
      filter: "blur(4px)",
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
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
        className="flex flex-col gap-8 relative w-full max-w-2xl min-h-164 md:min-h-160 overflow-hidden second-background border-t-4 border-t-[#e6bcf5] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-col  w-full text-base md:text-xl items-start justify-between">
          <div className="flex gap-2 items-center justify-between w-full">
            <div className="flex gap-2">
              <MdTerminal
                size={30}
                className="hidden md:block tertiary-text-color"
              />
              <h1>SYSTEM_SPECIFICATION</h1>
            </div>
            <button
              onClick={onClose}
              className="hover:bg-white/10 transition-colors cursor-pointer rounded-full"
            >
              <MdClose size={26} />
            </button>
          </div>
          <span className="tertiary-text-color">ACCESS_GRANTED</span>
        </div>
        {/* conteúdo */}
        <div className="flex flex-col w-full flex-1 gap-4 overflow-hidden">
          <div className="flex flex-col w-full gap-4 tracking-[0.12rem] tertiary-text-color text-base md:text-lg">
            <h2>
              {">>"} Initializing {project?.title}...
            </h2>

            <p className="text-sm md:text-base text-color-2">
              Loading system modules{" "}
              {!completed ? `[${progress.toFixed(1)}%]` : "COMPLETED"}
            </p>
            <span className="border border-dashed w-full border-[#e6bcf5]  " />
          </div>
          <motion.div
            variants={content}
            initial="initial"
            animate={showContent ? "animate" : "initial"}
            className="flex flex-col gap-4 flex-1 overflow-y-auto pr-1"
          >
            {showContent ? (
              <>
                {/* Project Details */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col gap-2"
                >
                  <h1 className="flex w-full tracking-[0.12rem] font-bold">
                    PROJECT: {project?.title} {project?.version}
                  </h1>
                  <p className="text-color-2 text-sm md:text-lg text-justify">
                    {project?.detailed_description}
                  </p>
                </motion.div>
                <motion.p variants={itemVariants}>TECH_STACK_REPORT:</motion.p>
                <motion.div
                  className="grid grid-cols-2 gap-2 "
                  variants={itemVariants}
                >
                  {project?.stacks.map((stack) => (
                    <motion.div
                      key={stack.name}
                      className="flex flex-col p-2 justify-between border-l-2 border-[#bc13fe] text-sm md:text-base bg-[#0b0b0b]"
                      variants={itemVariants}
                    >
                      <span className="tertiary-text-color">{stack.name}</span>
                      <span className="secondary-text-color">{`Usage: ${stack.percentage}%`}</span>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.button variants={itemVariants} className="p-2 bg-[#bc13fe] w-full md:w-[50%] self-center cursor-pointer hover:bg-[#bc13fe]/50 hover:text-[#0b0b0b] transition-colors">
                  ACCESS_PROJECT
                </motion.button>
              </>
            ) : null}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
