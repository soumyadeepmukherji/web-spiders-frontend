import React, { useState } from "react";
import FeatureCard from "./FeatureCard";

const features = [
  { title: "Daly College of Business", description: "Top business programs.", image: "/src/assets/image 97.png" },
  { title: "Parent's Login", description: "Access student info easily.", image: "/src/assets/image 97.png" },
  { title: "Old Dalian Association", description: "Alumni network & events.", image: "/src/assets/image 97.png" },
  { title: "The Daly Prophet", description: "Our monthly newsletter.", image: "/src/assets/image 97.png" },
  { title: "Sports & Activities", description: "Extracurricular excellence.", image: "/src/assets/image 97.png" },
];

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0); // first card expanded by default

  return (
    <section className="py-16 bg-gray-100">
      <div className="container">
        {/* Left text */}
        <div className="md:w-1/3 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Our Features</h2>
          <p className="text-gray-700">
            Hover over a card to expand it. The first card is expanded by default.
          </p>
        </div>

        {/* Right horizontal row of cards */}
        <div className="md:w-2/3 flex overflow-x-auto no-scrollbar mx-auto">
          {features.map((item, idx) => (
            <FeatureCard
              key={idx}
              title={item.title}
              description={item.description}
              image={item.image}
              isActive={activeIndex === idx}
              onHover={() => setActiveIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
