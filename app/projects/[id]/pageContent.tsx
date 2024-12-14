/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface SDLCPhase {
  phase: string;
  description: string;
  image: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  skills: string[];
  sdlc: SDLCPhase[];
}

export default function ProjectPage({ id }: { id: string }) {
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("../data/projects.json");
      // const response = await fetch("data/projects.json");
      const data = await response.json();
      const foundProject = data.find((p: Project) => p.id === id);
      setProject(foundProject || null);
    }
    fetchData();
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen pt-20 bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8 text-center">
            {project.name}
          </h1>
          <video
            src={project.image}
            // alt={project.name}
            loop
            autoPlay
            width={800}
            height={400}
            className="w-full h-96 object-cover mb-8 rounded-lg"
          />
          <p className="text-xl mb-8">{project.description}</p>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Skills Used:</h2>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <h2 className="text-3xl font-semibold mb-8">
            Software Development Life Cycle
          </h2>
          <div className="space-y-12">
            {project.sdlc.map((phase, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center bg-secondary rounded-lg overflow-hidden"
              >
                <Image
                  src={phase.image}
                  alt={phase.phase}
                  width={200}
                  height={200}
                  className="w-full md:w-1/3 h-64 object-cover"
                />
                <div className="p-6 md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4">{phase.phase}</h3>
                  <p>{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
