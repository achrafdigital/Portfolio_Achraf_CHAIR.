"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Full-Stack Development",
    description:
      "I manage the complete development lifecycle—from UI/UX and frontend logic to backend architecture—ensuring cohesive, high-quality digital products.",
  },
  {
    id: "02",
    title: "Front-End Development",
    description:
      "I build fast, responsive, and visually polished interfaces using modern frameworks such as React, Next.js, Vue, and TailwindCSS.",
  },
  {
    id: "03",
    title: "Back-End Development",
    description:
      "I create secure and scalable backend systems, including APIs, databases, authentication, and cloud infrastructure with Node.js and modern architectures.",
  },
  {
    id: "04",
    title: "Artificial Intelligence",
    description:
      "I develop intelligent features using machine learning, deep learning, NLP, and computer vision, integrating AI models into real applications.",
  },
  {
    id: "05",
    title: "Tailored AI Assistants & Digital Platforms",
    description:
      "I build custom AI assistants and intelligent platforms for customer support, productivity, and automation.",
  },
  {
    id: "06",
    title: "UI / UX Design",
    description:
      "I design intuitive interfaces and user experiences through structured workflows, wireframes, prototypes, and reusable design systems.",
  },
  {
    id: "07",
    title: "Workflow Automations",
    description:
      "I automate complex business processes using n8n and custom scripts to reduce manual work.",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section
      id="services"
      className="min-h-screen py-20 px-6 sm:px-8 lg:px-12 xl:px-16"
      style={{
        background:
          "linear-gradient(to top, #050709 20%, #072C32 45%, #064C55 60%, #0A7A88 80%)",
        color: "#F2EAE4",
      }}
    >
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#E0D2B7] mb-4">
          My Quality Services
        </h1>
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl opacity-80 font-light">
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
              <div className="flex items-center justify-between p-4 sm:p-6 md:px-8 lg:px-10">
                <div className="flex items-center gap-4 sm:gap-6 md:gap-12 lg:gap-16">
                  <span
                    className={`text-lg sm:text-xl font-bold ${
                      isActive ? "text-[#071A1C]" : "text-[#E0D2B7]"
                    }`}
                  >
                    {service.id}
                  </span>

                  <h3
                    className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold ${
                      isActive ? "text-[#071A1C]" : "text-white"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>

                {!isActive && (
                  <p className="hidden lg:block text-gray-400 text-sm md:text-base max-w-xs xl:max-w-sm truncate">
                    {service.description}
                  </p>
                )}

                <ArrowUpRight
                  className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transition-transform duration-300 ${
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
                    <div className="px-4 sm:px-6 md:px-8 lg:px-10 pb-6 sm:pb-8 md:ml-20 lg:md:ml-24 xl:md:ml-28 max-w-2xl">
                      <p className="text-black text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
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

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Achraf Chair – Digital & AI Services",
            provider: {
              "@type": "Person",
              name: "Achraf Chair",
            },
            serviceType: services.map((service) => service.title),
            areaServed: "Worldwide",
            description:
              "Full-stack development, AI engineering, automation, UI/UX design, and intelligent digital platforms.",
          }),
        }}
      />
    </section>
  );
};

export default Services;
