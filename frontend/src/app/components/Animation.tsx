"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

type AnimatedNameProps = {
  text: string;
};

export default function AnimatedName({ text }: AnimatedNameProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true, // 🔑 animate only once
    margin: "-80px", // triggers slightly before fully visible
  });

  const letters = text.split("");

  return (
    <span ref={ref} className="inline-flex">
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 6 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.05,
            delay: index * 0.06,
            ease: "easeOut",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
