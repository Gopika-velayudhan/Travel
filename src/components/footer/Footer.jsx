import React, { useState } from "react";
import logo from "../assets/Vector.png";
import insta from "../assets/insta.png";
import face from "../assets/twitter.png";
import twitter from "../assets/facebook.png";
import { HiOutlineChevronDown } from 'react-icons/hi';

function Footer() {
  const [isCompanyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [isMeetUsDropdownOpen, setMeetUsDropdownOpen] = useState(false);

  const toggleCompanyDropdown = () => setCompanyDropdownOpen(!isCompanyDropdownOpen);
  const toggleContactDropdown = () => setContactDropdownOpen(!isContactDropdownOpen);
  const toggleMeetUsDropdown = () => setMeetUsDropdownOpen(!isMeetUsDropdownOpen);

  return (
    <footer className="w-full py-8 px-4 md:px-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Travlog Logo" className="h-8 mr-2" />
              <h1 className="text-xl font-bold">Travlog</h1>
            </div>
            <p className="text-gray-500 mb-4">
              Contrary to popular belief, Lorem Ipsum is not simply <br />random text. 
              It has roots in a piece of classical Latin<br/> literature from 45 BC.
            </p>
            <div className="flex space-x-4 py-5">
              <img src={insta} alt="Instagram" className="h-6 w-6" />
              <img src={twitter} alt="Twitter" className="h-6 w-6" />
              <img src={face} alt="Facebook" className="h-6 w-6" />
            </div>
          </div>
          
          <div className="w-full md:w-1/6 mb-6 md:mb-0">
            <div className="flex items-center justify-between mb-4 cursor-pointer md:cursor-auto" onClick={toggleCompanyDropdown}>
              <h1 className="text-lg font-semibold">Company</h1>
              <HiOutlineChevronDown className="h-5 w-5 text-gray-400" />
            </div>
            <ul className={`space-y-2 text-gray-500 ${isCompanyDropdownOpen ? 'block' : 'hidden'} md:block`}>
              <li className="py-2">About</li>
              <li className="py-2">Career</li>
              <li className="py-2">Mobile</li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/6 mb-6 md:mb-0">
            <div className="flex items-center justify-between mb-4 cursor-pointer md:cursor-auto" onClick={toggleContactDropdown}>
              <h1 className="text-lg font-semibold">Contact</h1>
              <HiOutlineChevronDown className="h-5 w-5 text-gray-400" />
            </div>
            <ul className={`space-y-2 text-gray-500 ${isContactDropdownOpen ? 'block' : 'hidden'} md:block`}>
              <li className="py-2">Why Travlog?</li>
              <li className="py-2">Partner with us</li>
              <li className="py-2">FAQ</li>
              <li className="py-2">Blog</li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/6">
            <div className="flex items-center justify-between mb-4 cursor-pointer md:cursor-auto" onClick={toggleMeetUsDropdown}>
              <h1 className="text-lg font-semibold">Meet Us</h1>
              <HiOutlineChevronDown className="h-5 w-5 text-gray-400" />
            </div>
            <ul className={`space-y-2 text-gray-500 ${isMeetUsDropdownOpen ? 'block' : 'hidden'} md:block`}>
              <li className="py-2">+00 92 1234 56789</li>
              <li className="py-2">info@travlog.com</li>
              <li className="py-2">205. R Street, New York</li>
              <li className="py-2">BD23200</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
