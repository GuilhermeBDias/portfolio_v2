import { useEffect, useRef, useState } from "react";
import { ProjectsCard } from "../../components/ui/ProjectsCard";
import { projects } from "../../constants/projects_constants";
import { AnimatePresence, motion } from "motion/react";
import type { Project } from "../../types/project";
import { ProjectModal } from "../../components/ui/ProjectModal";
import { createRevealVariants } from "../../utils/motionVariants";
import { FaFolderOpen } from "react-icons/fa6";

export const Projects = () => {
  const initialVisibleProjects = 2;
  const [visibleProjects, setVisibleProjects] = useState(
    initialVisibleProjects,
  );

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectsSectionRef = useRef<HTMLElement | null>(null);
  const revealedProjectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (
      visibleProjects === initialVisibleProjects ||
      visibleProjects > projects.length ||
      window.innerWidth >= 768
    ) {
      return;
    }

    const scrollTimer = window.setTimeout(() => {
      revealedProjectRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);

    return () => window.clearTimeout(scrollTimer);
  }, [visibleProjects]);

  const handleProjectsToggle = () => {
    if (visibleProjects < projects.length) {
      setVisibleProjects((current) => current + 1);
      return;
    }

    setVisibleProjects(initialVisibleProjects);
    projectsSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const card = createRevealVariants({
    hiddenY: 120,
    duration: 0.6,
    blur: 6,
  });
  return (
    <section
      id="projects"
      ref={projectsSectionRef}
      className="relative flex justify-center md:justify-end items-center w-full min-h-screen second-background py-10 md:pt-0"
    >
      {/* Gradient overlays */}
      <div className="absolute inset-x-0 top-0 h-22 bg-linear-to-b from-[#0b0b0b] via-[#0f0e0e] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-22 bg-linear-to-t from-[#0b0b0b] via-[#0f0e0e] to-transparent" />

      <div className="flex flex-col items-center w-[85%] h-full py-10 gap-4 md:px-20 z-10">
        <motion.div
          className="flex gap-4 items-center justify-start w-full"
          variants={card}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="tertiary-color w-3 h-3" />
          <motion.h3 className="flex flex-col gap-2 md:flex-row md:items-center justify-between w-full tertiary-text-color text-lg md:text-2xl tracking-[0.3rem] font-extralight">
            ARCHIVED_PROJECTS
            <p className="text-sm md:text-lg w-full md:w-[50%]">
              All this projects here are just examples, they are not real.
            </p>
            <motion.span>
              <FaFolderOpen
                size={20}
                className="hidden md:flex tertiary-text-color animate-pulse"
              />
            </motion.span>
          </motion.h3>
        </motion.div>
        {/* Mobile */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={card}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                ref={
                  project.id === visibleProjects
                    ? revealedProjectRef
                    : undefined
                }
                className={
                  index >= visibleProjects ? "hidden md:block" : undefined
                }
              >
                <ProjectsCard
                  {...project}
                  onOpen={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
            <div className="flex justify-center md:hidden mt-8">
              <button
                type="button"
                onClick={(event) => {
                  event.currentTarget.blur();
                  handleProjectsToggle();
                }}
                className="border border-[#bc13fe] px-6 py-3 uppercase w-full tracking-widest hover:bg-[#bc13fe] hover:text-black transition-colors"
              >
                {visibleProjects === projects.length
                  ? "SHOW LESS"
                  : "MORE PROJECTS"}
              </button>
            </div>
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
