import React from 'react';

const Card = ({ foodCategory, foodData }) => {
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
  


  return (
    <div>
      {filteredFood.map((foodItem) => (
        <div key={foodItem.id} className='w-[220px] inline-block p-2 mx-2 ease-in-out duration-300 lg:w-[400px]'>
          <img src={foodItem.data.image} alt="Food Item" className="w-full h-40 object-cover rounded-lg lg:h-64" />
          <div className="p-2">
            <h2 className="whitespace-normal text-xl font-semibold lg:text-4xl">{foodItem.data.name}</h2>
            <div className='flex justify-between'>
              <p className="text-red-500 font-bold mt-2">{foodItem.data.price}</p>
              <div>
                <button onClick={() => addToCart(foodItem)} className='text-white bg-black w-7 h-7 rounded-lg text-lg mr-2 px-2'>+</button>
                <span className='mr-2'>0</span>
                <button  className='text-white bg-black w-7 h-7 rounded-lg text-lg mr-2 px-2 font-bold'>-</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
