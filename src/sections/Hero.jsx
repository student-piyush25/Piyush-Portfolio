import React from 'react'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import StarsCanvas from '../components/canvas/Stars'
import { socialLinks } from '../constants'

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen mx-auto">
      <StarsCanvas />
      
      <div className="absolute inset-0 top-[150px] max-w-7xl mx-auto px-6 sm:px-16 flex flex-row items-start gap-5">
        {/* Timeline accent line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-accent shadow-neon" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-accent to-transparent" />
        </div>

        <div className="z-10 mt-2">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-black text-white tracking-tight"
          >
            Hi, I'm <span className="text-gradient">Piyush</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-xl sm:text-2xl lg:text-4xl font-semibold text-white/90"
          >
            Python Developer | <span className="text-accent/80">AI Engineer Aspirant</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-secondary max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed"
          >
            Crafting intelligent systems, building dynamic applications, 
            and exploring the vast landscape of Data Science and Artificial Intelligence.
            Turning complex problems into elegant solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-6"
          >
            <Button href="#projects">View Projects</Button>
            <Button href="#contact" outline>Contact Me</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex gap-6"
          >
            <SocialIcon Icon={FaGithub} href={socialLinks.github} />
            <SocialIcon Icon={FaLinkedin} href={socialLinks.linkedin} />
            <SocialIcon Icon={FaInstagram} href={socialLinks.instagram} />
            <SocialIcon Icon={Mail} href={`mailto:${socialLinks.email}`} />
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary/50 flex justify-center items-start p-2 hover:border-accent transition-colors duration-300">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-accent shadow-neon mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

const SocialIcon = ({ Icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-secondary hover:text-accent hover:border-accent hover:shadow-neon transition-all duration-300 glassmorphism hover:-translate-y-1"
  >
    <Icon size={22} />
  </a>
)

export default Hero
