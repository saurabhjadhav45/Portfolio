import React, { useMemo } from "react";
import {
  FaJs,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaCloud,
  FaPlay,
  FaCodeBranch,
  FaCss3,
} from "react-icons/fa";
import {
  SiNuxtdotjs,
  SiNextdotjs,
  SiGraphql,
  SiTailwindcss,
  SiTestinglibrary,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

const SkillsMarquee = () => {
  const skills = useMemo(
    () => [
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiRedux />, name: "Redux" },
      { icon: <FaVuejs />, name: "Vue.js" },
      { icon: <SiNuxtdotjs />, name: "Nuxt.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiGraphql />, name: "GraphQL" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaCss3 />, name: "CSS / SCSS" },
      { icon: <FaDatabase />, name: "SQL" },
      { icon: <FaCloud />, name: "GCP (BigQuery, Airflow)" },
      { icon: <FaPlay />, name: "Playwright" },
      { icon: <SiTestinglibrary />, name: "Vitest" },
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaCodeBranch />, name: "GitHub" },
    ],
    []
  );

  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Fading Effect on Both Sides */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Scrolling Container */}
      <div className="marquee">
        <div className="marquee-content">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill.icon}
            </div>
          ))}
          {/* Duplicate for seamless looping */}
          {skills.map((skill, index) => (
            <div key={`duplicate-${index}`} className="skill-item">
              {skill.icon}
            </div>
          ))}
        </div>
      </div>

      {/* Inject Global Styles for Animation */}
      <style jsx>{`
        @keyframes marqueeScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .marquee {
          display: flex;
          width: 100%;
          overflow: hidden;
        }
        .marquee-content {
          display: flex;
          flex-wrap: nowrap;
          gap: 30px;
          animation: marqueeScroll 15s linear infinite;
        }
        .skill-item {
          font-size: 2rem;
        }
      `}</style>
    </div>
  );
};

export default SkillsMarquee;
