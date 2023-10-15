import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useInViewport } from 'react-in-viewport';
import { Data } from '../../test/testapi'
import {HiMiniArrowLongRight} from 'react-icons/hi2'
import {motion} from 'framer-motion'
/**
 * second part of the home page
 * display latest and upcoming games
 */
const Second = () => {
    const refs = useRef()
    const {inViewport} = useInViewport(refs)
    const [show, setshow] = useState(false)
    const Ani =useCallback(()=>{
        setshow(true)
    },[])
    useEffect(()=>{
        if(show == false && inViewport)
        {
        Ani()
    }
    
    },[inViewport])
    const Data_list =()=>{ 
        /**
         * list of items 
         * latest and upcoming api
         * returns a mapped data
         */
        const slide =  {

            hidden:{
                y:80,
                opacity: 0
            },
            animate:{
                y:0,
                opacity:1,
                transition:{ duration:0.5,type:'tween', delay:0.5}
            }
        }
        

        const data = Data.map((info)=>{
        return(
            <motion.div variants={slide} initial="hidden" animate="animate" className=' text-white mb-10 3xl:mb-0' key={info.key}>
                    <div >
                        <div className=''>
                            <div className='flex flex-col md:flex-row  p-7 rounded-md  bg-gradient-to-tr from-backgd_dark to-ligth_dark'>
                                <img src={info.images} className='mr-5 rounded-md mb-3'/>
                                <div className='flex flex-col justify-evenly'>
                                    <h1 className=' font-barlow font-bold text-xl mb-3 '>{info.title}</h1>
                                    <div className='flex items-center text-gray font-bold mb-3'>
                                        <img src={info.avatar} className=' mr-2'/>
                                        <div className=' mr-2'>{info.developers}</div>
                                        <div className=' mr-2'>|</div>
                                        <div>CREATOR</div>
                                        
                                    </div>
                                    <div className=' flex  items-center font-bold w-full justify-around border-[1px] border-gray border-solid rounded-md p-2'>
                                        <div>{info.price}<span className='ml-1 text-cream'>NGN</span></div>
                                        <div className='flex items-center px-3 py-2 bg-cream rounded-md text-dark hover:bg-green cursor-pointer transition-all ease-in-out duration-300'>Play <span><HiMiniArrowLongRight/></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </motion.div>
        )
    })
    return data;
}
  return (
    <div className='bg-backgd_dark flex justify-center'>
    <div className=' flex flex-wrap  justify-around 3xl:justify-between w-5/6 my-20' ref={refs}>
        {show && <Data_list/>}
        </div>
    </div>
  )
}

export default Second