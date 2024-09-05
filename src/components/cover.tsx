import React from "react";
import { motion } from "framer-motion";
import { Button } from "./button";
import texts from "../constants/texts.json";
import Typewriter from "./typewriter";

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

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="max-xl:px-6 flex max-w-[1024px] mx-auto justify-center flex-col items-start py-48 max-sm:py-36">
      <motion.p
        className="text-green-300 text-base pb-4 font-medium"
        custom={0}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {greeting}
      </motion.p>
      <motion.h1
        className="text-gray-50 text-7xl max-sm:text-5xl font-bold pb-2"
        custom={1}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {name}
      </motion.h1>
      <motion.div
        custom={2}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Typewriter phrases={headline} />
      </motion.div>
      <motion.p
        className="text-base max-w-[560px] pt-6 pb-10"
        custom={3}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {descriptionParts[0]} <a href={link}>{descriptionParts[1]}</a>
        {descriptionParts[2]}
      </motion.p>
      <motion.div
        custom={4}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Button text={buttonText} onClick={handleButtonClick} />
      </motion.div>
    </div>
  );
};
