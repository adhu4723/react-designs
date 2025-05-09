import React from 'react';

const ReviewCard = () => {
  return (
    <div className=" bg-white rounded-2xl shadow-md py-2 px-4 relative space-y-4">
      <div className="flex items-center gap-4">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Jenny Wilson"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-800">Jenny Wilson</h3>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500 text-sm">★ ★ ★ ★ ★</span>
            <span className="text-gray-500 text-sm ml-1">4.5</span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-sm">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </p>

      <div className="text-4xl text-amber-700 font-bold text-right absolute bottom-0 right-10">”</div>
    </div>
  );
};

export default ReviewCard;
