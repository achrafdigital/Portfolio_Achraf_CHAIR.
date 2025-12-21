"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-transparent transition-all">
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-28 py-4">
        
        {/* Logo */}
        <a href="" className="flex items-center w-40 h-15">
   
          <Image src="/images/logo.png" alt="Logo" width={200} height={200} className="object- cursor-zoom-in" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8 text-white">
          <a href="#" className="hover:text-gray-300 transition">Home</a>
          <a href="#" className="hover:text-gray-300 transition">About</a>
          <a href="#" className="hover:text-gray-300 transition">Skills</a>
          <a href="#" className="hover:text-gray-300 transition">Projects</a>
          <a href="#" className="hover:text-gray-300 transition">Contact</a>

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
            <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#ffffff" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } sm:hidden flex-col gap-4 px-6 py-6 bg-black/90 text-white`}
      >
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <button className="mt-2 px-6 py-2 rounded-full bg-white text-black">
          Login
        </button>
      </div>
    </nav>
  );
}
