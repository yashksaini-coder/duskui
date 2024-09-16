"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedRevealProps {
  children: ReactNode;
  delayStart?: number;
  delay?: number;
  className?: string;
}

const AnimatedCharacter: React.FC<{ character: string }> = ({ character }) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.2 }}
  >
    {character}
  </motion.span>
);

const AnimatedReveal: React.FC<AnimatedRevealProps> = ({
  children,
  delayStart = 0,
  className = "",
  delay = 10,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const text = React.Children.toArray(children).join("");

  useEffect(() => {
    const animateText = async () => {
      await new Promise((resolve) => setTimeout(resolve, delayStart));
      for (let i = 0; i <= text.length; i++) {
        setDisplayedText(text.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    };
    animateText();
  }, [text, delayStart]);

  return (
    <span className={className}>
      <AnimatePresence>
        {displayedText.split("").map((char, index) => (
          <AnimatedCharacter key={index} character={char} />
        ))}
      </AnimatePresence>
    </span>
  );
};

export default AnimatedReveal;
