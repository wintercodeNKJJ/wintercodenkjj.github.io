"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const education = [
  {
    institution: "Université De Dschang",
    logo: "/expirience/uds dschang logo.jpeg",
    degree: "Master's degree in Computer Science (Artificial Intelligence)",
    period: "October 2023 - Present",
    description:
      "Advanced study of artificial intelligence, machine learning, and data science. Focus on developing AI algorithms and applications.",
  },
  {
    institution: "Université De Dschang",
    logo: "/expirience/uds dschang logo.jpeg",
    degree: "Bachelor's degree in Computer Science",
    period: "October 2020 - July 2023",
    description:
      "Comprehensive study of computer science fundamentals, including programming, data structures, algorithms, and software engineering.",
  },
  {
    institution: "Goethe Institut Kamerun",
    logo: "/expirience/goethe logo.jpeg",
    degree: "Zertificat B2 in German Language and Literature",
    period: "September 2018 - 2020",
    description:
      "Intensive study of German language and literature, achieving B2 level proficiency in reading, writing, speaking, and listening.",
  },
];

export default function Education() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Education
        </motion.h2>
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8 bg-background rounded-lg p-6 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <img
                src={edu.logo}
                alt={edu.institution}
                width={50}
                height={50}
                className="mr-4"
              />
              <div>
                <h3 className="text-2xl font-semibold">{edu.institution}</h3>
                <p className="text-xl text-blue-400">{edu.degree}</p>
                <p className="text-gray-400">{edu.period}</p>
              </div>
            </div>
            <p className="mb-4">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
