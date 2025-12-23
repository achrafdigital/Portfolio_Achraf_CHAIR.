"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import projectsData from "../projects/data/projects.json";

interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = projectsData as Project[];

const RecentWorks: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-12 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #050709 20%, #072C32 45%, #064C55 60%, #0A7A88 80%)",
        color: "#F2EAE4",
      }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 md:opacity-40">
        <div className="w-full h-48 md:h-64 bg-teal-900/20 blur-[80px] md:blur-[120px] -rotate-12 scale-125 md:scale-150" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#E0D2B7] mb-4">
            My Recent Works
          </h1>
          <p className="text-sm sm:text-base lg:text-lg opacity-80 font-light leading-relaxed">
            A showcase of real-world projects demonstrating my skills across
            development, design, and AI.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <Link key={index} href={`/projects/${project.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-[#0A1211] rounded-2xl border border-[#E0D2B7]/20 overflow-hidden hover:border-[#E0D2B7]/40 transition-all duration-500 cursor-pointer flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-56 md:h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

                  {/* Floating Category Tag */}
                  <div className="absolute top-4 left-4 bg-[#0A1211] backdrop-blur-md text-[#E0D2B7] text-[10px] sm:text-xs font-medium px-3 py-1.5 rounded-xl border border-[#E0D2B7]/40 shadow-2xl">
                    {project.category}
                  </div>

                  {/* Top Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-[#0A1211]/80 backdrop-blur-md rounded-xl border border-white/10 text-white hover:bg-white/10 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-[#0A1211]/80 backdrop-blur-md rounded-xl border border-white/10 text-white hover:bg-white/10 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8 flex flex-col grow">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#E0D2B7] mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base opacity-80 font-light leading-relaxed mb-6 grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] sm:text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-300 font-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <div className="flex items-center justify-center gap-2 w-full bg-[#F2EAE4] text-[#050709] py-3 rounded-lg font-bold text-xs sm:text-sm hover:bg-white transition-all active:scale-95 mt-auto">
                    View Project{" "}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center mt-12 md:mt-8">
          <Link href="/projects">
            <button className="flex items-center gap-2 md:gap-3 bg-[#fdfaf3] text-black px-6 py-3 md:px-10 md:py-4 rounded-xl text-sm md:text-base font-bold hover:bg-white transition-all active:scale-95">
              See More <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
