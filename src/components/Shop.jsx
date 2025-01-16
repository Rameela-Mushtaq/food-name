import React from 'react'
import playStore from '../assets/images/playStore.png'
import apple from '../assets/images/apple.png'
import shop from '../assets/images/shop.png'

const Shop = () => {
  return (
    <div  className='bg-shop-gradient flex justify-center'>
      <div className='w-[90%] max-w-[1800px] font-poppins flex flex-col gap-6 md:flex-row'>

        {/* left side */}
        <div className='lg:w-1/2 flex flex-col md:gap-12 gap-6 py-8 md:py-20'>
          <div className='flex flex-col gap-3'>
            <div className='md:text-4xl text-2xl text-secondary font-semibold'>Shop on the Go  </div>
            <div className='lg:text-5xl md:text-4xl text-3xl font-semibold'>Download The Veggies App</div>
            <div className='md:text-2xl text-sm font-normal text-subHeading'>
              Download our app for an even smoother grocery shopping experience. Exclusive offers and real-time updates at your fingertips.
            </div>
          </div>

          <div className='flex flex-col gap-4 md:gap-6'>
            <div className='md:text-3xl text-2xl font-normal text-shopText'>Download App Form</div>
            <div className='flex md:gap-10 gap-3'>
              <button className='bg-btn2Bg rounded-xl md:py-4 py-3 md:px-7 px-3 whitespace-nowrap'>
                <div className='flex flex-row gap-3'>
                  <img src={playStore} alt="store" className='object-contain md:w-full w-[20%]' />
                  <div className='flex flex-col text-white text-start'>
                    <div className='text-xs'>Get it on</div>
                    <div className='md:text-xl text-base'>Google Play</div>
                  </div>
                </div>
              </button>

              <button className='bg-btn2Bg rounded-xl md:py-4 py-3 md:px-7 px-3  whitespace-nowrap'>
                <div className='flex flex-row md:gap-4 gap-2 '>
                  <img src={apple} alt="store" className='object-contain md:w-full w-[20%]' />
                  <div className='flex flex-col text-white text-start'>
                    <div className='text-xs pr-1'>Download on the</div>
                    <div className='md:text-xl text-base'>Apple Store</div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flex-1 hidden lg:flex lg:justify-end pt-20">
          <img src={shop} alt="hero"  />
        </div>
      </div>
    </div>
  )
}

export default Shop
