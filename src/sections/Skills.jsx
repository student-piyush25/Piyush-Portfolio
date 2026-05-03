import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import SectionWrapper from '../components/ui/SectionWrapper'
import { skills } from '../constants'

const SkillCard = ({ index, name, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.05, 0.75)}
    className="w-full p-[1px] rounded-[20px] shadow-card group"
  >
    <div className="glassmorphism rounded-[20px] py-5 px-4 min-h-[120px] flex justify-evenly items-center flex-col relative overflow-hidden transition-all duration-300 group-hover:bg-tertiary group-hover:scale-105 border border-white/5 group-hover:border-accent/40">
      <div className="absolute -inset-2 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
      <span className="text-4xl relative z-10 transition-transform duration-300 group-hover:-translate-y-1">{icon}</span>
      <h3 className="text-white text-[16px] font-bold text-center mt-3 relative z-10 group-hover:text-accent transition-colors">
        {name}
      </h3>
    </div>
  </motion.div>
)

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-secondary sm:text-[18px] text-[14px] uppercase tracking-wider text-center">What I know</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">Technical Skills.</h2>
      </motion.div>

      <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} index={index} {...skill} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Skills, "skills")
