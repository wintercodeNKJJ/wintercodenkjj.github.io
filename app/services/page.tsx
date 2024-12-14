"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch("data/services.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <main className="min-h-screen pt-20 bg-gray-900">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-12 text-center">My Services</h1>
          <p className="text-xl text-center mb-12">First project is free!</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  width={200}
                  height={200}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">
                    {service.name}
                  </h2>
                  <p className="mb-4">{service.description}</p>
                  <h3 className="font-semibold mb-2">Key Tasks:</h3>
                  <ul className="list-disc list-inside mb-4">
                    {service.tasks.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                  <p className="font-bold mb-4">Cost: {service.cost}</p>
                  <div className="flex justify-between items-center">
                    <Link
                      href={`/services/${service.id}`}
                      className="text-blue-400 hover:underline"
                    >
                      Learn More
                    </Link>
                    <Link
                      href={`/contact?subject=${encodeURIComponent(
                        service.name
                      )}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                      Contact Me
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
