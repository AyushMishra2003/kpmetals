import React from 'react'
import idea from '../assets/idea.png'
import hand from '../assets/hand.png'
import service from '../assets/video.mp4'
import gallery5 from '../assets/heroo.webp';
const MoreAbout = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center w-full bg-[#FF7000] text-white gap-4 pb-8 mb-8 pt-[1rem] p-2'>
      <div className='flex flex-col gap-8 p-3 pt-8 md:w-[50%]'>
        <div className='flex flex-col gap-4 md:items-center md:justify-center'>
          <h1 className='font-semibold text-[2rem]'>Best Help</h1>
          <p className='lg:w-[30rem] font-bold text-[1.8rem] md:w-[35rem] md:text-center'>To Exceed Customers Expectations in Quality Delivery & Cost.</p>
          <p className='text-[1.4rem] font-semibold'>Committed to Value and Promise</p>
        </div>
        <div className='flex flex-col gap-[2rem] sm:flex-row md:items-start md:justify-center'>
          <div className='flex flex-col items-start gap-4'>
            <img src={idea} alt="" className='w-[3rem]' />
            <h1 className='font-bold text-[1.3rem]'>Smart Technology</h1>
            <p className='w-[15rem] font-semibold text-[1.1rem] text-start'>KP Metals pioneers modern construction solutions with its state-of-the-art aluminum materials. Engineered with advanced technology, KP Metals aluminum products offer superior insulation, lightweight construction, and versatile applications in contemporary building projects.</p>
          </div>
          <div className='flex flex-col items-start gap-5'>
            <img src={hand} alt="" className='w-[3rem]' />
            <h1 className='font-bold text-[1.3rem]'>Easy to Afforable</h1>
            <p className='w-[15rem] font-semibold text-[1.1rem] text-start'>KP Metals revolutionizes construction with its cutting-edge aluminum products. Engineered for superior insulation, lightweight build, and versatile application, KP Metals aluminum materials redefine modern building standards.</p>
          </div>
        </div>
      </div>
      <div className='p-2'>
        {/* <video src={service} alt="Project video" autoPlay muted loop playsInline className='w-[22rem] rounded' ></video> */}
        <img src={gallery5} alt="galleyphoto"  className='lg:w-[25rem] xl:w-[35rem] '/>
      </div>
    </div>
  )
}

export default MoreAbout
