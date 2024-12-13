'use client'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 py-4"
    >
      <nav className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6">
          <li><a href="#home" className="text-lg font-semibold hover:text-blue-400 transition-colors">Home</a></li>
          <li><a href="#about" className="text-lg font-semibold hover:text-blue-400 transition-colors">About</a></li>
          <li><a href="#projects" className="text-lg font-semibold hover:text-blue-400 transition-colors">Projects</a></li>
          <li><a href="#skills" className="text-lg font-semibold hover:text-blue-400 transition-colors">Skills</a></li>
        </ul>
      </nav>
    </motion.header>
  )
}

