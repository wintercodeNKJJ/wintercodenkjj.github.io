"use client"
import { motion } from "framer-motion"
import TimelineTree from "./TimelineTree"

export default function FullAbout() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center text-slate-50"
        >
          Full About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl max-w-3xl mx-auto mb-12 text-slate-300"
        >
          Hello, Im Jordan Junior, a Full Stack Software Developer with a strong background in JavaScript technologies. I have extensive experience in both front-end and back-end development, and Im proficient in deploying applications using GitLab CI/CD, Kubernetes, and Docker. My journey in software development is driven by a passion for creating innovative and efficient digital solutions.
        </motion.p>
        <TimelineTree />
      </div>
    </section>
  )
}

