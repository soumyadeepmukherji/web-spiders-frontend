import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const plans = [
  { name: "Science", monthly: 10, yearly: 100 },
  { name: "Commerce", monthly: 20, yearly: 200 },
  { name: "Arts", monthly: 30, yearly: 300 },
];

export default function PricingToggle() {
  const [billing, setBilling] = useState(
    localStorage.getItem("billing") || "monthly"
  );
  const priceRefs = useRef([]);

  // Animate prices when billing changes
  useEffect(() => {
    priceRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.4, delay: i * 0.1 }
        );
      }
    });
  }, [billing]);

  const handleToggle = () => {
    const newBilling = billing === "monthly" ? "yearly" : "monthly";
    setBilling(newBilling);
    localStorage.setItem("billing", newBilling);
  };

  return (
    <section className="max-w-4xl mx-auto p-6  text-center mt-4">
      <h3 className="text-[40px] font-semibold mb-8">Cource Fees</h3>
      {/* Toggle */}
      <div className="flex justify-center items-center mb-6 gap-4 pt-4">
        <span className={billing === "monthly" ? "font-bold" : ""}>Monthly</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            checked={billing === "yearly"}
            onChange={handleToggle}
          />
          <div className="w-14 h-8 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
          <div className={`absolute  ${billing === "monthly" ? "left-1" : "right-1"}  top-1 w-6 h-6 bg-white rounded-full shadow-md peer-checked:translate-x-6 transition-transform`}></div>
        </label>
        <span className={billing === "yearly" ? "font-bold" : ""}>Yearly</span>
      </div>

      {/* Pricing cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className="bg-gray-100 p-4 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p
              ref={(el) => (priceRefs.current[index] = el)}
              className="text-3xl font-bold mb-4"
              aria-live="polite"
            >
              ${billing === "monthly" ? plan.monthly : plan.yearly}
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
