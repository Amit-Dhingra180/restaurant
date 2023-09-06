import React from 'react'
import Card from './Card'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'


const Slider = ({row,heading,foodCategory,foodData}) => {

  const slideLeft = () => {
    var slider = document.getElementById(`slider-${row}`)
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    var slider = document.getElementById(`slider-${row}`)
    slider.scrollLeft = slider.scrollLeft + 500
  }


  return (
    <div>
    <h1 className='text-3xl font-semibold m-4 ml-12'>{heading}</h1>
    <div className='realteive flex items-center'>
      <MdChevronLeft onClick={slideLeft} size={40} className='opacity-50 cursor pointer hover:opacity-100'/>
      <div id={`slider-${row}`} className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
      <Card foodCategory={foodCategory} foodData={foodData} />
      </div>
      <MdChevronRight onClick={slideRight} size={40} className='opacity-50 cursor pointer hover:opacity-100'/>        
    </div>
    </div>
  )
}

export default Slider