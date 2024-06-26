import React from 'react'

const ServiceCard = ({ img }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 shadow-[0px_0px_5px_#808080]  hover:bg-[#FF7000] cursor-pointer ease-in duration-300'>
      <img src={img} alt="" className='w-[18.8rem] h-full' />
    </div>
  )
}

export default ServiceCard
