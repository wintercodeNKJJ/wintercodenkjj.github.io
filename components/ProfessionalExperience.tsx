"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Collaborator from "./Collaborator";

const experiences = [
  {
    company: "KRESTDEV",
    logo: "/expirience/krestdev_logo.jpeg",
    position: "Backend and DevOps Developer",
    period: "May 2024 - Present",
    description:
      "Responsible for the conception, development, testing, and deployment of software solutions.",
    companyDescription:
      "KRESTDEV is a leading software development company specializing in innovative solutions for businesses across various industries.",
    projects: [
      "Developed a scalable microservices architecture for a high-traffic e-commerce platform",
      "Implemented CI/CD pipelines using GitLab for streamlined deployments",
      "Optimized database performance, resulting in a 30% reduction in query response times",
    ],
    skills: ["Node.js", "Docker", "Kubernetes", "MongoDB", "GitLab CI/CD"],
    collaborators: [
      {
        name: "Jason Adiogo",
        role: "Frontend Developer",
        description:
          "Specializes in creating responsive and intuitive user interfaces using React and modern CSS frameworks.",
        email: "alice.johnson@example.com",
        image: "/colaborators/jason.jpeg",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/jason-adiogo",
          github: "https://github.com/alicejohnson",
        },
        collaboratedProjects: [
          "Saga-africa",
          "Carino Bistort",
          "Carino Pizzeria",
          "Cotraf",
          "67design and build",
          "KrestHolding",
        ],
        startDate: "2024-03-01",
        portfolio: "https://hansjason97.github.io/Hanspen/",
      },
    ],
  },
  {
    company: "FreeLance",
    logo: "/expirience/freelance.png",
    position: "Full Stack Engineer",
    period: "January 2023 - August 2024",
    description:
      "Developed and maintained full-stack applications for various clients.",
    companyDescription:
      "As an independent contractor, I worked on diverse projects for multiple clients, delivering end-to-end solutions.",
    projects: [
      "Built a custom CRM system for a local business, improving customer management efficiency by 40%",
      "Developed a real-time chat application using WebSockets and React",
      "Created a mobile-responsive portfolio website for a professional photographer",
    ],
    skills: ["React", "Node.js", "Express", "PostgreSQL", "WebSockets"],
    collaborators: [],
  },
  {
    company: "Vortex Gaming",
    logo: "/expirience/vortex gaming.jpeg",
    position: "Freelance Developer",
    period: "June 2022 - January 2024",
    description:
      "Created a platform for advertising games, challenges, tournaments, and services.",
    companyDescription:
      "Vortex Gaming is a startup focused on creating innovative gaming experiences and community-driven platforms for gamers.",
    projects: [
      "Developed the main gaming community platform with user profiles, game integration, and social features",
      "Implemented a real-time tournament tracking system",
      "Created an API for third-party game integration",
    ],
    skills: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    collaborators: [
      {
        name: "Paved Ngoune",
        role: "Fullstack developer",
        description:
          "Full stack developer at Africa systems, responsible for the design, development and deployment of softwares",
        email: "pavedngoune@gmail.com",
        image: "/colaborators/paved.jpeg",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/paved-ngoune-935401228",
          twitter: "https://twitter.com/bobsmith",
        },
        collaboratedProjects: ["Africa System"],
        startDate: "2019-06-01",
      },
    ],
  },
  {
    company: "Freelance",
    logo: "/expirience/freelance.png",
    position: "Full-stack Developer",
    period: "October 2021 - June 2023",
    description:
      "Worked on various web development projects during my Bachelor's degree.",
    companyDescription:
      "As a self-employed developer, I took on various projects to build my skills and portfolio while completing my Bachelor's degree.",
    projects: [
      "Developed a personal blog using Next.js and Markdown",
      "Created a task management application with React and Firebase",
      "Built a weather application using a third-party API and React",
    ],
    skills: [
      "React",
      "Next.js",
      "Firebase",
      "RESTful APIs",
      "Responsive Design",
    ],
    collaborators: [],
  },
];

export default function ProfessionalExperience() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Professional Experience
        </motion.h2>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-16 bg-gray-700 rounded-lg p-6 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <Image
                src={exp.logo}
                alt={exp.company}
                width={50}
                height={50}
                className="mr-4"
              />
              <div>
                <h3 className="text-2xl font-semibold">{exp.company}</h3>
                <p className="text-xl text-blue-400">{exp.position}</p>
                <p className="text-gray-400">{exp.period}</p>
              </div>
            </div>
            <p className="mb-4">{exp.description}</p>
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2">
                Company Description:
              </h4>
              <p>{exp.companyDescription}</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2">Projects:</h4>
              <ul className="list-disc list-inside">
                {exp.projects.map((project, projectIndex) => (
                  <li key={projectIndex}>{project}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Skills:</h4>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Collaborators:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {exp.collaborators.map((collaborator, collabIndex) => (
                  <Collaborator key={collabIndex} {...collaborator} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
