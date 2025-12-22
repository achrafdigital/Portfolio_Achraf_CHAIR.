"use client";

import React, { useRef, useState } from "react";
import { Send } from "lucide-react";
import emailjs from "emailjs-com";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
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

  return (
    <section id="contact" className="relative w-full py-24 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, #050709 20%, #072C32 45%, #064C55 60%, #0A7A88 80%)",
          color: "#F2EAE4",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 ">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#f3e8d0] mb-4">
            Let`&apos;s Work Together
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Ready to build something extraordinary together? Let`&apos;s
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
              I`&apos;m currently available for freelance work and full-time
              opportunities. Whether you have a specific project in mind or just
              want to connect, don`&apos;t hesitate to reach out!
            </p>

            {/* Social icons */}
            <div className="mt-8 flex items-center justify-center gap-2 sm:gap-2 sm:justify-start md:justify-start">
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
        p-2 sm:p-2
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

          {/* Right – Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Name</label>
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

        {/* Footer line */}
        <div className="mt-10 border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            Every project here reflects my journey, values, and commitment to
            quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
