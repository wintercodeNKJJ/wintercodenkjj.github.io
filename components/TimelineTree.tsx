"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Achievement {
  date: string;
  title: string;
  description: string;
  logo: string;
  link: string;
}

const achievements: Achievement[] = [
  {
    date: "2023",
    title: "Masters Degree in Computer Science (AI)",
    description:
      "Started pursuing a Masters degree in Computer Science with a focus on Artificial Intelligence at Université De Dschang.",
    logo: "/expirience/uds dschang logo.jpeg",
    link: "https://www.univ-dschang.org/",
  },
  {
    date: "2023",
    title: "Full Stack Developer at KRESTDEV",
    description:
      "Joined KRESTDEV as a Backend and DevOps Developer, working on scalable software solutions.",
    logo: "/expirience/krestdev_logo.jpeg",
    link: "https://krestdev.com/",
  },
  {
    date: "2022",
    title: "Freelance Developer for Vortex Gaming",
    description:
      "Created a platform for advertising games, challenges, tournaments, and services.",
    logo: "/expirience/vortex gaming.jpeg",
    link: "https://maps.app.goo.gl/KZmqXTQbGWCvfMTX8",
  },
  {
    date: "2021",
    title: "Started Bachelors Degree in Computer Science",
    description: "Began studying Computer Science at Université De Dschang.",
    logo: "/expirience/uds dschang logo.jpeg",
    link: "https://www.univ-dschang.org/",
  },
  {
    date: "2020",
    title: "German Language Certification",
    description:
      "Obtained Zertificat B2 in German Language and Literature from Goethe Institut Kamerun.",
    logo: "/expirience/goethe logo.jpeg",
    link: "https://www.goethe.de/ins/cm/en/index.html",
  },
  {
    date: "2018",
    title: "Started Learning Programming",
    description:
      "Began self-study in programming, focusing on web development technologies.",
    logo: "/expirience/free code camp.jpeg",
    link: "https://www.freecodecamp.org/",
  },
];

export default function TimelineTree() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-slate-50">
        My Journey
      </h2>
      <div className="relative">
        {/* Main vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-600"></div>

        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className={`mb-16 flex items-center justify-center ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Circle on the main branch */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-400 rounded-full"></div>

            {/* Content */}
            <div
              className={`w-5/12 ${
                index % 2 === 0 ? "pr-8 text-right" : "pl-8"
              }`}
            >
              <div className="bg-slate-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-slate-50">
                  {achievement.title}
                </h3>
                <p className="text-slate-300 mb-2">{achievement.description}</p>
                <Link
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-200 flex items-center justify-end"
                >
                  <Image
                    src={achievement.logo}
                    alt={achievement.title}
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Learn More
                </Link>
              </div>
            </div>

            {/* Date on the opposite side */}
            <div
              className={`w-5/12 ${
                index % 2 === 0 ? "pl-8" : "pr-8 text-right"
              }`}
            >
              <span className="text-lg font-semibold text-slate-400">
                {achievement.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
