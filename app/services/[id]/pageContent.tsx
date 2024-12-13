"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  tasks: string[];
  cost: string;
  detailedDescription: string;
  processes: string[];
  caseStudy: string;
  officialDocs: string;
}

export default function PageContent({ id }: { id: string }) {
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/data/services.json");
      const data = await response.json();
      const foundService = data.find((s: Service) => s.id === id);
      setService(foundService || null);
    }
    fetchData();
  }, [id]);

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen pt-20 bg-gray-900">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 text-center"
          >
            {service.name}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-8 mb-12"
          >
            <div className="md:w-1/2">
              <Image
                src={service.image}
                alt={service.name}
                width={400}
                height={300}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">
                Service Description
              </h2>
              <p className="mb-4">{service.detailedDescription}</p>
              <h3 className="text-xl font-semibold mb-2">Main Tasks:</h3>
              <ul className="list-disc list-inside mb-4">
                {service.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
              <p className="font-bold mb-4">Cost: {service.cost}</p>
              <Link
                href={`/contact?subject=${encodeURIComponent(service.name)}`}
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors inline-block"
              >
                Contact Me About This Service
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Processes and Actions
            </h2>
            <ul className="list-disc list-inside mb-8">
              {service.processes.map((process, index) => (
                <li key={index} className="mb-2">
                  {process}
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Case Study</h2>
            <p className="mb-8">{service.caseStudy}</p>
            <h2 className="text-2xl font-semibold mb-4">
              Official Documentation
            </h2>
            <div className="flex flex-wrap gap-4">
              {service.officialDocs.split(",").map((doc, index) => (
                <a
                  key={index}
                  href={doc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {new URL(doc).hostname}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
