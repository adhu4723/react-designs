import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ productData }) {
  return (
    <Link to={`/product/${productData.sku}`} className="relative rounded-lg overflow-hidden shadow-lg group">
      <div className="overflow-hidden">
        <img
          src={productData?.image_path}
          alt={productData?.name}
          className="w-full h-50 object-cover transform transition-transform duration-300 group-hover:scale-130"
        />
      </div>

      <div className="p-2 bg-white">
        <h1 className="font-semibold text-gray-800 text-md">{productData?.name}</h1>
        <p className="text-gray-500 text-sm">{productData?.category}</p>
        <p className="text-gray-900 font-bold text-lg mt-1">{productData?.price}</p>
      </div>
    </Link>
  );
}
