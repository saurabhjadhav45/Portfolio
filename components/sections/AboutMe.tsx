//components/sections/AboutMe.tsx

"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ProfileImage from "../ProfileImage";
import {
  FaLightbulb,
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaBolt,
  FaRocket,
  FaFileAlt,
} from "react-icons/fa";
import { useScrollSection } from "@/hooks/use-scroll-section";
import Link from "next/link";

const AboutMe: React.FC = () => {
  const { ref, isVisible } = useScrollSection();

  return (
    <div
      id="about"
      className="relative w-full flex flex-col sm:flex-row py-20 scroll-mt-20"
      ref={ref}
    >
      <motion.div
        className="w-full sm:w-[70%] pr-0 sm:pr-8 mb-8 sm:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full bg-card text-card-foreground">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center">
              <FaLightbulb className="mr-2 text-primary" />
              <CardTitle className="text-2xl sm:text-3xl font-bold text-primary">
                About Me
              </CardTitle>
            </div>

            {/* Resume Button */}
            <Link
              href="/pdf/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 sm:mt-0"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md font-semibold transition duration-300 flex items-center"
              >
                <FaFileAlt className="mr-2" /> Resume
              </motion.button>
            </Link>
          </CardHeader>

          <CardContent className="text-sm sm:text-base text-foreground space-y-4">
            <p>
              👋 Hey there! I&apos;m Saurabh Jadhav, a passionate{" "}
              <strong>Frontend Developer</strong> with{" "}
              <strong>2.5+ years of experience</strong>
              in building dynamic web applications. My expertise lies in{" "}
              <strong>Vue.js, Nuxt.js, React.js, and Next.js</strong>, crafting
              seamless user experiences with{" "}
              <strong>GraphQL, Playwright, and Tailwind CSS</strong>.
            </p>
            <p>
              <FaCode className="inline-block mr-2" />I started my journey as a{" "}
              <strong>Data Engineer</strong>, working with large-scale data
              pipelines using <strong>Google BigQuery and Airflow</strong>.
              However, my passion for building intuitive and scalable web
              applications led me to <strong>frontend development</strong>. At
              Mazecare, I contributed to <strong>healthcare solutions</strong>{" "}
              like Clinic Management Systems, Insurance Automation, and Payor
              Portals, enhancing workflows for clients.
            </p>
            <p>When I&apos;m not coding, you&apos;ll find me:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <FaLaptopCode className="inline-block mr-2" /> Exploring new
                JavaScript frameworks & tools
              </li>
              <li>
                <FaDatabase className="inline-block mr-2" /> Optimizing
                performance & scalability of web apps
              </li>
              <li>
                <FaBolt className="inline-block mr-2" /> Solving LeetCode
                challenges & improving problem-solving skills
              </li>
            </ul>
            <p>
              <FaRocket className="inline-block mr-2" />
              I&apos;m always excited about{" "}
              <strong>scalability, automation, and UI performance</strong>
              —because great software isn&apos;t just about code, it&apos;s
              about creating experiences that make life easier. Let&apos;s
              connect and build something amazing! 🚀
            </p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        className="w-full sm:w-[30%] flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-full max-w-[250px] aspect-square">
          <ProfileImage src="/pics/photo.png" alt="My Profile Picture" />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
