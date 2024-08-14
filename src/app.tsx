import { Cover } from "./components/cover";
import ExperienceCard from "./components/experience-card";
import Footer from "./components/footer";
import MobileNavbar from "./components/mobile-nav";
import Nav from "./components/nav";
import experiences from "./constants/texts.json";

export function App() {
  return (
    <div>
      <Nav />
      <MobileNavbar />
      <div id="home">
        <Cover />
      </div>

      <p
        id="experience"
        className="text-gray-50 max-w-[600px] mx-auto text-3xl font-bold pl-4 pb-4 max-sm:pl-8"
      >
        {experiences.experienceTitle}
      </p>
      <div className="flex md:px-0 max-w-[600px] mx-auto flex-col gap-4 hover-group w-full">
        {experiences.experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
