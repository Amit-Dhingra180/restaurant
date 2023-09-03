import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className='relative w-full h-screen'>
      <img className='object-cover w-full h-full' src='./backgroundImage.jpg' alt='Background' />
      <Navbar/>
    </div>
  );
};

export default Home;
