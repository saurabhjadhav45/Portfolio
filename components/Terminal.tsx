import React from "react";
import { motion } from "framer-motion";

const Terminal = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full flex flex-col items-center text-center pb-6"
    >
      {/* Description */}
      <motion.p
        className="text-lg text-muted-foreground leading-relaxed mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <span className="text-primary font-semibold">Frontend Engineer</span>{" "}
        specializing in{" "}
        <span className="text-primary font-semibold">
          healthcare technology
        </span>
        , crafting scalable and efficient solutions solutions for{" "}
        <span className="text-primary font-semibold">
          Clinic Management Systems (CMS), Hospital Information Systems (HIS),
          and insurance automation.
        </span>{" "}
        Experienced in{" "}
        <span className="text-primary font-semibold">
          real-time API integrations, automated claim processing, and
          performance-driven workflows
        </span>
        , ensuring seamless user experiences and system efficiency. Passionate
        about building intuitive, high-performance, and scalable frontend
        solutions that enhance user experiences.
      </motion.p>
    </motion.section>
  );
};

export default Terminal;
