"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import emailjs from "emailjs-com";
import { Send, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu open
  const [modalOpen, setModalOpen] = useState(false); // popup modal open
  const pathname = usePathname();
  const router = useRouter();

  // EmailJS form
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setSuccess(null);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error.text);
          setSuccess("Failed to send message. Try again later.");
        }
      )
      .finally(() => setLoading(false));
  };

  // Handle hash navigation
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
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    e.preventDefault();
    setOpen(false); // close mobile menu if open

    const scrollToSection = () => {
      const element = document.getElementById(hash);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    };

    if (pathname === "/") {
      scrollToSection();
    } else {
      router.push(`/#${hash}`);
      setTimeout(scrollToSection, 300);
    }
  };

  return (
    <>
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
            {["about", "services", "skills", "projects", "contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className="hover:text-white transition cursor-pointer"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              )
            )}

            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-2 rounded-full border border-[#D7DBDD]/40 hover:bg-[#D7DBDD]/10 transition text-[#D7DBDD]"
            >
              Start a Project
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="sm:hidden z-50 flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          >
            <span
              className={`block w-6 h-0.5 bg-[#D7DBDD] transition-transform duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-[#D7DBDD] transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-[#D7DBDD] transition-transform duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
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

          <button
            onClick={() => {
              setModalOpen(true);
              setOpen(false);
            }}
            className="mt-4 px-8 py-3 rounded-full border border-[#D7DBDD]/40 bg-white/5 hover:bg-white/10 transition text-lg"
          >
            Start a Project
          </button>

          <div className="absolute bottom-10 opacity-20 text-[10px] tracking-[0.5em] uppercase">
            Designing Intelligence
          </div>
        </div>
      </nav>

      {/* Popup Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl p-8 bg-[#0A1211] rounded-2xl border border-[#E0D2B7]/20">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-white hover:text-gray-300"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-semibold text-[#E0D2B7] mb-6">
              Start a Project
            </h2>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-white/30 text-white placeholder-gray-200 outline-none border border-white/30 focus:border-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/30 text-white placeholder-gray-200 outline-none border border-white/30 focus:border-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-white/30 text-white placeholder-gray-200 outline-none border border-white/30 focus:border-white resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className={`inline-flex items-center gap-3 bg-[#f3f4f6] text-black px-8 py-4 rounded-xl font-semibold hover:bg-white transition ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                <Send size={18} />
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && <p className="text-green-500 mt-2">{success}</p>}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
