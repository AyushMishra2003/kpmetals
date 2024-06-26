import React from 'react'
import ServiceComp from '../component/ServiceComp'
import { Link } from 'react-router-dom'

const OurSevice = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full gap-4 p-2 lg:pt-10 lg:pb-10'>
      <div className='flex flex-col items-center justify-center p-2'>
        <h1 className='font-[#C81533] text-[2rem] lg:text-center text-[#FF7000] font-bold lg:text-[2.3rem] text-center'>Our Product</h1>
      </div>
      <div className='flex flex-col items-start justify-center w-full gap-4 md:gap-6 lg:gap-10 sm:flex-row' >
        <div className='w-[21.5rem] rounded-md p-5 overflow-hidden border bg-[#FF7000]'>
          <ServiceComp />
        </div>
        <div className='sm:w-[60%] w-full '>
          <h6 className='font-semibold text-[1.1rem]'>Introducing KP Metals: </h6>
          <h2 className='font-bold text-[1.5rem] text-[#FF7000]'>Innovators in Aluminum Manufacturing</h2>
          <p>At KP Metals, we lead the industry in aluminum manufacturing, delivering top-quality materials for diverse applications. Our expertise lies in crafting high-grade aluminum products tailored to meet your specifications..</p>
          <div className="w-full my-2 rounded-none join join-vertical">
            <div className="border-b collapse collapse-arrow join-item border-[#80808073]">
              <input type="checkbox" name="my-accordion-4" />
              <div className="text-[1.05rem] font-medium collapse-title">
              Maximize Usable Space with KP Metals&apos;Innovative Aluminum Panels
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
                <p>Experience unparalleled construction speed with KP Metals' innovative aluminum products. Our aluminum solutions offer a construction pace that's 10 times faster than traditional block walls, ensuring rapid project completion without compromising quality..</p>
              </div>
            </div>
            <div className="border-b border-[#80808073] collapse collapse-arrow join-item ">
              <input type="checkbox" name="my-accordion-4" />
              <div className="text-[1.05rem] font-medium collapse-title">
                Seismic Resistance
              </div>
              <div className="collapse-content">
                <p>Experience unparalleled stability with KP Metals' advanced aluminum panels. Our panels feature a tongue and groove design that ensures tight and secure assembly, enhancing overall stability.The precast assembly of KP Metals' panels involves the fixation of panels using channels, steel clips, and reinforced steel bars, resulting in impact resistance that is 1.5 times better than traditional block walls. This robust construction creates an earthquake-proof performance, capable of withstanding seismic impacts of up to 8 on the Richter scale.</p>
              </div>
            </div>
          </div>
          <div className='my-6 ml-2 '>
            <Link to="/product" className='p-[0.75rem] px-[2.2rem] cursor-pointer rounded bg-[#161616] text-white  font-bold hover:bg-[#FF7000] ease-in duration-300'>Read More</Link>

          </div>
        </div>


      </div>
    </div>
  )
}

export default OurSevice
