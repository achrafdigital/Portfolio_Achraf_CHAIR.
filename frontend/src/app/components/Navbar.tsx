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
        const navbarHeight = 80; // Approximate navbar height
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
      // If on home page, scroll to section
      scrollToSection();
    } else {
      // If on different page, navigate to home with hash
      router.push(`/#${hash}`);
      // Wait for navigation then scroll
      setTimeout(() => {
        scrollToSection();
      }, 300);
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-transparent transition-all">
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-28 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center w-40 h-15">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={200}
            height={200}
            className="object- cursor-zoom-in"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8 text-white">
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="hover:text-gray-300 transition cursor-pointer"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => handleNavClick(e, "skills")}
            className="hover:text-gray-300 transition cursor-pointer"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, "projects")}
            className="hover:text-gray-300 transition cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="hover:text-gray-300 transition cursor-pointer"
          >
            Contact
          </a>

          <button className="px-6 py-2 rounded-full border border-white/40 hover:bg-white/10 transition">
            Start a Project
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="sm:hidden"
        >
          <svg width="21" height="15" viewBox="0 0 21 15" fill="none">
            <rect width="21" height="1.5" rx=".75" fill="#ffffff" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#ffffff" />
            <rect
              x="6"
              y="13"
              width="15"
              height="1.5"
              rx=".75"
              fill="#ffffff"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } sm:hidden flex-col gap-4 px-6 py-6 bg-black/90 text-white`}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="hover:text-gray-300 transition"
        >
          Home
        </Link>
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, "about")}
          className="hover:text-gray-300 transition cursor-pointer"
        >
          About
        </a>
        <a
          href="#skills"
          onClick={(e) => handleNavClick(e, "skills")}
          className="hover:text-gray-300 transition cursor-pointer"
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={(e) => handleNavClick(e, "projects")}
          className="hover:text-gray-300 transition cursor-pointer"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "contact")}
          className="hover:text-gray-300 transition cursor-pointer"
        >
          Contact
        </a>
        <button className="mt-2 px-6 py-2 rounded-full border border-white/40 hover:bg-white/10 transition">
          Start a Project
        </button>
      </div>
    </nav>
  );
}
