import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

function AdditionalInfo() {
        const {  productdatabyid } = useContext(ProductContext)
    
  return (
    <div className='flex gap-10  '>
        <div>
        <h1 className='font-bold underline'>Dimensions :</h1>
      <p><span>Depth</span>:{productdatabyid?.dimensions?.depth || ""}</p>
      <p><span>Width</span>:{productdatabyid?.dimensions?.width || ""}</p>
      <p><span>Height</span>:{productdatabyid?.dimensions?.height || ""}</p>
      </div>
      <div>
        <div>
       <h1><span className='font-bold underline-offset-2 underline'> weight:</span> <span>{productdatabyid?.weight || ""}</span> </h1> 
       </div>
       <div>
        <h1> <span className='font-bold underline-offset-2 underline'> Wood type:</span> <span>{productdatabyid?.wood_type || ""}</span> </h1>
       </div>
      </div>
    </div>
  )
}

export default AdditionalInfo
