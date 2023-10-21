import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
/*top part of the front page
  first view of webpage
  */
const Top = () => {
  const anim = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
        stiffness: 400,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const children = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div className=" w-full bg-[url('/src/assets/slider_bg.jpg')] flex pt-32 justify-center font-barlow relative">
      <div className=" flex flex-col lg:flex-row  justify-between w-[93%] 2xl:w-[75%] mb-[100px] md:mb-[80px] lg:mb-[]">
        {/*buttons and wordings*/}
        <motion.div
          variants={anim}
          initial="hidden"
          animate="animate"
          className="flex flex-col items-center lg:items-start lg:mt-40 relative z-30"
        >
          <motion.div
            variants={children}
            className=" bg-gradient-to-r mb-5 xs:mb-0 from-green/40 from-15% to-transparent  bg-opacity-20 rounded-md "
          >
            <div className=" text-green  text-2xl font-bold pl-5 py-2 pr-10 tracking-widest">
              LIVE GAMING
            </div>
          </motion.div>
          <motion.div
            variants={children}
            className="whitespace-nowrap tracking-tight text-[12.5vw] lg:text-[7.5vw] text-white -my-2 font-berlin 2xl:-my-7"
            style={{ textShadow: "-1px 5px 1px #00FF7B" }}
          >
            STREAMING
          </motion.div>
          <motion.div
            variants={children}
            className=" whitespace-nowrap text-2xl xs:text-3xl lg:text-4xl text-white font-bold lg:tracking-widest mb-10"
          >
            VIDEO GAMES ONLINE
          </motion.div>
          <motion.div variants={children}>
            <Link to="/contact">
              <div className=" bg-green  hover:bg-white  px-10 text-center py-3 text-dark font-bold whitespace-nowrap rounded-md cursor-pointer mb-20 lg:mb-40 relative z-40">
                CONTACT US
              </div>
            </Link>
          </motion.div>
          <motion.div
            variants={children}
            className="hidden text-white lg:flex items-center font-bold font-berlin text-2xl"
          >
            <div className=" px-5 py-3 border-white border-solid border-2 rounded-full mr-5 ">
              LATEST ZONE
            </div>
            <div className=" px-5 py-3 border-white border-solid border-2 rounded-full  ">
              UPCOMING//
            </div>
          </motion.div>
        </motion.div>
        {/*image*/}
        <div className=" hover:animate-wiggle flex justify-center">
          <img
            src="/src/assets/slider_img1.png"
            className="w-[85%] md:w-[70%] lg:w-[100%]"
          />
        </div>
      </div>
      {/* buttom design*/}
      <div className="absolute flex w-full bottom-0">
        <div className="w-1/2 h-0 border-t-green border-t-[50px] border-l-transparent border-l-[49vw] rotate-180"></div>
        <div className="w-1/2 h-0 border-t-green border-t-[50px] border-r-transparent border-r-[49vw] rotate-180"></div>
      </div>
      {/**
      background coin design 
      */}
      <div>
        <img
          src="/src/assets/coin.png"
          className=" absolute top-40 right-40 opacity-60 animate-pulse scale-95"
        />
        <img
          src="/src/assets/coin.png"
          className=" absolute top-[80%] right-1/2 opacity-60  animate-pulse"
        />
        <img
          src="/src/assets/coin.png"
          className=" absolute top-[60%] left-[20%] opacity-60 animate-pulse scale-75"
        />
        <img
          src="/src/assets/coin.png"
          className=" absolute top-[20%] left-[60%] opacity-60 animate-pulse scale-50"
        />
      </div>
    </div>
  );
};

export default Top;
