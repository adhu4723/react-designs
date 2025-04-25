import React from 'react';

function Hero() {
  return (
    <div className="relative bg-[url('assets/hero-background.png')] bg-cover h-[50vh] bg-center lg:min-h-screen flex items-center justify-end">
      {/* Overlay Card */}
      <div className="bg-[#FFF3E3] flex flex-col gap-4 p-6 rounded-2xl max-w-md w-full md:mr-10 mr-4 absolute bottom-10 md:bottom-16 right-0 text-left">
        <h2 className="text-sm md:text-base text-gray-700 font-semibold">New Arrival</h2>
        <h1 className="text-2xl md:text-4xl font-bold text-[#B88E2F] leading-tight">
          Discover Our <br className="hidden md:block" /> New Collection
        </h1>
        <p className="text-xs md:text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br className="hidden md:block" />
          elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-[#B88E2F] text-white px-6 md:px-10 py-3 md:py-4 w-fit rounded-md shadow-md hover:bg-[#a37725] transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
