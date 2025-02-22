"use client";
import React, { useEffect, useState } from "react";
import anime from "animejs";
import IconLoader from "@/components/icons/IconLoader";

const Loader = ({ finishLoading }: { finishLoading: () => void }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 10);

    const loaderAnimation = anime.timeline({
      complete: () => finishLoading(),
    });

    loaderAnimation
      .add({
        targets: "#hexagon",
        opacity: [0, 1], // Fade in hexagon
        duration: 500,
        easing: "easeInOutQuad",
      })
      .add({
        targets: "#hexagon",
        strokeDasharray: [anime.setDashoffset, 0], // Draw hexagon
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 1500,
        easing: "easeInOutQuart",
      })
      .add({
        targets: "#letterS",
        opacity: [0, 1], // Fade in the letter "S" inside hexagon
        duration: 800,
        easing: "easeInOutQuart",
        delay: 500,
      })
      .add({
        targets: "#logo",
        delay: 700,
        duration: 300,
        easing: "easeInOutQuart",
        opacity: 0,
        scale: 0.9,
      })
      .add({
        targets: ".loader",
        duration: 200,
        easing: "easeInOutQuart",
        opacity: 0,
        zIndex: -1,
      });

    return () => {};
  }, [finishLoading]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50 loader">
      <div className="w-24 h-24">
        <IconLoader />
      </div>
    </div>
  );
};

export default Loader;
