import React from "react";

const IconLoader = () => (
  <svg
    id="logo"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className="w-full h-full text-primary" // Uses theme color
  >
    <title>Loader Logo</title>
    <g>
      {/* Hexagon with dynamic background color */}
      <path
        id="hexagon"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="var(--background)" // Matches page background
        opacity="0" // Initially hidden
        d="M 50, 5
          L 11, 27
          L 11, 72
          L 50, 95
          L 89, 73
          L 89, 28 z"
      />
      {/* Letter S (Hidden Initially) */}
      <text
        id="letterS"
        x="50%"
        y="55%"
        fontSize="40"
        fontWeight="bold"
        fill="currentColor"
        textAnchor="middle"
        alignmentBaseline="middle"
        opacity="0" // Initially hidden, will fade in later
      >
        S
      </text>
    </g>
  </svg>
);

export default IconLoader;
