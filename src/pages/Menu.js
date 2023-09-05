import React from 'react'
import Slider from '../components/Slider'
import Navbar from '../components/Navbar';

const Menu = () => {
  return (
    <div className="">    
        <Navbar/>
        <h1 className='text-5xl mt-28 text-center font-bold'>Menu</h1>   
        <Slider row="1" heading="Burgers"/>
        <Slider row="2" heading="Pizza"/>     
    </div>
  )
}

export default Menu