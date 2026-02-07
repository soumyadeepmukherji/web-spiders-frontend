import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaUniversity, FaUser, FaUsers, FaBook } from "react-icons/fa";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".hero-bg", {
      scale: 1.1,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    })
      .from(
        ".hero-subtitle",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.6"
      )
      .from(
        ".hero-title",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.4"
      )
      .from(
        ".hero-btn",
        {
          y: 20,
          opacity: 0,
          stagger: 0.2,
          duration: 0.5,
        },
        "-=0.4"
      );
  }, []);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center herobanner"
      style={{
        backgroundImage: `url('./src/assets/herobanner.png')`,
      }}
    >

      <div className="absolute inset-0 bg-black/30 h-100% bg-linear-to-b from-black/20 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 ">
          Live. Learn. Lead.
        </h1>
        <p className="text-lg md:text-2xl text-white mb-6">
          Shaping Leaders Since 1882
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <button className=" bg-[#CB0B19] border-1 border-transparent text-white px-3 py-1 rounded hover:bg-transparent hover:border-[#fff] transition px-6 py-3 rounded transition">
            Explore Admissions
          </button>
          <button className=" bg-transparent border-1 border-[#fff] text-white px-3 py-1 rounded hover:bg-[#000] hover:border-transparent transition px-6 py-3 rounded transition">
            Enquire Now
          </button>
        </div>
      </div>


      {/* Bottom feature list */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-col md:flex-row justify-center items-center gap-8 px-4 feature-list">
          {/* Feature 1 */}
          <div className="flex flex items-center text-white">
            <FaUniversity size={16} className="mb-0" />
            <span className="font-400">Daly College of Business Management</span>
          </div>

          {/* Feature 2 */}
          <div className="flex flex items-center text-white">
            <FaUser size={16} className="mb-0" />
            <span className="font-400">Parent's Login</span>
          </div>

          {/* Feature 3 */}
          <div className="flex flex items-center text-white">
            <FaUsers size={16} className="mb-0" />
            <span className="font-400">Old Dalian Association</span>
          </div>

          {/* Feature 4 */}
          <div className="flex flex items-center text-white">
            <FaBook size={16} className="mb-0" />
            <span className="font-400">The Daly Prophet</span>
          </div>
        </div>
    </section>
  );
}

export default Hero;
