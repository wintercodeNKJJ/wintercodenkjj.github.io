"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

interface CollaboratorProps {
  name: string;
  role: string;
  description: string;
  email: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  collaboratedProjects: string[];
  startDate: string;
  portfolio?: string;
}

export default function Collaborator({
  name,
  role,
  description,
  email,
  image,
  socialLinks,
  collaboratedProjects,
  startDate,
  portfolio,
}: CollaboratorProps) {
  const [isHovered, setIsHovered] = useState(false);

  const calculateExperience = (startDate: string) => {
    const start = new Date(startDate);
    const now = new Date();
    const diffInYears =
      (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(diffInYears);
  };

  const yearsOfExperience = calculateExperience(startDate);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="bg-secondary p-3 rounded-lg shadow-lg flex items-center space-x-3"
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={image}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h3 className="text-sm font-semibold">{name}</h3>
          <p className="text-xs text-gray-400">{role}</p>
        </div>
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-50 bg-background p-4 rounded-lg shadow-xl w-64 left-0 mt-2"
          >
            <img
              src={image}
              alt={name}
              width={60}
              height={60}
              className="rounded-full mx-auto mb-2"
            />
            <h3 className="text-lg font-semibold text-center mb-1">{name}</h3>
            <p className="text-sm text-center text-gray-400 mb-2">{role}</p>
            <p className="text-xs text-center mb-2">{description}</p>
            <div className="flex justify-center space-x-2 mb-2">
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  <FaLinkedin size={16} />
                </a>
              )}
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300"
                >
                  <FaGithub size={16} />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  <FaTwitter size={16} />
                </a>
              )}
              <a
                href={`mailto:${email}`}
                className="text-gray-400 hover:text-gray-300"
              >
                <FaEnvelope size={16} />
              </a>
            </div>
            <p className="text-xs mb-1">
              Years of Experience: {yearsOfExperience}
            </p>
            <h4 className="text-xs font-semibold mb-1">
              Collaborated Projects:
            </h4>
            <ul className="text-xs list-disc list-inside mb-2">
              {collaboratedProjects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
            {portfolio && (
              <Link
                href={portfolio}
                className="text-blue-400 hover:underline text-xs block text-center"
              >
                View Portfolio
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
