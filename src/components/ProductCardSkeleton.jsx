import React from "react";

export default function ProductCardSkeleton() {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg animate-pulse">
      <div className="bg-gray-300 w-full h-50" />
      
      <div className="p-2 bg-white">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2 mb-1"></div>
        <div className="h-5 bg-gray-300 rounded w-1/3 mt-2"></div>
      </div>
    </div>
  );
}
