import React, { useState, useEffect } from 'react';

const Counter = ({ item, addToCart, removeFromCart }) => {
  const localStorageKey = `counterValue_${item.data.name}`;
  
  // Initialize the count using a function to retrieve from localStorage
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem(localStorageKey);
    // If a storedCount exists and is a valid number, use it; otherwise, default to 0
    return storedCount !== null && !isNaN(storedCount) ? parseInt(storedCount) : 0;
  });

  const increment = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      localStorage.setItem(localStorageKey, newCount.toString()); // Update localStorage
      return newCount;
    });
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => {
        const newCount = prevCount - 1;
        localStorage.setItem(localStorageKey, newCount.toString()); // Update localStorage
        return newCount;
      });
    }
  };

  useEffect(() => {
    // Save the count in localStorage whenever it changes
    localStorage.setItem(localStorageKey, count.toString());
  }, [count, localStorageKey]);

  return (
    <div className='space-x-2 mt-1 lg:space-x-4'>
      <button onClick={() => {removeFromCart(item); decrement()}} className='text-white bg-black w-6 h-6 font-bold lg:w-8 lg:h-8'>-</button>
      <span className=' font-semibold lg:text-xl'>{count}</span>
      <button onClick={() => {addToCart(item); increment()}} className='text-white bg-black w-6 h-6 font-bold lg:w-8 lg:h-8'>+</button>
    </div>
  );
};

export default Counter;
