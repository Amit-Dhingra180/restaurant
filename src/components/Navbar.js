import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {
    return (
      
      <div className='absolute w-full h-24 bg-black inset-0 flex justify-between items-center p-4'>
        <div className=' text-yellow-500 text-4xl ml-6'>
          Gourmet
        </div>
        <div className='text-white space-x-4 mr-6 hidden'>
          <Link to='/menu'>Menu</Link>
          <Link to='/'>About</Link>
          <Link to='/menu'>Contact</Link>
          <Link to='/menu'>Cart</Link>
        </div>
        <div className='text-white mr-4'>
          <AiOutlineMenu size={28}/>
        </div>
        <div className='flex flex-col items-center justify-around text-4xl text-white fixed top-0 left-0 w-[50%] h-full bg-red-600'>
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