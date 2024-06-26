import React from 'react'

const AchieveCard = ({ image }) => {
    return (
        <div className=' w-[32rem] relative sm:w-[35rem]  lg:w-[40rem]  xl:w-[40rem]  flex flex-col gap-2 h-[18rem] sm:h-[15rem] md:h-[18rem] rounded overflow-hidden border-2 p-3 '>

            <img src={image} alt="" className='object-cover w-full h-full' />

        </div>
    )
}

export default AchieveCard
