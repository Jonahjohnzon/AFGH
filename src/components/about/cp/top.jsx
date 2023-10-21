import React from "react";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
        delay: 0.8,
        stiffness: 400,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div className=" bg-[url('/src/assets/about_bg1.jpg')] bg-cover bg-center w-full text-white font-barlow relative">
      <div className=" flex justify-center pt-32 py-16">
        <motion.div
          variants={anim}
          initial="hidden"
          animate="animate"
          className="flex justify-center lg:justify-between w-[90%] xl:w-[60%] items-center"
        >
          <div className=" py-20 flex lg:block flex-col items-center">
            <div className=" text-4xl sm:text-6xl font-bold mb-2 whitespace-nowrap">
              ABOUT US
            </div>
            <div className="group flex items-center text-sm sm:text-basess font-bold">
              <Link to="/">
                <div className=" mr-2 text-green hover:text-cream cursor-pointer">
                  HOME
                </div>
              </Link>
              <GoDotFill className="text-green group-hover:text-cream" />
              <div className=" ml-2">ABOUT US</div>
            </div>
          </div>
          <div className=" hidden lg:block hover:animate-wiggle">
            <img src="/src/assets/images/web_img01.png" />
          </div>
        </motion.div>
      </div>
      {/* buttom design*/}
      <div className="absolute flex w-full bottom-0">
        <div className="w-1/2 h-0 border-t-green border-t-[50px] border-l-transparent border-l-[49vw] rotate-180"></div>
        <div className="w-1/2 h-0 border-t-green border-t-[50px] border-r-transparent border-r-[49vw] rotate-180"></div>
      </div>
    </div>
  );
};

export default Top;
