import { ExperienceCard } from "../../components/ui/ExperienceCard";
import { Experiences } from "../../constants/experience_constants";

export const Experience = () => {
  return (
    <section
      id="experience"
      className=" flex w-full min-h-screen items-center py-24 md:py-0  md:my-20"
    >
      <div className="md:absolute md:right-0 flex flex-col w-full md:w-[85%] items-center md:justify-start px-8 md:px-20 z-10 gap-10 md:py-10">
        {/* Content */}
        <div className="flex gap-4 items-center justify-start w-full">
          <div className="tertiary-color w-3 h-3" />
          <h3 className="tertiary-text-color text-lg md:text-2xl tracking-[0.3rem] font-extralight">
            DATA_LOG_HISTORY
          </h3>
        </div>
        <div className="w-full flex flex-col gap-10">
          {Experiences.map ((experience, index) => (
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

