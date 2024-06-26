import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import useCustomer from '../Hook/Customer';
import CustomerCard from '../component/CustomerCard';


const responsive = {
  0: { items: 1 },
  768: { items: 2 },
  1024: { items: 3 },
};



const items = useCustomer.map((val, ind) => {
  return (
    <div key={ind + 1} className='flex gap-3 '>
      <CustomerCard image={val.image} name={val.name} profession={val.profession} rev={val.rev} />
    </div>
  )
})



const CustomerCarousel = () => {

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

export default CustomerCarousel
