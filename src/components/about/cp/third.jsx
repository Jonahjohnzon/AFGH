import React from "react";
import EffectText from "../../EffectText";
import { IoDiamondOutline } from "react-icons/io5";
import { RiUserSettingsLine } from "react-icons/ri";
import { BiSolidDiamond } from "react-icons/bi";
import { LuSettings } from "react-icons/lu";

const Third = () => {
  return (
    <div className=" bg-dak text-white font-barlow pt-40 pb-20 flex justify-center ">
      <div className=" w-[90%] md:w-[80%] lg:w-[97%] 2xl:w-[80%] flex flex-col lg:flex-row justify-between items-center ">
        <div className=" w-full  mb-20 lg:mb0 ">
          <div className="flex flex-col items-center md:block">
            <div className=" text-green font-bold">
              <EffectText words={"POWERFUL MISSION"} />
            </div>
            <div className=" text-2xl md:text-5xl font-bold mb-2">
              OUR MISSION
            </div>
            <div className=" h-0  border-t-8 border-t-green border-l-transparent border-l-8  border-r-transparent border-r-8 w-[120px] self-center mb-10"></div>
          </div>
          <div className=" flex flex-col sm:flex-row mb-20 text-center md:text-start">
            <div className=" sm:w-1/2 pr-3 flex flex-col items-center md:block sm:mb-0 mb-20">
              <div className=" text-green text-4xl mb-7">
                <IoDiamondOutline />
              </div>
              <div className=" text-2xl font-medium  mb-3 ">
                Showcase African Creativity
              </div>
              <div className=" font-medium text-gray">
                Provide a platform to display the talents and works of African
                game developers and comic artists, allowing them to reach a
                broader audience
              </div>
            </div>
            <div className=" sm:w-1/2 pr-3 flex flex-col items-center md:block">
              <div className=" text-green text-4xl mb-7">
                <RiUserSettingsLine />
              </div>
              <div className=" text-2xl font-medium  mb-3 ">
                Facilitate Networking
              </div>
              <div className=" font-medium text-gray">
                Foster connections and collaboration opportunities between
                African creators, enthusiasts, and industry professionals to
                encourage growth and innovation.
              </div>
            </div>
          </div>
          <div className=" flex flex-col sm:flex-row  text-center md:text-start">
            <div className=" sm:w-1/2 pr-3 flex flex-col items-center md:block sm:mb-0 mb-20">
              <div className=" text-green text-4xl mb-7">
                <BiSolidDiamond />
              </div>
              <div className=" text-2xl font-medium  mb-3 ">
                Educate and Raise Awareness
              </div>
              <div className=" font-medium text-gray">
                {" "}
                Educate the global community about the diverse cultures,
                folklore, and histories of Africa through interactive
                storytelling in games and comics.
              </div>
            </div>
            <div className=" sm:w-1/2 pr-3">
              <div className=" text-green text-4xl mb-7 flex flex-col items-center md:block">
                <LuSettings />
              </div>
              <div className=" text-2xl font-medium  mb-3 ">
                Encourage Diversity{" "}
              </div>
              <div className=" font-medium text-gray">
                {" "}
                Advocate for greater diversity and representation within the
                gaming and comics industries, amplifying underrepresented voices
                and perspectives.
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-center">
          <div>
            <img src="/src/assets/images/s_img1.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
