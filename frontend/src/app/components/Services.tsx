"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Front-End Development",
    description:
      "I build fast, responsive, and visually polished interfaces using modern frameworks such as React, Next.js, Vue, and TailwindCSS.",
  },
  {
    id: "02",
    title: "Back-End Development",
    description:
      "I create secure and scalable backend systems, including APIs, databases, authentication, and cloud infrastructure with Node.js and modern architectures.",
  },
  {
    id: "03",
    title: "Full-Stack Development",
    description:
      "I manage the complete development lifecycle—from UI/UX and frontend logic to backend architecture—ensuring cohesive, high-quality digital products.",
  },
  {
    id: "04",
    title: "UI / UX Design",
    description:
      "I design intuitive interfaces and user experiences through structured workflows, wireframes, prototypes, and reusable design systems.",
  },
  {
    id: "05",
    title: "Artificial Intelligence",
    description:
      "I develop intelligent features using machine learning, deep learning, NLP, and computer vision, integrating AI models into real applications.",
  },
  {
    id: "06",
    title: "Workflow Automations",
    description:
      "I automate complex business processes using n8n and custom scripts to reduce manual work.",
  },
  {
    id: "07",
    title: "Tailored AI Assistants & Digital Platforms",
    description:
      "I build custom AI assistants and intelligent platforms for customer support, productivity, and automation.",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section
      className="min-h-screen py-20 px-6"
      style={{
        background:
          "linear-gradient(to top, #050709 20%, #072C32 45%, #064C55 60%, #0A7A88 80%)",
        color: "#F2EAE4",
      }}
    >
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#E0D2B7] mb-4">
          My Quality Services
        </h1>
        <p className="text-sm sm:text-base lg:text-lg opacity-80 font-light">
          Every service reflects my focus on quality, performance, and
          meaningful digital experiences.
        </p>
      </div>

      {/* SERVICES */}
      <div className="max-w-5xl mx-auto space-y-3">
        {services.map((service, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={service.id}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => handleToggle(index)}
              className={`rounded-xl border cursor-pointer overflow-hidden transition-colors
                ${isActive ? "border-[#071A1C]" : "border-[#E0D2B7]"}`}
              animate={{
                backgroundColor: isActive ? "#d1d5db" : "transparent",
              }}
            >
              {/* HEADER ROW */}
              <div className="flex items-center justify-between p-6 md:px-10">
                <div className="flex items-center gap-6 md:gap-16">
                  <span
                    className={`text-xl font-bold ${
                      isActive ? "text-[#071A1C]" : "text-[#E0D2B7]"
                    }`}
                  >
                    {service.id}
                  </span>

                  <h3
                    className={`text-lg sm:text-xl md:text-2xl font-semibold ${
                      isActive ? "text-[#071A1C]" : "text-white"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>

                {!isActive && (
                  <p className="hidden lg:block text-gray-400 text-sm max-w-xs truncate">
                    {service.description}
                  </p>
                )}

                <ArrowUpRight
                  className={`w-7 h-7 transition-transform duration-300 ${
                    isActive ? "text-[#071A1C] rotate-45" : "text-white"
                  }`}
                />
              </div>

              {/* EXPANDED CONTENT */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 md:px-10 pb-8 md:ml-28 max-w-2xl">
                      <p className="text-black text-base sm:text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
