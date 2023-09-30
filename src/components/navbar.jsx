import React, {useEffect, useCallback, useState} from 'react'
import {BiSearch} from 'react-icons/bi'
import {PiNotePencilBold} from 'react-icons/pi'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollDirection } from 'react-use-scroll-direction'
/*
Navbar - navbar component 
*/
const Navbar = () => {
    const [y, setY] = useState(0);
    const [show, setshow] = useState(true)
    const [color, setcolor] = useState(true)
   const variant = {
        visible: {opacity: 1, y:0, transition: {duration: 0.5}},
        hidden: {opacity:0, y:-80},
        exit: {opacity: 0, y:-80}
    }
    const handleNavigation = useCallback(
        /**
         * Get scroll direction for navbar animation
         */
        e => {
          const window = e.currentTarget;
          console.log(window.scrollY)
          if (y > window.scrollY) {
            if (window.scrollY <= 10)
            {
                setcolor(true)
            }
            else{
                setcolor(false)
            }
            setshow(true)
          } else if (y < window.scrollY) {
            setshow(false)
          }
          setY(window.scrollY);
        }, [y]
      );
    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);
        return () => {
          window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation])
  return (
    <AnimatePresence>
    {show && <motion.div variants={variant} animate="visible" initial="hidden" exit="exit" className={` fixed top-0 w-full flex justify-center text-white  bg-${color? "transparent":"dark"} shadow-${color? "none":"2xl"} font-barlow z-50`}>
        <div className=' w-5/6'>
            <section className=' w-full flex justify-between items-center'>
                {/*logo*/}
                <div className=' w-1/6 flex items-center'>
                    <img src='/src/assets/logo_.png' className=' w-[30%] mr-3'/>
                    <p className=' font-extrabold text-4xl tracking-widest'>AF<span className=' text-green'>G</span>M</p>
                </div>
                 {/*menu*/}
                <div className=' w-2/5 '>
                    <ul className=' flex justify-between font-bold'>
                        <li className=' group hover:text-green cursor-pointer relative w-fit'> <div className=' w-12 absolute left-0 opacity-0 bg-green h-[1px] top-1/2 group-hover:-rotate-45 group-hover:opacity-100 transition-all'></div>HOME</li>
                        <li className=' group hover:text-green cursor-pointer relative'><div className=' w-12 absolute left-[20%] opacity-0 bg-green h-[1px] top-1/2 group-hover:-rotate-45 group-hover:opacity-100 transition-all'></div>ABOUT US</li>
                        <li className=' group hover:text-green cursor-pointer relative'><div className=' w-12 absolute left-[30%] right-1/2 opacity-0 bg-green h-[1px] top-1/2 group-hover:-rotate-45 group-hover:opacity-100 transition-all'></div>TOURNMENT</li>
                        <li className=' group hover:text-green cursor-pointer relative'><div className=' w-12 absolute left-0 right-0 opacity-0 bg-green h-[1px] top-1/2 group-hover:-rotate-45 group-hover:opacity-100 transition-all'></div>PAGES</li>
                        <li className=' group hover:text-green cursor-pointer relative'><div className=' w-12 absolute left-0 right-0 opacity-0 bg-green h-[1px] top-1/2 group-hover:-rotate-45 group-hover:opacity-100 transition-all'></div>NEWS</li>
                        <li className=' group hover:text-green cursor-pointer relative'><div className=' w-12 absolute left-[20%] right-0 opacity-0 bg-green h-[1px] top-1/2 group-hover:-rotate-45 group-hover:opacity-100 transition-all'></div>CONTACT</li>
                    </ul>
                </div>
                 {/*profile*/}
                <div className=' w-2/6 flex justify-end '>
                    <div className=' flex w-[59%] justify-between items-center'>
                        <div><BiSearch className=' text-2xl hover:text-green cursor-pointer'/></div>
                        <div className='group w-[150px] h-[50px] flex flex-col justify-center cursor-pointer'>
                    <div className='group-hover:border-t-[1px] transition-all w-[150px] border-t-green border-t-[20px] border-r-[30px] border-r-transparent border-l-[30px] border-l-transparent rotate-180'></div>
                    <div className=' group-hover:border-t-[1px] transition-all  w-[150px] border-t-green border-t-[20px] border-r-[30px] border-r-transparent border-l-[30px] border-l-transparent relative'>
                    <div className=' absolute bottom-2  w-full'>
                            <div className=' flex items-center font-bold transition-all  text-dark group-hover:text-white'>
                            <span ><PiNotePencilBold className='text-lg mr-2'/></span><div>~SIGN IN</div></div>
                        </div>
                    </div>

                </div>
                        <div className='group text-white h-[40px] flex flex-col justify-between cursor-pointer'>
                            <div className=' w-[50px] flex justify-start'><div className='group-hover:w-full h-[2px] bg-white w-1/2 transition-all'></div></div>
                            <div className=' w-[50px]'><div className='w-full h-[2px] bg-white'></div></div>
                            <div className=' w-[50px] flex justify-end'><div className='group-hover:w-full h-[2px] bg-white w-1/2 transition-all'></div></div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    </motion.div>}
    </AnimatePresence>
  )
}

export default Navbar