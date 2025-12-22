"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import projectsData from "../data/projects.json";

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

const projects: Project[] = projectsData as Project[];

export default function ProjectDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const slug =
    typeof params.slug === "string" ? params.slug : params.slug?.[0] || "";

  const project: Project | undefined = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Project not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050709] text-[#F2EAE4] py-16 px-6 lg:px-12 relative">
      {/* Back Button */}
      <button
        onClick={() => router.push("/projects")}
        className="group inline-flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-all mb-12"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs uppercase tracking-widest font-light">
          Back to Projects
        </span>
      </button>

      {/* Project Header */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light text-[#E0D2B7] mb-4">
          {project.title}
        </h1>
        <span className="text-sm text-teal-500 uppercase tracking-widest font-bold">
          {project.category}
        </span>

        {/* Project Image */}
        <div className="relative h-80 md:h-96 my-8 overflow-hidden rounded-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Full Details */}
        {project.details && (
          <div className="bg-[#0A1211]/40 p-6 rounded-2xl border border-white/5 text-gray-300 mb-6 whitespace-pre-line">
            {project.details}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 border border-white/10 py-3 px-5 rounded-2xl hover:bg-teal-500/10 hover:border-teal-500/30 transition-all text-sm uppercase tracking-widest text-gray-300"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#E0D2B7] text-black py-3 px-5 rounded-2xl hover:bg-white transition-all text-sm uppercase tracking-widest font-bold"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
