import React from 'react'
import Navbar from './Navbar'
import hero from "../assets/images/hero.png"

const Hero = () => {
  return (
    <div  className='bg-hero-gradient'>
      <Navbar />
      <div className='py-8 flex justify-center'>
      <div className='w-[90%] max-w-[1800px] font-poppins flex flex-col gap-4 md:flex-row items-center'>
        
        {/* left side */}
        <div className='md:w-[60%] flex flex-col md:gap-10 gap-6'>
          <div className='flex flex-col md:gap-6 gap-4 text-center md:text-left'>
          <div className='lg:text-5xl md:text-4xl text-3xl font-semibold'>
           <span className='text-secondary'>Fresh Groceries </span>Delivered 
           <div>Right to Your Doorstep!</div>
          </div>

          <div className='md:text-2xl text-sm font-normal text-subHeading md:w-[90%]'>
          Get your fruits, vegetables, and meat delivered fresh, fast, and hassle-free.
          </div>
          </div>

          <div className='flex justify-center md:justify-start'>
          <button className="whitespace-nowrap w-fit py-3 xl:px-10 px-7 text-lg bg-btnBg text-white rounded-md">
              Order Now
            </button>
          </div>
        </div>

        {/* right side */}
        <div className="flex-1 md:mt-0 flex justify-center md:justify-end">
          <img src={hero} alt="hero" className="w-full h-full" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero
