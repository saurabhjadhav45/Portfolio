"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon: JSX.Element;
  }[];
  className?: string;
}) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = navItems.map((item) => item.link.slice(1));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop - 100) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleLinkClick = (link: string) => {
    setActiveSection(link.slice(1)); // Update active section on click
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-primary/10",
        "floating-navbar", // Add this class for the fallback styles
        className
      )}
    >
      <nav className="flex flex-col sm:flex-row items-center justify-between max-w-full mx-auto px-4 sm:px-6 lg:px-8 h-20">
        {/* Logo with hexagon and "S" */}
        <Link href="#home">
          <motion.div
            className="cursor-pointer w-12 h-12 flex items-center justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* Hexagon with "S" */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-full h-full text-primary"
            >
              <title>Logo</title>
              <g>
                {/* Hexagon */}
                <path
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="var(--background)" // Matches page background
                  opacity="1"
                  d="M 50, 5
                    L 11, 27
                    L 11, 72
                    L 50, 95
                    L 89, 73
                    L 89, 28 z"
                />
                {/* Letter "S" */}
                <text
                  x="50%"
                  y="55%"
                  fontSize="40"
                  fontWeight="bold"
                  fill="currentColor"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                >
                  S
                </text>
              </g>
            </svg>
          </motion.div>
        </Link>

        <ul className="flex space-x-1 ml-auto">
          {" "}
          {/* ml-auto pushes nav items to the right */}
          {navItems.map((item, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && (
                <li className="self-stretch flex items-center">
                  <div className="h-4 w-px bg-primary"></div>
                </li>
              )}
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Link
                  href={item.link}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-sm sm:text-base font-semibold transition-all duration-200 ease-in-out",
                    activeSection === item.link.slice(1)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary"
                  )}
                  onClick={() => handleLinkClick(item.link)} // Update active section on click
                >
                  <motion.span
                    className="mr-2 inline-block"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    {item.icon}
                  </motion.span>
                  <span>{item.name}</span>
                </Link>
              </motion.li>
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};
