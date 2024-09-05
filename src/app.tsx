import ContactForm from "./components/contact";
import { Cover } from "./components/cover";
import ExperienceCard from "./components/experience-card";
import Footer from "./components/footer";
import MobileNavbar from "./components/mobile-nav";
import Nav from "./components/nav";
import ProjectCard from "./components/project-card";
import text from "./constants/texts.json";

export function App() {
  return (
    <div>
      <Nav />
      <MobileNavbar />
      <div id="home">
        <Cover />
      </div>

      <div
        id="experience"
        className="flex flex-col gap-4 max-w-[600px] mx-auto hover-group w-full pb-12"
      >
        <ExperienceCard
          experiences={text.experiences}
          experienceTitle={text.experienceTitle}
        />
      </div>
      <div id="projects" className="flex flex-col gap-4 mx-auto w-full pb-16">
        <ProjectCard
          projects={text.projects}
          projectTitle={text.projectsTitle}
        />
      </div>

      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
