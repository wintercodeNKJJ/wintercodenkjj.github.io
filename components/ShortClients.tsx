"use client";

import Clients from "./Clients";
import { motion } from "framer-motion";

export default function ShortClients() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Clients
        </motion.h2>
        <Clients />
      </div>
    </section>
  );
}
