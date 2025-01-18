import React from 'react'
import logo from '../assets/logo.png';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import {  FaHeart,FaGlobe, FaUser, FaBars } from "react-icons/fa";
function nav() {
  return (
    <div className='container max-w-[1100px] mx-auto'>
    <div className='flex items-center gap-12 text-[15px] justify-between'>
      <div className='border-b-2 '>
        <img className='w-[100px] align-middle mx-[10px] my-[10px] ' src={logo}/>
      </div>
      <div className='navs'>
      <div className="flex items-center justify-end space-x-6">
  {/* Favorites */}
  <button className="flex items-center text-gray-700 hover:text-black">
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
    <span className="ml-2 text-sm">Favorites</span>
  </button>

  {/* Language and Currency */}
  <button className="flex items-center text-gray-700 hover:text-black">
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5V19.5M4.5 12h15"
      />
    </svg>
    <span className="ml-2 text-sm">EN · $</span>
  </button>

  {/* Login */}
  <button className="flex items-center text-gray-700 hover:text-black">
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 12c2.485 0 4.5-2.015 4.5-4.5S14.485 3 12 3 7.5 5.015 7.5 7.5 9.515 12 12 12z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 16.5h10.5M6.75 16.5v3M17.25 16.5v3"
      />
    </svg>
    <span className="ml-2 text-sm">Log in</span>
  </button>

  {/* Menu */}
  <button className="flex items-center text-gray-700 hover:text-black">
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12h18M3 6h18M3 18h18"
      />
    </svg>
    <span className="ml-2 text-sm">Menu</span>
  </button>
</div>
      </div>
    </div>
    </div>
  )
}

export default nav
