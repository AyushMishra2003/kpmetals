import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';
import HomeDescCard from '../component/HeroCard';
import useHomeData from '../Hook/HeroData';
import Typewriter from '../component/TypeWritter';
import video2 from '../assets/herov.mp4';
import video from '../assets/video.mp4';

const responsive = {
    0: { items: 1 },
};

const items = useHomeData.map((val, ind) => (
    <div key={ind + 1} className=''>
        <HomeDescCard img={val.image} />
    </div>
));

const Hero = () => (
    <div className='relative w-full flex flex-col items-center justify-center p-2'>
        <AliceCarousel
            // mouseTracking
            autoPlayInterval={2200}
            animationDuration={1800}
            infinite
            disableButtonsControls
            disableDotsControls
            items={items}
            responsive={responsive}
            controlsStrategy='alternate'
            autoPlay
        />
        <div className='absolute flex flex-col items-center justify-center text-center top-1/2 transform -translate-y-1/2 text-white w-full px-4'>
            <h2 className='sm:text-4xl text-3xl font-bold lg:text-3xl mb-6 lg:w-3/5'>
                <Typewriter text='Revolutionizing Modern Architecture with Our Range of Aluminum Products' />
            </h2>
            <Link
                to='/product'
                className='p-3 px-8 cursor-pointer rounded bg-orange-500 text-white hover:text-black font-semibold tracking-wide hover:bg-white ease-in duration-300 border border-orange-500'
            >
                See products
            </Link>
        </div>
    </div>
);

export default Hero;
