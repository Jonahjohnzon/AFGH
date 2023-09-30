import React from 'react'
import { Data } from '../../test/testapi'
import {HiMiniArrowLongRight} from 'react-icons/hi2'
/**
 * second part of the home page
 * display latest and upcoming games
 */
const Second = () => {
    const Data_list =()=>{ 
        /**
         * list of items 
         * latest and upcoming api
         * returns a mapped data
         */
        const data = Data.map((info)=>{
        return(
            <div className=' text-white'>
                    <div id={info.key}>
                        <div className=''>
                            <div className='flex p-7 rounded-md bg-gradient-to-tr from-backgd_dark to-ligth_dark'>
                                <img src={info.images} className='mr-5 rounded-md'/>
                                <div className='flex flex-col justify-evenly'>
                                    <h1 className=' font-barlow font-bold text-xl '>{info.title}</h1>
                                    <div className='flex items-center text-gray font-bold'>
                                        <img src={info.avatar} className=' mr-2'/>
                                        <div className=' mr-2'>{info.developers}</div>
                                        <div className=' mr-2'>|</div>
                                        <div>CREATOR</div>
                                        
                                    </div>
                                    <div className=' flex items-center font-bold w-full justify-around border-[1px] border-gray border-solid rounded-md p-2'>
                                        <div>{info.price}<span className='ml-1 text-cream'>NGN</span></div>
                                        <div className='flex items-center px-3 py-2 bg-cream rounded-md text-dark hover:bg-green cursor-pointer transition-all ease-in-out duration-300'>Play <span><HiMiniArrowLongRight/></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    })
    return data;
}
  return (
    <div className='bg-backgd_dark flex justify-center'>
    <div className=' flex justify-between w-5/6 my-20'>
        <Data_list/>
        </div>
    </div>
  )
}

export default Second