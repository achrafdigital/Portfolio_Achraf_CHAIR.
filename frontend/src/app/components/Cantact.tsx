"use client";

import React from "react";
import { Send, Linkedin, Github, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative w-full py-24 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 "
        style={{
          background:
            "linear-gradient(to top, #050709 20%, #072C32 45%, #064C55 60%, #0A7A88 80%)",
          color: "#F2EAE4",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#f3e8d0] mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Ready to build something extraordinary together? Let&apos;s
            transform your vision into reality—one pixel, one line of code at a
            time.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-medium text-[#f3e8d0] mb-6">
              Connect With Me
            </h3>
            <p className="text-gray-300 max-w-md leading-relaxed mb-8">
              I&apos;m currently available for freelance work and full-time
              opportunities. Whether you have a specific project in mind or just
              want to connect, don&apos;t hesitate to reach out!
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition"
                aria-label="Website"
              >
                <Globe size={22} />
              </a>
            </div>
          </div>

          {/* Right – Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-white/30 text-white placeholder-gray-200 outline-none border border-white/30 focus:border-white"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/30 text-white placeholder-gray-200 outline-none border border-white/30 focus:border-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-lg bg-white/30 text-white placeholder-gray-200 outline-none border border-white/30 focus:border-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-[#f3f4f6] text-black px-8 py-4 rounded-xl font-semibold hover:bg-white transition"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>

        {/* Footer line */}
        <div className="mt-10 border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base ">
            Every project here reflects my journey, values, and commitment to
            quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
