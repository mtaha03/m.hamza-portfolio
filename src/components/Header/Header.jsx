import React, { useState, useEffect } from "react";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full fixed top-0 left-0 z-50 flex items-center justify-between px-6 md:px-10 lg:px-16 py-4 md:py-5 transition-all duration-300 ${isScrolled ? "bg-black shadow-lg" : "bg-transparent"}`}>
      <div>
        <h1 className="text-white text-2xl md:text-3xl font-bold">M.Hamza</h1>
      </div>
      <div className="hidden items-center gap-x-6 md:flex lg:gap-x-14">
        <ul className="hidden md:flex items-center justify-center gap-x-6 md:gap-x-8 lg:gap-x-10">
          <li className="text-white font-normal text-lg md:text-2xl transition-all duration-300 ease-in-out hover:scale-125 cursor-pointer">
            <ScrollLink to="hero" spy={true} smooth={true} offset={-80} duration={500}>Home</ScrollLink>
          </li>
          <li className="text-white font-normal text-lg md:text-2xl transition-all duration-300 ease-in-out hover:scale-125 cursor-pointer">
            <ScrollLink to="skills" spy={true} smooth={true} offset={-80} duration={500}>Skills</ScrollLink>
          </li>
          <li className="text-white font-normal text-lg md:text-2xl transition-all duration-300 ease-in-out hover:scale-125 cursor-pointer">
            <ScrollLink to="projects" spy={true} smooth={true} offset={-80} duration={500}>Experience</ScrollLink>
          </li>
        </ul>
        <div className="flex items-center justify-center gap-x-2 md:gap-x-3">
          <a className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full border-2 border-white text-white hover:text-black hover:bg-white transition-all duration-300 ease-in-out" href="mailto:m.hamzaqa9@gmail.com?subject=Hello&body=I want to contact you.">
          <SiGmail />
          </a>
         
          <a 
          
          className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full border-2 border-white text-white hover:text-black hover:bg-white transition-all duration-300 ease-in-out" href="http://www.linkedin.com/in/muhammad-hamza-quality">
            <FaLinkedin />
          </a>
        </div>
        <ScrollLink className="hidden md:block border border-white text-white font-semibold px-3 py-2 hover:bg-white hover:text-black transition-all duration-300 ease-in-out cursor-pointer" to="contact" spy={true} smooth={true} offset={-80} duration={500}>Let's Connect</ScrollLink>
      </div>
      <input
      onClick={() => setMenuOpen(!menuOpen)}
      id="toggleChecker" type="checkbox"/>
<label className="flex md:hidden" id="togglerLable" for="toggleChecker">
  <div class="checkboxtoggler">
    <div class="line-1"></div>
    <div class="line-2"></div>
    <div class="line-3"></div>
  </div>
</label>
      {menuOpen && (
        <div className="absolute  top-17 left-0 bg-black text-white w-full p-5  shadow-lg flex flex-col">
          <ul className="flex flex-col gap-4 mb-5 text-2xl">
            <li><ScrollLink to="hero" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMenuOpen(false)}>Home</ScrollLink></li>
            <li><ScrollLink to="skills" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMenuOpen(false)}>Skills</ScrollLink></li>
            <li><ScrollLink to="projects" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMenuOpen(false)}>Projects</ScrollLink></li>
          </ul>
          <div className="flex items-center mb-5 gap-x-5">
          <a className="w-8 h-8 md:w-8 md:h-8 flex items-center justify-center rounded-full border-2 border-white text-white hover:text-black hover:bg-white transition-all duration-300 ease-in-out" href="https://twitter.com">
            <FaTwitter />
          </a>
          <a className="w-8 h-8 md:w-8 md:h-8 flex items-center justify-center rounded-full border-2 border-white text-white hover:text-black hover:bg-white transition-all duration-300 ease-in-out" href="https://github.com">
            <FaGithub />
          </a>
          <a className="w-8 h-8 md:w-8 md:h-8 flex items-center justify-center rounded-full border-2 border-white text-white hover:text-black hover:bg-white transition-all duration-300 ease-in-out" href="https://linkedin.com">
            <FaLinkedin />
          </a>
        </div>
        <ScrollLink className=" w-40 flex items-center border border-white text-white font-semibold px-6 py-2 hover:bg-white hover:text-black transition-all duration-300 ease-in-out cursor-pointer" to="contact" spy={true} smooth={true} offset={-80} duration={500}>Let's Connect</ScrollLink>
        </div>
      )}
    </div>
  );
};

export default Header;
