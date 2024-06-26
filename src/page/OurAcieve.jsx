import React from 'react'
import CustomerCarousel from '../Carousel/CustomerCarousel'
import AchieveCarousel from '../Carousel/AchieveCarousel'

const OurAchieve = () => {
    return (
        <div className='flex flex-col items-center justify-center my-10 bg-[#F1F8FA] pt-5 pb-14 gap-5'>

            <div className='flex flex-col items-center gap-2 p-3 lg:p-0 '>
                <h1 className='text-[#FF7000] font-bold text-[1.85rem]'>Our Achievements</h1>
                <p className='lg:text-[2.2rem] text-[1.5rem] font-bold text-center'>Our projects and achievements</p>
            </div>
            <AchieveCarousel />
        </div>
    )
}

export default OurAchieve
