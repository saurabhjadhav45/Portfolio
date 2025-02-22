// components/Footer.tsx
"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import { useMediaQuery } from "@/hooks/use-media-query";

const Footer: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Memoizing social links to avoid unnecessary recalculation on re-renders
  const socialLinks = useMemo(
    () => [
      { icon: FaGithub, href: "https://github.com/saurabhjadhav45" },
      { icon: FaLinkedin, href: "https://www.linkedin.com/in/saurabhvj16/" },
      { icon: FaInstagram, href: "https://www.instagram.com/saurabh_v_j45" },
      { icon: FaTwitter, href: "https://x.com/saurabh_v_j45" },
      { icon: FaEnvelope, href: "mailto:saurabhvj16@gmail.com" },
    ],
    []
  );

  return (
    <motion.footer
      className="py-8 mt-20 bg-background"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex ${
            isMobile
              ? "flex-col justify-center space-x-0 space-y-6"
              : "justify-center space-x-6"
          } mb-6`}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${link.href}`}
              className="text-foreground hover:text-primary transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon size={24} />
            </motion.a>
          ))}
        </div>
        <motion.div
          className="text-center text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-lg font-mono">
            Designed & Built by{" "}
            <span className="text-primary font-bold">Saurabh</span>{" "}
            <span className="animate-pulse inline-block">🚀</span>
          </p>
          <p className="mt-2 text-sm">
            Powered by coffee, curiosity, and a dash of nerdy enthusiasm!
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
