import React from 'react';
import Counter from './Counter';

const Card = ({ foodCategory, foodData  }) => {
  // Filter the foodData based on the foodCategory
  const filteredFood = foodData.filter((item) => item.data.category === foodCategory);


  const addToCart = (x) => {
    // Get the current items from localStorage
    const currentItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
  
    // Check if the item already exists in the cart
    const existingItem = currentItems.find((item) => item.id === x.id);
  
    if (existingItem) {
      // If the item already exists, increment its quantity
      existingItem.quantity += 1;
    } else {
      // If it's a new item, add it to the cart with a quantity of 1
      currentItems.push({ ...x, quantity: 1 });
    }
    // Stringify the updated items array and store it back in localStorage
    localStorage.setItem('selectedItems', JSON.stringify(currentItems));
    
  };
  
  const removeFromCart = (x) => {
    // Get the current items from localStorage
    const currentItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
  
    // Find the item in the cart
    const existingItemIndex = currentItems.findIndex((item) => item.id === x.id);
  
    if (existingItemIndex !== -1) {
      const existingItem = currentItems[existingItemIndex];
  
      if (existingItem.quantity > 1) {
        // If the item quantity is greater than 1, decrement its quantity
        existingItem.quantity -= 1;
      } else {
        // If the item quantity is 1, remove it from the cart
        currentItems.splice(existingItemIndex, 1);
      }
  
      // Stringify the updated items array and store it back in localStorage
      localStorage.setItem('selectedItems', JSON.stringify(currentItems));
    }
    
  };
  

  return (
    <div>
      {filteredFood.map((foodItem) => (
        
        <div key={foodItem.id} className='w-[220px] inline-block p-2 mx-2 ease-in-out duration-300 lg:w-[400px]'>
          <img src={foodItem.data.image} alt="Food Item" className="w-full h-40 object-cover rounded-lg lg:h-64 hover:scale-105 hover:ease-in-out duration-500" />
          <div className="p-2">
            <h2 className="whitespace-normal text-xl font-semibold lg:text-4xl">{foodItem.data.name}</h2>
            <div className='flex justify-between mt-1'>
              <p className="text-red-500 font-bold mt-1 ml-2 lg:text-xl lg:mt-3 lg:ml-3">{foodItem.data.price}</p>
              <Counter item={foodItem} addToCart={addToCart} removeFromCart={removeFromCart} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
