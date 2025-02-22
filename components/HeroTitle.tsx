import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ProfileImage from "./ProfileImage"; // Ensure this component exists

const words = ["Engineering beyond the screen."];

const HeroTitle = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="w-full flex flex-col sm:flex-row items-center justify-center text-center sm:text-left"
  >
    {/* Profile Image */}
    <motion.div
      className="mb-6 sm:mb-0 pt-10 sm:pt-0"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="w-full aspect-square overflow-hidden rounded-3xl shadow-lg">
        <ProfileImage src="/pics/start.jpg" alt="My Profile Picture" />
      </div>
    </motion.div>

    {/* Title & Typewriter Section */}
    <motion.div className="sm:ml-10 flex flex-col items-center sm:items-start">
      <h3 className="text-xl md:text-2xl text-foreground p-2">Hello, I&apos;m</h3>

      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
        Saurabh Jadhav
      </h1>

      <h2 className="text-xl md:text-2xl text-foreground">
        <Typewriter
          words={words}
          loop={1} // Runs only once
          typeSpeed={80}
          deleteSpeed={0}
          delaySpeed={1000} // Adds slight pause after completion
        />
      </h2>

      {/* Divider (Only visible on stacked layout) */}
      <motion.div
        className="w-12 h-1 bg-primary my-4 sm:hidden" // Hidden on larger screens
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      />
    </motion.div>
  </motion.div>
);

export default HeroTitle;
