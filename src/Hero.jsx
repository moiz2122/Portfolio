import React from "react";
import "./App.css";
import TypingHeading from "./TypingHeading";
const HeroSection = () => {
  return (
    <section className="bg-grid min-h-screen flex flex-col items-center justify-center text-white px-4">
      <TypingHeading text="Hi I’m Muhammad Moiz" speed={100} />
      <p className="text-center max-w-2xl text-lg text-gray-300 mb-10 mt-4 px-2">
        I’m a Frontend Developer crafting responsive, high-performance web
        applications with modern technologies—focused on clean design,
        accessibility, and seamless user experiences.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/muhammad-moiz-frontend-developer/"
          target="blank"
          className="hover:bg-blue-800/30 border border-white/50 rounded-lg p-6 duration-300 transition-all hover:shadow-lg"
        >
          <div className="">
            <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
              LinkedIn <span className="text-blue-400">→</span>
            </h3>
            <p className="text-sm text-gray-400">
              Connect with me on LinkedIn to learn more about my professional
              experience.
            </p>
          </div>
        </a>

        {/* Resume */}
        <a
          href="./Frontend_Developer_MUHAMMAD_MOIZ.pdf"
          rel="noopener noreferrer"
          target="blank"
          className="hover:bg-green-800/30 border border-white/50  rounded-lg p-6 transition-all duration-300 hover:shadow-lg"
        >
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
              Resume <span className="text-green-400">→</span>
            </h3>
            <p className="text-sm text-gray-400">
              Download my resume to learn more about my skills and experience.
            </p>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/moiz2122"
          target="blank"
          className="hover:bg-purple-800/30 border border-white/50 hover:border-purple-600 rounded-lg p-6 transition-all duration-300 hover:shadow-lg"
        >
          <div className="">
            <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
              GitHub <span className="text-purple-300">→</span>
            </h3>
            <p className="text-sm text-gray-300">
              Check out my latest projects and contributions on GitHub.
            </p>
          </div>
        </a>

        {/* Contact */}
        <a
          onClick={(e) => e.preventDefault()}
          href=""
          target="blank"
          className="hover:bg-orange-800/30 border border-white/50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg"
        >
          <div className="">
            <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
              Contact <span className="text-orange-400">→</span>
            </h3>
            <p className="text-sm text-gray-400">
              Send me an email to get in touch and discuss potential
              opportunities.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
