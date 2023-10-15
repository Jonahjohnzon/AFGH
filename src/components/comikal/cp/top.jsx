import React from 'react'
import Filterbar from './filterbar'

const Top = () => {
  return (
    <div className=' bg-dark w-full h-[100vh] text-white pt-36'>
      <div className='flex justify-start'>
        <div>
          <Filterbar/>
        </div>
        <div className='pl-40 '>
          <div className=' text-3xl font-bold'>All Comics :</div>
        </div>
      </div>
    </div>
  )
}

export default Top