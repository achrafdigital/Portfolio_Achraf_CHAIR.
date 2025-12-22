"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import projectsData from "./data/projects.json"; // adjust path

/* =======================
   TypeScript Types
======================= */
interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  details?: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

const allProjects: Project[] = projectsData as Project[];

const categories = [
  "All",
  "AI & Healthcare",
  "AI & Business",
  "AI & Data Science",
  "Web & AI",
  "MLOps & Deployment"
];


/* =======================
   Component
======================= */
export default function ProjectsArchive() {
  const [activeFilter, setActiveFilter] = useState("All");
  const router = useRouter();

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#050709] text-[#F2EAE4] py-16 px-6 lg:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-[10%] -right-[5%] w-[70%] h-[70%] bg-teal-600/20 blur-[130px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -bottom-[10%] -left-[5%] w-[60%] h-[60%] bg-blue-900/30 blur-[120px] rounded-full"
        />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mt-10">
        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="group inline-flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-all mb-12"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs uppercase tracking-widest font-light">
            Back to Home
          </span>
        </button>

        {/* Header */}
        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-light text-[#E0D2B7] mb-6 tracking-tight">
              Project{" "}
              <span className="text-teal-500 font-medium font-serif italic">
                Archive
              </span>
            </h1>
            <div className="h-px w-24 bg-teal-500/50 mb-8" />
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed font-light">
              A comprehensive exploration of my digital laboratory, ranging from
              deep learning experiments to high-performance architectures.
            </p>
          </motion.div>
        </header>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-16 border-b border-white/5 pb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full text-[11px] uppercase tracking-widest transition-all duration-500 border ${
                activeFilter === cat
                  ? "bg-[#E0D2B7] text-black border-[#E0D2B7] shadow-[0_0_20px_rgba(224,210,183,0.3)]"
                  : "border-white/10 text-gray-500 hover:border-teal-500/50 hover:text-teal-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => router.push(`/projects/${project.slug}`)}
                className="group relative bg-[#0A1211]/40 backdrop-blur-md rounded-[2.5rem] border border-white/5 overflow-hidden hover:border-teal-500/30 transition-all duration-500 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A1211]/80 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 relative">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-teal-500 font-bold mb-3 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-medium mb-4 text-[#E0D2B7] tracking-tight group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light italic opacity-80">
                    &ldquo;{project.description}&rdquo;
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div
                    className="flex gap-3"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a
                      href={project.githubUrl}
                      className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-3 rounded-2xl hover:bg-teal-500/10 hover:border-teal-500/30 transition-all text-[11px] uppercase tracking-widest text-gray-300"
                    >
                      <Github className="w-3.5 h-3.5" /> Source
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#E0D2B7] text-black py-3 rounded-2xl hover:bg-white transition-all text-[11px] uppercase tracking-[0.15em] font-bold"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> View Live
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
