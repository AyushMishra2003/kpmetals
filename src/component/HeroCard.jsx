import React from 'react'

const HomeDescCard = ({ img }) => {

    return (
        <div className=''>
            <div className='relative fill-black'>
                <img src={img} alt="" className='w-[100%] h-[24rem] sm:h-[27rem] object-cover' />
                <div className='w-[100%] bg-[#000000a1] h-[24rem] sm:h-[27rem] absolute z-[10] top-0 left-0'></div>
            </div>
        </div>
    )
}

export default HomeDescCard