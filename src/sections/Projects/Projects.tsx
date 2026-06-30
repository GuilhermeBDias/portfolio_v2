import { ProjectsCard } from "../../components/ui/ProjectsCard";
import { projects } from "../../constants/projects_constants";
import { motion } from "motion/react";

export const Projects = () => {
  const card = {
    hidden: { opacity: 0, y: 120, filter: "blur(8px)", transition: {
      duration: 0.6
    } },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6 },
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
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <ProjectsCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
