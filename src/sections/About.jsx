import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import SectionWrapper from '../components/ui/SectionWrapper'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-secondary sm:text-[18px] text-[14px] uppercase tracking-wider text-center">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">About Me.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-8 text-secondary text-[17px] max-w-4xl leading-[32px] mx-auto text-center glassmorphism p-10 rounded-3xl shadow-card border border-white/10 hover:border-accent/50 transition-colors duration-500 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl" />
        
        <div className="relative z-10 flex flex-col gap-6 text-left">
          <p className="leading-[1.8] text-[18px]">
            I'm a passionate <span className="text-white font-semibold">Python Developer</span> and aspiring <span className="text-accent font-semibold">AI Engineer</span> with a deep curiosity for building intelligent systems. My journey started with a fascination for how data shapes our world, leading me to dive deep into Data Science and Machine Learning.
          </p>
          <ul className="list-disc list-outside ml-6 space-y-3 text-[17px] text-white/80 marker:text-accent">
            <li>Building real-world, scalable applications using <span className="text-accent font-semibold">Flask</span> and <span className="text-accent font-semibold">Django</span>.</li>
            <li>Actively exploring advanced AI models and Computer Vision with <span className="text-accent font-semibold">OpenCV</span>.</li>
            <li>Applying a relentless self-learning approach to master modern technologies.</li>
          </ul>
          <p className="leading-[1.8] text-[18px]">
            I am currently seeking an internship to apply my problem-solving skills to challenging, impactful projects. Let's build something amazing together!
          </p>
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(About, "about")
