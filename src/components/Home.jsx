import React from 'react';
import myImage from '../assets/myImage.png';
import { FiArrowRightCircle } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name='home'
      className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '
    >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full '>
          <h3 className='text-4xl sm:text-7xl inline border-b-4 font-bold text-white mt-24'>
            I'm a Full Stack Developer
          </h3>
          <p className='text-gray-500 py-4 max-w-md'>
            To enhance my professional skills, capabilities and knowledge in an
            organization, which recognizes the value of hard work and trusts me
            with responsibilities and challenges. I have 5 years of experience
            building and designing software. Currenly, I love to work on web
            application using advanced technologies such as: React, Tailwind,
            Matrial UI, Next Js and GraphQL.
            <p>
              {' '}
              Currently, I am persuing master's degree of IT at Carnegie Mellon
              University.
            </p>
          </p>

          <div>
            <Link
              to='portfolio'
              smooth
              duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
            >
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <FiArrowRightCircle size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={myImage}
            alt='my profile'
            className='rounded-2xl mx-auto w-2/3 md:w-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
