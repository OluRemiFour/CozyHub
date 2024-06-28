import { BsPersonFillDash } from "react-icons/bs";
import { MdOutlineChair } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function SectionFour() {

  useEffect(() => {
    AOS.init();
  })


  return (
<div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">


  <div>
    <div className='bg-[#e5e0d8] flex justify-around lg:items-center lg:p-10 p-5 mt-16'>
      <div className="">
        <h1 className='font-semibold lg:text-4xl text-xl py-4'>Ambiances</h1>
        <p className="lg:text-xl">Designing your style is an exciting journey. <br /> Explore our curated environments, crafted by our experts, <br /> offering inspiration to guide you towards your perfect choice.</p>
        <button className="button border border-stone-950 outline-none md:mt-20 mt-10 text-black lg:p-4 p-2 rounded-full my-5 text-sm md:text-lg">EXPLORE INSPIRATION &rarr;</button>
      </div>
        <img src="/Frame14.png" alt="frame" className='w-2/5 image lg:my-10 lg:py-3 ' />
        {/* <img src="/Frame14.png" alt="frame" className='w-2/5 my-10 py-3' /> */}
    </div>

    <div className="flex justify-around lg:my-14 lg:mx-14 lg:p-9 mx-4 items-center">
      <div className="flex flex-col justify-center items-center p-2">
        <BsPersonFillDash className="size-12 my-4" />
        <h1 className="lg:text-right text-center">Customer service</h1>
        <button className='buttonWhite hover:text-black hover:border hover:border-stone-500 uppercase lg:text-sm bg-black outline-none text-white lg:py-4 lg:px-5 py-1 text-[7px] px-2 rounded-full my-4'>CONTACT US &rarr;</button>
      </div>

      <div className="flex flex-col justify-center items-center p-2">
      <MdOutlineChair className="size-12 my-4"/>
        <h1 className="lg:text-right text-center">How to buy</h1>
        <button className='buttonWhite hover:text-black hover:border hover:border-stone-500 uppercase lg:text-sm bg-black outline-none text-white lg:py-4 py-1 text-[7px] px-2 rounded-full my-4'> TO SHOP &rarr;</button>
      </div>
      
      <div className="flex flex-col justify-center items-center p-2">
      <RiSecurePaymentFill className="size-12 my-4" />
        <h1 className="lg:text-right text-center">Payments Inq</h1>
        <button className='buttonWhite hover:text-black bg-black hover:border hover:border-stone-500 uppercase lg:text-sm outline-none text-white lg:py-4 py-1 text-[7px] px-2 rounded-full my-4'>SERVICES &rarr;</button>
      </div>

      <div className="flex flex-col justify-center items-center p-2">
      <RiSecurePaymentFill className="size-12 my-4" />
        <h1 className="lg:text-right text-center">Shipping and Returns</h1>
        <button className='buttonWhite hover:text-black hover:border hover:border-stone-500 uppercase lg:text-sm bg-black outline-none text-white lg:py-4 py-1 text-[7px] px-2 rounded-full my-4'>CUSTOMER SERVICES &rarr;</button>
      </div>

    </div>
  </div>
</div>
  )
}

export default SectionFour