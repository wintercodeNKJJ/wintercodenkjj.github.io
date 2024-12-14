"use client";
import { motion } from "framer-motion";

export default function ShortAbout() {
  return (
    <section className="py-20 bg-secondary">
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
          className="text-xl text-center max-w-3xl mx-auto"
        >
          {
            "Hello, I'm Nguezet Kenfack Jordan Junior, a dedicated Full Stack Software Developer with a passion for creating scalable and efficient digital solutions. My expertise encompasses both front-end and back-end development, utilizing cutting-edge technologies such as Next.js, Express.js, and Kubernetes. I am committed to innovation and excellence in every project I undertake."
          }
        </motion.p>
      </div>
    </section>
  );
}
