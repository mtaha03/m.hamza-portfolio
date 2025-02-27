import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="bg-gradient-to-r from-[#aa04ad] via-[#8a069f] to-[#41087e] w-full min-h-[500px] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 py-10">
        {/* Image Section (Hidden on small screens) */}
        <div className="hidden md:flex w-full md:w-1/2 justify-center">
          <img className="w-[80%] max-w-[550px] h-auto" src="/assets/contact-img.svg" alt="Contact" />
        </div>

        {/* Form Section */}
        <div className="bg-transparent p-6 md:p-8 rounded-lg text-white w-full md:w-1/2 max-w-[600px]">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
            Get In Touch
          </h1>
          <form className="space-y-4">
            <div className="flex flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border border-white rounded-xl bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border border-white rounded-xl bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div className="flex flex-row  gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-white rounded-xl bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 border border-white rounded-xl bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 border border-white rounded-xl bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
            <div className="flex w-full justify-center md:justify-start">
              <button
                type="submit"
                className="bg-white text-black font-bold py-3 px-10 rounded-md hover:bg-gray-200 transition-all"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
