import React from 'react';
import breadcrumb from '../assets/breadcrumb.png';
import { useLocation } from 'react-router-dom';

const BreadcrumbHeader = () => {
  const location = useLocation();
  const pathname = location.pathname.replace('/', '') || 'Shop';

  return (
    <div
      style={{ backgroundImage: `url(${breadcrumb})` }}
      className="w-full py-20 px-4 flex flex-col items-center"
    >
      <h1 className="text-4xl uppercase font-semibold text-black mb-2">{pathname}</h1>
      <div className="text-gray-500 text-sm flex items-center space-x-1">
        <a href="/" className="hover:underline">Home</a>
        <span className="mx-1">{'>'}</span>
        <span className="text-black capitalize">{pathname}</span>
      </div>
    </div>
  );
};

export default BreadcrumbHeader;
