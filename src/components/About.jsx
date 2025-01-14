import React from 'react'
import about from '../assets/images/about.png'
import dots from '../assets/images/dots.png'
import { Principles } from '../data'

const About = () => {
  return (
    <div id='about'  className='py-8  md:py-24 flex justify-center relative'>
      <div className=' w-[90%] max-w-[1800px] font-poppins flex lg:flex-row flex-col-reverse gap-4 items-center'>

        {/* right side */}
        <div className='lg:w-1/2 w-full '>
          <img src={about} alt="about" className="w-full h-full"/>
          <div className='absolute left-0 top-[160px] lg:flex hidden'>
            <img src={dots} alt="dots" />
          </div>
        </div>

        {/* left side */}
        <div className='flex-1'>
          <div className='flex flex-col gap-3 md:gap-6'>
            <div className='flex flex-col gap-3'>
              <div className='md:text-4xl text-2xl text-secondary font-semibold'>About Veggies  </div>
              <div className='lg:text-5xl md:text-4xl text-3xl font-semibold md:w-[80%]'>Bringing Freshness to Your Doorstep</div>
            </div>

            <div className='text-primary text-sm md:text-base md:w-[90%]'>At FreshEase, we believe that fresh, high-quality groceries should be available to everyone, no matter where they are. That’s why we’re dedicated to delivering the freshest fruits, vegetables, meat, and more right to your doorstep—quickly, efficiently, and hassle-free.
            </div>
            <div className='text-secondary text-xl md:text-2xl font-semibold'>Our Core Principles:</div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-x-6 md:gap-y-6 gap-4'>
              {Principles.map((principle, index) => (
                <div key={index} className='flex flex-col md:gap-3 gap-1'>
                  <div className='md:text-lg text-base font-medium'>{principle.title}</div>
                  <div className='text-primary md:text-base text-sm'>{principle.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
