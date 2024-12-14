"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const clients = [
  {
    name: "Cotraf",
    logo: "placeholder.svg",
    description:
      "A construction material transport agency that collaborates with Cimencam and various other individuals.",
    projectsCompleted: 1,
    website: "https://cotraf-cm.com",
  },
  {
    name: "Saga-africa",
    logo: "clients/LogoSagAfrica.png",
    description:
      "A restaurant website that allows clients to reserve tables, place orders for pickup and delivery, and explore a rich menu of dishes.",
    projectsCompleted: 2,
    website: "https://saga-africa.com",
  },
  {
    name: "Carino Bistrot",
    logo: "clients/leCarino.svg",
    description:
      "A restaurant website similar to Saga-Africa but centered around Italian dishes. It allows clients to reserve tables, place orders for pickup and delivery, and explore a rich menu of Italian cuisine.",
    projectsCompleted: 1,
    website: "https://bistrot-carino.com",
  },
];

export default function Clients() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {clients.map((client, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-gray-800 rounded-lg p-6 shadow-lg"
        >
          <div className="flex items-center mb-4">
            <Image
              src={client.logo}
              alt={client.name}
              width={100}
              height={100}
              className="rounded-full mr-4"
            />
            <div>
              <h3 className="text-2xl font-semibold">{client.name}</h3>
              <p className="text-blue-400">
                Projects Completed: {client.projectsCompleted}
              </p>
            </div>
          </div>
          <p className="mb-4">{client.description}</p>
          <Link
            href={client.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Visit Website
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
