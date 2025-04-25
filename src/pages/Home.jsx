import React from 'react'
import Features from '../components/Features'
import OurProducts from '../components/OurProducts'
import ImageGallery from '../components/ImageGallery'
import HomeCarousel2 from '../components/HomeCarousel2'
import ImageCollection from '../components/ImageCollection'
import Hero from '../components/Hero'



function Home() {
  return (
    <div>
      <div className='space-y-20'>
     <Hero />
     <Features/>
     <OurProducts/>
      <HomeCarousel2/>
      <ImageCollection/>
      
      </div>
    </div>
  )
}

export default Home
