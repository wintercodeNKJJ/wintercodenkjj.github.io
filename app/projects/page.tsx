"use client";
import Collaborator from "@/components/Collaborator";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
  collaborators: CollabT[];
  image: string;
  skills: string[];
}

interface CollabT {
  name: string;
  role: string;
  description: string;
  email: string;
  image: string;
  socialLinks: {
    github: string;
    linkedin: string;
  };
  collaboratedProjects: string[];
  startDate: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("data/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <main className="min-h-screen pt-20 bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-12 text-center">All Projects</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-secondary rounded-lg overflow-hidden shadow-lg"
              >
                <video
                  src={project.image}
                  // alt={project.name}
                  autoPlay={true}
                  loop={true}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">
                    {project.name}
                  </h2>
                  <p className="mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Skills used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Collaborators:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.collaborators.map((collaborator, index) => (
                        <Collaborator key={index} {...collaborator} />
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-blue-400 hover:underline"
                  >
                    View Project Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
