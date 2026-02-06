import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const logos = [
  "./src/assets/image 73.png",
  "./src/assets/image 74.png",
  "./src/assets/image 75.png",
  "./src/assets/image 76.png",
  "./src/assets/image 77.png",
  "./src/assets/image 78.png",
  "./src/assets/image 79.png",
  "./src/assets/image 80.png",
  "./src/assets/image 82.png",

];

function MarqueeLogos() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    gsap.to(marquee, {
      xPercent: -50,
      repeat: -1,
      duration: 20,
      ease: "linear",
    });
  }, []);

  return (
    <div className="overflow-hidden bg-gray-100 py-6">
      <div
        ref={marqueeRef}
        className="flex w-[200%] space-x-8"
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-16 object-contain"
          />
        ))}
        {/* Duplicate logos for infinite scroll */}
        {logos.map((logo, index) => (
          <img
            key={`dup-${index}`}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-16 object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export default MarqueeLogos;
