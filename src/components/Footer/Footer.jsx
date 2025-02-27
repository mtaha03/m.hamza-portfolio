import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Footer = () => {
  return (
    <div className="bg-[#171717] w-full  py-5 flex items-center justify-between px-16">
      <h1 className="text-white text-3xl font-bold">M.Hamza</h1>
      <div className="flex items-center justify-center gap-x-5">
          
          <a
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white text-white hover:text-black hover:bg-white transition-all duration-300 ease-in-out"
            href="mailto:qa.hamzahanif@gmail.com?subject=Hello&body=I want to contact you."
          >
            <SiGmail />
          </a>
          <a
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white text-white hover:text-black hover:bg-white transition-all duration-300 ease-in-out"
            href="http://www.linkedin.com/in/muhammad-hamza-quality"
          >
            <FaLinkedin />
          </a>
        </div>
    </div>
  );
};

export default Footer;
