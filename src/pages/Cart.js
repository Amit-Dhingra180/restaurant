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

console.log(parsedResult);

  return (
    <div>
      <Navbar/>
      <h1 className='mt-28'>Yo</h1>
    </div>
  )
}

export default Cart