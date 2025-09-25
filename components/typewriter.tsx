"use client";

import { motion } from "framer-motion";
import React from "react";

const sentenceVariants = {
  hidden: {},
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      delay,
      staggerChildren: 0.05,
    },
  }),
};

const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
};

interface TypewriterProps {
  text: string | string[];
  className?: string;
  delay?: number;
  as?: React.ElementType; 
}

export const Typewriter = ({
  text,
  className = "",
  delay = 0,
  as: Component = "p",
}: TypewriterProps) => {
  const lines = Array.isArray(text) ? text : [text];
  return (
    <motion.div
      variants={sentenceVariants}
      custom={delay}
      initial="hidden"
      animate="visible"
    >
      {lines.map((line, idx) => (
        <Component key={idx} className={className}>
          {line.split("").map((char, i) => (
            <motion.span key={`${idx}-${char}-${i}`} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </Component>
      ))}
    </motion.div>
  );
};
