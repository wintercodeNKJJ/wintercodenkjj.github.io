"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl leading-relaxed max-w-3xl mx-auto text-center"
        >
          {
            "I'm a Full Stack Software Developer with a passion for creating scalable and efficient digital solutions. My expertise spans both front-end and back-end development, leveraging modern technologies like Next.js, Express.js, and Kubernetes. I'm constantly exploring new technologies and methodologies to deliver innovative solutions that drive business growth and enhance user experiences."
          }
        </motion.p>
      </div>
    </section>
  );
}
