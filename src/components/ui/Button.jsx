import React from 'react'

const Button = ({ children, outline, onClick, href, type }) => {
  const baseClasses = "px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-block text-center tracking-wide";
  const variants = outline 
    ? "bg-transparent border border-accent text-accent hover:shadow-neon hover:bg-accent/10" 
    : "bg-accent text-primary hover:shadow-neon hover:bg-[#4dffff]";
  
  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${variants}`}>
        {children}
      </a>
    )
  }

  return (
    <button type={type || "button"} onClick={onClick} className={`${baseClasses} ${variants}`}>
      {children}
    </button>
  )
}

export default Button
