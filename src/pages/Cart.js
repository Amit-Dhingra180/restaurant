import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';


const Cart = () => {
  const result = localStorage.getItem('selectedItems');
  let parsedResult;

  if (result) {
    parsedResult = JSON.parse(result);
  } else {
    // Handle the case where localStorage is empty or the key doesn't exist
    parsedResult = [];
  }

  // Calculate the total price
  const totalPrice = parsedResult.reduce((total, item) => {
    // Calculate the subtotal for each item (quantity * price)
    const subtotal = item.quantity * item.data.price;
    // Add the subtotal to the total
    return total + subtotal;
  }, 0); // Initialize total with 0

  const delivery = 10;
  const gst = 0.1 * totalPrice;
  const total = delivery + gst + totalPrice;

  return (
    <div className='mx-3 md:mx-14 lg:mx-20'>
      <Navbar />
      <h1 className='mt-32 text-center text-xl font-semibold lg:text-3xl'>Cart</h1>
      {parsedResult.length > 0 ? (
        <>
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
                  <tr key={item.id}>
                    <td className='py-4 text-center pl-4'>
                      <div className='flex items-center justify-center'>
                        <img
                          className='w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28'
                          src={item.data.image}
                          alt={item.data.name}
                        />
                      </div>
                    </td>
                    <td>{item.data.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.data.price}</td>
                    <td>{item.data.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h1 className='mt-8 text-center text-xl font-semibold lg:text-3xl'>Cart Total</h1>
            <div className='p-4 border-4 mt-4'>
              <table className="min-w-full md:text-xl text-left">
                <tbody>
                  <tr>
                    <td className='py-4 font-semibold'>Subtotal</td>
                    <td>{totalPrice}</td>
                  </tr>
                  <tr>
                    <td className='py-4 font-semibold'>Delivery</td>
                    <td>{delivery}</td>
                  </tr>
                  <tr>
                    <td className='py-4 font-semibold'>GST (10%)</td>
                    <td>{gst}</td>
                  </tr>
                  <tr>
                    <td className='py-4 font-semibold'>Total</td>
                    <td className='font-semibold'>{total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='flex justify-center mt-6 text-xl font-semibold'>
              <Link to='/checkout'>
                <button className='text-white mb-6 bg-black h-24 w-96'>
                  Proceed To Checkout
                </button>
              </Link>       
            </div>
          </div>

        </>
      ) : (
        <p className='mt-4 text-center text-xl font-semibold lg:text-3xl text-red-600'>Cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
