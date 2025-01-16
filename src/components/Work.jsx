import React from 'react'
import { Working } from '../data'
import line from '../assets/images/line.png'

const Work = () => {
  return (
    <div id='work' className='py-8 md:py-16 bg-cardBg flex justify-center'>
      <div className='w-[90%] max-w-[1800px] font-poppins'>
        <div className='flex flex-col md:gap-16 gap-6'>
          <div className='lg:text-5xl md:text-4xl text-3xl font-semibold text-center'>
            How It Works Section
          </div>

          <div className='relative'>
            <div className='lg:flex hidden absolute bottom-1/2 translate-y-1/2 z-10'>
              <img src={line} alt="line" />
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-24 md:gap-12  gap-8'>
              {Working.map((work, index) => (
                <div key={index} className='bg-white z-30  rounded-3xl flex flex-col md:px-10 px-6 md:pt-10 pt-6 pb-4 gap-5'>
                  <div className='flex justify-center '>
                    <img src={work.icon} alt="work" className='object-contain' />
                  </div>
                  <div className='md:text-3xl text-xl font-medium'>{work.title}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Work
