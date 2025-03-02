import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full"
      style={{
        backgroundImage: "url('/assets/skills.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="mb-10 text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center py-5">
          Experience
        </h1>

        <div className="bg-[#171717] w-full p-5 sm:p-10">
          <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-1">
              <div className="w-full h-full mx-auto flex justify-center relative overflow-hidden rounded-3xl">
                <img
                  src="/assets/w1tty mokup.png"
                  alt="Project 1"
                  className="w-full object-cover rounded-3xl"
                />
                <div className="absolute top-0 left-0 h-full w-full text-center bg-[#00b004b7] p-4 flex flex-col justify-center items-center transition-all duration-300 ease-in-out">
                  <h1 className="mb-3 text-white text-xl sm:text-2xl font-bold">W1TTY</h1>
                  <p className="text-white text-sm sm:text-lg">Senior Quality Assurance Engineer</p>
                </div>
              </div>
            </div>

            <div className="card-2">
              <div className="w-full h-full mx-auto flex justify-center relative overflow-hidden rounded-3xl">
                <img
                  src="/assets/jeeny mokup.png"
                  alt="Project 2"
                  className="w-full object-cover rounded-3xl"
                />
                <div className="absolute top-0 left-0 h-full w-full text-center bg-[#a904aca2] p-4 flex flex-col justify-center items-center transition-all duration-300 ease-in-out">
                  <h1 className="mb-3 text-white text-xl sm:text-2xl font-bold">JEENY</h1>
                  <p className="text-white text-sm sm:text-lg">Senior Quality Assurance Quality Control Engineer</p>
                </div>
              </div>
            </div>

            <div className="card-3">
              <div className="w-full h-full mx-auto flex justify-center relative overflow-hidden rounded-3xl">
                <img
                  src="/assets/i2c mokup.png"
                  alt="Project 3"
                  className="w-full object-cover rounded-3xl"
                />
                <div className="absolute top-0 left-0 h-full w-full text-center bg-[#43087fae] p-4 flex flex-col justify-center items-center transition-all duration-300 ease-in-out">
                  <h1 className="mb-3 text-white text-xl sm:text-2xl font-bold">I2C.inc</h1>
                  <p className="text-white text-sm sm:text-lg">Senior Quality Assurance Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;