import React, { useState, useEffect } from "react";

const images = [
     "/hero_apple_intelligence_headline__d3q0g47xl682_medium.png",
    "/center_stage_endframe__ezvmmpbbfouq_medium.jpg",
  "/highlights_apple_intelligence_siri__d970vf0sy32a_large.jpg",
  "/highlights_battery__ua2dmuk7jvmm_large.jpg",
  "/highlights_display__ed8l4csvmfee_large.jpg",
 
];

const Slide = () => {
  const visibleCount = 2;
  const totalSlides = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 > totalSlides - visibleCount ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides, visibleCount]);

  return (
    <div className="max-w-full mx-auto p-4">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-6">Get the highlights.</h2>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-500"
          style={{
            width: `${(100 / visibleCount) * totalSlides}%`,
            transform: `translateX(-${(currentIndex * 100) / totalSlides}%)`,
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="rounded-lg object-cover flex-shrink-0"
              style={{
                flexBasis: `calc(${100 / totalSlides}% - 12px)`,
                height: "400px",
                margin: "10px 0",
              }}
            />
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {Array(totalSlides - visibleCount + 1)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  idx === currentIndex ? "bg-black" : "bg-gray-400"
                }`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Slide;
