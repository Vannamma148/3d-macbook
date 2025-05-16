import React, { useState, useEffect } from "react";

const images = [
    "https://www.apple.com/v/macbook-pro/ar/images/overview/closer-look/3d_viewer_pf_16__flhf8phqnfyq_large.jpg",
    "https://www.apple.com/v/macbook-pro/ar/images/overview/closer-look/3d_viewer_pt_open__0d8mv60lzeq2_large.jpg",
    "https://www.apple.com/v/macbook-pro/ar/images/overview/closer-look/3d_viewer_psl_open__bj89iok2tro2_large.jpg",
    "https://www.apple.com/v/macbook-pro/ar/images/overview/closer-look/3d_viewer_ps_closed__fiht6l01epqy_large.jpg",
    "https://www.apple.com/v/macbook-pro/ar/images/overview/closer-look/3d_viewer_pf_14_16__egjpp1u1ryy6_large.jpg",
];

const Look = () => {
    const visibleCount = 1;
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
        <div className="bg-black text-white py-14 ">
            {/* Heading */}
            <h2 className="text-center text-5xl font-bold mb-6">Take a closer look.</h2>

            {/* Slider Container */}
            <div className="max-w-full mx-auto relative overflow-hidden p-9 rounded-lg">
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
                                flexBasis: `calc(${100 / totalSlides}% - 8px)`,
                                height: "600px",
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
                                className={`w-3 h-4 rounded-full cursor-pointer transition-all duration-300 ${idx === currentIndex ? "bg-white" : "bg-gray-500"
                                    }`}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Look;
