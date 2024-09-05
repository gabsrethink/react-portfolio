import React from "react";
import { motion } from "framer-motion";
import { ArrowOutward } from "@mui/icons-material";

interface ExperienceCardProps {
  experiences: {
    position: string;
    company: string;
    duration: string;
    description: string;
    skills: string[];
    link?: string;
  }[];
  experienceTitle: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experiences,
  experienceTitle,
}) => {
  return (
    <div>
      <motion.h1
        className="text-gray-50 text-3xl font-bold pb-6 max-sm:px-6 max-sm:pb-2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {experienceTitle}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col gap-4 max-sm:gap-0"
      >
        {experiences.map((experience, index) => (
          <div
            key={index}
            onClick={() =>
              experience.link &&
              window.open(experience.link, "_blank", "noopener,noreferrer")
            }
            className="flex justify-center flex-row items-start hover-item rounded-lg hover:bg-gray-10/60 group p-6 max-sm:flex-col max-sm:hover:bg-transparent cursor-pointer"
          >
            <div className="text-sm w-1/4 max-sm:w-auto max-sm:text-start">
              <p>{experience.duration}</p>
            </div>
            <div className="flex flex-col w-3/4 max-sm:w-full">
              <div className="text-base font-bold text-gray-50 flex flex-row gap-1 transition-transform group-hover:text-green-300">
                <h2>{experience.position}</h2>
                <p>-</p>
                <h2>{experience.company}</h2>
                <div className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowOutward fontSize="small" />
                </div>
              </div>
              <p className="text-sm pb-3">{experience.description}</p>
              <div className="flex flex-wrap flex-row gap-2 text-sm">
                {experience.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="rounded-full bg-green-700/10 px-3 py-1 text-xs font-medium leading-5 text-green-300"
                  >
                    <span className="shrink-0">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ExperienceCard;
