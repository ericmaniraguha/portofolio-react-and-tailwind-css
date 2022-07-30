import React from 'react';

const About = () => {
  return (
    <div
      name='about'
      className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-4'>
          <p className='text-4xl inline border-b-4 font-bold text-white'>
            About
          </p>
        </div>

        <p className='text-xl mt-10'>
          Experienced designing and developing software for business solutions
          Software engineer with experience in multiple settings can design and
          develop programs using the latest and most appropriate technology. Key
          skills include: Languages: C++, Java, C, .Net, SQL Applications: MS
          Visual Studio, Eclipse Application servers: JBoss, Tomcat Operating
          systems: Windows, Unix, Linux Database systems: SQL Server, MySQL.
        </p>

        <br />

        <p className='text-xl'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          pariatur, vel similique sint, nobis aspernatur ut praesentium
          explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae
          quisquam ullam maiores ab unde. Fugiat odio mollitia nemo alias.
          Commodi facilis atque nulla vero voluptatem explicabo. Quibusdam,
          magni quo! Eum cupiditate debitis labore.
        </p>
      </div>
    </div>
  );
};
export default About;
