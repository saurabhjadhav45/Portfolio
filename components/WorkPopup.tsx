import React, { forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VscClose } from "react-icons/vsc";
import { WorkExperience } from "@/data/workExperience";

interface WorkPopupProps {
  active: WorkExperience | null;
  setActive: (experience: WorkExperience | null) => void;
}

const WorkPopup = forwardRef<HTMLDivElement, WorkPopupProps>(
  ({ active, setActive }, ref) => {
    if (!active) return null;

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setActive(null)} // Close on backdrop click
        >
          <motion.div
            ref={ref}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 15, stiffness: 100 }}
            className="relative bg-card text-card-foreground p-10 rounded-lg max-w-2xl w-full max-h-[75vh] overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2 }}
              className="absolute top-4 right-4 cursor-pointer p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              onClick={() => setActive(null)}
            >
              <VscClose className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </motion.div>

            {/* Title & Info */}
            <motion.h3
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-bold mb-4"
            >
              {active.position}
            </motion.h3>
            <motion.p className="text-lg text-primary mb-2">
              {active.company}
            </motion.p>
            <motion.p className="text-md text-gray-400 mb-6">
              {active.duration}
            </motion.p>

            {/* Skills */}
            <motion.div className="flex flex-wrap gap-3 mb-6">
              {active.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="flex items-center bg-primary/10 text-primary px-3 py-2 rounded text-sm font-medium"
                >
                  {React.createElement(skill.icon, { className: "mr-2" })}
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.ul className="list-disc pl-6 space-y-3">
              {active.description.map((item, i) => (
                <motion.li key={i} className="text-lg">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }
);

WorkPopup.displayName = "WorkPopup";

export default WorkPopup;
