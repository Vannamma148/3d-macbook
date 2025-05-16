import React, { useState, useEffect } from "react";

const images = [
  "https://www.apple.com/in/macbook-pro/images/overview/highlights/highlights_apple_intelligence_siri__d970vf0sy32a_large.jpg",
  "https://www.apple.com/v/macbook-pro/ar/images/overview/highlights/highlights_battery__ua2dmuk7jvmm_large.jpg",
  "https://www.apple.com/v/macbook-pro/ar/images/overview/themes/apple-intelligence/apple_intelligence_writing_endframe__dn08l84ph4gi_medium.jpg",
  "https://www.apple.com/v/macbook-pro/ar/images/overview/highlights/highlights_display__ed8l4csvmfee_medium.jpg",
  "https://www.apple.com/in/macbook-pro/images/overview/highlights/highlights_apple_intelligence_siri__d970vf0sy32a_medium.jpg",
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
    <div className="bg-black text-white py-12 ">
      {/* Heading */}
      <h2 className="text-5xl font-bold mb-6">Get the highlights.</h2>

      {/* Slider Container */}
      <div className="max-w-full mx-auto relative overflow-hidden p-4 bg-black/80 rounded-lg">
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
                height: "500px",
                margin: "10px",
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
                  idx === currentIndex ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Slide;
