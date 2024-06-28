function Footer() {
  return (
<div className="">
    <div className='border border-stone-400 p-7 lg:p-20 border-l-0 border-r-0 lg:flex lg:justify-around grid grid-cols-3 lg:gap-3 gap-5'>
        <div>
            <h1 className='font-bold md:text-lg lg:py-3'>SHOWROOM</h1>
            <p>2 Chome-3-4 Shibuya, Shibuya City, <br />Tokyo 150-0002, Japan.</p>
            <p>+00 000 9900</p>
            <img src="/icon4.png" alt="icon" className='lg:w-2/5 pt-5' />
        </div>

        <div className='list-none space-y-1'>
            <h1 className='font-bold md:text-lg'>PRODUCTS</h1>
            <li>Furniture</li>
            <li>Bath</li>
            <li>Accessories</li>
            <li>Lighting</li>
            <li>Outdoors</li>
            <li>Surfaces</li>
            <li>Prompt delivery</li>
        </div>

        <div className='space-y-1'>
            <h1 className='font-bold md:text-lg'>INSPIRATIONS</h1>
            <p>Metropolis Tokyo</p>
        </div>

        <div className='list-none space-y-1'>
            <h1 className='font-bold md:text-lg'>CUSTOMER SERVICE</h1>
            <li>How to buy</li>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Billing</li>
            <li>FAQs</li>
            <li>Reduced VAT</li>
            <li>Return and Withdrawals</li>
        </div>

        <div className='list-none space-y-1'>
            <h1 className='font-bold md:text-lg'>ABOUT US</h1>
            <li>How to buy</li>
            <li>Payments</li>
            <li>Shipping</li>
        </div>
    </div >
    <div className='lg:flex lg:justify-around grid grid-cols-2  items-center my-5 border border-stone-400 py-7 border-l-0 border-r-0 border-t-0'>
    <img src="/footer1.png" alt="footer" className='lg:w-1/6 w-5/6 py-4 px-2'/>
    <img src="/footer2.png" alt="footer" className='lg:w-1/5 w-5/6 py-4 px-2'/>
    <img src="/footer3.png" alt="footer" className='lg:w-1/5 w-6/6 py-4 px-2 mx-32'/>
    </div>

    <div className='flex justify-between lg:mx-24 lg:px-10 px-8 gap-4 py-5'>
        <div className='flex space-x-6'>
        <p>Condition of sales </p>
        <p>Privacy Policy </p>
        <p>Information on cookies</p>
        </div>

            <p>Copyright <b>@OluRemiFour</b>, Portfolio Project</p>       
    </div>



</div>
  )
}

export default Footer