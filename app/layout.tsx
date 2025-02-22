// app/layout.tsx
import type { Metadata } from "next";
import { inter, jetbrain_mono } from "@/app/fonts";
import "./globals.css";
import { ThemeProvider } from "@/app/ThemeProvider";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome, FaUser, FaBriefcase, FaCode } from "react-icons/fa";
import StickyIcons from "@/components/sections/StickyIcons";
import Footer from "@/components/sections/Footer";
import { Analytics } from "@vercel/analytics/react";
import LayoutWrapper from "@/components/LayoutWrapper"; // Import the wrapper

export const metadata: Metadata = {
  title: "Saurabh's Portfolio | Frontend Developer",
  description: "Personal portfolio of Saurabh Jadhav",
  openGraph: {
    title: "Saurabh Jadhav",
    description:
      "Frontend developer passionate about scalable web applications.",
    url: "https://saurabhjadhav.dev",
    type: "website",
  },
};

const navItems = [
  { name: "Home", link: "#home", icon: <FaHome /> },
  { name: "About", link: "#about", icon: <FaUser /> },
  { name: "Projects", link: "#projects", icon: <FaCode /> },
  { name: "Work", link: "#work", icon: <FaBriefcase /> },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/HeadLogo.png" />
      </head>
      <body
        className={`${jetbrain_mono.variable} ${inter.variable} font-mono antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutWrapper>
            {" "}
            {/* Wrap children with the loader */}
            <FloatingNav navItems={navItems} />
            <StickyIcons />
            {children}
            <Footer />
            <Analytics />
          </LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
