import React from 'react';
import {
    BsFacebook,
    BsInstagram,
    BsLinkedin,
    BsTwitter,
    BsWhatsapp
} from 'react-icons/bs';

import { MdKeyboardDoubleArrowRight, MdOutlineSmartphone } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";

import { Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import logo from '../assets/kplogos.png';

const Footer = () => {
    const listStyle = "text-[0.95rem] hover:pl-2 flex items-center gap-1 font-semibold text-[#ffffff] transition-all duration-300 ease-in-out";
    const contactStyle = "text-[0.95rem] flex items-start sm:items-center lg:items-start gap-1 font-semibold text-white";
    const year = new Date().getFullYear();

    return (
        <footer className='text-white bg-[#FF7000] p-6 lg:p-0 flex flex-col gap-4 lg:gap-0'>
            <div className='flex flex-col lg:flex-row gap-8 justify-center items-center'>
                <div className='flex flex-col '>
                    <Link to={"/"} className='flex items-end  text-[1.2rem]'>
                        <img src={logo} className='w-[10rem]' alt="logo" style={{ filter: 'brightness(0) invert(1)' }} />
                    </Link>
                    <p className='xl:w-[25rem] w-full text-start pb-10'>KP Metals Pvt Ltd is a renowned manufacturer and seller of aluminum products. With a strong commitment to quality and innovation, we strive to deliver top-notch aluminum solutions to meet the diverse needs of our customers. From extrusions to sheets, our products are trusted for their durability and reliability in various industries. Choose KP Metals Pvt Ltd for premium aluminum solutions that exceed expectations.</p>
                </div>
                <div className='flex flex-col w-full lg:w-[60%] gap-8 sm:flex-row sm:justify-between lg:justify-around md:gap-6 lg:gap-10'>
                    <div className='w-full sm:w-[50%] lg:w-[14rem]'>
                        <div>
                            <p className='text-[1.09rem] font-[600]'>USEFUL LINKS</p>
                            {/* <div className='w-[12rem] h-[3.4px] bg-black rounded-md'></div> */}
                        </div>
                        <div className='flex flex-col gap-4 mt-6'>
                            <Link to="/product" className={listStyle}><MdKeyboardDoubleArrowRight />Product</Link>
                            <Link to="/gallery" className={listStyle}><MdKeyboardDoubleArrowRight />Gallery</Link>
                            <Link to="/about" className={listStyle}><MdKeyboardDoubleArrowRight />About us</Link>
                            <Link to="/contact" className={listStyle}><MdKeyboardDoubleArrowRight />Contact us</Link>
                        </div>
                    </div>
                    <div className='w-full sm:w-[50%] lg:w-[24rem] flex flex-col gap-4 '>
                        <div>
                            <p className='text-[1.09rem] font-[600]'>CONTACT US</p>
                            {/* <div className='w-[14rem] h-[3.4px] bg-white rounded-md'></div> */}
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='flex items-start gap-4'>
                                 <MdOutlineSmartphone className='text-[1.6rem]' />
                                <p>+91 8957100508</p>
                            </div>
                            <div className='flex items-start gap-4'>
                                   <IoMdMail className='text-[1.6rem]' />
                                   <p>kpmetals1101@gmail.com</p>
                            </div>
                            <div className='flex items-start  gap-[1rem] justify-center'>
                                <FaLocationDot className='text-[2.7rem]' />
                                <p className=' lg:w-[35rem]'><span className='font-semibold'>Factory: </span> KP Metelas Pvt Ltd H2, Industrial Estate, Phase 1,Ramnagar,Chandauli,Uttar Pradesh 221110</p>
                            </div>
                            <div className='flex items-start gap-[1rem] justify-center'>
                                   <FaLocationDot className='text-[2.2rem]' />
                                   <p><span className="font-semibold">Office:  </span>K46/161 A, Hartirath,Varanasi,Uttar Pradesh-221001</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center text-[1.05rem] w-full font-[600] py-3 bg-gradient-to-r from-[#0C1015] via-[#0f2516] to-[#0C1015]'>
                <span>&#169;</span> {year} | Copyright <span className='bg-clip-text text-transparent font-bold bg-[#FF7000]'>KP Metals</span>
            </div>
        </footer>
    );
}

export default Footer;
