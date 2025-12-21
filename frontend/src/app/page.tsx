import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import RecentWorks from "./components/Projects";
import Contact from "./components/Cantact";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Services />
      <Skills />
      <RecentWorks />
      <Contact />
    </div>
  );
}
