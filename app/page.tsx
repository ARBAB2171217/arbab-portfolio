import Navbar from "@/components/Navbar";
import { Hero, About, Projects } from "@/components/Sections";
import { Skills, Achievements, Contact, Footer } from "@/components/Sections2";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
