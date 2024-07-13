import React, { useEffect } from 'react';
import icon1 from '../assets/icon2.jpg';
import icon2 from '../assets/icon1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Service() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 lg:flex lg:justify-between">
        <div className="text-center lg:text-left lg:w-1/2 lg:ml-10 lg:mb-0 mb-10">
          <h2 className="text-pink-500 text-3xl font-bold mb-4">SERVICES</h2>
          <h1 className="text-4xl font-bold mb-8">Our top value <br /> categories for you</h1>
        </div>
        <div className="flex justify-center lg:w-1/2 space-x-8">
          <div className="border rounded-lg p-4 flex flex-col items-center max-w-sm w-full lg:w-max" data-aos="fade-up">
            <img src={icon1} alt="Tour Guide" className="w-16 h-16 mb-4" />
            <div>
              <h2 className="text-xl font-bold mb-2">Best Tour Guide</h2>
              <p className="text-gray-600 text-center">What looked like a small patch of purple grass, above five feet.</p>
            </div>
          </div>
          <div className="border rounded-lg p-4 flex flex-col items-center max-w-sm w-full lg:w-max" data-aos="fade-up" data-aos-delay="200">
            <img src={icon2} alt="Easy Booking" className="w-16 h-16 mb-4" />
            <div>
              <h2 className="text-xl font-bold mb-2">Easy Booking</h2>
              <p className="text-gray-600 text-center">Square, was moving across the sand in their direction.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
