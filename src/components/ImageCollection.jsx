import React from 'react'
import images from '../assets/Images.png';



function ImageCollection() {
  return (
    <div className='text-center'>
      <h2 className='font-semibold text-gray-700'>Share your setup with</h2>
      <h1 className='text-4xl font-extrabold'>#FuniroFurniture</h1>
      <div>
        <img src={images} alt="" />
      </div>
    </div>
  )
}

export default ImageCollection
