import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function App() {
  const [glitchText, setGlitchText] = useState('HELLO WORLD')
  const [isGlitching, setIsGlitching] = useState(false)
  const [credits, setCredits] = useState(1000)
  const [isPaid, setIsPaid] = useState(false)
  const [scanLines, setScanLines] = useState([])

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
  const originalText = 'HELLO WORLD'

  useEffect(() => {
    // Generate random scan lines
    const lines = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      delay: Math.random() * 2
    }))
    setScanLines(lines)

    // Periodic glitch effect
    const glitchInterval = setInterval(() => {
      if (!isGlitching) {
        triggerGlitch()
      }
    }, 3000 + Math.random() * 2000)

    return () => clearInterval(glitchInterval)
  }, [isGlitching])

  const triggerGlitch = () => {
    setIsGlitching(true)
    let iterations = 0
    const maxIterations = 10

    const glitchTimer = setInterval(() => {
      setGlitchText(prevText => 
        prevText.split('').map((char, index) => {
          if (Math.random() < 0.3) {
            return glitchChars[Math.floor(Math.random() * glitchChars.length)]
          }
          return originalText[index] || char
        }).join('')
      )

      iterations++
      if (iterations >= maxIterations) {
        clearInterval(glitchTimer)
        setGlitchText(originalText)
        setIsGlitching(false)
      }
    }, 100)
  }

  const handlePayment = () => {
    if (credits >= 100) {
      setCredits(prev => prev - 100)
      setIsPaid(true)
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsPaid(false)
      }, 3000)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-mono">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Scan Lines */}
      {scanLines.map(line => (
        <motion.div
          key={line.id}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"
          style={{ top: `${line.top}%` }}
          animate={{
            opacity: [0.1, 0.6, 0.1],
            scaleX: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: line.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Glitch Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className={`w-full h-full transition-opacity duration-100 ${
            isGlitching ? 'opacity-20' : 'opacity-0'
          }`}
          style={{
            background: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(255, 0, 255, 0.1) 2px,
                rgba(255, 0, 255, 0.1) 4px
              )
            `
          }}
        />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Credits Display */}
        <motion.div
          className="absolute top-8 right-8 text-cyan-400 text-lg"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-2">
            <span className="text-green-400">CREDITS:</span>
            <span className="font-bold">{credits}</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <motion.h1
            className={`text-6xl md:text-8xl font-bold mb-4 transition-all duration-100 ${
              isGlitching 
                ? 'text-red-500 drop-shadow-[0_0_20px_rgba(255,0,0,0.8)]' 
                : 'text-cyan-400 drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]'
            }`}
            variants={pulseVariants}
            animate="pulse"
            onClick={triggerGlitch}
            style={{ cursor: 'pointer' }}
          >
            {glitchText}
          </motion.h1>
          
          <motion.p
            className="text-xl text-green-400 opacity-80"
            variants={itemVariants}
          >
            CYBERPUNK INTERFACE v2.077
          </motion.p>
        </motion.div>

        {/* Payment Section */}
        <motion.div
          className="bg-gray-900 border border-cyan-400 rounded-lg p-8 shadow-[0_0_30px_rgba(0,255,255,0.3)] max-w-md w-full"
          variants={itemVariants}
        >
          <div className="text-center">
            <h2 className="text-2xl text-cyan-400 mb-6 font-bold">
              NEURAL LINK ACCESS
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-green-400">
                <span>Service Fee:</span>
                <span>100 Credits</span>
              </div>
              <div className="flex justify-between text-yellow-400">
                <span>Status:</span>
                <span>{isPaid ? 'CONNECTED' : 'DISCONNECTED'}</span>
              </div>
            </div>

            {!isPaid ? (
              <motion.button
                onClick={handlePayment}
                disabled={credits < 100}
                className={`w-full py-3 px-6 rounded font-bold text-black transition-all duration-300 ${
                  credits >= 100
                    ? 'bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:shadow-[0_0_30px_rgba(0,255,255,0.8)]'
                    : 'bg-gray-600 cursor-not-allowed opacity-50'
                }`}
                whileHover={credits >= 100 ? { scale: 1.05 } : {}}
                whileTap={credits >= 100 ? { scale: 0.95 } : {}}
              >
                {credits >= 100 ? 'INITIATE CONNECTION' : 'INSUFFICIENT CREDITS'}
              </motion.button>
            ) : (
              <motion.div
                className="text-center text-green-400 py-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-2xl mb-2">✓ CONNECTION ESTABLISHED</div>
                <div className="text-sm opacity-80">Welcome to the Matrix</div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="absolute bottom-8 text-center text-cyan-400 opacity-60"
          variants={itemVariants}
        >
          <p className="text-sm">
            NIGHT CITY TERMINAL • SECURE CONNECTION • {new Date().getFullYear()}
          </p>
        </motion.div>
      </motion.div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full opacity-10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse" 
           style={{ animationDelay: '1s' }} />
    </div>
  )
}

export default App