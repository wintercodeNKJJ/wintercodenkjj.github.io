import ShortServices from "@/components/ShortServices";
import Hero from "../components/Hero";
import ShortAbout from "../components/ShortAbout";
import ShortProjects from "../components/ShortProjects";
import Skills from "../components/Skills";
import ShortClients from "@/components/ShortClients";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <ShortAbout />
      </section>
      <section id="projects">
        <ShortProjects />
      </section>
      <section id="customers">
        <ShortClients />
      </section>
      <section id="services">
        <ShortServices />
      </section>
      <section id="skills">
        <Skills />
      </section>
    </main>
  );
}
