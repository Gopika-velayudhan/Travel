import React from 'react';
import feature from '../assets/feature.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';
import icon6 from '../assets/icon6.png';

function Feature() {
  return (
    <div className="bg-white px-4 lg:px-20 py-10">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/2">
          <div className="p-7 lg:m-10">
            <h2 className="text-pink-500 font-bold py-1">KEY FEATURES</h2>
            <h1 className="text-2xl lg:text-3xl font-bold py-2">We Offer Best Services</h1>
            <p className="text-gray-400 py-2">
              Contrary to popular belief, Lorem Ipsum is not simply random 
              text. It has roots in a piece of classical Latin literature
              from 45 BC.
            </p>
          </div>
          <div className="lg:m-10">
            <div className="flex px-6 lg:px-10 py-4 lg:py-8 items-start">
              <img src={icon4} alt="Feature Icon 4" className="w-10 h-10 lg:w-12 lg:h-12" />
              <div className="ml-4 lg:ml-6">
                <h1 className="font-bold">We Offer Best Services</h1>
                <p className="text-gray-400">Lorem Ipsum is not simply random text</p>
              </div>
            </div>
            <div className="flex px-6 lg:px-10 py-4 lg:py-8 border border-gray-300 rounded-3xl items-start my-4">
              <img src={icon5} alt="Feature Icon 5" className="w-10 h-10 lg:w-12 lg:h-12" />
              <div className="ml-4 lg:ml-6">
                <h1 className="font-bold">Schedule Your Trip</h1>
                <p className="text-gray-400">Lorem Ipsum is not simply random text</p>
              </div>
            </div>
            <div className="flex px-6 lg:px-10 py-4 lg:py-8 items-start">
              <img src={icon6} alt="Feature Icon 6" className="w-10 h-10 lg:w-12 lg:h-12" />
              <div className="ml-4 lg:ml-6">
                <h1 className="font-bold">Get Discounted Coupons</h1>
                <p className="text-gray-400">Lorem Ipsum is not simply random text</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img src={feature} alt="Feature" className="w-full h-auto max-w-sm mx-auto lg:max-w-full" />
        </div>
      </div>
    </div>
  );
}

export default Feature;
