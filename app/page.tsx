import Navbar from "@/components/Navbar";
import CyberHero from "@/components/CyberHero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingIntro from "@/components/LoadingIntro";


export default function Home() {
  return (
    <main className="">
      <Navbar />
      <CyberHero />
      <About />
      <TechStack/>
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <LoadingIntro />
      
    </main>
  );
}
