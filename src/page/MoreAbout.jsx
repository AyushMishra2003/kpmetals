import React from 'react'
import idea from '../assets/idea.png'
import hand from '../assets/hand.png'
import gallery5 from '../assets/heroo.webp';

const MoreAbout = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center w-full bg-[#FF7000] text-white gap-8 pb-8 mb-8 pt-4 p-4'>
      <div className='flex flex-col gap-8 p-4 md:w-[50%]'>
        <div className='flex flex-col items-start md:items-center md:justify-center gap-4'>
          <h1 className='font-semibold text-2xl md:text-3xl'>Best Help</h1>
          <p className='lg:w-[30rem] font-bold text-xl md:text-2xl md:text-center'>To Exceed Customers Expectations in Quality Delivery & Cost.</p>
          <p className='text-lg md:text-xl font-semibold'>Committed to Value and Promise</p>
        </div>
        <div className='flex flex-col gap-8 sm:flex-row md:items-start md:justify-center'>
          <div className="flex flex-col items-start gap-4">
            <img src={idea} alt="Smart Technology Icon" className="w-12" />
            <h1 className="font-bold text-lg">Smart Technology</h1>
            <p className="max-w-xs font-semibold text-base text-start leading-relaxed">
              KP Metals pioneers modern construction solutions with its state-of-the-art aluminum materials. Engineered with advanced technology, KP Metals aluminum products offer superior insulation, lightweight construction, and versatile applications in contemporary building projects.
            </p>
          </div>
          <div className='flex flex-col items-start gap-4'>
            <img src={hand} alt="Affordability Icon" className='w-12' />
            <h1 className='font-bold text-lg'>Easy to Afford</h1>
            <p className='max-w-xs font-semibold text-base text-start leading-relaxed'>
              KP Metals revolutionizes construction with its cutting-edge aluminum products. Engineered for superior insulation, lightweight build, and versatile application, KP Metals aluminum materials redefine modern building standards.
            </p>
          </div>
        </div>
      </div>
      <div className='p-4'>
        <img src={gallery5} alt="Gallery photo" className='w-full lg:w-[25rem] xl:w-[35rem] rounded' />
      </div>
    </div>
  )
}

export default MoreAbout
