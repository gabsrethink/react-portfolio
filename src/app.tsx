import { Cover } from "./components/cover";
import ExperienceCard from "./components/experience-card";
import Footer from "./components/footer";
import Nav from "./components/nav";
import experiences from "./constants/texts.json";

export function App() {
  return (
    <div>
      <Nav />
      <div id="home">
        <Cover />
      </div>
      <div
        id="experience"
        className="flex md:px-0 max-w-[600px] mx-auto flex-col gap-4 hover-group w-full"
      >
        {experiences.experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
