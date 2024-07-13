import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import background from "../assets/background.png";
import icon from "../assets/work 1.png";

function LandingPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white lg:m-20 m-4">
      <div className="flex flex-col lg:flex-row items-start lg:m-20 m-4">
        <header className="container mx-auto px-4 py-12 text-start lg:w-1/2">
          <div className="flex justify-start mb-4">
            <button className="bg-white text-pink-500 py-2 px-4 lg:py-4 lg:px-6 rounded-full shadow-xl flex items-center text-lg ">
              Explore the world!
              <img src={icon} className="ml-2 w-6 h-6 lg:w-8 lg:h-8" alt="icon" />
            </button>
          </div>
          <div className="flex flex-col justify-start text-start">
            <h1 className="text-3xl lg:text-5xl font-bold text-black mb-6">
              Travel{" "}
              <span className="text-pink-500">
                top <br className="hidden lg:block" /> destination <br className="hidden lg:block" />
              </span>{" "}
              of the world
            </h1>
            <p className="text-gray-700 mb-8 text-base lg:text-lg">
              We always make our customers happy by
              <br /> providing <br className="hidden lg:block" /> as many choices as possible.
            </p>
          </div>
          <div className="flex justify-start space-x-4 lg:space-x-6">
            <button className="bg-purple-600 text-white px-4 py-2 lg:px-8 lg:py-4 rounded-full text-sm lg:text-lg">
              Get Started
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 lg:px-8 lg:py-4 rounded-full text-sm lg:text-lg">
              Watch Demo
            </button>
          </div>
        </header>
        
        <main className="container mx-auto lg:m-20 m-4 px-4 py-12 lg:w-1/2 relative mt-0 lg:mt-0">
          <img src={background} alt="Background" className="w-full h-auto" />
          <div className="absolute inset-0 flex justify-center items-start p-6 z-10">
            <div className="flex flex-wrap justify-around space-x-4">
              <div className="mt-8" data-aos="fade-up">
                <img
                  src={img2}
                  alt="Destination 1"
                  className="rounded-lg shadow-lg mb-4 w-40 lg:w-52 h-auto "
                />
                <img
                  src={img1}
                  alt="Destination 2"
                  className="rounded-lg shadow-lg mb-4 w-40 lg:w-52 h-auto"
                />
              </div>
              <div className="mt-10 lg:mt-20" data-aos="fade-up">
                <img
                  src={img3}
                  alt="Destination 3"
                  className="rounded-lg shadow-lg w-40 lg:w-52 h-auto"
                />
              </div>
            </div>
          </div>
        </main>
      </div>

    
    </div>
  );
}

export default LandingPage;
