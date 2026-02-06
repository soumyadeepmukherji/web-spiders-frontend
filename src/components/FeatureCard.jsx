import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function FeatureCard({ 
  title, 
  description, 
  image, 
  isActive, 
  onHover 
}) {
  const cardRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    // Animate based on isActive
    if (isActive) {
      gsap.to(cardRef.current, { width: "400px", duration: 0.4, ease: "power3.out" });
      gsap.to(overlayRef.current, { opacity: 1, y: 0, duration: 0.4 });
    } else {
      gsap.to(cardRef.current, { width: "120px", duration: 0.4, ease: "power3.out" });
      gsap.to(overlayRef.current, { opacity: 0, y: 20, duration: 0.4 });
    }
  }, [isActive]);

  return (
    <div
      ref={cardRef}
      className="relative h-64 rounded-xl overflow-hidden cursor-pointer bg-white/10 backdrop-blur-md mr-4 flex-shrink-0"
      onMouseEnter={onHover}
      style={{ width: isActive ? "400px" : "120px" }}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay with title + description */}
      <div
        ref={overlayRef}
        className="absolute bottom-0 left-0 p-4 bg-white/30 backdrop-blur-md rounded-tl-xl opacity-0 translate-y-5"
      >
        <h3 className="text-white font-bold">{title}</h3>
        <p className="text-white text-sm">{description}</p>
      </div>

      {/* Normal state: title + arrow */}
      <div className="absolute bottom-4 left-4 flex items-center justify-between w-[calc(100%-2rem)]">
        <span className="text-white font-semibold">{title}</span>
        <span className="text-white text-xl">→</span>
      </div>
    </div>
  );
}
