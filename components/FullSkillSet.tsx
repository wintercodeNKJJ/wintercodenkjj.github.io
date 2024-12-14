"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    logo: FaReact,
    description: "A JavaScript library for building user interfaces",
    tasks: [
      "Building reusable UI components",
      "Managing application state with hooks",
      "Creating single-page applications",
    ],
    project: {
      name: "EatOrbit",
      link: "/projects/eatorbit",
    },
    officialLink: "https://reactjs.org/",
  },
  {
    name: "Node.js",
    logo: FaNodeJs,
    description: "JavaScript runtime built on Chromes V8 JavaScript engine",
    tasks: [
      "Building scalable network applications",
      "Creating RESTful APIs",
      "Handling file system operations",
    ],
    project: {
      name: "Job Search Platform",
      link: "/projects/job-search-platform",
    },
    officialLink: "https://nodejs.org/",
  },
  {
    name: "Express.js",
    logo: SiExpress,
    description: "Fast, unopinionated, minimalist web framework for Node.js",
    tasks: [
      "Creating robust API endpoints",
      "Implementing middleware for request processing",
      "Handling routing in web applications",
    ],
    project: {
      name: "EatOrbit",
      link: "/projects/eatorbit",
    },
    officialLink: "https://expressjs.com/",
  },
  {
    name: "MongoDB",
    logo: SiMongodb,
    description:
      "Source-available cross-platform document-oriented database program",
    tasks: [
      "Designing and implementing NoSQL database schemas",
      "Performing CRUD operations",
      "Creating aggregation pipelines for data analysis",
    ],
    project: {
      name: "EatOrbit",
      link: "/projects/eatorbit",
    },
    officialLink: "https://www.mongodb.com/",
  },
  {
    name: "PostgreSQL",
    logo: SiPostgresql,
    description: "Powerful, open source object-relational database system",
    tasks: [
      "Designing complex relational database schemas",
      "Writing optimized SQL queries",
      "Implementing database triggers and stored procedures",
    ],
    project: {
      name: "Job Search Platform",
      link: "/projects/job-search-platform",
    },
    officialLink: "https://www.postgresql.org/",
  },
  {
    name: "Docker",
    logo: FaDocker,
    description:
      "Platform for developing, shipping, and running applications in containers",
    tasks: [
      "Creating and managing Docker containers",
      "Writing Dockerfiles for application containerization",
      "Orchestrating multi-container applications with Docker Compose",
    ],
    project: {
      name: "Job Search Platform",
      link: "/projects/job-search-platform",
    },
    officialLink: "https://www.docker.com/",
  },
  {
    name: "Kubernetes",
    logo: SiKubernetes,
    description:
      "Open-source system for automating deployment, scaling, and management of containerized applications",
    tasks: [
      "Deploying and managing containerized applications",
      "Configuring auto-scaling and load balancing",
      "Implementing rolling updates and rollbacks",
    ],
    project: {
      name: "Job Search Platform",
      link: "/projects/job-search-platform",
    },
    officialLink: "https://kubernetes.io/",
  },
  {
    name: "Next.js",
    logo: SiNextdotjs,
    description: "React framework for production-grade applications",
    tasks: [
      "Server-side rendering React applications",
      "Implementing API routes",
      "Static site generation for improved performance",
    ],
    project: {
      name: "Personal Portfolio",
      link: "/",
    },
    officialLink: "https://nextjs.org/",
  },
];

export default function FullSkillSet() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Full Skill Set
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <skill.logo className="text-4xl text-blue-400 mr-4" />
                <h3 className="text-2xl font-semibold">{skill.name}</h3>
              </div>
              <p className="mb-4">{skill.description}</p>
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Tasks:</h4>
                <ul className="list-disc list-inside">
                  {skill.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Project Example:</h4>
                <Link
                  href={skill.project.link}
                  className="text-blue-400 hover:underline"
                >
                  {skill.project.name}
                </Link>
              </div>
              <a
                href={skill.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Official Documentation
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
