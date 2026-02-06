import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images
import img102 from "../assets/image 102.png";
import img103 from "../assets/image 103.png";
import img104 from "../assets/image 104.png";
import img105 from "../assets/image 105.png";
import img106 from "../assets/image 106.png";
import img80 from "../assets/image 80.png";
import img82 from "../assets/image 82.png";

const galleryData = [
  { id: 1, type: "photo", src: img102 },
  { id: 2, type: "photo", src: img103 },
  { id: 3, type: "video", src: img104 },
  { id: 4, type: "print", src: img105 },
  { id: 5, type: "photo", src: img106 },
  { id: 6, type: "video", src: img80 },
  { id: 7, type: "print", src: img82 },
];

const tabs = [
  { label: "Photo Gallery", value: "photo" },
  { label: "Video Gallery", value: "video" },
  { label: "Print Media", value: "print" },
];

export default function FilterableGallery() {
  const [activeTab, setActiveTab] = useState("photo");

  const filteredData = galleryData.filter((item) => item.type === activeTab);

  return (
    <section className="py-16 ">
      <h4 className="text-[40px] font-semibold text-center mb-4">Moments @ Daly</h4>
      <p className="text-[18px] font-500 text-center mb-8">Explore events, achievements, and everyday moments that define us.</p>
      {/* Tabs */}
      <div className="flex justify-center mb-8 gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-1 rounded-full transition ${
              activeTab === tab.value
                ? "bg-[#000] text-white"
                : "bg-white text-gray-700 shadow"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        loop
        centeredSlides
        breakpoints={{
          360: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
      >
        {filteredData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <img
                src={item.src}
                alt={`${item.type}-${item.id}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
