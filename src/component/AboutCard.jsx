import React from 'react'
import img from '../assets/aboutkp.jpg'
import { Link } from 'react-router-dom'
import AOS from 'aos'
const AboutCard = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-8 pb-2  lg:pb-5 lg:flex-row lg:gap-[5rem]'>
      <img src={img} alt="about_image" className='lg:w-[30rem] lg:h-[30rem] object-cover p-3 w-full rounded-md' />
      <div className='flex flex-col items-start gap-3 p-3 '>
        <p className='text-[#FF7000] font-semibold text-[1.5rem]'>About KP Metals</p>
        <p className='text-[#161616] text-[2rem] font-bold lg:w-[30rem]'> Revolutionizing Modern Architecture with Our Range of Aluminum Products</p>
        <div className='flex flex-col gap-2 lg:w-[40rem]'>
          <p className='tracking-[0.3px]'>At KP Metals, we are committed to leading the aluminum manufacturing industry by embracing the forefront of technological advancements. Our dedication to innovation ensures that our products consistently embody cutting-edge solutions, setting new standards in the aluminum sector.</p>

        </div>
        <div className='my-6 ml-2 '>
            <Link to="/about" className='p-[0.75rem] px-[2.2rem] cursor-pointer rounded bg-[#161616] text-white  font-bold hover:bg-[#FF7000] ease-in duration-300'>Read More</Link>

          </div>

      </div>
    </div>
  )
}

export default AboutCard
