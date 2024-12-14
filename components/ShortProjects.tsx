"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  skills: string[];
  link: string;
}

export default function ShortProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("data/projects.json")
      .then((response) => response.json())
      .then((data) => {
        const shortProjects = data.slice(0, 5).map((project: Project) => ({
          ...project,
          link: `/projects/${project.id}`,
        }));
        setProjects(shortProjects);
      });
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-secondary rounded-lg overflow-hidden shadow-lg"
            >
              <video
                src={project.image}
                autoPlay
                loop
                // alt={project.name}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Skills used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={project.link}
                  className="text-blue-400 hover:underline"
                >
                  View Project Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            View More Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
