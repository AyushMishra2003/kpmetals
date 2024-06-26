import React, { useEffect, useState } from 'react'
import img from '../assets/aboutkp.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";

// import companyName from '../assets/Img/company_name.png'
import { Link } from 'react-router-dom';
import AboutCard from './AboutPage/AboutCard';
import WhyWeCard from './AboutPage/WhyWeCard';
import ApproachCard from './AboutPage/ApproachCard';
import MissionCard from './AboutPage/MissionCard';
import Client from './Client';
const AboutUs = () => {
    const [active, setAcitve] = useState("About")

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='flex flex-col justify-center items-center bg-[#ffffff] sm:p-[1.5rem] p-2 gap-[2.5rem] '>
            <div className='flex flex-col items-center text-black lg:flex-row p-[1rem] gap-[2.5rem]'>
                <div>
                    <img src={img} alt="AboutUsimge" className='xl:w-[30rem] lg:w-[30rem] w-[22rem] sm:w-[25rem]' />
                </div>
                <div className='xl:w-[30rem] lg:w-[28rem] flex flex-col items-start gap-[1.3rem] '>
                    <button className='p-[0rem] text-[1.1rem] rounded-full border-none text-blue font-semibold tracking-[0.3px] bg-light'>About Us</button>
                    <p className='text-[2.2rem] tracking-[0.3px] font-bold'>
                    Leading Aluminum Manufacturer Providing Innovative Solutions</p>
                    <p className='tracking-[0.3px]'>Welcome to KP Metals, where innovation meets excellence in aluminum manufacturing. We are dedicated to producing high-quality aluminum products tailored to meet the demands of modern construction and industry needs.

At KP Metals, we specialize in utilizing cutting-edge technology to manufacture premium-grade aluminum solutions. Our commitment to innovation ensures that our products offer unmatched durability, cost-effectiveness, and versatility.

.</p>

                </div>
            </div>
            <div className='flex flex-wrap xl:gap-[5rem] gap-[0.5rem] pl-[0.5rem]'>
                <button onClick={() => setAcitve("About")} className={`rounded p-[0.8rem] px-[3rem] font-semibold  ${active === "About" ? "bg-[#FF7000] text-white" : "bg-[#fac0943d] text-black"}`}>ABOUT</button>
                <button onClick={() => setAcitve("WhyWe")} className={`rounded p-[0.8rem] px-[3rem] font-semibold  ease-in duration-100 ${active === "WhyWe" ? "bg-[#FF7000] text-white" : "bg-[#fac0943d] text-black"}`}>VISION </button>
                <button onClick={() => setAcitve("Mission")} className={`rounded p-[0.8rem] px-[2rem] font-semibold  ease-in duration-200 ${active === "Mission" ? "bg-[#FF7000] text-white" : "bg-[#fac0943d] text-black"}`}>MISSION</button>
                <button onClick={() => setAcitve("Approach")} className={`rounded p-[0.8rem] px-[2rem] font-semibold  duration-200 ${active === "Approach" ? "bg-[#FF7000] text-white" : "bg-[#fac0943d] text-black"}`}>WHAT WE DO</button>
            </div>
            <div>
                {active === "About" && <AboutCard />}
                {active === "WhyWe" && <WhyWeCard />}
                {active === "Mission" && <MissionCard />}
                {active == "Approach" && <ApproachCard />}
            </div>

            {/* <div className='lg:p-[2rem] items-center justify-center flex flex-col gap-[2rem] mt-14 mb-10'>
                    <div className=''>
                        <p className='text-[2rem] text-black font-bold text-center max-w-[35rem] '>Relied on marketers trusted by engineers and Beloved by Executives</p>
                    </div>
                    <div className='flex flex-wrap gap-[2rem]  items-center justify-center max-w-[50rem]'>

                        <img src={companyName} alt="image" className='w-[5rem] sm:w-[10rem] lg:w-[8rem]' />
                        <img src={companyName} alt="image" className='w-[5rem] sm:w-[10rem] lg:w-[8rem]' />
                        <img src={companyName} alt="image" className='w-[5rem] sm:w-[10rem] lg:w-[8rem]' />
                        <img src={companyName} alt="image" className='w-[5rem] sm:w-[10rem] lg:w-[8rem]' />
                        <img src={companyName} alt="image" className='w-[5rem] sm:w-[10rem] lg:w-[8rem]' />

                        <img src={companyName} alt="image" className='w-[5rem] sm:w-[10rem] lg:w-[8rem]' />
                        <img src={companyName} alt="image" className='w-[5rem] sm:w-[10rem] lg:w-[8rem]' />
                        <img src={companyName} alt="image" className='w-[5rem] sm:w-[10rem] lg:w-[8rem]' />
                        <img src={companyName} alt="image" className='w-[5rem] sm:w-[10rem] lg:w-[8rem]' />
                    </div>
                </div> */}
            <div className='w-full'>
                <Client />
            </div>
        </div>
    )
}

export default AboutUs
