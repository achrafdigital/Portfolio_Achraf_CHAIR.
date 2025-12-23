import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://achraf-CHAIR-portfolio.vercel.app")
, // replace later with custom domain
  title: {
    default: "Achraf Chair | Full-Stack & AI Engineer",
    template: "%s | Achraf Chair",
  },
  description:
    "Achraf Chair is a Full-Stack and AI Engineer specializing in modern web development, machine learning, APIs, automation, and intelligent digital platforms.",
  keywords: [
    "Achraf Chair",
    "Full Stack Developer",
    "Front-End Development",
    "Back-End Development",
    "AI Engineer",
    "Next.js Developer",
    "Machine Learning Engineer",
    "NLP",
    "FastAPI",
    "React.js Developer",
    "Web Development",
    "Artificial Intelligence",
    "Automation",
    "Portfolio",
    "Workflow Automation",
    "Data Science",
    "Data Science",
    "AI Assistants",
    "Tailored AI Assistants",
    "Digital Platforms",
    "SEO",
  ],
  authors: [{ name: "Achraf CHAIR" }],
  creator: "Achraf CHAIR",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://achraf-portfolio.vercel.app",
    title: "Achraf Chair | Full-Stack & AI Engineer",
    description:
      "Portfolio of Achraf Chair showcasing full-stack development, AI projects, APIs, automation, and intelligent platforms.",
    siteName: "Achraf Chair Portfolio",
    images: [
      {
        url: "/images/og-image.png", // add later (1200x630)
        width: 1200,
        height: 630,
        alt: "Achraf Chair Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Achraf Chair | Full-Stack & AI Engineer",
    description:
      "Explore full-stack, AI, automation, and machine learning projects by Achraf Chair.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <main>{children}</main>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Achraf Chair",
              url: "https://achraf-portfolio.vercel.app",
              jobTitle: "Full-Stack & AI Engineer",
              sameAs: [
                "https://github.com/achrafdigital",
                "https://www.linkedin.com/in/achraf-chair",
              ],
              knowsAbout: [
                "Front-End Development",
                "Back-End Development",
                "Full-Stack Development",
                "UI/UX Design",
                "Artificial Intelligence",
                "Workflow Automation",
                "Data Science",
                "Data Analyst",
                "AI Assistants",
                "AI Engineer",
                "Tailored AI Assistants",
                "Digital Platforms",
                "SEO",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
