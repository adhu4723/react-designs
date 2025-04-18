import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageGallery from './components/ImageGallery'
import ProductCard from './components/ProductCard'
import HomeCarousel from './components/HomeCarousel'
import HomeCarousel2 from './components/HomeCarousel2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImageGallery />
      <ProductCard/>
      {/* <HomeCarousel/> */}
      <HomeCarousel2/>
    </>
  )
}

export default App
