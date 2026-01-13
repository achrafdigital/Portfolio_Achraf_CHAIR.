"use client";

import React, { forwardRef } from "react";
import { Send, X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  formRef: React.RefObject<HTMLFormElement>;
  handleSubmit: (e: React.FormEvent) => void;
  loading: boolean;
  success: string | null;
}

const ContactModal = forwardRef<HTMLDivElement, ContactModalProps>(
  ({ isOpen, onClose, formRef, handleSubmit, loading, success }, ref) => {
    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      >
        <div className="relative w-full max-w-2xl p-8 bg-[#0A1211] rounded-2xl border border-[#E0D2B7]/20">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white hover:text-gray-300"
          >
            <X size={24} />
          </button>

          <h2 className="text-2xl font-semibold text-[#E0D2B7] mb-6">
            Start a Project
          </h2>

          {/* Form */}
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
                <label className="block text-sm text-gray-300 mb-2">Email</label>
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
              <label className="block text-sm text-gray-300 mb-2">Message</label>
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
    );
  }
);

ContactModal.displayName = "ContactModal";
export default ContactModal;
