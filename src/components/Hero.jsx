import React from "react";
import { FaUniversity, FaUser, FaUsers, FaBook } from "react-icons/fa";

function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('./src/assets/herobanner.png')`,
      }}
    >
      {/* Transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Live. Learn. Lead.
        </h1>
        <p className="text-lg md:text-2xl text-white mb-6">
          Shaping Leaders Since 1882
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition">
            Explore Admissions
          </button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded transition">
            Enquire Now
          </button>
        </div>
      </div>


      {/* Bottom feature list */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-col md:flex-row justify-center items-center gap-8 px-4">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-white">
            <FaUniversity size={36} className="mb-2" />
            <span className="font-semibold">Daly College of Business Management</span>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-white">
            <FaUser size={36} className="mb-2" />
            <span className="font-semibold">Parent's Login</span>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-white">
            <FaUsers size={36} className="mb-2" />
            <span className="font-semibold">Old Dalian Association</span>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-white">
            <FaBook size={36} className="mb-2" />
            <span className="font-semibold">The Daly Prophet</span>
          </div>
        </div>
    </section>
  );
}

export default Hero;
