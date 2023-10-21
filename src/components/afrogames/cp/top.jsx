import React, { useState, useEffect, useRef } from "react";
import { game, cate } from "../../../feature/menu/slice";
import Filterbar from "./filterbar";
import Loading from "../../../loading/loading";
import { AnimatePresence, motion } from "framer-motion";
import { IoDiamondOutline } from "react-icons/io5";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import Filterslide from "./filterslide";
import { useInViewport } from "react-in-viewport";

const Top = () => {
  const [load, setload] = useState(true);
  const loads = useRef();
  const { inViewport } = useInViewport(loads);
  const data = useSelector((state) => state.menu.game);
  const dispatch = useDispatch();
  const [temp, settemp] = useState([]);
  const [limit, setlimit] = useState(10);
  const [lo, setlo] = useState(true);
  const [count, setCount] = useState(0);
  const [slide, setSlide] = useState(false);

  const Tab = ({ info }) => {
    const data = info.map((e) => {
      return (
        <div className=" w-[400px]   sm:mr-10 mb-10 p-5 bg-gradient-to-tr from-[#171C23] to-[#1D2331] shadow-black shadow-md hover:shadow-none rounded-lg transition-all duration-500">
          <div className=" flex items-center justify-between">
            <div className=" flex items-center mb-3">
              <img src={e.avatar} className=" mr-2" />
              <div>
                <div className=" font-bold ">{e.title}</div>
                <div className=" text-gray text-xs ">@{e.developers}</div>
              </div>
            </div>
            <div className=" font-bold text-cream text-xl">{e.rate}%</div>
          </div>
          <img
            src={e.images}
            className=" w-full h-[300px] mb-2 bg-center rounded-md "
            loading="lazy"
          />
          <div className=" h-[1px] w-full bg-gray opacity-25 mb-2"></div>
          <div className=" flex w-full flex-wrap justify-between items-center">
            <div className=" font-bold">
              <div className=" text-xs text-gray my-1 it">Price</div>
              <div className=" flex items-center  text-lg">
                <span className=" mr-2 text-cream">
                  <IoDiamondOutline />
                </span>
                {e.price.toLocaleString()}
                <span className=" text-cream ml-1">NGN</span>
              </div>
            </div>
            <Link to={e.link}>
              <div className="flex items-center px-5 font-bold py-2 bg-cream rounded-md text-dark hover:bg-green cursor-pointer transition-all ease-in-out duration-300">
                Play{" "}
                <span className=" ml-2">
                  <HiMiniArrowLongRight />
                </span>
              </div>
            </Link>
          </div>
        </div>
      );
    });
    return data;
  };
  const Data = async () => {
    dispatch(cate(null));
    const info = await fetch(`https://afgc.onrender.com/get?limit=${limit}`, {
      method: "GET",
    });
    try {
      const jsoninfo = await info.json();
      dispatch(game(jsoninfo[1].g));

      settemp(jsoninfo[1].g);
      setCount(jsoninfo[2].c);
      if (jsoninfo.length != 0) {
        setload(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    Data();
  }, []);

  useEffect(() => {
    if (inViewport && count > data.length) {
      setlimit((prev) => prev + 10);
      Data();
    } else {
      setlo(false);
    }
  }, [inViewport]);

  return (
    <div className=" bg-dark w-full text-white pt-28 font-barlow">
      <AnimatePresence>{load && <Loading />}</AnimatePresence>
      {load || (
        <div className="flex justify-center  2xl:justify-end">
          <div>
            <Filterbar temp={temp} />
            <AnimatePresence>
              {slide && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
                  exit={{ opacity: 0, x: "-100%" }}
                  className=" fixed  2xl:hidden h-full lg:w-[450px]  bg-dak left-0  top-0 pt-28 font-barlow text-white z-50 overflow-y-scroll overflow-x-hidden scrollbar-track-dark  scrollbar-thumb-green scrollbar-thin"
                >
                  <Filterslide temp={temp} setSlide={setSlide} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="w-[90%] 2xl:w-[60%] 3xl:w-[75%]">
            <div className=" text-3xl font-bold mb-7">All Games :</div>
            <div className=" flex">
              <div
                className=" font-bold cursor-pointer mb-3 hover:bg-transparent hover:text-green border-2 border-green border-solid bg-green px-7 rounded-lg text-black py-1 2xl:hidden"
                onClick={() => setSlide(true)}
              >
                Filter
              </div>
            </div>
            <div className=" h-[1px] w-full bg-gray opacity-25 mb-2"></div>
            <div className=" flex justify-center flex-wrap  2xl:pr-10 pt-4">
              <Tab info={data} />
            </div>
            <div className=" justify-center flex w-full my-10">
              {lo && (
                <ReactLoading
                  type="spin"
                  color={"#00FF7B"}
                  height={"3%"}
                  width={"3%"}
                  ref={loads}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Top;
