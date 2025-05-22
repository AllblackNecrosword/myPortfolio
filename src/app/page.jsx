import Aboutme from "@/components/Aboutme/Aboutme";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Herosection from "@/components/Herosection/Herosection";
import Project from "@/components/Myproject/Project";
import Navbar from "@/components/Navbar/Navbar";
import Skills from "@/components/Skills/Skills";
import Tech from "@/components/Tech/Tech";

export default function Home() {
  return (
    <main className="relative z-10 text-white">
      <Navbar />
      <Herosection />
      <Aboutme />
      <Skills />
      <Tech />
      <Project />
      <Contact/>
      <Footer/>
    </main>
  );
}
