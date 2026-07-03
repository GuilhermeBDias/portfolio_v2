import { useState } from "react";
import { ProjectsCard } from "../../components/ui/ProjectsCard";
import { projects } from "../../constants/projects_constants";
import { AnimatePresence, motion } from "motion/react";
import type { Project } from "../../types/project";
import { ProjectModal } from "../../components/ui/ProjectModal";

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const card = {
    hidden: {
      opacity: 0,
      y: 120,
      filter: "blur(8px)",
      transition: {
        duration: 0.6,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6 },
    },
    exit: {
      opacity: 0,
      y: -40,
      filter: "blur(6px)",
      transition: {
        duration: 0.35,
      },
    },
  };
  return (
    <section
      id="projects"
      className="relative flex justify-center md:justify-end items-center w-full min-h-screen second-background"
    >
      <div className="flex flex-col items-center w-[85%] h-full py-10 gap-4 md:px-20">
        <div className="flex gap-4 items-center justify-start w-full">
          <div className="tertiary-color w-3 h-3" />
          <h3 className="tertiary-text-color text-lg md:text-2xl tracking-[0.3rem] font-extralight">
            ARCHIVED_PROJECTS
          </h3>
        </div>
        {/* Mobile */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:hidden ">
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={card}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                <ProjectsCard
                  {...project}
                  onOpen={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
            <div className="flex justify-center md:hidden mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="border border-[#bc13fe] px-6 py-3 uppercase w-full tracking-widest hover:bg-[#bc13fe] hover:text-black transition-colors"
              >
                {showAll ? "SHOW LESS" : "MORE PROJECTS"}
              </button>
            </div>
          </AnimatePresence>
        </motion.div>
        {/* Desktop */}
        <motion.div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 w-full ">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <ProjectsCard
                {...project}
                onOpen={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
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
