import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { WorkExperience } from "@/data/workExperience";

interface WorkTimelineItemProps {
  experience: WorkExperience;
  index: number;
  setActive: (experience: WorkExperience) => void;
}

const WorkTimelineItem: React.FC<WorkTimelineItemProps> = ({
  experience,
  index,
  setActive,
}) => {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex justify-center w-full px-4 md:px-0 sm:my-5">
      {/* Timeline Vertical Line - Hidden on Small Screens */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-primary opacity-50 h-full hidden sm:hidden md:block"></div>

      {/* Circle Indicator - Hidden on Small and Medium Screens */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-dark hidden md:block"></div>

      {/* Experience Card */}
      <motion.div
        className={`relative bg-card shadow-lg rounded-lg p-5 m-5 sm:p-6 cursor-pointer w-full sm:w-[95%] md:w-[48%] transition-all hover:shadow-xl
        text-left 
        ${
          isLeft
            ? "md:self-end md:mr-[51%] md:text-right"
            : "md:self-start md:ml-[51%] md:text-left"
        }`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        onClick={() => setActive(experience)}
      >
        {/* Content */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="w-14 h-14 flex justify-center items-center">
            <Image
              src={experience.logo}
              alt={`${experience.company} logo`}
              width={56} // Slightly increased for better visibility
              height={56}
              className="rounded-full"
            />
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold">
              {experience.position}
            </h3>
            <p className="text-primary text-base sm:text-lg">
              {experience.company}
            </p>
            <p className="text-xs sm:text-sm text-gray-400">
              {experience.duration}
            </p>
          </div>
        </div>

        {/* Skills (Hidden on Mobile) */}
        <div className="hidden sm:flex flex-wrap gap-2 mt-4">
          {experience.skills.map((skill, i) => (
            <div
              key={i}
              className="flex items-center bg-primary/10 text-primary px-2 py-1 rounded-lg text-xs font-medium"
            >
              {React.createElement(skill.icon, { className: "mr-1 text-base" })}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WorkTimelineItem;
