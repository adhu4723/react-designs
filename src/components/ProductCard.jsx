import React from "react";

export default function ProductCard() {
  return (
    <div className="relative w-72 rounded-lg overflow-hidden shadow-lg group">
      <img
        src="https://wvxxlssoccbctxspmtyy.supabase.co/storage/v1/object/public/products/public/6d9b7ae2-0083-4e4c-bd04-3e96720a571c.jpeg"
        alt="Leviosa Chair"
        className="w-full h-72 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white px-4">
        <button className="bg-white text-yellow-600 font-semibold py-2 px-6 rounded mb-3">
          Add to cart
        </button>
        <div className="flex gap-6 text-sm">
          <span className="cursor-pointer">🔗 Share</span>
          <span className="cursor-pointer">🔁 Compare</span>
          <span className="cursor-pointer">🤍 Like</span>
        </div>
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-semibold text-gray-800 text-lg">Leviosa</h3>
        <p className="text-gray-500 text-sm">Stylish cafe chair</p>
        <p className="text-gray-900 font-bold text-lg mt-1">Rp 2.500.000</p>
      </div>
    </div>
  );
}
