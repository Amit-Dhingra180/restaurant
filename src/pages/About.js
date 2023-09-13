import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='relative w-full h-screen'>
        <img src="/pizzas/peppy.jpg" className='w-full h-1/2 object-cover' />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-xl text-center">
          <p>Welcome to Gourmet</p>
          <p>We like to eat good stuff, and we like it because the food is good</p>
        </div>
      </div>
    </div>
  );
};

export default About;
