import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Home = () => {
  const [glitchText, setGlitchText] = useState('HELLO WORLD');
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';
  const originalText = 'HELLO WORLD';

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsGlitching(true);
        let iterations = 0;
        const maxIterations = 10;

        const glitchTimer = setInterval(() => {
          setGlitchText(
            originalText
              .split('')
              .map((char, index) => {
                if (Math.random() > 0.5) {
                  return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                }
                return char;
              })
              .join('')
          );

          iterations++;
          if (iterations >= maxIterations) {
            clearInterval(glitchTimer);
            setGlitchText(originalText);
            setIsGlitching(false);
          }
        }, 50);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center space-y-8">
          {/* Main title with glitch effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <h1 
              className={`text-6xl md:text-8xl font-bold tracking-wider ${
                isGlitching 
                  ? 'text-red-500 animate-pulse' 
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500'
              }`}
              style={{
                textShadow: isGlitching 
                  ? '0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000'
                  : '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff'
              }}
            >
              {glitchText}
            </h1>
            
            {/* Glitch overlay effects */}
            {isGlitching && (
              <>
                <div className="absolute inset-0 text-6xl md:text-8xl font-bold tracking-wider text-cyan-400 opacity-70 transform translate-x-1">
                  {originalText}
                </div>
                <div className="absolute inset-0 text-6xl md:text-8xl font-bold tracking-wider text-pink-400 opacity-70 transform -translate-x-1">
                  {originalText}
                </div>
              </>
            )}
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-cyan-300 font-mono tracking-wide"
          >
            {'> WELCOME TO THE NEON MATRIX <'}
          </motion.p>

          {/* Animated border box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="relative p-8 border border-cyan-400 bg-black/50 backdrop-blur-sm"
            style={{
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1)'
            }}
          >
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-pink-500"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-pink-500"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-pink-500"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-pink-500"></div>
            
            <p className="text-green-400 font-mono text-sm md:text-base leading-relaxed">
              SYSTEM STATUS: <span className="text-cyan-400">ONLINE</span><br/>
              NEURAL LINK: <span className="text-green-400">ESTABLISHED</span><br/>
              REALITY INDEX: <span className="text-pink-400">UNDEFINED</span>
            </p>
          </motion.div>

          {/* Pulsing call to action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(255, 0, 255, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold uppercase tracking-wider border border-pink-400 hover:bg-gradient-to-l transition-all duration-300"
              style={{
                boxShadow: '0 0 15px rgba(255, 0, 255, 0.3)'
              }}
            >
              Enter the Matrix
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scanning line effect */}
      <motion.div
        className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70"
        initial={{ top: '0%' }}
        animate={{ top: '100%' }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear'
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-cyan-400 opacity-60"></div>
      <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-cyan-400 opacity-60"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-cyan-400 opacity-60"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-cyan-400 opacity-60"></div>
    </div>
  );
};

export default Home;