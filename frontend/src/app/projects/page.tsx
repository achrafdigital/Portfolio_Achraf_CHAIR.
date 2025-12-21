"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Extended projects data for the "See More" page
const allProjects = [
  {
    title: "MediCare AI",
    category: "AI & Healthcare",
    description: "Patient management system with AI-assisted diagnosis suggestions.",
    tags: ["React.js", "TensorFlow", "PostgreSQL"],
    image: "/images/project-1.png",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "EcoHarvest AI",
    category: "AI & Agriculture",
    description: "Smart farming dashboard utilizing satellite imagery and IoT.",
    tags: ["Next.js", "FastAPI", "PyTorch"],
    image: "/images/project-2.png",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "EauVerse VR",
    category: "Web & 3D",
    description: "Immersive 3D property touring platform with real-time lighting.",
    tags: ["Three.js", "React", "Node.js"],
    image: "/images/project-3.png",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Smart Analytics",
    category: "Data Science",
    description: "Enterprise data visualization tool for real-time market trends.",
    tags: ["D3.js", "Python", "Flask"],
    image: "/images/project-1.png",
    githubUrl: "#",
    liveUrl: "#",
  },
];

const categories = ["All", "AI & Healthcare", "AI & Agriculture", "Web & 3D", "Data Science"];

export default function ProjectsArchive() {
  const [activeFilter, setActiveFilter] = useState("All");
  const router = useRouter();

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#050709] text-[#F2EAE4] py-16 px-6 lg:px-12 relative overflow-hidden">
      {/* Background Aesthetic Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto mt-10">
        {/* Navigation / Back Button */}
        <button
          onClick={() => {
            router.push("/");
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
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-medium text-[#E0D2B7] mb-6">
            Project Archive
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A comprehensive list of my work, ranging from deep learning experiments
            to high-performance web applications and immersive designs.
          </p>
        </header>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-white/5 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-[#E0D2B7] text-black border-[#E0D2B7]"
                  : "border-white/10 text-gray-400 hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filtered Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0A1211] rounded-4xl border border-white/5 overflow-hidden group hover:border-teal-500/20 transition-all"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A1211] to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <span className="text-[10px] uppercase tracking-widest text-teal-400 font-bold mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-semibold mb-4 text-[#E0D2B7]">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-3 rounded-xl hover:bg-white/10 transition-all text-sm"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#F2EAE4] text-black py-3 rounded-xl hover:bg-white transition-all text-sm font-bold"
                    >
                      <ExternalLink className="w-4 h-4" /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
