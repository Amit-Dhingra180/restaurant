import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full bg-gray-200'>
        <div className='md:flex justify-around'>
            <div>
                <h1 className='text-lg font-semibold'>Contact Us</h1>
                <p>Call Us</p>
                <p>900-819-6040</p>
                <p>Email Us</p>
                <p>something@gmail.com</p>
                <p>Our Location</p>
                <p>577 Gladstone Ave Ottawa, ON K1R5P2</p>
            </div>
            <div>
                <h1 className='text-lg font-semibold'>Gourmet</h1>
                <p>write a catchy slogan here  </p>
            </div>
            <div>
                <h1 className='text-lg font-semibold'>Quick Links</h1>
                <div className='flex flex-col'>
                    <Link to='/menu' >Menu</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/cart'>Cart {}</Link>
                </div>

            </div>
        </div>
        <div className='mt-6 md:flex justify-between'>
            <p>© 2023 Ottawa Kabab. All rights reserved | Powered by Arabz</p>
            <p>Terms & Conditions | Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer;