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
    <div className='mx-3 md:mx-14 lg:mx-20'>
      <Navbar/>
      <h1 className='mt-32 text-center text-xl font-semibold lg:text-3xl'>Cart</h1>
      <div className='p-4 border-4 mt-4'>
      <table className="min-w-full  md:text-xl text-center">
        <thead>
          <tr className="bg-gray-100">
            <th></th>
            <th className="py-4">Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {parsedResult.map((item) => (
            <tr>
              <td className='py-4 text-center pl-4'>
                <div className='flex items-center justify-center'>
                  <img className='w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28' src={item.data.image} alt={item.data.name} />
                </div>
              </td>
              <td>{item.data.name}</td>
              <td>{item.quantity}</td>
              <td>{item.data.price}</td>
              <td>{item.data.price*item.quantity}</td>
            </tr>
          ))}   
        </tbody>
      </table>
      </div>

      <div>
        <h1 className='mt-8 text-center text-xl font-semibold lg:text-3xl'>Cart Total</h1>
          <div className='p-4 border-4 mt-4'>
            <table className="min-w-full md:text-xl text-center">
              <tr>
                <td className='py-4 font-semibold'>Subtotal</td>
                <td>something</td>
              </tr>
              <tr>
                <td className='py-4 font-semibold'>Delivery</td>
                <td>something</td>
              </tr>
              <tr>
                <td className='py-4 font-semibold'>GST (10%)</td>
                <td>something</td>
              </tr>
              <tr>
                <td className='py-4 font-semibold'>Total</td>
                <td className='font-semibold'>something</td>
              </tr>
            </table>
          </div>
      </div>
      <div className='flex justify-center mt-6 text-xl font-semibold'>
        <button className='text-white bg-black w-[80%] h-24 lg:w-[60%] lg:text-2xl'>
            Proceed To Pay
        </button>
      </div>
    </div>
  )
}

export default Cart