//data/workExperience.ts

import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaReact,
  FaJs,
  FaNodeJs,
  FaGit,
} from "react-icons/fa";
import {
  SiGraphql,
  SiNuxtdotjs,
  SiTypescript,
  SiGooglecloud,
  SiApachespark,
  SiApacheairflow,
  SiJest,
  SiPlaywright,
} from "react-icons/si";
import { PiMathOperationsFill } from "react-icons/pi";
import React from "react";

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  year: number;
  description: string[];
  skills: Skill[];
  logo: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Mazecare",
    position: "Frontend Developer",
    duration: "Aug 2022 - Jan 2024",
    year: 2022,
    description: [
      "Developed and optimized healthcare solutions such as Clinic Management Systems (CMS) and Hospital Information Systems (HIS) using Nuxt.js and Vue.js.",
      "Enhanced performance by implementing efficient real-time API integrations using GraphQL and optimized frontend rendering, improving page load speed by 30%.",
      "Developed reusable and modular components in TypeScript to maintain clean, scalable code.",
      "Implemented automated end-to-end testing with Playwright, reducing manual testing efforts by 50% and ensuring high application stability.",
      "Collaborated with backend teams to integrate REST and GraphQL APIs, improving data retrieval efficiency and reducing API response time.",
      "Led the migration of legacy Vue 2 components to Vue 3, improving maintainability and performance.",
    ],
    skills: [
      { name: "Nuxt.js", icon: SiNuxtdotjs },
      { name: "Vue.js", icon: FaReact },
      { name: "GraphQL", icon: SiGraphql },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Playwright", icon: SiPlaywright },
      { name: "Jest", icon: SiJest },
      { name: "JavaScript", icon: FaJs },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Git", icon: FaGit },
    ],
    logo: "/logos/mazecare.png",
  },
  {
    company: "Datametica",
    position: "Data Engineer",
    duration: "Sep 2021 – July 2022",
    year: 2021,
    description: [
      "Designed and optimized data pipelines for high-frequency data migration from Netezza to BigQuery using IBM Datastage 11.5 & 11.7.",
      "Built scalable ETL jobs processing over 300TB of data into optimized BigQuery data models.",
      "Implemented DAGs using Apache Airflow and GCP Composer for orchestration and automation.",
      "Developed and automated SQL-based data transformations and stored procedures in BigQuery.",
      "Optimized queries to significantly reduce cloud processing costs for large-scale datasets.",
    ],
    skills: [
      { name: "Apache Airflow", icon: SiApacheairflow },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "ETL Pipelines", icon: FaChartBar },
      { name: "SQL", icon: FaDatabase },
      { name: "Apache Spark", icon: SiApachespark },
      { name: "Python", icon: FaPython },
      { name: "Git", icon: FaGit },
    ],
    logo: "/logos/datametica.png",
  },
];
