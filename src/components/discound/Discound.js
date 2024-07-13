import React from 'react';
import discountImage from '../assets/discound.png';
import icon3 from '../assets/icon3.jpg';

function Discount() {
  return (
    <div className="container mx-auto px-4 lg:px-20 py-12 flex flex-col md:flex-row items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div className="text-center md:text-left mb-10 md:mb-0">
          <img src={discountImage} alt="Discount" className="w-full h-auto max-w-md mx-auto md:max-w-none" />
        </div>

        
        <div className="md:text-left">
          <h2 className="font-bold text-pink-500 mb-4">TRAVEL POINT</h2>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">We help you find your dream location</h1>
          <p className="mb-6 text-gray-400">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-3xl p-4 text-center border border-gray-200">
              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-orange-500">500+</h1>
              <p className="text-black">Holiday packages</p>
            </div>
            <div className="bg-white rounded-3xl p-4 text-center border border-gray-200">
              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-orange-500">100+</h1>
              <p className="text-black">Holiday packages</p>
            </div>
            <div className="bg-white rounded-3xl p-4 text-center border border-gray-200">
              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-orange-500">7</h1>
              <p className="text-black">Holiday packages</p>
            </div>
            <div className="bg-white rounded-3xl p-4 text-center border border-gray-200">
              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-orange-500">2k+</h1>
              <p className="text-black">Holiday packages</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discount;
