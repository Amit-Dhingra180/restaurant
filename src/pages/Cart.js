import React from 'react'
import Navbar from '../components/Navbar'

  const Cart = () => {
  const result = localStorage.getItem('selectedItems');
  let parsedResult;

if (result) {
  parsedResult = JSON.parse(result);
} else {
  // Handle the case where localStorage is empty or the key doesn't exist
  parsedResult = []; // You can set it as an empty array or handle it differently based on your needs
}


  return (
    <div className='mx-4'>
      <Navbar/>
      <h1 className='mt-32 text-center text-lg font-semibold'>Cart</h1>
      <div className='text-lg p-4 border-4'>


        <div className='mt-4 flex justify-between font-semibold '>
          <div className='ml-24'>
            Product
          </div>
          <div className='flex space-x-6'>
            <p>Qty</p>
            <p >Price</p>
            <p>Subtotal</p>
          </div>
        </div>

        {parsedResult.map((item) => (
        <div className='mt-4 flex justify-between font-semibold '>
        <div className='ml-24'>
          {item.data.name}
        </div>
        <div className='flex space-x-16'>
          <p>{item.quantity}</p>
          <p >{item.data.price}</p>
          <p>{item.data.price*item.quantity}</p>
        </div>
      </div>
        ))}



      </div>
    </div>
  )
}

export default Cart