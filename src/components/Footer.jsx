import React from 'react'
import logo from '../assets/images/logo.png'


const Footer = () => {
  return (
    <div className='bg-footerBg pt-8 md:pt-10 flex flex-col md:gap-20 gap-16 justify-center'>
      <div className='flex flex-col gap-8'>
        <div className='flex justify-center'>
          <img src={logo} alt="" className='' />
        </div>
        <div className="flex md:flex-row flex-col text-center lg:gap-16 md:gap-10 gap-5 font-medium text-lg text-white justify-center">
          <a href="#home">Home</a>
          <a href="#product">Products</a>
          <a href="#work">How It Works</a>
          <a href="#about">About Us</a>
        </div>
      </div>
      <div className='border-t'>
        <div className='text-white font-medium text-lg text-center py-5'>
          Design by Me
        </div>
      </div>
    </div>
  )
}

export default Footer
