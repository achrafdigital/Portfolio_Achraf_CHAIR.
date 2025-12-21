"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "FastAPI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "PyTorch",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];

const Skills: React.FC = () => {
  // Duplicating the array to ensure the marquee never shows a gap on large screens
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section
      id="skills"
      className="relative bg-[#050505] py-16 md:py-24 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/skillsbg.jpeg')] bg-cover bg-center bg-no-repeat" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/40" />

      {/* Background Wave/Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 md:opacity-40">
        <div className="w-full h-48 md:h-64 bg-teal-900/20 blur-[80px] md:blur-[120px] -rotate-12 scale-125 md:scale-150" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#E0D2B7] mb-4">
            My Skills
          </h1>
          <p className="text-sm sm:text-base lg:text-lg opacity-80 font-light leading-relaxed">
            A refined collection of skills enabling high-quality development,
            automation, and AI integration.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="flex flex-col gap-4 md:gap-8">
          {/* Row 1: Left */}
          {/* Row 1: Left */}
          <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              className="flex gap-3 md:gap-4 flex-nowrap"
              animate={{ x: [0, -2000] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {duplicatedSkills.map((skill, i) => (
                <SkillCard key={`row1-${i}`} skill={skill} />
              ))}
            </motion.div>
          </div>

          {/* Row 2: Right */}
          <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              className="flex gap-3 md:gap-4 flex-nowrap"
              animate={{ x: [-2000, 0] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {duplicatedSkills.map((skill, i) => (
                <SkillCard key={`row2-${i}`} skill={skill} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* See More Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <Link href="/skills">
            {" "}
            {/* 2. Wrap button with Link and point to /skills */}
            <button className="flex items-center gap-2 md:gap-3 bg-[#fdfaf3] text-black px-6 py-3 md:px-10 md:py-4 rounded-xl text-sm md:text-base font-bold hover:bg-white transition-all active:scale-95">
              See More <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="min-w-[100px] h-[100px] sm:min-w-[120px] sm:h-[120px] md:min-w-[130px] md:h-[130px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center p-3 sm:p-4 shrink-0">
    <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-3">
      <Image
        src={skill.icon}
        alt={skill.name}
        fill
        sizes="(max-width: 768px) 40px, 48px"
        className="object-contain filter brightness-110"
      />
    </div>
    <span className="text-gray-400 text-[9px] sm:text-[10px] md:text-[11px] font-medium tracking-tight text-center">
      {skill.name}
    </span>
  </div>
);

export default Skills;
