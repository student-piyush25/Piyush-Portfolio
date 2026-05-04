import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import SectionWrapper from '../components/ui/SectionWrapper'
import { skillCategories } from '../constants'

const SkillCard = ({ index, name, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.05, 0.75)}
    className="w-full p-[1px] rounded-[20px] group"
  >
    <div className="glassmorphism rounded-[20px] py-5 px-4 min-h-[120px] flex justify-center gap-3 items-center flex-col relative overflow-hidden transition-all duration-300 group-hover:bg-tertiary/60 group-hover:-translate-y-2 border border-white/5 group-hover:border-accent/50 group-hover:shadow-neon">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="text-4xl relative z-10 transition-transform duration-300 group-hover:scale-110">{icon}</span>
      <h3 className="text-white text-[15px] font-semibold text-center relative z-10 group-hover:text-accent transition-colors">
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

      <div className="mt-16 flex flex-col gap-12">
        {skillCategories.map((category, catIndex) => (
          <div key={category.title} className="flex flex-col gap-6">
            <motion.h3 
              variants={fadeIn("right", "spring", catIndex * 0.1, 0.75)}
              className="text-2xl font-bold text-white/90 border-l-4 border-accent pl-4 tracking-wide"
            >
              {category.title}
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {category.skills.map((skill, index) => (
                <SkillCard key={skill.name} index={index} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Skills, "skills")
