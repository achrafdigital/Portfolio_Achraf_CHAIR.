import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const badgeStyle =
    "absolute z-10 flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#0A1211] border border-[#E0D2B7]/40 rounded-xl text-[#E0D2B7] text-xs md:text-sm font-medium shadow-2xl whitespace-nowrap";

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        background:
          "linear-gradient(to bottom, #050709 20%, #072C32 45%, #064C55 60%, #0A7A88 80%)",
        color: "#F2EAE4",
      }}
    >
      <div className="w-full max-w-7xl px-5 sm:px-8 lg:px-12 flex flex-col gap-16">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#E0D2B7] mb-4">
            Transforming Vision into Digital Reality
          </h1>
          <p className="text-sm sm:text-base lg:text-lg opacity-80 font-light leading-relaxed">
            I build intelligent digital products by combining full-stack
            engineering, artificial intelligence, and thoughtful design.
            <br />
            My work focuses on modern web applications and AI-powered solutions.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-24">
          {/* PROFILE */}
          <div className="relative shrink-0">
            {/* Badges - Hidden on small screens, shown on md+ */}
            <div
              className={`${badgeStyle} hidden md:flex -left-10 top-1/2 -translate-y-1/2 lg:-left-12 xl:-left-14`}
            >
              <Image
                src="/images/Innovation.png"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4 md:w-5 md:h-5"
              />
              <span>Innovation</span>
            </div>

            <div
              className={`${badgeStyle} hidden md:flex -right-8 top-10 lg:-right-10 xl:-right-12`}
            >
              <Image
                src="/images/code.png"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4 md:w-5 md:h-5"
              />
              <span>Clean Code</span>
            </div>

            <div
              className={`${badgeStyle} hidden md:flex -right-4 bottom-14 lg:-right-6 xl:-right-8`}
            >
              <Image
                src="/images/AlSolutions.png"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4 md:w-5 md:h-5"
              />
              <span>AI Solutions</span>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-2xl border border-white/10">
              <Image
                src="/images/AboutProf.png"
                alt="Profile"
                width={380}
                height={380}
                className="w-[260px] sm:w-[300px] lg:w-[360px] xl:w-[400px] h-auto"
              />
            </div>
          </div>

          {/* DETAILS */}
          <div className="flex-1 max-w-2xl">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#E0D2B7] mb-4">
              Développeur Web & IA Full Stack
            </h2>

            <p className="text-sm sm:text-base opacity-90 font-light leading-relaxed mb-8">
              With over two years of experience in web development and
              artificial intelligence, I create modern web applications and
              innovative AI solutions. I manage the entire development
              lifecycle—from UI/UX design to backend systems and ML integration.
            </p>

            {/* SKILLS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                {
                  title: "Web Development",
                  desc: "Modern, responsive web apps ",
                  icon: "/images/web.png",
                },
                {
                  title: "Artificial Intelligence",
                  desc: "ML, NLP, Computer Vision solutions",
                  icon: "/images/ai.png",
                },
                {
                  title: "Backend Architecture",
                  desc: "APIs, microservices, databases, cloud",
                  icon: "/images/Backend.png",
                },
                {
                  title: "UI & UX Design",
                  desc: "Intuitive interfaces and design systems",
                  icon: "/images/design.png",
                },
              ].map((skill, i) => (
                <div key={i} className="flex gap-4">
                  <div className="p-3 rounded-xl bg-white/10 border border-[#E0D2B7]/20">
                    <Image src={skill.icon} alt="" width={26} height={22} />
                  </div>
                  <div>
                    <strong className="block text-sm sm:text-base text-[#E0D2B7] mb-1">
                      {skill.title}
                    </strong>
                    <p className="text-xs sm:text-sm opacity-70">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="flex flex-wrap gap-4">
              <Link href="#contact">
                <span className="flex items-center gap-2 bg-[#F2EAE4] text-[#050709] px-6 py-3 rounded-lg font-bold text-xs sm:text-sm lg:text-base xl:text-lg">
                  Let’s Work Together
                  <Image
                    src="/images/handshake.png"
                    width={18}
                    height={18}
                    alt=""
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </span>
              </Link>

              <a
                href="/cv/Achraf-Chair-CV.pdf"
                download
                className="flex items-center gap-3 bg-[#0A1211] text-[#F2EAE4] px-6 py-3 rounded-lg font-bold text-xs sm:text-sm lg:text-base xl:text-lg border border-[#E0D2B7] transition hover:bg-[#111b19]"
              >
                <Image
                  src="/images/DOWNLOAD.png"
                  width={16}
                  height={16}
                  alt="Download CV"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
