import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className='relative w-full h-screen'>
      <img className='object-cover w-full h-full' src='./backgroundImage.jpg' alt='Background' />
      <Navbar/>
      <div className=''>

        <div className="absolute left-[10%] top-[20%] text-white text-4xl md:text-5xl lg:text-6xl">
          <p>VERSATILE</p>
          <p>DINING</p>
          <p>EXPERIENCE</p>
        </div>

        <div className='absolute text-white left-[10%] top-[40%] md:top-[45%] md:text-lg lg:top-[50%]'>
          <p>Welcome to our restaurant, where the art of culinary</p>
          <p>craftsmanship meets a world of flavors,</p>
          <p>creating unforgettable dining experiences</p>
        </div>
        
        <div className='absolute text-white left-[10%] top-[60%] lg:top-[70%]'>
          <Link to="/menu">          
            <button className='hover:text-yellow-500 p-2 border-2 rounded-sm mr-16 lg:text-2xl lg:p-4'>Order Now</button>  
          </Link>
        </div>
        </div>
    </div>
  );
};

export default Home;
