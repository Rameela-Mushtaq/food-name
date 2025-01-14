import React from 'react'
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { Reviews, Stars } from '../data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonial = () => {
  const slider = React.useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className='py-8 md:py-24 flex justify-center'>
      <div className='w-[90%] max-w-[1800px] font-poppins'>
        <div className='flex flex-col gap-3 justify-start relative'>
          <div className='md:text-4xl text-2xl text-secondary font-semibold'>Testimonials  </div>
          <div className='lg:text-5xl md:text-4xl text-3xl font-semibold lg:w-[40%]'>What Our Customer Says</div>

          <div className="absolute right-0 md:flex hidden gap-3">
            <button
              onClick={() => slider?.current?.slickPrev()}
              className="group px-3 py-3 hover:bg-arrowBg2 bg-arrowBg flex justify-center items-center rounded-full"
            >
              <GoArrowLeft className="text-2xl group-hover:text-white text-contents " />
            </button>

            <button
              className="group px-3 py-3 flex justify-center bg-arrowBg hover:bg-arrowBg2 items-center rounded-full "
              onClick={() => slider?.current?.slickNext()}
            >
              <GoArrowRight className="text-2xl text-contents group-hover:text-white object-contain" />
            </button>
          </div>
        </div>



        <div className='md:py-10 py-5 '>
          {/* cards */}
          <Slider ref={slider} {...settings}>
            {Reviews.map((review, index) => (
              <div key={index} className="md:px-3 px-1"> {/* Add margin or padding here */}
                <div className="bg-cardBg rounded-lg flex">
                  <div className="p-5">
                    <div className="flex gap-2">
                      <img src={review.image} alt="" />
                      <div>
                        <div className="text-xl font-medium">{review.name}</div>
                        <div className="text-primary text-sm">{review.title}</div>
                      </div>
                    </div>

                    <div className="text-primary text-base pt-4">{review.description}</div>
                    <div className="flex gap-1 pt-8">
                      {Stars.map((_, i) => (
                        <span key={i}>{review.icon}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

        </div>
      </div>
    </div>
  )
}

export default Testimonial
