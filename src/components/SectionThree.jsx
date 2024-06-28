import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function SectionThree() {

  useEffect(() => {
    AOS.init();
  })


  return (
    <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="2000">

<div>
    <div className='text-center m-9 lg:py-9'>
        <h1 className='lg:text-4xl font-semibold py-9'>Our top brands</h1>
        <img className='image w-2/3 md:w-2/3 max-w-full-sm mx-auto' src="/Brand.png" alt="frame" />

        <button className="bg-none border border-stone-950 outline-none p-1 text-sm mt-12 mx-auto flex items-center text-black lg:p-4 rounded-full my-5">SEE ALL &rarr;</button>
        <h1 className='lg:text-4xl font-semibold lg:pt-20 pt-8'>Our online shop</h1>
    </div>
    <div className='lg:m-9 px-24 lg:py-3'>
    <p className='lg:text-2xl ml-[-3rem] py-9 font-semibold'>Browse by your categories</p>
    
    <div className='flex justify-between ml-[-3rem] gap-5 overflow-scroll scroll-smooth'>
    <img className='image w-2/4 transition-all duration-300 hover:shadow-lg' src="/PexImg4.PNG" alt="frame" />
    <img className='image w-2/4 shadow-lg' src="/PexImg6.jpeg" alt="frame" />
    <img className='image w-1/4 shadow-lg' src="/Grid3.png" alt="frame" />
    <img className='image w-1/4 shadow-lg' src="/Grid4.png" alt="frame" />
    </div>

    <p className='lg:text-2xl lg:mt-20 ml-[-3rem] py-9 font-semibold'>Product ready for delivery</p>

    <div className='lg:flex justify-between grid grid-cols-2 ml-[-3rem] gap-5'>
        <div>
        <img className='image w-5/5 hover:brightness-105 transition-all duration-300 shadow-lg' src="/pexels1.jpeg" alt="frame" />
        {/* <MdFavoriteBorder className='absolute mt-[-22rem] size-9 mx-5 cursor-pointer text-[#daccb5] font-semibold' /> */}
        <h1 className='uppercase mt-6 font-bold lg:text-xl'>Style Jeans</h1>
        <p>Unisex</p>
        <p className='uppercase'>bitossi home</p>
        <p>£27.89</p>
        </div>

        <div>
        <img className='image w-6/6 hover:brightness-105 transition-all duration-300 shadow-lg' src="/pexels-3333.jpeg" alt="frame" />
        {/* <MdFavoriteBorder className='absolute mt-[-22rem] size-9 mx-5 cursor-pointer text-[#daccb5] font-semibold' /> */}
        {/* <GiShoppingCart className='absolute mt-[-3rem] ml-[19rem] size-7 cursor-pointer'/> */}
        <h1 className='uppercase mt-6 font-bold lg:text-xl'>Cotton</h1>
        <p>Grey lamp</p>
        <p className='uppercase'>muuto</p>
        <p>£27.89</p>
        </div>

        <div>
        <img className='image w-5/5 hover:brightness-105 transition-all duration-300 shadow-lg' src="/Grid1.png" alt="frame" />
        {/* <MdFavoriteBorder className='absolute mt-[-22rem] size-9 mx-5 cursor-pointer text-[#daccb5] font-semibold' /> */}
        <h1 className='uppercase mt-6 font-bold lg:text-xl'>ITALIO</h1>
        <p>Modern</p>
        <p className='uppercase'>Furnitures</p>
        <p>£27.89</p>
        </div>

        <div>
        <img className='image w-5/5 hover:brightness-105 transition-all duration-300 shadow-lg' src="/Grid3.png" alt="frame" />
        {/* <MdFavoriteBorder className='absolute mt-[-22rem] size-9 mx-5 cursor-pointer text-[#daccb5] font-semibold' /> */}
        <h1 className='uppercase mt-6 font-bold lg:text-xl'>SOFA</h1>
        <p>Hangs</p>
        <p className='uppercase'>wood</p>
        <p>£27.89</p>
        </div>

    </div>
    </div>



    </div>
  </div>
  )
}

export default SectionThree