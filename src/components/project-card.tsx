import React from "react";
import { motion } from "framer-motion";
import { FolderOpen, ArrowOutward } from "@mui/icons-material";
import { Button } from "./button";
import texts from "../constants/texts.json";

interface ProjectCardProps {
  projects: {
    title: string;
    description: string;
    tech: string[];
    link?: string;
  }[];
  projectTitle: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projects,
  projectTitle,
}) => {
  const handleButtonClick = () => {
    window.open(texts.projectsLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <motion.h1
        id="projects"
        className="text-gray-50 max-w-[600px] mx-auto text-3xl font-bold pb-8 max-sm:px-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {projectTitle}
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto max-w-[600px] max-sm:px-6 max-sm:justify-items-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6, // Transição ao aparecer no scroll
              ease: "easeOut",
              delay: index * 0.2,
            }}
            viewport={{ once: true, amount: 0.1 }}
            className="bg-gray-10/60 p-6 rounded-lg shadow-lg cursor-pointer max-w-[400px] w-full border border-transparent group relative z-10"
            onClick={() =>
              project.link &&
              window.open(project.link, "_blank", "noopener,noreferrer")
            }
          >
            <div className="flex justify-between items-center">
              <FolderOpen fontSize="large" className="text-green-300" />
              <div className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-green-300">
                <ArrowOutward />
              </div>
            </div>
            <h2 className="text-lg font-semibold text-gray-50 mt-4 group-hover:text-green-300 transition-colors duration-200 ease-out">
              {project.title}
            </h2>
            <p className="mt-2 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs font-medium text-green-300 bg-green-700/10 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Button text={texts.projetcsButtonText} onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default ProjectCard;
