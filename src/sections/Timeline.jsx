import React from 'react'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import SectionWrapper from '../components/ui/SectionWrapper'
import { timeline } from '../constants'

const Timeline = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-secondary sm:text-[18px] text-[14px] uppercase tracking-wider text-center">My Path</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">Journey Timeline.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col items-center">
        <div className="relative border-l-2 border-accent/20 w-full max-w-4xl pl-6 sm:pl-12 ml-4 sm:ml-0">
          {timeline.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
              className="mb-12 relative group"
            >
              <div className="absolute sm:-left-[57px] -left-[33px] top-4 w-5 h-5 rounded-full bg-primary border-4 border-accent shadow-neon transition-transform duration-300 group-hover:scale-125" />
              <div className="glassmorphism p-6 sm:p-8 rounded-3xl border border-white/5 group-hover:border-accent/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute -inset-2 bg-gradient-to-r from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
                <span className="text-accent text-sm font-black tracking-widest uppercase">{item.date}</span>
                <h3 className="text-white text-2xl font-bold mt-2">{item.title}</h3>
                <p className="text-secondary mt-3 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
          {/* Animated line head */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "linear" }}
            className="absolute left-[-2px] top-0 w-1 bg-gradient-to-b from-accent to-transparent -z-10"
          />
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Timeline, "timeline")
