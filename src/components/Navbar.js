import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
      setNav(!nav)
    }

    return (
      <div className='absolute w-full h-24 bg-black inset-0 flex justify-between items-center p-4'>
        
        <div className=' text-yellow-500 text-4xl ml-6 md:ml-16 md:text-5xl lg:ml-32'>
          Gourmet
        </div>

        <div className='text-white space-x-8 mr-6 text-lg hidden md:flex'>
          <Link to='/menu' >Menu</Link>
          <Link to='/'>About</Link>
          <Link to='/menu'>Contact</Link>
          <Link to='/menu'>Cart</Link> 
        </div>

        <div className='text-white mr-4 cursor-pointer md:hidden' onClick={handleNav}>
          {!nav ? <AiOutlineClose size={28}/> : <AiOutlineMenu size={28}/>}          
        </div>

        <div className={!nav ? 'flex flex-col items-center justify-around text-4xl text-white fixed top-0 left-0 w-[50%] h-full bg-gray-800 ease-in-out duration-500 md:hidden z-10' : 'fixed left-[-100%]'}>
          <div className=' text-yellow-500 text-4xl ml-6'>
            Gourmet
          </div>
          <Link to='/menu'>Menu</Link>
          <Link to='/'>About</Link>
          <Link to='/menu'>Contact</Link>
          <Link to='/menu'>Cart</Link>
        </div>

      </div>
    );
}

export default Navbar