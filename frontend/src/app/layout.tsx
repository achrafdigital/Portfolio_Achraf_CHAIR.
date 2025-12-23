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
  metadataBase: new URL("https://achraf-CHAIR-portfolio.vercel.app"),
  title: {
    default: "Achraf Chair | Full-Stack & AI Engineer",
    template: "%s | Achraf Chair",
  },
  description:
    "Achraf Chair is a Full-Stack and AI Engineer specializing in modern web development, machine learning, APIs, automation, and intelligent digital platforms.",
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
    url: "https://achraf-CHAIR-portfolio.vercel.app",
    title: "Achraf Chair | Full-Stack & AI Engineer",
    description:
      "Portfolio of Achraf Chair showcasing full-stack development, AI projects, APIs, automation, and intelligent platforms.",
    siteName: "Achraf Chair Portfolio",
    images: [
      {
        url: "https://achraf-CHAIR-portfolio.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Achraf Chair Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Achraf Chair | Full-Stack & AI Engineer",
    description:
      "Explore full-stack, AI, automation, and machine learning projects by Achraf Chair.",
    images: ["https://achraf-CHAIR-portfolio.vercel.app/images/og-image.png"],
  },
  icons: {
    icon: "/images/favicon-32x33.png",
    apple: "/images/apple-touch-icon.png",
    shortcut: "/images/favicon-32x33.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://achraf-CHAIR-portfolio.vercel.app"
        />
      </head>
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
              url: "https://achraf-CHAIR-portfolio.vercel.app",
              jobTitle: "Full-Stack & AI Engineer",
              image:
                "https://achraf-CHAIR-portfolio.vercel.app/images/profile.png",
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

        {/* Optional WebSite structured data for search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://achraf-CHAIR-portfolio.vercel.app",
              name: "Achraf Chair Portfolio",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://achraf-CHAIR-portfolio.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
