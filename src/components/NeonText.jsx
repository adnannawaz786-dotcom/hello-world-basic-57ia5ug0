import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const NeonText = ({ 
  children, 
  className = "", 
  size = "lg",
  color = "cyan",
  intensity = "medium",
  animated = true,
  ...props 
}) => {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-2xl",
    xl: "text-4xl",
    "2xl": "text-6xl",
    "3xl": "text-8xl"
  };

  const colorClasses = {
    cyan: {
      text: "text-cyan-400",
      shadow: "drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]",
      glow: "shadow-cyan-400/50"
    },
    pink: {
      text: "text-pink-400",
      shadow: "drop-shadow-[0_0_10px_rgba(244,114,182,0.8)]",
      glow: "shadow-pink-400/50"
    },
    purple: {
      text: "text-purple-400",
      shadow: "drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]",
      glow: "shadow-purple-400/50"
    },
    green: {
      text: "text-green-400",
      shadow: "drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]",
      glow: "shadow-green-400/50"
    },
    blue: {
      text: "text-blue-400",
      shadow: "drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]",
      glow: "shadow-blue-400/50"
    },
    orange: {
      text: "text-orange-400",
      shadow: "drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]",
      glow: "shadow-orange-400/50"
    }
  };

  const intensityClasses = {
    low: "brightness-75",
    medium: "brightness-100",
    high: "brightness-125 saturate-150"
  };

  const selectedColor = colorClasses[color] || colorClasses.cyan;
  
  const baseClasses = cn(
    "font-bold tracking-wider select-none",
    sizeClasses[size],
    selectedColor.text,
    selectedColor.shadow,
    intensityClasses[intensity],
    "transition-all duration-300 ease-in-out",
    className
  );

  const glowAnimation = {
    initial: { filter: "brightness(1) saturate(1)" },
    animate: {
      filter: [
        "brightness(1) saturate(1)",
        "brightness(1.2) saturate(1.3)",
        "brightness(1) saturate(1)"
      ],
      textShadow: [
        `0 0 10px ${selectedColor.glow.replace('/50', '')}`,
        `0 0 20px ${selectedColor.glow.replace('/50', '')}, 0 0 30px ${selectedColor.glow.replace('/50', '')}`,
        `0 0 10px ${selectedColor.glow.replace('/50', '')}`
      ]
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const flickerAnimation = {
    initial: { opacity: 1 },
    animate: {
      opacity: [1, 0.8, 1, 0.9, 1, 0.7, 1]
    },
    transition: {
      duration: 0.1,
      repeat: Infinity,
      repeatDelay: Math.random() * 5 + 3,
      ease: "easeInOut"
    }
  };

  if (animated) {
    return (
      <motion.span
        className={baseClasses}
        {...glowAnimation}
        whileHover={{
          scale: 1.05,
          filter: "brightness(1.3) saturate(1.5)",
          textShadow: `0 0 25px ${selectedColor.glow.replace('/50', '')}, 0 0 35px ${selectedColor.glow.replace('/50', '')}`,
          transition: { duration: 0.2 }
        }}
        {...props}
      >
        <motion.span {...flickerAnimation}>
          {children}
        </motion.span>
      </motion.span>
    );
  }

  return (
    <span 
      className={cn(
        baseClasses,
        "hover:brightness-125 hover:saturate-150 hover:scale-105"
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default NeonText;