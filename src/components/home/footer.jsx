import React from "react";
import EffectText from "../EffectText";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-black text-white font-barlow flex justify-center">
      <div className=" w-full flex flex-col items-center justify-between mt-20">
        <div className=" flex flex-col items-center mb-10 ">
          <h1 className=" text-xl xs:text-3xl md:text-5xl mb-5 ">
            REMEMBER LET'S LINK UP
          </h1>
          <div className=" mb-40 text-center">
            <div
              className=" text-black text-[80px] sm:text-[90px] capitalize  font-extrabold     leading-[0.85] m-0   "
              style={{
                textShadow:
                  "-1px 1px 0 #fff,1px 1px 0 #fff,1px -1px 0 #fff,-1px -1px 0 #fff",
              }}
            >
              <EffectText words="LAGOS" />
            </div>
          </div>
          <Link to="https://discord.gg/bShgaEMR">
            <div className=" px-10 xs:px-20 md:px-60 xl:px-80 xs:py-10 py-5  bg-green hover:animate-wiggle cursor-pointer font-barlow text-5xl font-extrabold text-black">
              {" "}
              DISCORD
            </div>
          </Link>
        </div>
        <div className=" flex flex-col lg:flex-row justify-between w-5/6">
          <div>
            <ul className=" text-gray font-medium mb-10">
              <li className=" text-lg font-bold mb-5 text-white">
                INFORMATION
              </li>
              <li className=" mb-2 text-sm  xs:text-base">+234 810 690 8991</li>
              <li className=" mb-2 text-sm  xs:text-base">
                jonahjohnzon@gmail.com
              </li>
              <li className=" mb-2 text-sm  xs:text-base">Lagos, Ikeja</li>
            </ul>
          </div>
          <div>
            <ul className=" flex flex-col lg:items-center text-lg lg:font-semibold mb-10">
              <li>
                {" "}
                <div className=" w-[200px] flex items-center">
                  <img src="/assets/logo_.png" className=" w-[30%] mr-3" />
                  <p className=" font-extrabold text-2xl xs:text-4xl tracking-widest">
                    AF<span className=" text-green">G</span>C
                  </p>
                </div>
              </li>
              <Link to="/">
                <li className=" mb-2 text-sm xs:text-base cursor-pointer hover:text-cream">
                  HOME
                </li>
              </Link>
              <Link to="/about">
                <li className=" mb-2 text-sm  xs:text-base cursor-pointer hover:text-cream">
                  ABOUT US
                </li>
              </Link>
              <Link to="afrogames">
                <li className=" mb-2 text-sm  xs:text-base cursor-pointer hover:text-cream">
                  AFROGAMES
                </li>
              </Link>
            </ul>
          </div>
          <div>
            <ul className=" text-gray font-medium mb-10">
              <li className=" text-lg font-bold mb-5 text-white">FOLLOW US</li>
              <Link to="https://www.facebook.com/jonah.johnzon.5/">
                <li className=" mb-2 text-sm  xs:text-base cursor-pointer hover:text-cream">
                  Facebook
                </li>
              </Link>
              <Link to="https://twitter.com/Luzebox">
                <li className=" mb-2 text-sm  xs:text-base cursor-pointer hover:text-cream">
                  Twitter
                </li>
              </Link>
              <Link to="https://www.linkedin.com/in/jojome/">
                <li className=" mb-2 text-sm  xs:text-base cursor-pointer hover:text-cream">
                  LinkedIn
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className=" h-[50px] bg-dark w-full flex flex-col md:flex-row justify-around items-center">
          <div className=" text-[9px] xs:text-xs font-bold text-gray md:mb-0 mb-1">
            COPYRIGHT © 2023 - ALL RIGHTS RESERVED BY{" "}
            <span className=" text-green">AFGC</span>
          </div>
          <Link to="https://www.linkedin.com/in/jojome/">
            {" "}
            <div className=" text-gray font-bold flex items-center">
              <div className=" text-[9px] xs:text-xs md:text-sm cursor-pointer">
                WEB BY JONAH OMINYI
              </div>
              <div className=" ml-10 cursor-pointer text-[9px] xs:text-xs md:text-sm">
                JOIN OUR TEAM
              </div>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
