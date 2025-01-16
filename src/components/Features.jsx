import React from 'react'
import { Feature } from '../data'
import feature from '../assets/images/feature.png'

const Features = () => {
  return (
    <div id='product' className='py-8 md:py-20 lg:py-40 flex justify-center relative'>
      <div className='w-[90%] max-w-[1800px] font-poppins flex flex-col md:flex-row gap-4 items-start'>

        {/* left side */}
        <div className='md:w-1/2 flex flex-col gap-6'>
        <div className='flex flex-col gap-3'>
            <div className='md:text-4xl text-2xl text-secondary font-semibold'>Features:</div>
            <div className='lg:text-5xl md:text-4xl text-3xl font-semibold lg:w-[80%]'>Why Choose FreshEase?</div>
          </div>

          <div className='grid md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4'>
            {Feature.map((card, index) => (
              <div key={index} className='flex flex-col bg-cardBg p-4 gap-1 '>
                <div className='md:text-lg text-base font-medium'>{card.title}</div>
                <div className='text-primary md:text-base text-sm'>{card.description}</div>
              </div>
            ))}
          </div>
        </div>



        {/* right side */}
        <div className='w-1/2 md:flex justify-center hidden'>
          <img src={feature} alt="" className='absolute right-0 bottom-1/2 translate-y-1/2 md:max-w-[50%]' />
        </div>
      </div>
    </div>
  )
}

export default Features
