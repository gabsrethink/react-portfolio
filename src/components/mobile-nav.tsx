import { useRef, useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "./nav-link";
import logo from "../assets/logo.png";

const MobileNavbar: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

      // Fecha o modal ao rolar a página
      if (currentScrollPos !== prevScrollPos) {
        setOpen(false);
      }
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

  return (
    <nav
      className={`sm:hidden w-full py-5 bg-purple-900 fixed top-0 z-10 transition duration-300 ${
        visible ? "opacity-100" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <button className="relative font-thin text-x1">
            <div className="absolute inset-x-0 h-full bg-green-300 border border-green-300 rounded-full" />
            <div className="relative bg-purple-900 border border-green-300 transition transform duration-200 hover:-translate-x-1 hover:-translate-y-1 rounded-full text-green-300 font-medium">
              <img src={logo} alt="Logo" className="h-auto w-10" />
            </div>
          </button>
          <div ref={ref} className="flex space-x-6">
            <div className="z-50">
              <Hamburger
                toggled={isOpen}
                size={28}
                toggle={setOpen}
                color="#57e295"
              />
            </div>
            <AnimatePresence>
              {isOpen && (
                <>
                  <motion.div
                    className="fixed top-0 left-0 h-screen w-screen bg-black/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "tween", duration: 0.3 }}
                    style={{ marginLeft: 0 }}
                    onClick={() => setOpen(false)} // Fecha o modal ao clicar no overlay
                  ></motion.div>
                  <motion.div
                    className="fixed top-0 right-0 shadow-4xl p-5 h-full bg-purple-900 flex flex-col items-center justify-center gap-5 w-3/4"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "tween", duration: 0.3 }}
                  >
                    <NavLink
                      href="#home"
                      className="nav-link"
                      onClick={() => setOpen(false)}
                    >
                      Home
                    </NavLink>
                    <NavLink
                      href="#experience"
                      className="nav-link"
                      onClick={() => setOpen(false)}
                    >
                      Experiência
                    </NavLink>
                    <NavLink
                      href="#contact"
                      className="nav-link"
                      onClick={() => setOpen(false)}
                    >
                      Contato
                    </NavLink>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
