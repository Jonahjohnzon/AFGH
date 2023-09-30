import React from 'react'
/*top part of the front page
  first view of webpage
  */
const Top = () => {
  return (
    <div className=" w-full bg-[url('/src/assets/slider_bg.jpg')] flex pt-32 justify-center font-barlow relative">
      <div className=' flex justify-between w-[75%]'>
      {/*buttons and wordings*/}
        <div className=' mt-40'>
          <div className=' bg-gradient-to-r from-green/40 from-15% to-transparent  bg-opacity-20 rounded-md '>
            <div className=' text-green text-2xl font-bold pl-5 py-2 pr-10 tracking-widest'>LIVE GAMING</div>
          </div>
          <div className='p-0 m-0 whitespace-nowrap text-[7.5vw] text-white  font-berlin -my-7' style={{textShadow : "-1px 5px 1px #00FF7B"}}>STREAMING</div>
          <div className=' whitespace-nowrap text-4xl text-white font-bold tracking-widest mb-10'>VIDEO GAMES ONLINE</div>
          <div>
          <div className=' bg-green  hover:bg-white  w-2/6 text-center py-3 text-dark font-bold whitespace-nowrap rounded-md cursor-pointer mb-40'>CONTACT US</div></div>
          <div className=' text-white flex items-center font-bold font-berlin text-2xl'>
            <div className=' px-5 py-3 border-white border-solid border-2 rounded-full mr-5 cursor-pointer'>LATEST ZONE</div>
            <div className=' px-5 py-3 border-white border-solid border-2 rounded-full  cursor-pointer'>UPCOMING//</div>
          </div>
        </div>
        {/*image*/}
        <div><img src='/src/assets/slider_img1.png'/></div>
      </div>
      {/* buttom design*/}
      <div className='absolute flex w-full bottom-0'>
        <div className='w-1/2 h-0 border-t-green border-t-[50px] border-l-transparent border-l-[49vw] rotate-180'></div>
        <div className='w-1/2 h-0 border-t-green border-t-[50px] border-r-transparent border-r-[49vw] rotate-180'></div>
      </div>
      {/**
      background coin design 
      */}
      <div >
        <img src='/src/assets/coin.png' className=' absolute top-40 right-40 opacity-60 animate-pulse scale-95'/>
        <img src='/src/assets/coin.png' className=' absolute top-[80%] right-1/2 opacity-60  animate-pulse' />
        <img src='/src/assets/coin.png' className=' absolute top-[60%] left-20 opacity-60 animate-pulse scale-75' />
        <img src='/src/assets/coin.png' className=' absolute top-[20%] left-60 opacity-60 animate-pulse scale-50' />
      </div>
    </div>
  )
}

export default Top