// components/sections/Hero.tsx
import React from "react";
import HeroTitle from "@/components/HeroTitle";
import Terminal from "@/components/Terminal";
import SkillsGrid from "@/components/SkillsGrid";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center px-4 pt-10 sm:pt-24">
      {" "}
      {/* Adjusted padding-top */}
      <div className="w-full mx-auto">
        <HeroTitle />
        <Terminal />
        <SkillsGrid />
      </div>
    </div>
  );
};

export default Hero;
