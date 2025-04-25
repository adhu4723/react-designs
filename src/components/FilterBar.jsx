import React, { useContext, useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import { BsGrid3X3Gap, BsList } from 'react-icons/bs';
import { ProductContext } from '../context/ProductContext';
import FilterTab from './FilterTab';

const FilterBar = () => {
  const { updateLimit, updateSort,limit,sortedData } = useContext(ProductContext);
  const[ isOpen,setisOpen]=useState(true)

  const toogleFilter=()=>{
    setisOpen((prev)=>prev==false?true:false)
  }
  return (
    <>
    <div className=" w-full px-4 py-4 text-sm text-black border-b border-gray-200 z-50">
      <div className="flex  flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 flex-wrap">
        
        {/* Left Section */}
        <div className="flex flex-wrap justify-center  items-center gap-4">
          <button onClick={toogleFilter} className="flex items-center bg-amber-800 text-white px-4 py-2 rounded-lg hover:border hover:border-amber-800 hover:text-amber-900 hover:bg-white gap-2 font-medium cursor-pointer">
            <FiFilter />
            Filter
          </button>

          <div className="flex items-center gap-3">
            <BsGrid3X3Gap className="cursor-pointer" />
            <BsList className="cursor-pointer" />
          </div>

          <span className="hidden md:inline-block border-l h-5 border-gray-300 mx-2" />
          <span className="text-sm text-gray-700">Showing 1–{limit?limit:''} of {sortedData?.length||""} results</span>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap items-center justify-center  gap-4">
          <div className="flex items-center gap-2">
            <span className="font-medium">Show</span>
            <select value={limit} onChange={(e) => updateLimit(e.target.value)} className="px-2 py-1 bg-white border border-gray-300 rounded-sm">
              <option value="100">All</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium">Sort by</span>
            <select onChange={(e) => updateSort(e.target.value)} className="px-3 py-1 bg-white border border-gray-300 text-gray-500 rounded-sm">
              <option value="">Default</option>
              <option value="newest">Newest</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <FilterTab isOpen={isOpen}/>
    </>
  );
};

export default FilterBar;
