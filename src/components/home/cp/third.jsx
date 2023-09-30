import React from 'react'
/**
 * @returns : third component
 * top african indie game developers
 */
const Third = () => {
  return (
    <div className=' bg-[url("/src/assets/area_bg1.jpg")] bg-cover bg-center flex justify-center font-barlow text-white py-40'>
        <div className=' w-5/6 flex justify-center'>
          <div className=' flex flex-col justify-center text-center' >
            <div className='text-green font-bold mb-3'>MEET AFRICAN GAME DEVELOPER</div>
            <div className=' font-bold text-5xl mb-7 '>INDIE GAME DEVS</div>
            <div className=' h-0  border-t-8 border-t-green border-l-transparent border-l-8  border-r-transparent border-r-8 w-1/2 self-center mb-10'></div>
            <div className=' flex items-center w-full justify-around'>
              <div className=' border-solid border-green border-2 hover:bg-green cursor-pointer transition-all'>
              <div className=' border-solid border-green border-2 mx-2 px-2 py-2 font-bold'>
                ACCESORIES
                </div>
              </div>
              <div className=' border-solid border-cream border-2 hover:bg-cream cursor-pointer transition-all'>
              <div className=' border-solid border-cream border-2 mx-2 px-2 py-2 font-bold'>
                ACCESORIES
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Third