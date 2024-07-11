import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import ServiceComp from '../component/ServiceComp';
import advImg from '../assets/product.jpg';
import step1 from '../assets/Brow1.jpeg';
import step2 from '../assets/Brow2.jpeg';
import step3 from '../assets/Brow3.jpeg';
import step4 from '../assets/Brow4.jpeg';
import step5 from '../assets/Brow5.jpeg';
import step6 from '../assets/Brow6.jpeg';
import step7 from '../assets/Brow7.jpeg';
import step8 from '../assets/Brow8.jpeg';
import step9 from '../assets/Brow9.jpeg';
import step10 from '../assets/Brow10.jpeg';
import step11 from '../assets/Brow11.jpeg';
import step12 from '../assets/Brow12.jpeg';
import finalStep from '../assets/finalStep.png';
import DownloadPdf from '../component/DownloadPdf';

const Product = () => {
    const h2Style = "font-bold text-[1.5rem] text-[#FF7000]";
    const stepStyle = "shadow-[0px_0px_5px_#808080] rounded-xl p-1 m-3 w-[95%] ";

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: true, // Whether animation should happen only once - while scrolling down
        });
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='flex items-center justify-center p-4'>
            <div className='flex flex-col items-center justify-center w-full gap-4 lg:pt-10 lg:pb-10'>
                <div className='flex flex-col items-center justify-center p-2'>
                    <h1 className='font-[#C81533] text-[2rem] lg:text-center text-[#FF7000] font-bold lg:text-[2.3rem] text-center'>Our Product</h1>
                </div>
                <div className='flex flex-col items-start justify-center w-full gap-4 md:gap-6 lg:gap-10 sm:flex-row'>
                    <div className='w-[21.5rem] rounded-md p-5 overflow-hidden border bg-[#FF7000]'>
                        <ServiceComp />
                    </div>
                    <div className='sm:w-[60%] w-full'>
                        <h6 className='font-semibold text-[1.1rem]'>Introducing KP Metals: </h6>
                        <h2 className='font-bold text-[1.5rem] text-[#FF7000]'>Innovators in Aluminum Manufacturing</h2>
                        <p>At KP Metals, we lead the industry in aluminum manufacturing, delivering top-quality materials for diverse applications. Our expertise lies in crafting high-grade aluminum products tailored to meet your specifications.</p>
                        <div className="w-full my-2 rounded-none join join-vertical">
                            <div className="border-b collapse collapse-arrow join-item border-[#80808073]">
                                <input type="checkbox" name="my-accordion-4" />
                                <div className="text-[1.05rem] font-medium collapse-title">
                                    Maximize Usable Space with KP Metals Innovative Aluminum Panels
                                </div>
                                <div className="collapse-content">
                                    <p>KP Metals introduces Smart Aluminum Panels designed to optimize usable area in buildings. Thinner and more efficient than standard block walls, our smart panels offer a remarkable increase in space utilization.</p>
                                </div>
                            </div>
                            <div className="border-b collapse collapse-arrow join-item border-[#80808073]">
                                <input type="checkbox" name="my-accordion-4" />
                                <div className="text-[1.05rem] font-medium collapse-title">
                                    Advanced Aluminum Solutions
                                </div>
                                <div className="collapse-content">
                                    <p>Experience unparalleled construction speed with KP Metals' innovative aluminum products. Our aluminum solutions offer a construction pace that's 10 times faster than traditional block walls, ensuring rapid project completion without compromising quality.</p>
                                </div>
                            </div>
                            <div className="border-b border-[#80808073] collapse collapse-arrow join-item">
                                <input type="checkbox" name="my-accordion-4" />
                                <div className="text-[1.05rem] font-medium collapse-title">
                                    Seismic Resistance
                                </div>
                                <div className="collapse-content">
                                    <p>Experience unparalleled stability with KP Metals' advanced aluminum panels. Our panels feature a tongue and groove design that ensures tight and secure assembly, enhancing overall stability. The precast assembly of KP Metals' panels involves the fixation of panels using channels, steel clips, and reinforced steel bars, resulting in impact resistance that is 1.5 times better than traditional block walls. This robust construction creates an earthquake-proof performance, capable of withstanding seismic impacts of up to 8 on the Richter scale.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[83vw]'>
                    <p>
                        At KP Metals, we lead the charge in technological advancements, consistently delivering products that redefine the construction landscape. Our aluminum panels offer real-time solutions to the evolving challenges faced by the industry, reflecting our commitment to innovation and excellence.
                        <div className='h-3'></div>
                        KP Metals is proud to pioneer the concept of Dry Aluminum Walls, revolutionizing construction practices with faster, more economical, and eco-friendly methods. This dry construction approach eliminates the necessity for plastering or curing, resulting in substantial savings in resources like sand and water. We firmly believe that profitability should align with social and environmental responsibility, and as a technology-driven firm, we are committed to addressing emerging challenges in the construction sector through relentless innovation.
                    </p>
                    <div>
                        <h2 className={h2Style}>Expertise</h2>
                        <p>Backed by years of experience and expertise, we utilize the latest technology to engineer aluminum products that are not only reliable but also environmentally sustainable. Our continuous research and development efforts ensure that we stay ahead of the curve, offering innovative solutions to the ever-changing demands of the market.</p>
                    </div>
                    <div>
                        <h2 className={h2Style}>High Quality</h2>
                        <p>Backed by years of experience and expertise, we utilize the latest technology to engineer aluminum products that are not only reliable but also environmentally sustainable. Our continuous research and development efforts ensure that we stay ahead of the curve, offering innovative solutions to the ever-changing demands of the market.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div>
                            <h2 className={h2Style}>Introducing KP Metals' Impressive Aluminum Products Brochure List</h2>
                            <p>Our aluminum products are engineered for easy installation, making them suitable for a variety of applications. With affordability and quality in mind, KP Metals ensures that our aluminum panels are designed to meet your needs without compromising on performance. For detailed installation instructions and specifications, please refer to the provided product brochures. If you have any questions or require further assistance, our team is available to support you throughout the installation process.</p>
                        </div>
                        <DownloadPdf />
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
                            <img data-aos="fade-up" className={stepStyle} src={step1} alt="Step 1" />
                            <img data-aos="fade-up" className={stepStyle} src={step2} alt="Step 2" />
                            <img data-aos="fade-up" className={stepStyle} src={step3} alt="Step 3" />
                            <img data-aos="fade-up" className={stepStyle} src={step4} alt="Step 4" />
                            <img data-aos="fade-up" className={stepStyle} src={step5} alt="Step 5" />
                            <img data-aos="fade-up" className={stepStyle} src={step6} alt="Step 6" />
                            <img data-aos="fade-up" className={stepStyle} src={step7} alt="Step 7" />
                            <img data-aos="fade-up" className={stepStyle} src={step8} alt="Step 8" />
                            <img data-aos="fade-up" className={stepStyle} src={step9} alt="Step 9" />
                            <img data-aos="fade-up" className={stepStyle} src={step10} alt="Step 10" />
                            <img data-aos="fade-up" className={stepStyle} src={step11} alt="Step 11" />
                            <img data-aos="fade-up" className={stepStyle} src={step12} alt="Step 12" />
                        </div>
                        {/* <div className='flex flex-col items-center justify-center mt-4'>
                            <h2 className={h2Style}>Aluminum Product Range</h2>
                            <img data-aos="fade-up" src={finalStep} alt="product range" className='w-[98%]' />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
