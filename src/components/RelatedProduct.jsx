import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

function RelatedProduct() {
  const { sortedData } = useContext(ProductContext);

  return (
    <div className="my-10">
      <h1 className="text-center text-2xl font-bold uppercase mb-6">Related Product</h1>
      
      {/* Mobile: scroll | Desktop: grid */}
      <div className="flex gap-4 overflow-x-auto lg:grid lg:grid-cols-5 lg:overflow-x-hide px-4">
        {sortedData.slice(0, 5).map((item, index) => (
          <div key={index} className="min-w-[250px] lg:min-w-0  rounded-lg shadow-sm">
            <ProductCard productData={item} />
          </div>
        ))}
      </div>
      <div className='mt-10 text-center'>
      <Link to={'/shop'} className='border border-amber-600 px-6 py-2 text-amber-600 rounded hover:bg-amber-600 hover:text-white'>Show more</Link>

      </div>

    </div>
  );
}

export default RelatedProduct;
