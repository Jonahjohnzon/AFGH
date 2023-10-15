import React, { useRef , useCallback, useState, useEffect} from 'react'
import { images } from '../../test/testapi'
import {TbArrowBadgeLeftFilled} from 'react-icons/tb'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import {Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
import EffectText from '../../EffectText';
/**
 * 
 * @returns fourth component in thhe home page 
 * the gallery slider
 */
const Fourth = () => {
 const swipes = useRef(null)
 const [view,setView] = useState(4)

/**
 * slider button control
 */
const handleResize = () => {
  if (window.innerWidth < 1440) {
      setView(2)
  } 
  else {
      setView(4)
  }
}

// create an event listener
useEffect(() => {
  window.addEventListener("resize", handleResize)
})
const handleNext = useCallback(() => {
  if (!swipes.current) return;
  swipes.current.swiper.slideNext();
  console.log(swipes.current.swiper)
}, []);
  return (
    <div className='  bg-blood_r pb-10 relative'>
    <div className='flex flex-col md:flex-row md:justify-between text-white font-barlow items-center'>
    <div className=' md:w-[40%] flex justify-end'>
      <div className='flex flex-col md:flex-row mt-10 md:mt-0 h-52 md:w-3/4 justify-between items-center'>
        <div className=' text-center md:text-start'>
          <div className=' text-3xl sm:text-5xl font-bold mb-2 m:mb-5'>PROJECT AF<span className='text-green'>G</span>C</div>
          <div className=' font-bold text-green'><EffectText words={"OUR LATEST GALLERY"}/></div>

        </div>
        <div className=' group flex cursor-pointer '  onClick={handleNext}>
              <TbArrowBadgeLeftFilled className=' text-green animate-pulses_ text-7xl -mr-10 group-hover:animate-none group-hover:text-white '/>
              <TbArrowBadgeLeftFilled className=' text-white text-7xl animate-pulses group-hover:animate-none group-hover:text-green cursor-pointer'/>
        </div>
      </div>
    </div>
    <div className=' w-[98%] md:w-[60%] p-10 md:pt-32 mb-10 text-white '  >
    <div className=' flex'>  
    <Swiper 
    ref={swipes} 
     modules={[Navigation, Pagination,Scrollbar]}
     slidesPerView={view}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        scrollbar={{
         
          draggable:true,
         
       
        }
        }
      
     >
    {images.map((e, index)=>{
      //returning images
      return(
        <SwiperSlide><img key={index} src={e} className=' rounded-md'/></SwiperSlide>
      )
    })}
<div className=' h-10'></div>
    </Swiper>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Fourth