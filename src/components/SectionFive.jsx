import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function SectionFive() {

  useEffect(() => {
    AOS.init();
  })


  return (
    <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">


    <div className='lg:flex items-center lg:justify-between gap-4 mt-9 pt-9'>
        <img src="/Frame16.png" alt="frame" className='lg:w-2/5 w-2/3 mx-auto' />
        <div className='lg:px-44 mx-16 md:mx-[10rem] lg:mx-0 lg:my-0 my-5'> 
            <h1 className='font-bold text-lg lg:text-4xl pb-5'>Fill your home with style!!</h1>
            <p className='lg:text-xl text-lg py-5'>Subscribe to the HomeTanniq newsletter and get a 10%<br /> discount on your next purchases.</p>

            <input type="text" name='' placeholder='Email Address' required className='border border-stone-800 w-[100%] p-4 rounded-md'/>
            <div className='flex items-center justify-between py-4 space-x-6'>
                <input type="checkbox" name="" id="" className='size-5' />
                <p className='lg:text-xl text-lg py-5'>Having reviewed the Privacy Policy in line with Legislative <br />Decree 196/2003 and European Regulation 679/2016, I grant <br /> consent for the processing of my personal data.</p>
            </div>

            <button className='buttonWhite uppercase hover:text-black bg-black hover:border hover:border-stone-500 outline-none flex text-white lg:py-4 lg:px-5 py-2 px-2 rounded-full lg:my-9'>SUBSCRIBE NOW</button>
        </div>
    </div>
  </div>
  )
}

export default SectionFive