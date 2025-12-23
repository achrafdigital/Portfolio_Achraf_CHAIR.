import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-black pt-24 pb-14 sm:pt-28 sm:pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/Herobg2.png')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-340 flex-col items-center gap-12 px-5 sm:px-8 sm:flex-row sm:items-center sm:justify-between md:px-10 lg:px-12">
        {/* LEFT: Text */}
        <div className="w-full max-w-xl space-y-6 text-center text-white sm:text-left">
          <h1 className="text-3xl font-bold leading-tight sm:text-[2.8rem] md:text-4xl lg:text-[3.4rem] xl:text-[4rem]">
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

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg sm:mx-0">
            I bridge human intuition and intelligent systems—designing and
            developing seamless digital experiences where elegant interfaces
            meet advanced AI. From concept to execution, I build intelligent,
            beautiful products at the intersection of technology and
            human-centered design.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start">
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
          <div className="flex items-center justify-center gap-2 sm:gap-2 sm:justify-start">
            {[
              {
                href: "https://github.com/achrafdigital",
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
                className="flex items-center justify-center rounded-full p-2 sm:p-2.5 opacity-70 transition hover:scale-110 hover:opacity-100"
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
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <div className="sm:hidden mx-auto w-56 rounded-3xl bg-white/5 p-3 shadow-lg backdrop-blur">
            <Image
              src="/images/HeroProf.png"
              alt="Hero profile"
              width={400}
              height={400}
              priority
              className="h-auto w-full rounded-2xl object-contain drop-shadow-[0_0_30px_rgba(0,255,255,0.12)]"
            />
          </div>

          <div className="relative hidden sm:block">
            <Image
              src="/images/HeroProf.png"
              alt="Hero profile"
              width={500}
              height={500}
              priority
              className="h-auto w-full rounded-3xl object-contain drop-shadow-[0_0_40px_rgba(0,255,255,0.15)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
