import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4 w-full h-20 text-white bg-black fixed'>
      <div>
        <h1 className='text-5xl font-signature ml-2'> EricTech</h1>
      </div>

      <ul className='flex'>
        <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
          Home
        </li>
        <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
          Home
        </li>
        <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
          Home
        </li>
        <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
          Home
        </li>

        <li className=''>Home</li>
      </ul>
    </div>
  );
};

export default Navbar;
