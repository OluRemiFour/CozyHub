import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function SectionTwo() {

  useEffect(() => {
    AOS.init();
  })


  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    data-aos-duration="2000">
    
    <div className='bg-[#e5e0d8] lg:p-32 p-16 my-7'>
        <h1 className='text-center font-semibold lg:text-4xl lg:py-5 py-3 my-3 lg:my-7 text-xl'>Metropolis Tokyo</h1>
       
    <div className='lg:flex-row flex flex-col text-sm justify-center items-center mx-10 '>
        
        <div className='lg:mx-8 uppercase lg:mb-0 mb-10 lg:inline-block flex justify-center items-center flex-col'>
        <img className='lg:w-[90%] w-[70%] shadow-lg image lg:mx-0' src="/Frame17.png" alt="frame" />
            <div className='bg-white text-center md:mx-24 lg:mx-8 p-6 lg:mt-[-8rem] mt-5 lg:inline-flex lg:flex-col'>
            <h1>modern styles in Tokyo</h1>
            <p className='font-semibold'>GO TO ARTICLE &rarr;</p>
            </div>
        </div>

        <div className="lg:inline-block flex justify-center items-center flex-col">
        <img className='lg:w-[90%] w-[70%] shadow-lg image mx-24 lg:mx-0 mb-20 lg:mb-0' src="/Frame4.png" alt="frame" />
            <div className='bg-white text-center lg:mx-4 md:mx-24 p-4 mt-[-4rem] lg:inline-flex lg:flex-col' >
            <h1 className='uppercase'> Enjoy the exclusive epitomizes indoor </h1>
            <p className='font-semibold'>DISCOVER THE SHOWROOM &rarr;</p>
            </div>
        </div>
        </div>
        <button className="button border border-stone-950 outline-none lg:mt-24 mt-14 mx-auto flex items-center text-black lg:p-4 p-2 rounded-full my-5">READ ALL ARTICLES &rarr;</button>
    </div>

    </div>
  )
}

export default SectionTwo