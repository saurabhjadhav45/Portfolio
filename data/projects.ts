// data/projects.ts

import { FaHospital, FaChartLine, FaCloud } from "react-icons/fa";
import { SiNuxtdotjs, SiGraphql, SiTypescript } from "react-icons/si";

export interface Skill {
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  githubLink: string;
  skills: Skill[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Clinic Management System (CMS)",
    description:
      "A comprehensive healthcare management solution to streamline clinic operations, including appointments, billing, and patient records.",
    icon: FaHospital,
    technologies: ["Nuxt.js", "Vue.js", "TypeScript", "GraphQL", "Playwright"],
    githubLink: "",
    skills: [
      { name: "Frontend Development" },
      { name: "Performance Optimization" },
      { name: "API Integration" },
    ],
  },
  {
    id: 2,
    title: "Hospital Information System (HIS)",
    description:
      "Developed and enhanced a real-time hospital management system with seamless API integrations for better efficiency and user experience.",
    icon: FaChartLine,
    githubLink: "",
    technologies: ["Vue.js", "Nuxt.js", "TypeScript", "GraphQL", "TailwindCSS"],
    skills: [
      { name: "UI/UX Design" },
      { name: "State Management" },
      { name: "Testing (Playwright)" },
    ],
  },
  {
    id: 3,
    title: "Cloud-Based Healthcare Dashboard",
    description:
      "A responsive dashboard for monitoring healthcare analytics, leveraging cloud-based solutions for scalability and efficiency.",
    icon: FaCloud,
    technologies: [
      "Nuxt.js",
      "Vue.js",
      "TypeScript",
      "GraphQL",
      "CDN Optimization",
    ],
    githubLink: "",
    skills: [
      { name: "Frontend Performance" },
      { name: "API Handling" },
      { name: "Data Visualization" },
    ],
  },
];
