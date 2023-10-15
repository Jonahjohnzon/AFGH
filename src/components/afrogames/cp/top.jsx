import React from 'react'
import Filterbar from './filterbar'

const Top = () => {
  return (
    <div className=' bg-dark w-full h-[100vh] text-white pt-28'>
      <div className='flex justify-end'>
        <div>
          <Filterbar/>
        </div>
        <div className=' w-[75%]'>
          <div className=' text-3xl font-bold'>All Games :</div>
        </div>
      </div>
    </div>
  )
}

export default Top