"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Layout, Terminal, Cpu, Database, Workflow } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

/* =======================
   Types
======================= */

interface Skill {
  name: string;
  icon: string | React.ReactNode;
}

interface SkillCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: Skill[];
}

/* =======================
   Skills Data
======================= */

const skillCategories: SkillCategory[] = [
  {
    title: "UI/UX Design",
    icon: <Layout className="w-6 h-6 text-teal-400" />,
    description: "Building responsive, accessible, and high-performance user interfaces.",
    skills: [
      { name: "Figma", icon: "/icons/Figma.svg" },
      { name: "Canva", icon: "/icons/Canva.svg" },
    ],
  },
  {
    title: "Front-End Development",
    icon: <Terminal className="w-6 h-6 text-teal-400" />,
    description: "Creating responsive, high-performance interfaces with modern frameworks.",
    skills: [
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Framer Motion", icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
    ],
  },
  {
    title: "Back-End Development",
    icon: <Cpu className="w-6 h-6 text-teal-400" />,
    description: "Designing scalable APIs and robust server-side logic.",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Nest.js", icon: "/icons/Nest.js.svg" },
      { name: "REST APIs", icon: "https://www.vectorlogo.zone/logos/mulesoft/mulesoft-icon.svg" },
      { name: "JWT Auth", icon: "https://jwt.io/img/pic_logo.svg" },
      { name: "Postman", icon: "/icons/Postman.svg" },
      { name: "Redux", icon: "/icons/Redux.svg" },
      { name: "Sequelize", icon: "/icons/Sequelize.svg" },
    ],
  },
  {
    title: "AI & Automation",
    icon: <Cpu className="w-6 h-6 text-teal-400" />,
    description: "Building intelligent systems and automation workflows.",
    skills: [
      { name: "Machine Learning", icon: "/icons/machine-learning-06-svgrepo-com (1).svg" },
      { name: "Deep Learning", icon: "/icons/deep-learning-svgrepo-com.svg" },
      { name: "NLP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Scikit-Learn", icon: "/icons/scikit-learn.svg" },
      { name: "Pandas", icon: "/icons/Pandas.svg" },
      { name: "NumPy", icon: "/icons/NumPy.svg" },
      { name: "Apache Airflow", icon: "/icons/Apache Airflow.svg" },
      { name: "Jupyter", icon: "/icons/Jupyter.svg" },
      { name: "pytest", icon: "/icons/pytest.svg" },
      { name: "n8n", icon: "/icons/n8n-color.svg" },
    ],
  },
  {
    title: "Database & Data",
    icon: <Database className="w-6 h-6 text-teal-400" />,
    description: "Designing efficient schemas and managing data at scale.",
    skills: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <Workflow className="w-6 h-6 text-teal-400" />,
    description: "Deployment, version control, and engineering workflows.",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "/icons/GitHub.svg" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
      { name: "Grafana", icon: "/icons/Grafana.svg" },
    ],
  },
];

/* =======================
   Skills Page Component
======================= */

const SkillsPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#050709] text-[#F2EAE4] py-16 px-6 lg:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-[10%] -right-[5%] w-[60%] h-[60%] bg-teal-600/20 blur-[140px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -bottom-[10%] -left-[5%] w-[50%] h-[50%] bg-blue-900/30 blur-[120px] rounded-full"
        />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mt-10">
        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="group inline-flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-all mb-14"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm uppercase tracking-widest font-light">Back to Home</span>
        </button>

        {/* Header */}
        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-light text-[#E0D2B7] mb-6">
            Technical <span className="text-teal-500 font-medium">Stack</span>
          </h1>
          <div className="h-1 w-20 bg-teal-500/50 mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed font-light">
            Technologies and tools I use to build scalable, intelligent, and production-ready applications.
          </p>
        </header>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-[#0A1211]/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-8 hover:border-teal-500/30 transition-all duration-500"
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="p-4 bg-teal-950/40 rounded-2xl border border-teal-500/20">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-medium text-[#E0D2B7]">{category.title}</h2>
              </div>

              <p className="text-gray-400 mb-10 text-sm italic font-light opacity-80">
                &ldquo;{category.description}&rdquo;
              </p>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:border-teal-400/50 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] transition-all">
                      {typeof skill.icon === "string" ? (
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={32}
                          height={32}
                          className="opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      ) : (
                        skill.icon
                      )}
                    </div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
