import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import gallery1 from '../assets/galler1.jpg'
import gallery3 from '../assets/galle2.jpg'
import gallery6 from '../assets/galler3.jpg'

import ourService from '../Hook/OurService';
import ServiceCard from './ServiceCard';


const responsive = {
  0: { items: 1 }
};

const images = [
  gallery1,
  // gallery2,
  gallery3,
  // gallery5,
  gallery6,
  // gallery7,
  // gallery8,
  // gallery9,
];

const items = images.map((val, ind) => {

  return (
    <div key={ind + 1} className='flex w-[20rem] gap-4 overflow-hidden '>
      <ServiceCard img={val} />
    </div>
  )
})



const ServiceComp = () => {

  return (
    <div className='flex flex-col gap-4'>
      {/* <h1 className='text-red-500'>Ayush</h1> */}
      <AliceCarousel
        mouseTracking
        autoPlayInterval={2000}
        animationDuration={3000}
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

export default ServiceComp
