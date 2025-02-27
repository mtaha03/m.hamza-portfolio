import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const CircularProgress = ({ percentage, title }) => {
  const controls = useAnimation();
  const [progress, setProgress] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true, // Animation sirf ek baar chale
    threshold: 0.5, // Jab 50% component visible ho tab trigger ho
  });

  useEffect(() => {
    if (inView) {
      let counter = 0;
      const interval = setInterval(() => {
        if (counter >= percentage) {
          clearInterval(interval);
        } else {
          counter += 1;
          setProgress(counter);
        }
      }, 20);
    }
  }, [inView]);

  return (
    <div ref={ref} className="relative flex flex-col items-center">
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Outer Circle */}
        <div className="w-48 h-48 rounded-full flex items-center justify-center bg-[#171717]">
          {/* Inner Circle */}
          <div className="w-38 h-38 rounded-full flex items-center justify-center bg-[#171717]">
            <span className="text-3xl font-bold text-white">{progress}%</span>
          </div>
        </div>

        {/* SVG Progress Circle */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          width="180"
          height="180"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
          </defs>
          <motion.circle
            cx="90"
            cy="90"
            r="75"
            strokeLinecap="round"
            fill="none"
            stroke="url(#GradientColor)"
            strokeWidth="12"
            strokeDasharray="471"
            strokeDashoffset={471 - (471 * progress) / 100}
            className="transition-all duration-500"
          />
        </svg>
      </div>
      <h2 className="mt-2 text-white text-sm font-semibold">{title}</h2>
    </div>
  );
};

export default CircularProgress;
