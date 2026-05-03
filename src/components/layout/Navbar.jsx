import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 py-5 px-6 sm:px-16 flex justify-between items-center glassmorphism"
    >
      <div className="text-2xl font-bold tracking-tighter text-white cursor-pointer hover:text-accent transition-colors">
        Piyush<span className="text-accent">.</span>
      </div>
      <ul className="hidden sm:flex gap-10 text-sm font-medium text-secondary">
        {['About', 'Skills', 'Projects', 'Timeline', 'Contact'].map((item) => (
          <li key={item} className="hover:text-white cursor-pointer transition-colors">
            <a href={`#${item.toLowerCase()}`} className="block w-full h-full">
              {item}
            </a>
          </li>
        ))}
      </ul>
      {/* Mobile menu icon (placeholder) */}
      <div className="sm:hidden flex flex-1 justify-end items-center text-white">
        ☰
      </div>
    </motion.nav>
  )
}

export default Navbar
