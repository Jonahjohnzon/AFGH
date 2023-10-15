import React from 'react'

const Second = () => {
  return (
    <div className=' text-white bg-about font-barlow flex justify-center py-20'>
        <div className=' w-[95%] lg:w-[70%]'>
            <div>
                <div className=' text-4xl font-bold mb-5 text-center lg:text-left'>CONTACT</div>
            </div>
            <div className=' flex flex-col lg:flex-row justify-between items-center'>
            <div className=' w-[90%] text-center lg:text-left'>
                <div className=' text-xl mb-3'>Send us an email we will respond</div>
                <div>
                <ul className=' text-gray font-medium mb-10'>
                  <li className=' text-lg font-bold mb-5 text-white'>INFORMATION</li>
                  <li  className=' mb-2 text-sm  xs:text-base'>+234 810 690 8991</li>
                  <li  className=' mb-2 text-sm  xs:text-base'>jonahjohnzon@gmail.com</li>
                  <li  className=' mb-2 text-sm  xs:text-base'>Lagos, Ikeja</li>
                </ul>
              </div>
            </div>
                <form className='flex flex-col  justify-center w-[90%] pb-5' >
                <div className=' flex flex-col md:flex-row justify-between mb-5 w-full'>
                    <input type='text' placeholder='Name*' className=' px-2 w-[47%] bg-transparent border-[1px] border-green border-solid py-3 mb-4 md:mb-0 rounded-lg'/>
                    <input type='email' placeholder='Email*' className=' px-2 w-[47%] bg-transparent border-[1px] border-green border-solid py-3 rounded-lg'/>
                </div>
                <div>
                    <textarea className='w-[100%] bg-transparent border-[1px] border-green border-solid h-44 p-2 rounded-lg' placeholder='Comment*'/>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Second