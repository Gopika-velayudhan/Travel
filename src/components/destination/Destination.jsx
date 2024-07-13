import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DestinationCard from '../destination/Destinationcard';
import destination1 from '../assets/destination1.jpg';
import destination2 from '../assets/destination2.png';
import destination3 from '../assets/destination3.png';

const destinations = [
  {
    image: destination1,
    title: 'Paradise Beach, Bantayan Island',
    location: 'Rome, Italy',
    price: 550.16,
    rating: 4.8,
  },
  {
    image: destination2,
    title: 'Ocean with full of Colors',
    location: 'Maldives',
    price: 20.99,
    rating: 4.5,
  },
  {
    image: destination3,
    title: 'Mountain View, Above the cloud',
    location: 'United Arab Emirates',
    price: 150.99,
    rating: 5.0,
  },
];

function Destination() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mt-8">
          <button className="bg-white border border-gray-300 text-gray-600 rounded-full p-2 mx-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-6-6h12l-6 6z" />
            </svg>
          </button>
          <button className="bg-purple-500 text-white rounded-full p-2 mx-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-6-6h12l-6 6z" />
            </svg>
          </button>
        </div>
        <h2 className="text-pink-500 text-center mt-6 md:text-left">TOP DESTINATION</h2>
        <h1 className="text-3xl font-bold text-center md:text-left mb-6">Explore top destinations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <div key={index} className="flex justify-center" data-aos="fade-up">
              <DestinationCard
                image={destination.image}
                title={destination.title}
                location={destination.location}
                price={destination.price}
                rating={destination.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Destination;
