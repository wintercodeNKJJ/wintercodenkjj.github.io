"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-transparent"
    >
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2"
        >
          <h1 className="text-5xl font-bold mb-4 text-primary">
            Hi, Im Nguezet Kenfack Jordan Junior
          </h1>
          <p className="text-xl mb-8 text-primary">
            A passionate Full Stack Software Developer crafting scalable and
            efficient digital solutions.
          </p>
          <div className="flex flex-col gap-4">
            <Link href="/projects" className="w-fit">
              <motion.div
                className="relative inline-block overflow-hidden rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors relative">
                  View My Work
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "linear",
                    }}
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                      zIndex: 1,
                    }}
                  />
                </motion.button>
              </motion.div>
            </Link>
            <Link href="/services" className="w-fit">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                Explor My Services
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-1/2 mb-10 lg:mb-0"
        >
          <Image
            src="jordanjunior.jpg"
            alt="Nguezet Kenfack Jordan Junior"
            width={400}
            height={400}
            className="rounded-full shadow-2xl mx-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
