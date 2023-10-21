import React from "react";
import Box from "../../home/cp/box";
import EffectText from "../../EffectText";

const Second = () => {
  return (
    <div className=" bg-about font-barlow text-white flex justify-center pt-40 pb-24">
      <div className=" w-[93%] 2xl:w-[70%] flex lg:flex-row flex-col justify-between">
        <div className=" flex flex-col md:flex-row lg:flex-col items-center md:items-start justify-between lg:w-[40%] mb-10 lg:mb-0">
          <div className=" font-light text-4xl text-center md:text-start md:text-6xl lg:text-5xl 2xl:text-6xl md:w-[80%] lg:w-80 mb-4 lg:mb-0">
            WE ARE <span className=" font-bold text-green">DEVELOPERS</span>{" "}
            PROMOTING AFR0<span className=" font-bold">GAMES</span>
          </div>
          <div className=" flex lg:w-full justify-end">
            <div className=" relative">
              <div className=" w-[90px] h-[90px] 2xl:w-[137px] 2xl:h-[137px] relative ml-[30px] mr-[50px] my-0 animate-[spins_12s_linear_infinite] transition-all cursor-pointer">
                <img src="/src/assets/images/circle.svg" />
                <svg
                  class=" overflow-visible absolute w-20 h-20 -translate-x-2/4 -translate-y-2/4 rotate-[-33deg] left-2/4 top-2/4 lg:w-[60px] lg:h-[60px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 150 150"
                  version="1.1"
                >
                  <path
                    class=" fill-none"
                    id="textPath"
                    d="M 0,75 a 75,75 0 1,1 0,1 z"
                  ></path>
                  <text class=" fill-[#fff] uppercase text-[28px]  font-semibold tracking-[3px] ">
                    <textPath href="#textPath">africa comic house</textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex flex-col-reverse items-center md:items-start md:flex-row relative">
            <div className=" md:absolute md:z-30 w-[70%]  md:h-48 left-14 md:-bottom-6 bg-about flex justify-center items-center">
              <div className=" whitespace-wrap w-full flex flex-wrap m-5   text-gray text-lg font-medium">
                <EffectText
                  words={
                    "Welcome to Afro Games and Comics (AFGC), a platform dedicated to showcasing the rich and diverse world of African gaming and comics. Our mission is to celebrate and promote African creativity in the gaming and comics industries, bringing to light the incredible talent and stories that originate from this vibrant continent. "
                  }
                  speed={0.006}
                />
              </div>
            </div>
            <div className=" md:mr-6 h-80 md:h-full overflow-hidden  md:mb-0 mb-16">
              <img src="/src/assets/images/mask_img1.jpg" className=" " />
            </div>
            <div className=" sm:h-80  md:h-full overflow-hidden mb-2 md:md-0">
              <img src="/src/assets/images/mask_img2.jpg" />
            </div>

            <div className=" absolute z-30 w-[20%] right-0 h-20 top-0 bg-about">
              <div className=" pl-3 pt-3">
                <Box no={5} />
                <Box no={8} />
                <Box no={8} />
                <Box no={8} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
