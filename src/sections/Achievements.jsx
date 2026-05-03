import React from 'react'
import { motion } from 'framer-motion'
import { textVariant, fadeIn } from '../utils/motion'
import SectionWrapper from '../components/ui/SectionWrapper'
import { achievements } from '../constants'

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-secondary sm:text-[18px] text-[14px] uppercase tracking-wider">Milestones</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Achievements.</h2>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.15, 0.75)}
            className="glassmorphism p-8 rounded-3xl border-l-4 border-accent hover:bg-white/5 transition-all duration-300 hover:shadow-neon group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
            <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
              <h3 className="text-white text-xl font-bold group-hover:text-accent transition-colors">{item.title}</h3>
              <span className="text-accent/80 text-sm font-medium bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">{item.date}</span>
            </div>
            <p className="text-secondary mt-4 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Achievements, "achievements")
