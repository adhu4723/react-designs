import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import { ProductContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

function OurProducts() {
    const {productdata}=useContext(ProductContext)
  return (
    <div className='text-center px-5 space-y-5 mt-20'>
      <h1 className='font-bold text-4xl  '>Our Products</h1>
      <div className='grid grid-cols-2 lg:grid-cols-5 gap-6'>
        {productdata.slice(0,10).map(items=>(
      <ProductCard productData={items}/>

        ))}
      </div>
      <Link to={'/shop'} className='border border-amber-600 px-6 py-2 text-amber-600 rounded hover:bg-amber-600 hover:text-white'>Show more</Link>
    </div>
  )
}

export default OurProducts
