import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "./nav-link";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        currentScrollPos <= prevScrollPos ||
          (prevScrollPos > currentScrollPos &&
            prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");
        if (href) {
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 70,
            });
          }
        }
      });
    });
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
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
    <nav
      className={`max-sm:hidden w-full py-5 bg-purple-900 fixed top-0 z-10 transition duration-300 ${
        visible ? "opacity-100" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.button
            className="relative font-thin text-x1"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <div className="absolute inset-x-0 h-full bg-green-300 border border-green-300 rounded-full" />
            <div className="relative bg-purple-900 border border-green-300 transition transform duration-200 hover:-translate-x-1 hover:-translate-y-1 rounded-full text-green-300 font-medium">
              <img src={logo} alt="Logo" className="h-auto w-11" />
            </div>
          </motion.button>
          <div className="flex space-x-6">
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <NavLink href="#home" className="nav-link">
                Home
              </NavLink>
            </motion.div>
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <NavLink href="#experience" className="nav-link">
                Experiência
              </NavLink>
            </motion.div>
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <NavLink href="#projects" className="nav-link">
                Projetos
              </NavLink>
            </motion.div>
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <NavLink href="#contact" className="nav-link">
                Contato
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
