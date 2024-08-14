import React from "react";
import { Button } from "./button";
import texts from "../constants/texts.json";

export const Cover: React.FC = () => {
  const {
    greeting,
    name,
    headline,
    descriptionParts,
    buttonText,
    cvLink,
    link,
  } = texts.cover;

  const handleButtonClick = () => {
    window.open(cvLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="max-xl:px-8 flex max-w-[1024px] mx-auto justify-center flex-col items-start py-48 max-sm:py-36">
      <p className="text-green-300 text-base pb-4 font-medium">{greeting}</p>
      <h1 className="text-gray-50 text-7xl max-sm:text-5xl font-bold pb-2">
        {name}
      </h1>
      <h1 className="text-7xl max-sm:text-5xl font-bold">{headline}</h1>
      <p className="text-base max-w-[560px] pt-6 pb-10">
        {descriptionParts[0]} <a href={link}>{descriptionParts[1]}</a>
        {descriptionParts[2]}
      </p>
      <Button text={buttonText} onClick={handleButtonClick} />
    </div>
  );
};

export default Cover;
