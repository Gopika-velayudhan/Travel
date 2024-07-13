import React from 'react';

const DestinationCard = ({ image, title, location, price, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500">{location}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-pink-500">${price}</span>
          <span className="flex items-center text-yellow-500">
            {rating} 
            <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.18 3.631a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.087 2.233a1 1 0 00-.364 1.118l1.18 3.63c.3.922-.755 1.688-1.54 1.118L10 13.011l-3.087 2.233c-.785.57-1.84-.196-1.54-1.118l1.18-3.63a1 1 0 00-.364-1.118L3.102 9.058c-.783-.57-.38-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.18-3.63z"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
