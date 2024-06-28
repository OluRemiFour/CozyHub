import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Sections() {

  useEffect(() => {
    AOS.init();
  })
  return (
   
    <div>
      <div  data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">

      <div className='lg:text-center lg:px-28 lg:mx-24 p-10 text-start'>
      <img src="/Brand1.png" alt="" className='max-w-full' />
      </div>
        <div className='flex items-center lg:justify-between lg:pt-10 md:text-2xl mx-1'>
        <span className='lg:px-32 px-8 lg:my-16'>
        <h1 className='my-9 font-bold'>At HOMETANIQ, Every Moment Matters!</h1>
        <h1>Since 1945, we have been your partner in shaping homes. Thank you for entrusting us with your vision. </h1>
        </span>
        
        <img src="/Frame.png" alt="frame" className='image w-2/6' />
        </div>
    </div>
    </div>
  )
}

export default Sections