import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 text-center glassmorphism mt-auto relative z-10 border-t border-white/10">
      <p className="text-secondary text-sm">Designed & Developed by Piyush Hatwar</p>
      <p className="mt-2 text-xs text-white/30">© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  )
}

export default Footer
