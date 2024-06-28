import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { MdOutlineNavigateNext } from "react-icons/md";

function SectionOne() {

  useEffect(() => {
    AOS.init();
  })

  return (
    <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     data-aos-duration="2000">


    <div className='bg-[#f6f6f0] py-9'>
        <h1 className='lg:py-9 my-9 text-center lg:text-3xl'>Unifying physicality, digital space for ideal synergy.</h1>

        <div className='image lg:flex md:flex justify-around mx-32'>
        <img className='lg:w-2/5 md:w-2/5 max-w-full shadow-lg lg:mb-0 md:mb-0 mb-10' src="/frame2.png" alt="frame" />
        <img className='lg:w-2/5 md:w-2/5 max-w-full shadow-lg' src="/frame1.png" alt="frame" />

        </div>
        {/* <div className='inline-flex justify-center items-center shadow-md absolute mt-[-4rem] mx-56 p-6 flex-col bg-white '> */}
        <div className='lg:flex justify-between items-center text-center lg:mt-[-3rem] lg:mx-52 mx-20'>
            <div className='bg-white mx-8 p-5 lg:text-lg md:text-lg text-sm'>
            <h1 className='py-1'>In Tokyo: 456 Shibuya Street, Minato City, Tokyo</h1>
            <p className='font-semibold lg:text-lg md:text-lg text-sm'>DISCOVER THE SHOWROOM &rarr;</p>
            </div>

            <div className='bg-white mx-8 p-5 hidden lg:visible md:visible'>
            <h1 className='py-1'>In Tokyo: 456 Shibuya Street, Minato City, Tokyo</h1>
            <p className='font-semibold'>DISCOVER THE SHOWROOM &rarr;</p>
            </div>
        </div>

        <div className='lg:flex md:py-20 py-7 text-[14px] px-3 lg:px-32 md:px-6 justify-around items-center text-center md:text-xl lg:text-xl gap-3 lg:gap-16'>
            <div className="py-5 md:py-0">
            <h1>We cater to every need, with complete outfit</h1>
            <button className='uppercase buttonBlack hover:text-white lg:text-sm bg-white outline-none text-black md:py-4 px-5 rounded-full my-4'>Design Expertise &rarr;</button>
            </div>

            <div className="py-5 md:py-0">
            <h1>Modern styles, canvs, and commercial dress with support</h1>
            <button className='buttonBlack hover:text-white uppercase lg:text-sm bg-white outline-none text-black md:py-4 px-5 rounded-full my-4'>Professional Solutions &rarr;</button>
            </div>
         
            <div className="py-5 md:py-0">
            <h1>Get personalized assistance, now on WhatsApp too!</h1>
            <button className='uppercase lg:text-sm hover:text-white bg-white outline-none buttonBlack md:py-4  px-5 rounded-full my-4'>CONNECT NOW &rarr;</button>
            </div>            
        </div>
    </div>
    </div>
  )
}

export default SectionOne