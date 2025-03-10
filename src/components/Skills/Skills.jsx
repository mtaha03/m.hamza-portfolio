import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CircularProgress from "../ProgressCircle/ProgressCircle";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("testing");
  const [activeSkill, setActiveSkill] = useState(null);

  const testingSkills = [
    "Manual Testing", "Regression Testing", "Functional Testing", "Sanity Testing", "E2E Testing", "Load Testing",
    "GUI Testing", "White Box Testing", "Black Box Testing", "Smoke Testing", "Cross-Browser Testing", "Web App Testing",
    "Mobile App Testing", "Database Testing", "SIT & UAT Execution", "Automation Implementation", "Cypress Basic Automation",
    "Selenium", "Appium", "JMeter Performance Testing", "Jira", "API Testing (Postman, Swagger)", "Bugzilla", "TestRail",
    "Trello", "CI/CD Implementation", "Git", "Bitbucket", "Confluence"
  ];

  return (
    <section id="skills" className="w-full">
      <div
        className="w-full flex items-center justify-center p-3 md:p-10 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/assets/skills.png')" }}
      >
        <div className="w-full max-w-7xl bg-transparent rounded-4xl flex flex-col items-center justify-center">
          <h1 className="mb-6 sm:mb-10 text-white text-lg sm:text-2xl md:text-3xl font-bold text-center">
            Skills
          </h1>

          {/* Tabs */}
          <div className="w-full flex justify-center">
            <div className="flex gap-3 sm:gap-4">
              {['testing', 'domain'].map((tab) => (
                <button
                  key={tab}
                  className={`p-2 sm:p-3 px-4 rounded-lg text-white transition-all ${activeTab === tab ? "bg-purple-700" : "bg-gray-600"}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "testing" ? "Testing Skills" : "Domain Expertise"}
                </button>
              ))}
            </div>
          </div>

          {/* Skills List */}
          <div className="bg-[#171717] rounded-2xl p-5 text-white w-full mt-6">
            {activeTab === "testing" ? (
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 transition-opacity duration-500 opacity-100">
                  {testingSkills.map((skill, index) => (
                    <p
                      key={index}
                      onClick={() => setActiveSkill(index)}
                      className={`p-2 sm:p-3 text-sm sm:text-md font-medium rounded-3xl transition-all duration-300 ease-in-out cursor-pointer hover:bg-gradient-to-r from-[#aa04ad] via-[#8a069f] to-[#41087e]
                        ${activeSkill === index 
                          ? "text-lg bg-gradient-to-r from-[#aa04ad] via-[#8a069f] to-[#41087e]" 
                          : "bg-transparent"} 
                        ${index % 2 === 0 ? "translate-y-1" : "-translate-y-1"}`}
                    >
                      {skill}
                    </p>
                  ))}
                </div>
            ) : (
              <div className="w-full transition-opacity duration-500 opacity-100">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={15}
                  breakpoints={{
                    480: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                  }}
                  navigation
                  modules={[Navigation]}
                  loop={true}
                  className="py-6"
                >
                  {[
                    { title: "FinTech", percentage: 95 },
                    { title: "Digital Banking", percentage: 95 },
                    { title: "Ride-Hailing", percentage: 95 },
                    { title: "Delivery Services", percentage: 95 },
                    { title: "Payment Processing & BNPL", percentage: 95 },
                    { title: "B2B & ECommerce Solutions", percentage: 95 },
                    { title: "SaaS", percentage: 95 },
                  ].map((item, index) => (
                    <SwiperSlide key={index} className="flex flex-col items-center">
                      <CircularProgress percentage={item.percentage} title={item.title} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
