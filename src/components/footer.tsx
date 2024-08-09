import React from "react";
import { Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import footerData from "../constants/texts.json";

type IconKey = "linkedIn" | "instagram" | "github";

const iconMap: Record<IconKey, JSX.Element> = {
  linkedIn: <LinkedIn />,
  instagram: <Instagram />,
  github: <GitHub />,
};

const Footer: React.FC = () => {
  const links = footerData.footerLinks.map((link) => {
    const [key, url] = Object.entries(link)[0] as [IconKey, string];

    return {
      name: key,
      url,
      icon: iconMap[key],
    };
  });

  const { descriptionParts, links: footerLinks } = footerData.footerText;

  return (
    <footer className="relative max-w-7xl mx-auto px-4 pb-10 mt-20 max-lg:flex max-lg:flex-col max-lg:gap-4">
      <div className="fixed bottom-10 flex flex-row gap-4 max-lg:relative max-lg:bottom-0 max-lg:flex max-lg:justify-center">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:text-green-300 hover:-translate-y-1"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <div className="text-sm mx-auto w-80 text-center">
        <p>
          {descriptionParts[0]}
          <a
            className="font-bold hover:text-green-300"
            href={footerLinks[0].url}
          >
            {footerLinks[0].name}
          </a>
          {descriptionParts[1]}
          <a
            className="font-bold hover:text-green-300"
            href={footerLinks[1].url}
          >
            {footerLinks[1].name}
          </a>
          {descriptionParts[2]}
          <a
            className="font-bold hover:text-green-300"
            href={footerLinks[2].url}
          >
            {footerLinks[2].name}
          </a>
          {descriptionParts[3]}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
