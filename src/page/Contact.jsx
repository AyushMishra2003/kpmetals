import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import emailjs from '@emailjs/browser'
import { toast } from "react-toastify";
import AOS from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [loadActive, setLoadActive] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        setLoadActive(true)
        if (!name || !email || !message || !phone) {
            setLoadActive(false)
            return toast.error("Enter all fields")
        }

        const service_id = "service_7k6okbu"
        const template_id = "template_hqvospc"
        const public_key = "LdoZGgzWqPO2iMZXz"

        const templateParams = {
            from_name: name,
            from_email: email,
            from_phone: phone,
            to_name: "KPMetals",
            message: message
        }

        emailjs.send(service_id, template_id, templateParams, public_key)
            .then((response) => {
                toast.success('Email sent successfully')
                setName('')
                setEmail('')
                setPhone('')
                setMessage('')
                setLoadActive(false)
            })
            .catch((e) => {
                alert(e)
            })

    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
        window.scrollTo(0, 0);

    }, []);



    const inputStyle = ' min-w-[18rem] text-black w-[80vw] sm:w-[24rem] rounded-[3px] border h-full border-[#2d3a4b] p-2 focus:border-[#1CB362] focus:bg-[#ffffff] outline-none  text-[0.95rem] tracking-wide resize-none bg-[#ffffff]'

    const labelStyle = "text-[0.85rem] tracking-wide text-[#FF7000]"
    return (
        <div className='flex flex-col  justify-center w-full  p-2 py-10  backdrop-blur-md lg:gap-20 items-center '>

            <div className='min-w-[21rem]  w-[83vw] sm:w-[28rem] md:w-[46rem] lg:w-[50rem] '>


                <div className="flex flex-col-reverse items-center justify-center py-2 bg-white md:flex-row">
                    <div className="bg-[#FF7000] md:h-[34.1rem] lg:min-h-[34.22rem] md:pb-[1.8rem] lg:pb-[2rem] text-white p-4 md:p-3 lg:p-4  sm:p-8 flex flex-col gap-4 items-start  md:justify-between rounded-b-md md:rounded-l-md md:rounded-br-none">
                        <div className="flex flex-col md:gap-2 md:mt-5">
                            <h1 className="text-[1.75rem] font-semibold">Let&apos;s get in touch</h1>
                            <p className=" min-w-[18rem] text-[1.2rem] md:w-[18rem] lg:w-[20rem] w-[80vw] sm:w-[24rem]">Open for any query or just to have a chat</p>
                        </div>

                        <div className="flex flex-col items-start justify-start md:w-[18rem] lg:w-[23rem] gap-2 min-w-[18rem] w-[80vw] sm:w-[24rem]">
                            {/* <div className="flex items-center justify-center border min-w-[3rem] h-[3rem] rounded-full">
                                <FaLocationDot className="text-[1.1rem]" />
                            </div> */}
                            <Link to={'/'} className={`flex items-start justify-start gap-1 `}>
                                <FaLocationDot className='text-[2.6rem]' />
                                <p className=" w-[13rem]"><span className='font-extrabold'>Factory: </span> KP Metelas Pvt Ltd H2, Industrial Estate, Phase 1,  Ramnagar, Chandauli, Uttar Pradesh 221110</p>
                            </Link>
                            <Link to={'/'} className={`flex items-start justify-start gap-1`}>
                                <FaLocationDot className='text-[2.6rem]' />
                                <p className=" w-[14rem]"><span className="font-extrabold ">Office:  </span>K46/161 A, Hartirath, Varanasi, Uttar Pradesh-221001</p>
                            </Link>
                        </div>
                        <div className="flex items-center justify-start md:w-[18rem] gap-2 lg:w-[20rem] min-w-[18rem] w-[80vw] sm:w-[24rem]">
                            <div className="flex items-center justify-center border size-[3rem] rounded-full">
                                <IoIosCall className="text-[1.1rem]" />
                            </div>
                            <p><span className="font-semibold">Phone: </span>+91 89 57 100 508</p>
                        </div>
                        <div className="flex items-center justify-start md:w-[18rem] lg:w-[20rem] gap-2 min-w-[18rem] w-[80vw] sm:w-[24rem]">
                            <div className="flex items-center justify-center border size-[3rem] rounded-full">
                                <MdEmail className="text-[1.1rem]" />
                            </div>
                            <p><span className="font-semibold">Email: </span>kpmetals1101@gmail.com</p>
                        </div>



                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3 shadow-[0px_0px_6px_#FF7000_inset]  p-4 sm:p-8 rounded-t-md md:rounded-r-md md:rounded-tl-none ">
                        <h1 className="mb-1 text-[1.6rem] font-semibold tracking-wide text-[#FF7000] border-b-4 w-[10rem] border-[#FF7000]">Get in touch</h1>
                        <div className="flex flex-col items-start justify-center gap-[0.5px]">
                            <label className={labelStyle} htmlFor="">Full Name</label>
                            <input className={inputStyle} type="text" placeholder="Enter Full name..." value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-[0.5px]">
                            <label className={labelStyle} htmlFor="">Email</label>
                            <input className={inputStyle} type="email" placeholder="Enter email address..." value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-[0.5px]">
                            <label className={labelStyle} htmlFor="">Phone number</label>
                            <input className={inputStyle} type="number" placeholder="Enter phone number..." value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-[0.5px]">
                            <label className={labelStyle} htmlFor="">Message</label>
                            <textarea className={`${inputStyle} min-h-[8rem]`} type="text" placeholder="Enter message..." value={message} onChange={(e) => setMessage(e.target.value)} />
                        </div>

                        <button type="submit" className="w-full flex items-center justify-center gap-5 mt-2 bg-[#FF7000] text-[1.1rem] font-semibold p-2 rounded-md text-white">Submit {loadActive && <div className="size-[1.4rem] border-[0.18rem] rounded-full border-t-transparent animate-spin border-white"></div>} </button>
                    </form>
                </div>
                <h1 className='text-[1.5rem] font-semibold text-white mt-10'>UNDER DEVELOPMENT</h1>
            </div>
        </div>
    )
}

export default Contact