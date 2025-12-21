import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/Herobg2.png')] bg-cover bg-center bg-no-repeat" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* LEFT: Text */}
        <div className="w-full max-w-xl text-white">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-[3.4rem]">
            Designing <br />
            <span className="text-gray-200">Intelligence,</span> <br />
            <span
              className="bg-linear-to-r 
             from-[#D7D8DD] 
             via-[#DBD7CA] 
             to-[#E0D2B7]
             bg-clip-text 
             text-transparent"
            >
              Building
            </span>
            <br />
            <span className="text-[#E0D2B7]">Tomorrow</span>
          </h1>

          <p className="mt-1 max-w-md text-sm leading-relaxed text-gray-300 md:text-base">
            I bridge human intuition and intelligent systems—designing and
            developing seamless digital experiences where elegant interfaces
            meet advanced AI. From concept to execution, I build intelligent,
            beautiful products at the intersection of technology and
            human-centered design.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-md bg-white w-48 px-6 py-3 text-sm font-semibold text-black hover:bg-gray-200 transition">
              View My Work
            </button>

            <button className="rounded-md border border-white/40  w-48 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
              Let’s Collaborate
            </button>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <Link
              href="https://github.com/achrafdevl"
              target="_blank"
              aria-label="GitHub"
              className="opacity-70 transition hover:opacity-100"
            >
              <Image
                src="/images/github.png"
                alt="GitHub"
                width={22}
                height={22}
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/achraf-chair/"
              target="_blank"
              aria-label="LinkedIn"
              className="opacity-70 transition hover:opacity-100"
            >
              <Image
                src="/images/linkdin.png"
                alt="LinkedIn"
                width={22}
                height={22}
              />
            </Link>

            <Link
              href="https://dribbble.com/Achraf_CHAIR"
              target="_blank"
              aria-label="Dribbble"
              className="opacity-70 transition hover:opacity-100"
            >
              <Image
                src="/images/dribbble.png"
                alt="Dribbble"
                width={22}
                height={22}
              />
            </Link>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="relative hidden w-full max-w-md md:flex justify-end">
          <Image
            src="/images/HeroProf.png"
            alt="Hero profile"
            width={500}
            height={500}
            className="object-contain rounded-3xl drop-shadow-[0_0_40px_rgba(0,255,255,0.15)]"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
