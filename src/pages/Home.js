import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className='relative w-full h-screen'>
      <img className='object-cover w-full h-full' src='./backgroundImage.jpg' alt='Background' />
      <Navbar/>
      <div className="absolute top-[20%] left-[5%] text-white text-4xl md:text-5xl lg:text-6xl">
        <p>VERSATILE</p>
        <p>DINING</p>
        <p>EXPERIENCE</p>
      </div>

      <div className='absolute top-[40%] left-[5%] text-white text-lg mr-8 md: top-[45%] lg: top-[55%]'>
        <p>Welcome to our restaurant, where the art of culinary</p>
        <p>craftsmanship meets a world of flavors,</p>
        <p>creating unforgettable dining experiences</p>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Home;
