'use client'
import { motion } from 'framer-motion'

const experiences = [
  {
    company: "KRESTDEV",
    position: "Backend and DevOps Developer",
    period: "May 2024 - Present",
    description: "Responsible for the conception, development, testing, and deployment of software solutions."
  },
  {
    company: "Independent",
    position: "Full Stack Engineer",
    period: "January 2023 - August 2024",
    description: "Developed and maintained full-stack applications."
  },
  {
    company: "Vortex Gaming",
    position: "Freelance Developer",
    period: "June 2022 - January 2024",
    description: "Created a platform for advertising games, challenges, tournaments, and services."
  },
  {
    company: "Self Employed",
    position: "Full-stack Developer",
    period: "October 2021 - June 2023",
    description: "Worked on various web development projects during my Bachelor's degree."
  }
]

const education = [
  {
    institution: "Université De Dschang",
    degree: "Master's degree in Computer Science (Artificial Intelligence)",
    period: "October 2023 - Present"
  },
  {
    institution: "Université De Dschang",
    degree: "Bachelor's degree in Computer Science",
    period: "October 2020 - July 2023"
  },
  {
    institution: "Goethe Institut Kamerun",
    degree: "Zertificat B2 in German Language and Literature",
    period: "September 2018 - 2020"
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Experience
        </motion.h2>

        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-semibold mb-6"
          >
            Full About Me
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg mb-8"
          >
            Hello, I&apos;m Jordan Junior, a Full Stack Software Developer with a strong background in JavaScript technologies. I have extensive experience in both front-end and back-end development, and I&apos;m proficient in deploying applications using GitLab CI/CD, Kubernetes, and Docker. My journey in software development is driven by a passion for creating innovative and efficient digital solutions.
          </motion.p>
        </div>

        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl font-semibold mb-6"
          >
            Full Skill Set Description
          </motion.h3>
          <motion.ul
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="list-disc list-inside text-lg mb-8 space-y-2"
          >
            <li>Languages: JavaScript, TypeScript, Python, PHP</li>
            <li>Frameworks/Libraries: React.js, Next.js, Express.js, Laravel</li>
            <li>Databases: MySQL, MongoDB</li>
            <li>DevOps: Docker, Kubernetes, GitLab CI/CD</li>
            <li>Tools: Graphana, Packet Tracer</li>
          </motion.ul>
        </div>

        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-3xl font-semibold mb-6"
          >
            Professional Experience
          </motion.h3>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="mb-8"
            >
              <h4 className="text-2xl font-semibold">{exp.company}</h4>
              <p className="text-xl text-blue-400">{exp.position}</p>
              <p className="text-gray-400 mb-2">{exp.period}</p>
              <p>{exp.description}</p>
            </motion.div>
          ))}
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-3xl font-semibold mb-6"
          >
            Education
          </motion.h3>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="mb-6"
            >
              <h4 className="text-2xl font-semibold">{edu.institution}</h4>
              <p className="text-xl">{edu.degree}</p>
              <p className="text-gray-400">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

