"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Handle hash navigation on page load
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - navbarHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    e.preventDefault();
    setOpen(false);

    const scrollToSection = () => {
      const element = document.getElementById(hash);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    if (pathname === "/") {
      scrollToSection();
    } else {
      router.push(`/#${hash}`);
      setTimeout(() => {
        scrollToSection();
      }, 300);
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-transparent transition-all">
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-28 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center w-40 h-15 z-50">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={200}
            height={200}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8 text-[#D7DBDD]">
          <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="hover:text-white transition cursor-pointer">About</a>
          <a href="#services" onClick={(e) => handleNavClick(e, "services")} className="hover:text-white transition cursor-pointer">Services</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, "skills")} className="hover:text-white transition cursor-pointer">Skills</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, "projects")} className="hover:text-white transition cursor-pointer">Projects</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="hover:text-white transition cursor-pointer">Contact</a>

          <button className="px-6 py-2 rounded-full border border-[#D7DBDD]/40 hover:bg-[#D7DBDD]/10 transition text-[#D7DBDD]">
            Start a Project
          </button>
        </div>

        {/* Mobile Toggle (Animated Hamburger) */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="sm:hidden z-50 flex flex-col justify-center items-center w-8 h-8 gap-1.5"
        >
          <span className={`block w-6 h-0.5 bg-[#D7DBDD] transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-[#D7DBDD] transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`block w-6 h-0.5 bg-[#D7DBDD] transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 h-screen w-full bg-[#071A1C]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-[#D7DBDD] transition-all duration-500 ease-in-out sm:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-2xl font-medium hover:text-white transition"
        >
          Home
        </Link>
        {["about", "skills", "projects", "contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={(e) => handleNavClick(e, item)}
            className="text-2xl font-medium capitalize hover:text-white transition"
          >
            {item}
          </a>
        ))}
        
        <button className="mt-4 px-8 py-3 rounded-full border border-[#D7DBDD]/40 bg-white/5 hover:bg-white/10 transition text-lg">
          Start a Project
        </button>

        {/* Background Decoration for Mobile Menu */}
        <div className="absolute bottom-10 opacity-20 text-[10px] tracking-[0.5em] uppercase">
          Designing Intelligence
        </div>
      </div>
    </nav>
  );
}