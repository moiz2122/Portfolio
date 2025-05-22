import React from "react";
import "./App.css";
import TypingHeading from "./TypingHeading";
const HeroSection = () => {
  return (
    <section className=" bg-grid min-h-[130vh] flex flex-col items-center justify-center text-white px-4 pt-12">
      <TypingHeading text="Hi I’m Muhammad Moiz" speed={300} />
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
          className="hover:bg-blue-800/30 border border-white/50 rounded-lg p-6 duration-300 transition-all hover:shadow-lg hover:-translate-y-1"
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
          href="./Frontend_Developer_MUHAMMADMOIZ.pdf"
          rel="noopener noreferrer"
          target="blank"
          className="hover:bg-green-800/30 border border-white/50  rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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
          className="hover:bg-purple-800/30 border border-white/50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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
          href="https://wa.me/923159542469"
          rel="noopener noreferrer"
          target="blank"
          className="hover:bg-orange-800/30 border border-white/50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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
      <h3 className="font-['Poppins'] mt-5 text-4xl sm:text-6xl font-bold text-white">
        Pr<span className="text-orange-400">o</span>jects
      </h3>

      {/* Projects started */}
      <div className=" mt-5 grid grid-cols-1 sm:grid-cols-2 sm:px-0 md:grid-cols-8 px-5 sm:gap-4 gap-4 w-full max-w-5xl">
        <a
          href="https://wood-land-five.vercel.app/"
          target="blank"
          className="sm:col-span-1 md:col-span-3 md:col-start-1 bg-[url(public/WoodlandThumbnil.png)] bg-cover bg-center bg-clip-border bg-blend-overlay hover:bg-black/60 rounded-lg px-6 py-5 transition-all duration-200 ease-in hover:shadow-2xl group min-h-[180px] flex items-center justify-center hover:-translate-y-1 "
        >
          <h3 className="text-transparent group-hover:text-white text-5xl transition-all duration-300 ease-in group-hover:scale-105">
            WoodLand
          </h3>
        </a>

        {/* Project2 */}
        <a
          href="https://statice-eccomerce.vercel.app/"
          target="blank"
          className="sm:col-span-1 md:col-span-3 md:col-start-6 bg-[url(public/WoodlandThumbnil.png)] bg-cover bg-center bg-clip-border bg-blend-overlay hover:bg-black/60 rounded-lg px-6 py-5 transition-all duration-200 ease-in hover:shadow-2xl group min-h-[180px] flex items-center justify-center hover:-translate-y-1"
        >
          <h3 className="text-transparent group-hover:text-white text-5xl transition-all duration-300 ease-in group-hover:scale-105">
            Static Eccomerce site
          </h3>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
