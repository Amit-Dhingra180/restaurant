import React from 'react'

const Card = () => {
  return (
    <div className='w-[220px] inline-block p-2 mx-2 cursor-pointer  ease-in-out duration-300 lg:w-[400px]'>
        <img src="backgroundImage.jpg" alt="Food Item" className="w-full h-40 object-cover rounded-lg lg:h-64" />
        <div className="p-2">
            <h2 className="whitespace-normal text-xl font-semibold lg:text-4xl">Food Item Name also i like to eat a lit cheeseburger</h2>
            <p className="text-red-500 font-bold mt-2">$10.99</p>
        </div>
    </div>
  )
}

export default Card