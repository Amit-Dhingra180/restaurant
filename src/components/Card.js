import React from 'react';

const Card = ({ foodCategory, foodData }) => {
  // Filter the foodData based on the foodCategory
  const filteredFood = foodData.filter((item) => item.data.category === foodCategory);

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
                <button className='text-white bg-black w-7 h-7 rounded-lg text-lg mr-2 px-2'>+</button>
                <span className='mr-2'>0</span>
                <button className='text-white bg-black w-7 h-7 rounded-lg text-lg mr-2 px-2 font-bold'>-</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
