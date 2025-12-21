"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Cpu, Database, Layout, Terminal } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Categorized Data
const skillCategories = [
  {
    title: "Front-End Development",
    icon: <Layout className="w-6 h-6 text-teal-400" />,
    description:
      "Building responsive, high-performance user interfaces with modern frameworks.",
    skills: [
      {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML5/CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
    ],
  },
  {
    title: "Back-End & Cloud",
    icon: <Terminal className="w-6 h-6 text-teal-400" />,
    description:
      "Developing robust server-side logic and scalable API architectures.",
    skills: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
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
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
    ],
  },
  {
    title: "Artificial Intelligence",
    icon: <Cpu className="w-6 h-6 text-teal-400" />,
    description:
      "Integrating machine learning models and AI-driven automation workflows.",
    skills: [
      {
        name: "TensorFlow",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "PyTorch",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      },
      {
        name: "Machine Learning",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
    ],
  },
  {
    title: "Database & Storage",
    icon: <Database className="w-6 h-6 text-teal-400" />,
    description:
      "Designing efficient data schemas and managing complex data relations.",
    skills: [
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
  },
];

const SeeMoreSkills = () => {
  const router = useRouter(); // useRouter for navigation

  return (
    <div className="min-h-screen bg-[#021616] text-white py-20 px-6 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 blur-[120px] rounded-full -mr-64 -mt-64" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back Button */}
        <button
          onClick={() => {
            router.push("/");
            // Scroll to top after navigation
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }, 100);
          }}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        {/* Header */}
        <header className="mb-20">
          <h1 className="text-5xl md:text-6xl font-medium text-[#E0D2B7] mb-6">
            Technical Stack
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A deep dive into the technologies I use to build high-performance
            applications, intelligent automations, and scalable digital
            solutions.
          </p>
        </header>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-10 backdrop-blur-sm hover:border-teal-500/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-teal-950/50 rounded-2xl border border-teal-500/20">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  {category.title}
                </h2>
              </div>

              <p className="text-gray-400 mb-8 leading-relaxed">
                {category.description}
              </p>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className="w-14 h-14 bg-[#011010] rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-teal-500/40 transition-all group-hover:scale-110">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={32}
                        height={32}
                        className="opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                      />
                    </div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-tighter group-hover:text-teal-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Quote */}
        <footer className="mt-32 pt-10 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm italic tracking-wide">
            &quot;The right tool for the right job is the foundation of quality
            development.&quot;
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SeeMoreSkills;
