import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Header.css'
import Slider from 'react-slick'


const ImgSlider = () => {
  const setting = {
    dots: true,
    Infinity: true,
    speed: 500,
    slideToShow: 1,
    slideTOScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
    ]
  }
  return (
    <Slider className='IMGSLIDER mt-5 relative' {...setting}>
      <div className='shadow-2xl rounded cursor-pointer'>
        <a className='block relative cursor-pointer hover:border-[4px] hover:border-solid hover:border-white hover:p-0 p-1 ' href="">
          <img className='h-[200px] md:h-full w-full' src="/image/slider-badging.jpg" alt="" />
        </a>
      </div>
      <div className='shadow-xl rounded cursor-pointer '>
        <a className='block relative cursor-pointer hover:border-[4px] hover:border-solid hover:border-white hover:p-0 p-1 ' href="">
          <img className='h-[200px] md:h-full w-full' src="/image/slider-badag.jpg" alt="" />
        </a>
      </div>
      <div className='shadow-xl rounded cursor-pointer'>
        <a className='block relative cursor-pointer  hover:border-[4px] hover:border-solid hover:border-white hover:p-0 p-1 ' href="">
          <img className='h-[200px] md:h-full w-full' src="/image/slider-scales.jpg" alt="" />
        </a>
      </div>
      <div className='shadow-xl rounded cursor-pointer'>
        <a className='block relative cursor-pointer hover:border-[4px] hover:border-solid hover:border-white hover:p-0 p-1 ' href="">
          <img className='h-[200px] md:h-full w-full' src="/image/slider-scale.jpg" alt="" />
        </a>
      </div>
    </Slider>
  )
}

export default ImgSlider