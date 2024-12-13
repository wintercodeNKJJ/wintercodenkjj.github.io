import ShortServices from "@/components/ShortServices";
import Hero from "../components/Hero";
import ShortAbout from "../components/ShortAbout";
import ShortProjects from "../components/ShortProjects";
import Skills from "../components/Skills";
import ShortClients from "@/components/ShortClients";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ShortAbout />
      <ShortProjects />
      <ShortClients />
      <ShortServices />
      <Skills />
    </main>
  );
}
