import React from 'react';
import notfound from '../assets/notfound.png';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center  bg-white text-center px-4">
      <div className="max-w-xl w-full">
        <img
          src={notfound}
          alt="404 Illustration"
          className="w-full max-w-md mx-auto "
        />
    
        <Link
          to={'/'}
          className="inline-block -mt-52 bg-amber-800 hover:border hover:border-amber-700 hover:bg-white hover:text-amber-800 text-white px-6 py-2 rounded shadow"
        >
          HOME PAGE
        </Link>
      </div>
    </div>
  );
}