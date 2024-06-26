import React, { useEffect } from 'react'
import Header from './component/Header'
import { ReactDOM } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './component/Footer'
import Home from './page/Home'
import Contact from './page/Contact'
import AboutUs from './page/AboutUs'
import Gallery from './page/Gallery'
import Product from './page/Product'
import { MdKeyboardArrowUp, MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from 'react-icons/md'
import { FaWhatsapp } from "react-icons/fa";

const App = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className=''>
      <div className='flex flex-col justify-between w-full overflow-x-hidden'>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/product' element={<Product />} />

      </Routes>
      <Footer />
      </div>
      <MdKeyboardDoubleArrowUp onClick={handleScrollToTop} className=' text-white bg-[#FF7000] flex items-center justify-center rounded-full p-[0.6rem]  fixed right-4 z-[1000000000] text-[2.7rem] bottom-2 shadow-sm shadow-red cursor-pointer ' />
 
      <a target={`_blank`} href="https://wa.me/8957100508" className='w-[16rem] cursor-pointer rounded-md p-3 flex items-center justify-center font-semibold gap-2 bg-white '>
      <FaWhatsapp onClick={handleScrollToTop} className=' text-white bg-[#075e54] flex items-center justify-center rounded-full p-[0.6rem]  fixed right-4 z-[1000000000] text-[2.7rem] bottom-14 shadow-sm shadow-red cursor-pointer' /> </a>
    </div>
  )
}

export default App
