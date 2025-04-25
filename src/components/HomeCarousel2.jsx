import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import bedroom from '../assets/Rectangle24.png';
import livingroom from '../assets/Rectangle25.png';


function HomeCarousel2() {
  const slidesData = [
    {
      img: bedroom,
      title: "01-Bed Room",
      subtitle: "Inner Peace"
    },
    {
      img: livingroom,
      title: "02-Living Room",
      subtitle: "Cozy Minimalism"
    },
    {
      img: livingroom,
      title: "03-Workspace",
      subtitle: "Creative Corner"
    }
  ];

  const [slides, setSlides] = useState(slidesData);
  const [currentKey, setCurrentKey] = useState(0);

  const handleNext = () => {
    const updated = [...slides.slice(1), slides[0]];
    setSlides(updated);
    setCurrentKey(prev => prev + 1); // force re-render for animation
  };

  return (
    <div className='bg-[#FCF8F3] grid grid-cols-1 lg:grid-cols-2 p-8 items-center'>
      <div className='space-y-5'>
        <h1 className='font-bold text-6xl'>50+ Beautiful rooms <br /> inspiration</h1>
        <p>Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</p>
        <button className='bg-[#B88E2F] px-4 py-1 text-white'>Explore More</button>
      </div>

      <div className='flex flex-wrap lg:flex-nowrap gap-2'>
        {/* Main Image */}
        <div className='h-[400px] w-[800px] relative overflow-hidden'>
          <AnimatePresence mode="wait">
            <motion.img
              key={currentKey}
              src={slides[0].img}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className='h-[400px] w-full absolute top-0 left-0 object-cover'
            />
          </AnimatePresence>

          {/* Text and Arrow */}
          <div className='flex absolute bottom-5 left-5 items-end'>
            <div className='bg-white flex py-7 w-[250px] px-5'>
              <div>
                <h1>{slides[0].title}</h1>
                <h1 className='font-bold text-2xl'>{slides[0].subtitle}</h1>
              </div>
            </div>
            <div
              className='bg-[#B88E2F] h-10 px-4 py-2 text-white flex items-center cursor-pointer'
              onClick={handleNext}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>

        {/* Side Thumbnails */}
        <div>
          <div className='flex mb-5 gap-2 overflow-hidden'>
            <img className='h-[350px] hidden lg:block opacity-50' src={slides[1].img} alt="" />
            <img className='h-[350px] hidden lg:block' src={slides[2].img} alt="" />
          </div>
          <div className='flex gap-2'>
            <span className='px-1 py-1 border border-[#B88E2F] rounded-full'>
              <span className='px-2 rounded-full bg-[#B88E2F]'></span>
            </span>
            <span className='px-1 py-1 rounded-full'>
              <span className='px-2 rounded-full bg-[#D8D8D8]'></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCarousel2;
