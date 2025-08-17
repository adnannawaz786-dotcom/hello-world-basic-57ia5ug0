import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import theme from '../utils/theme'

const Layout = ({ children, className = '', showGrid = true }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={`min-h-screen bg-black text-white relative overflow-hidden ${className}`}>
      {/* Animated Background Grid */}
      {showGrid && (
        <div className="fixed inset-0 z-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
          
          {/* Animated Grid Lines */}
          <motion.div
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px']
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 0, 255, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 0, 255, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px'
            }}
          />
        </div>
      )}

      {/* Floating Neon Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full"
          style={{
            background: theme.gradients.neonPink,
            filter: 'blur(40px)',
            opacity: 0.3
          }}
        />
        
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 5
          }}
          className="absolute top-3/4 right-1/4 w-40 h-40 rounded-full"
          style={{
            background: theme.gradients.neonCyan,
            filter: 'blur(50px)',
            opacity: 0.2
          }}
        />

        <motion.div
          animate={{
            x: [0, 80, -80, 0],
            y: [0, -80, 80, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 10
          }}
          className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full"
          style={{
            background: theme.gradients.neonPurple,
            filter: 'blur(30px)',
            opacity: 0.4
          }}
        />
      </div>

      {/* Scanlines Effect */}
      <div 
        className="fixed inset-0 z-10 pointer-events-none"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 255, 0.03) 2px,
            rgba(0, 255, 255, 0.03) 4px
          )`
        }}
      />

      {/* Main Content Container */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 min-h-screen flex flex-col"
      >
        {/* Header Glow */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px">
          <div 
            className="w-full h-px"
            style={{
              background: theme.gradients.neonCyan,
              boxShadow: theme.shadows.neonCyan
            }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 relative">
          {children}
        </div>

        {/* Footer Glow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-px">
          <div 
            className="w-full h-px"
            style={{
              background: theme.gradients.neonPink,
              boxShadow: theme.shadows.neonPink
            }}
          />
        </div>
      </motion.main>

      {/* Corner Accents */}
      <div className="fixed top-0 left-0 z-30 w-20 h-20 pointer-events-none">
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 2, delay: 1 }}
          className="w-full h-full border-l-2 border-t-2 border-cyan-400"
          style={{
            boxShadow: theme.shadows.neonCyan,
            filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))'
          }}
        />
      </div>

      <div className="fixed top-0 right-0 z-30 w-20 h-20 pointer-events-none">
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: -360 }}
          transition={{ duration: 2, delay: 1.2 }}
          className="w-full h-full border-r-2 border-t-2 border-pink-400"
          style={{
            boxShadow: theme.shadows.neonPink,
            filter: 'drop-shadow(0 0 10px rgba(255, 0, 255, 0.5))'
          }}
        />
      </div>

      <div className="fixed bottom-0 left-0 z-30 w-20 h-20 pointer-events-none">
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 2, delay: 1.4 }}
          className="w-full h-full border-l-2 border-b-2 border-purple-400"
          style={{
            boxShadow: theme.shadows.neonPurple,
            filter: 'drop-shadow(0 0 10px rgba(128, 0, 255, 0.5))'
          }}
        />
      </div>

      <div className="fixed bottom-0 right-0 z-30 w-20 h-20 pointer-events-none">
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: -360 }}
          transition={{ duration: 2, delay: 1.6 }}
          className="w-full h-full border-r-2 border-b-2 border-cyan-400"
          style={{
            boxShadow: theme.shadows.neonCyan,
            filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))'
          }}
        />
      </div>

      {/* Glitch Effect Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatDelay: Math.random() * 10 + 5
        }}
        className="fixed inset-0 z-40 pointer-events-none"
        style={{
          background: `linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 0, 255, 0.1) 50%,
            transparent 100%
          )`,
          transform: `translateX(${Math.random() * 100}%)`
        }}
      />
    </div>
  )
}

export default Layout