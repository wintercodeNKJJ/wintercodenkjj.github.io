"use client";
import { motion } from "framer-motion";
import Clients from "../../components/Clients";
import Collaborator from "../../components/Collaborator";

const collaborators = [
  {
    name: "Jason Adiogo",
    role: "Frontend Developer",
    description:
      "Specializes in creating responsive and intuitive user interfaces using React and modern CSS frameworks.",
    email: "alice.johnson@example.com",
    image: "colaborators/jason.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/jason-adiogo",
      github: "https://github.com/alicejohnson",
    },
    collaboratedProjects: ["Saga-africa", "Carino Bistrot", "Cotraf website"],
    startDate: "2015-05-01",
    portfolio: "https://hansjason97.github.io/Hanspen/",
  },
  {
    name: "Paved Ngoune",
    role: "Fullstack developer",
    description:
      "Full stack developer at Africa systems, responsible for the design, development and deployment of softwares",
    email: "pavedngoune@gmail.com",
    image: "colaborators/paved.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/paved-ngoune-935401228",
      twitter: "https://twitter.com/bobsmith",
    },
    collaboratedProjects: ["Africa System"],
    startDate: "2019-06-01",
  },
];

export default function NetworkPage() {
  return (
    <main className="min-h-screen pt-20 bg-gray-900">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            My Network
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold mb-8">Clients</h2>
            <Clients />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-semibold mb-8">Collaborators</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {collaborators.map((collaborator, index) => (
                <Collaborator key={index} {...collaborator} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
