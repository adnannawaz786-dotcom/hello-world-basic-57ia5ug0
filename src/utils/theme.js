// Cyberpunk neon theme constants and utilities
export const colors = {
  // Primary neon colors
  neonCyan: '#00ffff',
  neonPink: '#ff00ff',
  neonGreen: '#00ff00',
  neonBlue: '#0080ff',
  neonPurple: '#8000ff',
  neonYellow: '#ffff00',
  neonOrange: '#ff8000',
  
  // Dark cyberpunk backgrounds
  darkBg: '#0a0a0a',
  darkBg2: '#1a1a1a',
  darkBg3: '#2a2a2a',
  
  // Glowing variants
  glowCyan: 'rgba(0, 255, 255, 0.5)',
  glowPink: 'rgba(255, 0, 255, 0.5)',
  glowGreen: 'rgba(0, 255, 0, 0.5)',
  glowBlue: 'rgba(0, 128, 255, 0.5)',
  glowPurple: 'rgba(128, 0, 255, 0.5)',
  
  // Text colors
  textPrimary: '#ffffff',
  textSecondary: '#cccccc',
  textMuted: '#888888',
}

export const shadows = {
  neonCyan: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff, 0 0 20px #00ffff',
  neonPink: '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 15px #ff00ff, 0 0 20px #ff00ff',
  neonGreen: '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00, 0 0 20px #00ff00',
  neonBlue: '0 0 5px #0080ff, 0 0 10px #0080ff, 0 0 15px #0080ff, 0 0 20px #0080ff',
  neonPurple: '0 0 5px #8000ff, 0 0 10px #8000ff, 0 0 15px #8000ff, 0 0 20px #8000ff',
  neonYellow: '0 0 5px #ffff00, 0 0 10px #ffff00, 0 0 15px #ffff00, 0 0 20px #ffff00',
  
  // Subtle glows
  softCyan: '0 0 10px rgba(0, 255, 255, 0.3)',
  softPink: '0 0 10px rgba(255, 0, 255, 0.3)',
  softGreen: '0 0 10px rgba(0, 255, 0, 0.3)',
  softBlue: '0 0 10px rgba(0, 128, 255, 0.3)',
  
  // Border glows
  borderCyan: 'inset 0 0 0 1px #00ffff, 0 0 10px rgba(0, 255, 255, 0.4)',
  borderPink: 'inset 0 0 0 1px #ff00ff, 0 0 10px rgba(255, 0, 255, 0.4)',
  borderGreen: 'inset 0 0 0 1px #00ff00, 0 0 10px rgba(0, 255, 0, 0.4)',
}

export const gradients = {
  cyberpunkHorizontal: 'linear-gradient(90deg, #00ffff 0%, #ff00ff 50%, #00ff00 100%)',
  cyberpunkVertical: 'linear-gradient(180deg, #00ffff 0%, #ff00ff 50%, #00ff00 100%)',
  cyberpunkDiagonal: 'linear-gradient(45deg, #00ffff 0%, #ff00ff 50%, #00ff00 100%)',
  
  // Background gradients
  darkCyberpunk: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
  neonOverlay: 'linear-gradient(rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))',
  
  // Button gradients
  primaryButton: 'linear-gradient(45deg, #00ffff, #0080ff)',
  secondaryButton: 'linear-gradient(45deg, #ff00ff, #8000ff)',
  accentButton: 'linear-gradient(45deg, #00ff00, #80ff00)',
}

export const animations = {
  // Pulsing animations
  pulseNeon: 'animate-pulse',
  
  // Glow animations
  glowCycle: {
    animation: 'glow-cycle 2s ease-in-out infinite alternate',
  },
  
  // Flicker effect
  flicker: {
    animation: 'flicker 0.15s infinite linear',
  },
  
  // Scan line effect
  scanline: {
    animation: 'scanline 2s linear infinite',
  },
}

export const typography = {
  // Font families for cyberpunk aesthetic
  mono: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
  
  // Text sizes with cyberpunk styling
  heading1: 'text-4xl md:text-6xl font-bold tracking-wider uppercase',
  heading2: 'text-3xl md:text-4xl font-bold tracking-wide uppercase',
  heading3: 'text-2xl md:text-3xl font-semibold tracking-wide uppercase',
  body: 'text-base md:text-lg tracking-wide',
  caption: 'text-sm tracking-widest uppercase',
  
  // Neon text effects
  neonText: 'font-bold tracking-widest uppercase',
}

export const spacing = {
  // Consistent spacing scale
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  
  // Component specific spacing
  cardPadding: 'p-6 md:p-8',
  sectionPadding: 'py-12 md:py-20',
  containerPadding: 'px-4 md:px-6 lg:px-8',
}

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

// Utility function to get neon color by name
export const getNeonColor = (colorName) => {
  const colorMap = {
    cyan: colors.neonCyan,
    pink: colors.neonPink,
    green: colors.neonGreen,
    blue: colors.neonBlue,
    purple: colors.neonPurple,
    yellow: colors.neonYellow,
    orange: colors.neonOrange,
  }
  return colorMap[colorName] || colors.neonCyan
}

// Utility function to get neon shadow by name
export const getNeonShadow = (colorName) => {
  const shadowMap = {
    cyan: shadows.neonCyan,
    pink: shadows.neonPink,
    green: shadows.neonGreen,
    blue: shadows.neonBlue,
    purple: shadows.neonPurple,
    yellow: shadows.neonYellow,
  }
  return shadowMap[colorName] || shadows.neonCyan
}

// Utility function to create custom neon effect
export const createNeonEffect = (color, intensity = 1) => {
  const baseIntensity = 5 * intensity
  return `0 0 ${baseIntensity}px ${color}, 0 0 ${baseIntensity * 2}px ${color}, 0 0 ${baseIntensity * 3}px ${color}, 0 0 ${baseIntensity * 4}px ${color}`
}

// Common cyberpunk component styles
export const componentStyles = {
  // Card styles
  neonCard: 'bg-black/80 backdrop-blur-sm border border-cyan-400 rounded-lg shadow-lg',
  glowCard: 'bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-md border border-transparent',
  
  // Button styles
  primaryButton: 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-2 px-6 rounded-md transition-all duration-300 transform hover:scale-105',
  secondaryButton: 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-bold py-2 px-6 rounded-md transition-all duration-300 transform hover:scale-105',
  outlineButton: 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-2 px-6 rounded-md transition-all duration-300',
  
  // Input styles
  neonInput: 'bg-black/50 border border-cyan-400 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300',
  
  // Container styles
  pageContainer: 'min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white',
  contentContainer: 'container mx-auto px-4 py-8',
  
  // Navigation styles
  navLink: 'text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium tracking-wide',
  activeNavLink: 'text-cyan-300 font-bold tracking-wide',
}

// Theme configuration object
export const theme = {
  colors,
  shadows,
  gradients,
  animations,
  typography,
  spacing,
  breakpoints,
  componentStyles,
}

export default theme