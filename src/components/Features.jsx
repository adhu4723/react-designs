import React from 'react';
import diningImg from '../assets/dining.png';
import livingroomImg from '../assets/livingroom.png';
import bedroomImg from '../assets/bedroom.png';
import { Link } from 'react-router-dom';

// Array of features
const featuresData = [
  {
    name: 'Dining',
    img: diningImg,
  },
  {
    name: 'Living',
    img: livingroomImg,
  },
  {
    name: 'Bedroom',
    img: bedroomImg,
  },
];

function Features() {
  return (
    <Link to={'/shop'} className="text-center space-y-6 px-4 py-10">
      {/* Header */}
      <div>
        <h1 className="font-bold text-2xl md:text-3xl">Browse The Range</h1>
        <p className="text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="w-full overflow-x-auto">
        <div className="flex gap-6 justify-center md:justify-center px-2 md:px-10 min-w-[600px] md:min-w-0">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 min-w-[150px]"
            >
              <img
                src={feature.img}
                alt={feature.name}
                className="w-80 h-80 object-cover"
              />
              <h1 className="font-bold text-lg">{feature.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default Features;
