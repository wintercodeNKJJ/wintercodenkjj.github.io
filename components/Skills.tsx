"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiKubernetes,
  SiGrafana,
} from "react-icons/si";
import { IconType } from "react-icons";

interface skillSetT {
  category: string;
  image: string;
  description: string;
  items: {
    name: string;
    icon: IconType;
    description: string;
    projects: string[];
    tasks: string[];
  }[];
}

const skills = [
  {
    category: "Front-end",
    image: "skillset/frontend.jpeg",
    description: "Building responsive and interactive user interfaces",
    items: [
      {
        name: "React.js",
        icon: FaReact,
        description: "A JavaScript library for building user interfaces",
        projects: ["EatOrbit"],
        tasks: [
          "Creating reusable UI components",
          "Managing application state",
        ],
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        description: "The React Framework for Production",
        projects: ["Job Search Platform"],
        tasks: ["Server-side rendering", "Static site generation"],
      },
      {
        name: "HTML/CSS",
        icon: FaReact,
        description: "Markup and styling languages for web development",
        projects: ["EatOrbit", "Job Search Platform"],
        tasks: ["Structuring web content", "Styling web pages"],
      },
    ],
  },
  {
    category: "Back-end",
    image: "skillset/backend.jpeg",
    description: "Developing server-side logic and databases",
    items: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        description: "JavaScript runtime built on Chromes V8 JavaScript engine",
        projects: ["EatOrbit"],
        tasks: [
          "Building scalable network applications",
          "Creating RESTful APIs",
        ],
      },
      {
        name: "Express.js",
        icon: SiExpress,
        description:
          "Fast, unopinionated, minimalist web framework for Node.js",
        projects: ["EatOrbit"],
        tasks: ["Routing", "Middleware integration"],
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        description:
          "Source-available cross-platform document-oriented database program",
        projects: ["EatOrbit"],
        tasks: ["Storing and retrieving data", "Aggregation pipelines"],
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        description: "Powerful, open source object-relational database system",
        projects: ["Job Search Platform"],
        tasks: ["Complex queries", "Data integrity"],
      },
    ],
  },
  {
    category: "DevOps",
    image: "skillset/devops.gif",
    description: "Streamlining development and deployment processes",
    items: [
      {
        name: "Docker",
        icon: FaDocker,
        description:
          "Platform for developing, shipping, and running applications",
        projects: ["Job Search Platform"],
        tasks: ["Containerization", "Environment consistency"],
      },
      {
        name: "Kubernetes",
        icon: SiKubernetes,
        description:
          "Open-source system for automating deployment, scaling, and management of containerized applications",
        projects: ["Job Search Platform"],
        tasks: ["Container orchestration", "Auto-scaling"],
      },
      {
        name: "GitLab CI/CD",
        icon: FaDocker,
        description: "Continuous Integration and Delivery platform",
        projects: ["EatOrbit", "Job Search Platform"],
        tasks: ["Automated testing", "Continuous deployment"],
      },
    ],
  },
  {
    category: "Others",
    image: "skillset/others.jpeg",
    description: "Additional technologies and tools in my skillset",
    items: [
      {
        name: "Python",
        icon: FaPython,
        description:
          "Interpreted high-level general-purpose programming language",
        projects: ["Data Analysis Project"],
        tasks: ["Data processing", "Machine learning"],
      },
      {
        name: "PHP",
        icon: FaPhp,
        description:
          "Popular general-purpose scripting language suited for web development",
        projects: ["Legacy Web App"],
        tasks: ["Server-side scripting", "Database integration"],
      },
      {
        name: "Laravel",
        icon: FaLaravel,
        description:
          "PHP web application framework with expressive, elegant syntax",
        projects: ["E-commerce Platform"],
        tasks: ["MVC architecture", "Database migrations"],
      },
      {
        name: "Grafana",
        icon: SiGrafana,
        description:
          "Multi-platform open source analytics and interactive visualization web application",
        projects: ["Monitoring Dashboard"],
        tasks: ["Data visualization", "Alerting"],
      },
    ],
  },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<skillSetT | null>(
    null
  );
  // const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Skills and Tools
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillSet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-6 rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedCategory(skillSet)}
            >
              <img
                src={skillSet.image}
                alt={skillSet.category}
                width={200}
                height={200}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-2xl font-semibold mb-4">
                {skillSet.category}
              </h3>
              <p className=" mb-4">{skillSet.description}</p>
              <ul className="space-y-2">
                {skillSet.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <skill.icon className="mr-2 text-blue-400" />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-secondary p-8 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <h3 className="text-3xl font-bold mb-4">
              {selectedCategory.category}
            </h3>
            <p className="mb-6">{selectedCategory.description}</p>
            {selectedCategory.items.map((skill, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-xl font-semibold flex items-center mb-2">
                  <skill.icon className="mr-2 text-blue-400" />
                  {skill.name}
                </h4>
                <p className="mb-2">{skill.description}</p>
                <h5 className="font-semibold mb-1">Tasks:</h5>
                <ul className="list-disc list-inside mb-2">
                  {skill.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
                <h5 className="font-semibold mb-1">Projects:</h5>
                <ul className="list-disc list-inside">
                  {skill.projects.map((project, projectIndex) => (
                    <li key={projectIndex}>{project}</li>
                  ))}
                </ul>
                <Link
                  href={`https://example.com/${skill.name
                    .toLowerCase()
                    .replace(".", "")}`}
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official Documentation
                </Link>
              </div>
            ))}
            <button
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              onClick={() => setSelectedCategory(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
