import React from 'react'
import { Link } from 'react-router-dom'
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
const CustomerCard = ({ image, name, profession, rev }) => {
  return (
    <div className=' w-[32rem] relative sm:w-[35rem]  lg:w-[40rem]  xl:w-[40rem]  flex flex-col gap-2 h-fit rounded overflow-hidden border-2 p-3 py-3 '>
      <div className='flex items-start justify-between'>
        <div>
          <p className='text-red-500'>{name}</p>
          <p className='w-[10rem]'>{profession}</p>
        </div>
        {/* <img src={image} alt="" className='object-cover w-[6rem] h-[6rem] p-2 rounded-full' /> */}
      </div>
      <p>{rev}</p>
    </div>
  )
}

export default CustomerCard
