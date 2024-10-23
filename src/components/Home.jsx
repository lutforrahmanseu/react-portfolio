import About from "./About";
import Banner from "./Banner";
import Project from "./Project";
import Skills from "./Skills";
import Blog from "./Blog";
import Contact from "./Contact";
export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Skills />
      <Project />
      <Blog />
      <Contact/>
    </div>
  );
}
