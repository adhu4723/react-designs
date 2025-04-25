import React, { useContext } from 'react'
import BreadcrumbHeader from '../components/Breadcrumb'
import FilterBar from '../components/FilterBar'
import { ProductContext } from '../context/ProductContext'
import ProductCard from '../components/ProductCard'
import ProductCardSkeleton from '../components/ProductCardSkeleton'

function Shop() {
     const {productdata,productswithlimit,sortedData,isFilteredLoading}=useContext(ProductContext)
  return (
    <div className=''>
      <BreadcrumbHeader/>
  

     
      <FilterBar/>

<div className='grid grid-cols-2 lg:grid-cols-5 gap-6 px-5 py-10 bg-white'>
        {sortedData.map(items=>(
          <div>
            {isFilteredLoading?<ProductCardSkeleton/>:
      <ProductCard productData={items}/>
            }
</div>
        ))}
      </div>
     
    </div>
  )
}

export default Shop
