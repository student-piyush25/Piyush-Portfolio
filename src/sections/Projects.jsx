import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import SectionWrapper from '../components/ui/SectionWrapper'
import { projects } from '../constants'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)}>
      <div className="glassmorphism p-5 rounded-3xl sm:w-[360px] w-full border border-white/10 hover:border-accent/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-neon">
        <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
          <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute inset-0 flex justify-end m-3 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
            <div onClick={() => window.open(source_code_link, "_blank")} className="bg-primary/80 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-white/20 hover:text-accent hover:border-accent transition-all">
              <FaGithub size={20} />
            </div>
            <div onClick={() => window.open(live_demo_link, "_blank")} className="bg-primary/80 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-white/20 hover:text-accent hover:border-accent transition-all">
              <ExternalLink size={20} />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-white font-bold text-[24px] group-hover:text-accent transition-colors">{name}</h3>
          <p className="mt-3 text-secondary text-[14px] leading-relaxed line-clamp-3">{description}</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-[13px] text-accent/90 font-medium px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
              #{tag}
            </span>
          ))}
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

      <div className="mt-14 flex flex-wrap gap-7 justify-start">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "projects")
