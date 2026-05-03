import React from 'react'
import { motion } from 'framer-motion'
import { textVariant, fadeIn } from '../utils/motion'
import SectionWrapper from '../components/ui/SectionWrapper'
import Button from '../components/ui/Button'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { socialLinks } from '../constants'

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-secondary sm:text-[18px] text-[14px] uppercase tracking-wider">Get In Touch</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h2>
      </motion.div>

      <div className="mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden relative">
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.6] glassmorphism p-8 rounded-3xl border border-white/10"
        >
          <form 
            action="https://formsubmit.co/hatwarpiyush2@gmail.com" 
            method="POST" 
            className="mt-2 flex flex-col gap-6"
          >
            <input type="hidden" name="_subject" value="New message from Portfolio!" />
            {/* Captcha enabled by default by FormSubmit to prevent bot spam */}

            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Name</span>
              <input type="text" name="name" required placeholder="What's your name?" className="bg-tertiary/50 py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-white/5 focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Email</span>
              <input type="email" name="email" required placeholder="What's your email?" className="bg-tertiary/50 py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-white/5 focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Message</span>
              <textarea rows={5} name="message" required placeholder="What do you want to say?" className="bg-tertiary/50 py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-white/5 focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none" />
            </label>
            
            <div className="mt-4">
              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.4] flex flex-col justify-center items-center p-8 glassmorphism rounded-3xl border border-white/10"
        >
          <div className="w-full flex flex-col gap-8 h-full justify-center">
            <div>
              <h3 className="text-4xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-secondary text-lg leading-relaxed">
                I'm actively looking for internships and new opportunities in Data Science and AI Engineering. 
                Whether you have a question or just want to say hi, my inbox is always open!
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 mt-4">
              <SocialLink href={socialLinks.github} Icon={FaGithub} label="GitHub" />
              <SocialLink href={socialLinks.linkedin} Icon={FaLinkedin} label="LinkedIn" />
              <SocialLink href={socialLinks.instagram} Icon={FaInstagram} label="Instagram" />
              <SocialLink href={`mailto:${socialLinks.email}`} Icon={Mail} label="Email" />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

const SocialLink = ({ href, Icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="flex flex-col items-center gap-2 group"
  >
    <div className="w-16 h-16 rounded-2xl glassmorphism border border-white/10 flex justify-center items-center group-hover:border-accent group-hover:text-accent group-hover:shadow-neon transition-all duration-300 group-hover:-translate-y-2">
      <Icon size={28} className="text-white group-hover:text-accent transition-colors" />
    </div>
    <span className="text-sm font-medium text-secondary group-hover:text-white transition-colors">{label}</span>
  </a>
)

export default SectionWrapper(Contact, "contact")
