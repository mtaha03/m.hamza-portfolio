import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";

const Hero = ({ data }) => {
  const { title, description } = data;
  return (
    <section id="hero">
      <div
        className="relative w-full h-screen flex items-center justify-center md:justify-start text-center md:text-left px-6 md:px-12 lg:px-32"
        style={{
          backgroundImage: "url('/assets/home-img.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-white max-w-2xl z-20">
          <button className="mb-3 border border-white bg-gradient-to-r from-[#aa04ad] via-[#8a069f] to-[#41087e] text-white font-bold rounded-xl px-4 py-2 md:px-5 md:py-3 text-sm md:text-base hover:bg-gradient-to-l transition-all duration-300 ease-in-out">
            Welcome to my Portfolio
          </button>
          <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">
            {title}
          </h1>
          <p className="mb-3 text-sm sm:text-base md:text-lg text-balance leading-relaxed">
            {description} 
            </p>
          <ScrollLink
            className="text-lg sm:text-xl flex items-center justify-center md:justify-start gap-x-3 cursor-pointer"
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Let's Connect <FaArrowRightLong className="mt-1" />
          </ScrollLink>
        </div>

        {/* Astronaut Images */}
        <div className="absolute bottom-10 left-4 sm:left-10 w-28 sm:w-36 md:w-48 lg:w-64 custom-move">
          <img src="/assets/astronout-2.png" alt="Floating Astronaut 2" />
        </div>
        <div className="absolute top-10 right-4 sm:right-10 w-28 sm:w-36 md:w-48 lg:w-64 custom-move-1">
          <img src="/assets/astronout-1.png" alt="Floating Astronaut 1" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
