import React from "react";
import { ArrowOutward } from "@mui/icons-material";

interface ExperienceCardProps {
  position: string;
  company: string;
  duration: string;
  title?: string;
  description: string;
  skills: string[];
  link?: string;
}

const ExperienceCard: React.FC<{ experience: ExperienceCardProps }> = ({
  experience,
}) => {
  const handleClick = () => {
    window.open(experience.link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={handleClick}
      className="flex justify-center flex-row items-start hover-item rounded-lg hover:bg-gray-10/60 group p-4 max-sm:flex-col cursor-pointer"
    >
      <div className=" text-sm w-1/4 max-sm:w-auto max-sm:text-start">
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
          {experience.skills.map((skill, index) => (
            <div className="rounded-full bg-green-700/10 px-3 py-1 text-xs font-medium leading-5 text-green-300">
              <span className="shrink-0" key={index}>
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
