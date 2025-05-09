import React, { useContext, useEffect } from 'react'
import Breadcrumb2 from '../components/Breadcrumb2'
import ImageGallery from '../components/ImageGallery'
import { Star } from 'lucide-react'
import Button from '../components/Button'
import { ProductContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'
import { UnderlineTabs } from '../components/UnderlineTabs'
import { useCart } from '../context/CartContext'
import RelatedProduct from '../components/RelatedProduct'

function ProductDetails() {
    const { fetchProductbyid, productdatabyid, updateCategory } = useContext(ProductContext)
    const { id } = useParams()
    const { addToCart } = useCart()

    useEffect(() => {
        fetchProductbyid(id)
    }, [id])

    useEffect(() => {
        if (productdatabyid?.category) {
            const timer = setTimeout(() => {
                updateCategory(productdatabyid.category)
            }, 500)

            return () => clearTimeout(timer)
        }
    }, [productdatabyid?.category])

    return (
        <div className='space-y-4 px-3'>
            <Breadcrumb2 product={productdatabyid?.name || ''} />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <ImageGallery image={productdatabyid?.image_path} />
                <div className='space-y-4'>
                    <h1 className='font-bold text-4xl'>{productdatabyid?.name || ''}</h1>
                    <p>Rs. {productdatabyid?.price || ''}</p>
                    <Star fill='gold' stroke='' />
                    <p>{productdatabyid?.description || ''}</p>

                    <div>
                        <p>Size</p>
                        <div className='flex gap-2'>
                            {['L', 'XL', 'XS'].map(size => (
                                <button key={size} className='px-3 py-1 bg-amber-100 rounded-lg'>
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p>Color</p>
                        <div className='flex gap-2'>
                            {['bg-violet-700', 'bg-black', 'bg-amber-800'].map((color, index) => (
                                <button key={index} className={`${color} p-4 rounded-full`} />
                            ))}
                        </div>
                    </div>

                    <div className='flex gap-4'>
                        <Button onClick={() => addToCart(productdatabyid)} label={'Add to cart'} />
                        <Button label={'+ Compare'} />
                    </div>

                    <hr className='text-gray-200' />
                    <UnderlineTabs />
                </div>
            </div>
           
            <RelatedProduct />
        </div>
    )
}

export default ProductDetails
