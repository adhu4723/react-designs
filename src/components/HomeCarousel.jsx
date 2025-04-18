import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    title: "Inner Peace",
    subtitle: "Bed Room",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Natural Light",
    subtitle: "Dining Room",
    image: "https://images.unsplash.com/photo-1588854337221-4b1a229e99be?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Cozy Mornings",
    subtitle: "Kitchen",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
  },
];

export default function HomeCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white overflow-hidden">
      <div className="relative w-full max-w-5xl h-[500px]">
        {/* Slides Container */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className="min-w-full flex flex-col md:flex-row h-[500px]"
            >
              {/* Left content */}
              <div className="flex-1 p-8 flex flex-col justify-end relative z-10">
                <div className="bg-white/80 p-4 rounded-md w-fit">
                  <p className="text-sm text-gray-500">0{slide.id} — {slide.subtitle}</p>
                  <h2 className="text-2xl font-semibold text-gray-800">{slide.title}</h2>
                </div>
                <button className="mt-4 bg-yellow-600 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
                  <FaArrowRight />
                </button>
              </div>
              {/* Right image */}
              <div className="flex-1 relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {/* Arrow */}
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center"
                >
                  <FaArrowRight className="text-yellow-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full border-2 ${
                idx === current ? "border-yellow-600" : "border-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
