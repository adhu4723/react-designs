import React, { useContext, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductContext } from '../context/ProductContext';

function FilterTab({ isOpen }) {
  const scrollRef = useRef();
  const { updateCategory,category } = useContext(ProductContext);
  console.log("updateCategory",category);
  
  const [activeCategory, setActiveCategory] = useState(category);

  const scroll = (direction) => {
    if (scrollRef.current) {
        console.log(scrollRef.current);
        
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -150 : 150,
        behavior: 'smooth',
      });
    }
  };

  const handleCategoryClick = (name) => {
    setActiveCategory(name);
    updateCategory(name);
  };

  const categories = [
    { name: 'sofa', image: 'https://png.pngtree.com/png-clipart/20240309/original/pngtree-cartoon-sofa-clip-art-png-image_14549361.png' },
    { name: 'chair', image: 'https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-orange-modern-chair-isolated-png-image_10008187.png' },
    { name: 'stool', image: 'https://png.pngtree.com/png-clipart/20231014/original/pngtree-simple-stool-chair-png-image_13298572.png' },
    { name: 'table', image: 'https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-round-table-3d-illustration-png-image_10093453.png' },
    { name: 'desk', image: 'https://png.pngtree.com/png-clipart/20220812/ourmid/pngtree-study-desk-illustration-png-image_6107805.png' },
    { name: 'kitchen', image: 'https://png.pngtree.com/png-clipart/20230914/original/pngtree-kitchen-table-clipart-cartoon-sytle-isolated-on-white-with-table-and-png-image_12149725.png' },
    { name: 'vanitory', image: 'https://png.pngtree.com/png-vector/20240317/ourmid/pngtree-bathroom-cabinet-vector-design-illustration-png-image_11994923.png' },
    { name: 'matress', image: 'https://png.pngtree.com/png-clipart/20250202/original/pngtree-mattress-clipart-hd-png-image_19848034.png' },
    { name: 'mirror', image: 'https://png.pngtree.com/png-clipart/20231001/original/pngtree-pink-mirror-cartoon-png-image_13027919.png' },
    { name: 'wardrove', image: 'https://png.pngtree.com/png-clipart/20220110/original/pngtree-hand-drawn-open-wardrobe-illustration-png-image_7070454.png' },
    { name: 'lamp', image: 'https://png.pngtree.com/png-vector/20240321/ourmid/pngtree-bedside-lighting-nightstand-lamp-png-image_11961850.png' },
    { name: 'tv table', image: 'https://png.pngtree.com/png-vector/20240518/ourmid/pngtree-vector-image-of-a-tv-set-on-a-tv-stand-png-image_12483164.png' },
    { name: 'garden', image: 'https://png.pngtree.com/png-clipart/20230913/original/pngtree-greenhouse-ga-clipart-garden-greenhouse-interior-drawing-for-decorating-your-home-png-image_11055340.png' }
  ];

  return (
    <div className={`p-4 relative ${isOpen ? 'block' : 'hidden'} `}>
      <div className="flex items-center gap-2 ">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll('left')}
          className=" md:block p-2 hidden  rounded-full bg-[#f5b062] hover:bg-gray-300"
        >
          <ChevronLeft />
        </button>

        {/* Scrollable Categories */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-2 py-5    scroll-smooth"
        >
          {categories.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(item.name)}
              className={`flex flex-col min-w-[100px] items-center transition cursor-pointer  
                ${activeCategory === item.name ? 'scale-110 ' : 'hover:scale-110'}
              `}
            >
              <img
                className={`bg-[#fdf6ee] rounded-full p-4 ${activeCategory === item.name ? 'bg-white border border-amber-600' : 'hover:scale-110'} hover:bg-white hover:border hover:border-amber-600`}
                width={80}
                src={item.image}
                alt={item.name}
              />
              <span className="text-sm text-[#c56d07] text-center font-semibold uppercase mt-1">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll('right')}
          className=" md:block p-2 rounded-full hidden bg-[#f5b062] hover:bg-gray-300"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

export default FilterTab;
