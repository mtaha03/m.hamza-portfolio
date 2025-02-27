import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CircularProgress from "../ProgressCircle/ProgressCircle";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("testing");

  const testingSkills = [
    "Manual Testing", "Regression Testing", "Functional Testing", "Sanity Testing", "E2E Testing", "Load Testing",
    "GUI Testing", "White Box Testing", "Black Box Testing", "Smoke Testing", "Cross-Browser Testing", "Web App Testing",
    "Mobile App Testing", "Database Testing", "SIT & UAT Execution", "Automation Implementation", "Cypress Basic Automation",
    "Selenium", "Appium", "JMeter Performance Testing", "Jira", "API Testing (Postman, Swagger)", "Bugzilla", "TestRail",
    "Trello", "CI/CD Implementation", "Git", "Bitbucket", "Confluence"
  ];

  return (
    <section id="skills">
      <div
        className="w-full flex items-center justify-center p-10"
        style={{
          backgroundImage: "url('/assets/skills.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full bg-transparent rounded-4xl flex flex-col items-center justify-center">
          <h1 className="mb-10 text-white text-xl sm:text-2xl md:text-3xl font-bold text-center">
            Skills
          </h1>

          {/* Tabs */}
          <div className="body w-full flex justify-center">
            <div className="tabs flex gap-4">
              <button
                className={`p-2 px-4 rounded-lg text-white ${activeTab === "testing" ? "bg-purple-700" : "bg-gray-600"}`}
                onClick={() => setActiveTab("testing")}
              >
                Testing Skills
              </button>
              <button
                className={`p-2 px-4 rounded-lg text-white ${activeTab === "domain" ? "bg-purple-700" : "bg-gray-600"}`}
                onClick={() => setActiveTab("domain")}
              >
                Domain Expertise
              </button>
            </div>
          </div>

          {/* Skills List */}
          <div className="bg-[#171717] rounded-2xl p-5 text-white w-full mt-6">
            {activeTab === "testing" ? (
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 transition-opacity duration-500 opacity-100">
                {testingSkills.map((skill, index) => (
                  <p
                    key={index}
                    className={`p-2 sm:p-3 text-sm sm:text-md font-medium rounded-3xl transition-all duration-300 ease-in-out bg-transparent hover:text-lg hover:bg-gradient-to-r from-[#aa04ad] via-[#8a069f] to-[#41087e]
                    ${index % 2 === 0 ? "translate-y-1" : "-translate-y-1"}`}
                  >
                    {skill}
                  </p>
                ))}
              </div>
            ) : (
              <div className="w-full transition-opacity duration-500 opacity-100">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={20}
                  breakpoints={{
                    640: { slidesPerView: 2 },
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
