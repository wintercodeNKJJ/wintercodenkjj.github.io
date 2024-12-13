"use client";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-16"
    >
      <h1 className="text-4xl font-bold mb-4">
        {"Hi, I'm Nguezet Kenfack Jordan Junior"}
      </h1>
      <p className="text-xl leading-relaxed">
        {
          "A passionate Full Stack Software Developer specializing in crafting scalable and efficient digital solutions with a keen eye for innovation. My expertise spans across both front-end and back-end development, leveraging modern technologies like Next.js, Express.js, and Kubernetes."
        }
      </p>
    </motion.section>
  );
}
