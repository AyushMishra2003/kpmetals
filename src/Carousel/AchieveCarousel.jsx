import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import useCustomer from '../Hook/Customer';
import CustomerCard from '../component/CustomerCard';
import ach1 from '../assets/ach1.jpg'
import ach2 from '../assets/ach2.jpg'
import ach3 from '../assets/ach3.jpg'
import ach4 from '../assets/ach4.jpg'
import ach5 from '../assets/ach5.jpg'
import ach6 from '../assets/ach6.jpg'
import ach7 from '../assets/ach7.jpg'
import ach8 from '../assets/ach8.jpg'
import ach9 from '../assets/ach9.jpg'
import ach10 from '../assets/ach10.jpg'
import AchieveCard from '../component/AchieveCard';


const responsive = {
    0: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
};

const images = [
    ach1,
    ach2,
    ach3,
    ach4,
    ach5,
    ach6,
    ach7,
    ach8,
    ach9,
    ach10,
]

const items = images.map((val, ind) => {
    return (
        <div key={ind + 1} className='flex gap-3 '>
            <AchieveCard image={val} />
        </div>
    )
})



const AchieveCarousel = () => {

    return (
        <div className='w-[18rem]  sm:w-[32rem] md:w-[46rem] lg:w-[63rem] flex gap-1 '>
            <AliceCarousel
                mouseTracking
                autoPlayInterval={1200}
                animationDuration={1200}
                infinite
                disableButtonsControls
                disableDotsControls
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                autoPlay
            />
        </div>
    )
}

export default AchieveCarousel
