import React, { useState } from "react";
import Button from "./Button";

const Tab = ({ data }) => {
  const [effect, setEffct] = useState(0);
  const Change = () => {
    setEffct(2425);
  };
  const Reserve = () => {
    setEffct(0);
  };
  return (
    <div
      className="group cursor-pointer relative w-[100%] lg:w-[1000px] md:mb-10"
      onMouseOver={Change}
      onMouseLeave={Reserve}
    >
      <div>
        <div className=" absolute w-full h-full flex justify-center items-start z-30">
          <div className=" flex justify-between items-start mt-6 pl-2 xs:mt-3 w-full md:mt-7">
            <div className=" hidden w-full md:flex justify-center items-center">
              <div className=" w-14 h-14 lg:w-24 lg:h-24 border-4 border-solid border-[#35333D] rounded-md overflow-hidden flex">
                <img src={data.avatar} className="w-full" />
              </div>
            </div>
            <div className=" flex flex-col items-center w-full">
              <div className=" text-lg md:text-4xl xs:text-base text-[10px] font-semibold md:mb-2">
                {data.name.toUpperCase()}
              </div>
              <div className="text-gray text-[9px] xs:text-xs md:text-sm">
                {data.location.toUpperCase()}
              </div>
            </div>
            <div className=" w-full  flex justify-center items-center">
              <div className="w-[70%] sm:w-1/2">
                <Button Name={"Check Out"} link={data.link} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="fill-[#0f1c23] overflow-hidden stroke-[#45f882] stroke-[1px] relative transition-all block  min-h-[140px] border rounded-lg border-solid border-transparent bg-transparent"
          id="svg-9"
          data-svg-icon="assets/img/icons/match.svg"
        >
          <svg
            className=" w-full h-full hidden  sm:block"
            viewBox="0 0 1112 150"
          >
            <path
              id="match-svg"
              className="cls-1 transition-all duration-1000"
              d="M456,3383l-40,75,40,74h788l12-14,61,1,12,13h158l40-74-40-75-777,1-13,14-62-1-14-14H456Z"
              transform="translate(-415.5 -3382.5)"
              style={{
                strokeDasharray: `${effect}, 2427`,
                strokeDashoffset: 0,
              }}
            ></path>
          </svg>
          <div className=" sm:hidden border-solid border-2 border-[#35333D] h-24 rounded-lg w-full bg-[#0f1c23]"></div>
          <div className=" w-full flex justify-center">
            <div className=" bg-[#0f1c23] px-10 py-2 text-[8px] xs:text-xs md:text-sm  md:font-bold text-gray transition-all duration-500 rounded-b-full group-hover:bg-[#45f882] group-hover:text-black">
              {data.date.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
