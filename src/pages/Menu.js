import React from 'react'
import Slider from '../components/Slider'
import Navbar from '../components/Navbar';
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

const Menu = () => {
  const [foodData, setFoodData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const foodCollection = collection(db, 'food');
        const snapshot = await getDocs(foodCollection);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setFoodData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  console.log({foodData})

  return (
    <div className="">    
        <Navbar/>
        <h1 className='text-5xl mt-28 text-center font-bold'>Menu</h1>   
        <Slider row="1" heading="Burgers" foodCategory="burger" foodData={foodData}/>    
        <Slider row="2" heading="Pizzas" foodCategory="pizza" foodData={foodData}/>    
    </div>
  )
}

export default Menu