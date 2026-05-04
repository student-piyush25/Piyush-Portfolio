import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import SectionWrapper from '../components/ui/SectionWrapper'
import { projects } from '../constants'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)} className="w-full">
      <div className="glassmorphism p-6 rounded-3xl w-full flex flex-col h-full border border-white/10 hover:border-accent/50 transition-all duration-500 group hover:-translate-y-2 hover:shadow-neon">
        <div className="relative w-full h-[230px] overflow-hidden rounded-2xl shrink-0">
          <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="mt-6 flex flex-col flex-grow">
          <h3 className="text-white font-bold text-[24px] group-hover:text-accent transition-colors">{name}</h3>
          <p className="mt-3 text-secondary text-[15px] leading-relaxed">{description}</p>
          
          <div className="mt-5 flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span key={tag} className="text-[13px] text-accent/90 font-medium px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-5 pt-4 border-t border-white/10">
            <button onClick={() => window.open(source_code_link, "_blank")} className="flex items-center gap-2 text-[14px] font-semibold text-white hover:text-accent transition-colors">
              <FaGithub size={18} /> Source Code
            </button>
            <button onClick={() => window.open(live_demo_link, "_blank")} className="flex items-center gap-2 text-[14px] font-semibold text-white hover:text-accent transition-colors">
              <ExternalLink size={18} /> Live Demo
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-secondary sm:text-[18px] text-[14px] uppercase tracking-wider">My Work</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Featured Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. They reflect my ability to solve complex problems, work with modern technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "projects")
