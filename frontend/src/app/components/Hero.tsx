import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/Herobg2.png')] bg-cover bg-center bg-no-repeat" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="mt-6 relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 sm:px-6 sm:flex-row sm:justify-between md:flex-row md:justify-between">
        {/* LEFT: Text */}
        <div className="w-full max-w-xl text-center text-white sm:text-left md:text-left">
          <h1 className="text-3xl font-bold leading-tight sm:text-[3rem] md:text-4xl lg:text-[3.4rem] xl:text-[4rem]">
            Designing <br />
            <span className="text-gray-200">Intelligence,</span> <br />
            <span
              className="
                bg-linear-to-r
                from-[#D7D8DD]
                via-[#DBD7CA]
                to-[#E0D2B7]
                bg-clip-text
                text-transparent
              "
            >
              Building
            </span>
            <br />
            <span className="text-[#E0D2B7]">Tomorrow</span>
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-gray-300 sm:text-base md:text-base lg:text-lg xl:text-lg md:mx-0">
            I bridge human intuition and intelligent systems—designing and
            developing seamless digital experiences where elegant interfaces
            meet advanced AI. From concept to execution, I build intelligent,
            beautiful products at the intersection of technology and
            human-centered design.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-start md:justify-start">
            <Link href="/projects">
              <span className="inline-flex w-full items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200 sm:w-48">
                View My Work
              </span>
            </Link>

            <Link href="#contact">
              <span className="inline-flex w-full items-center justify-center rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-48">
                Let’s Collaborate
              </span>
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center justify-center gap-5 sm:gap-6 sm:justify-start md:justify-start">
            {[
              {
                href: "https://github.com/achrafdevl",
                label: "GitHub",
                src: "/images/github.png",
              },
              {
                href: "https://www.linkedin.com/in/achraf-chair/",
                label: "LinkedIn",
                src: "/images/linkdin.png",
              },
              {
                href: "https://dribbble.com/Achraf_CHAIR",
                label: "Dribbble",
                src: "/images/dribbble.png",
              },
            ].map((icon) => (
              <Link
                key={icon.label}
                href={icon.href}
                target="_blank"
                aria-label={icon.label}
                className="
        flex items-center justify-center
        rounded-full
        p-2 sm:p-2.5
        opacity-70
        transition
        hover:opacity-100
        hover:scale-110
      "
              >
                <Image
                  src={icon.src}
                  alt={icon.label}
                  width={20}
                  height={20}
                  className="sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px] lg:w-[26px] lg:h-[26px] xl:w-[28px] xl:h-[28px]"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="relative mt-14 w-full hidden max-w-sm justify-end sm:flex sm:max-w-xs md:mt-0 md:flex md:max-w-sm lg:max-w-md xl:max-w-lg">
          <Image
            src="/images/HeroProf.png"
            alt="Hero profile"
            width={500}
            height={500}
            priority
            className="rounded-3xl object-contain drop-shadow-[0_0_40px_rgba(0,255,255,0.15)] w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
