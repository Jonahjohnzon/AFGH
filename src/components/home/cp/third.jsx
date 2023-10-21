import React, { useEffect, useState } from "react";
import EffectText from "../../EffectText";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
/**
 * top creators
 * on chick changes display tab
 */
const Creators = ({ setChecker, Creators_Data, checker }) => {
  const data = Creators_Data.map((index) => {
    const Change = () => {
      setChecker(index._id);
    };
    return (
      <div
        className="group hover:animate-wiggle border-solid  rounded-full border-y-[1px] cursor-pointer "
        style={
          checker == index._id
            ? { borderColor: "#00FF7B" }
            : { borderColor: "#FEBF35" }
        }
        id={index._id}
        onClick={Change}
      >
        <div
          className=" border-solid  rounded-full border-y-[1px]  m-1 group-hover:border-green"
          style={
            checker == index._id
              ? { borderColor: "#00FF7B" }
              : { borderColor: "#FEBF35" }
          }
        >
          <img src={index.avatar} className=" m-2" />
        </div>
      </div>
    );
  });
  return data;
};
/**
 * Display
 */
const Display = ({ checker, Creators_Data }) => {
  const data = Creators_Data.map((index) => {
    var arr = [];
    for (const key in index.cate) {
      if (index.cate[key] == true) {
        if (key == "adventure" || key == "arcade") {
          arr.push({ cate_title: key, ava: "/src/assets/icon1.png" });
        } else if (key == "rpg" || key == "puzzle") {
          arr.push({ cate_title: key, ava: "/src/assets/icon2.png" });
        } else {
          arr.push({ cate_title: key, ava: "/src/assets/icon3.png" });
        }
      }
    }

    return (
      checker == index._id && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          className=" text-white w-[85%] lg:w-[80%] "
          key={index._id}
        >
          <div>
            <div className=" flex flex-col xl:flex-row">
              <img
                src={index.images}
                className=" xl:w-[500px] xl:h-[350px] rounded-md  lg:mr-4"
              />
              <div className=" flex flex-col justify-between">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <section className=" md:w-1/2 ">
                    <h1 className=" font-bold text-3xl mb-2">{index.title}</h1>
                    <div className=" text-cream font-bold text-xl mb-3">
                      RATE <span>{index.rate}</span>%
                    </div>
                    <p className="text-lg text-gray">{index.comment}</p>
                  </section>
                  <section className="md:w-1/2 flex flex-col md:justify-between md:items-end">
                    {arr.map((e) => {
                      return (
                        <div
                          className=" flex items-center bg-gradient-to-r from-ligth_dark to-transparent my-2 p-2 rounded-md shadow-[-20px_25px_60px_-15px_rgba(0,0,0,0.3)] w-5/6 transition ease-in-out duration-500 hover:-translate-x-2 cursor-pointer"
                          key={e.id}
                        >
                          <img src={e.ava} className="mr-3"></img>
                          <div className="  font-bold text-gray">
                            {e.cate_title.toUpperCase()}
                          </div>
                        </div>
                      );
                    })}
                  </section>
                </div>
                <div className=" flex w-full flex-wrap">
                  <Link to={index.link}>
                    <div className=" px-10 mb-2 md:px-20 py-2 md:py-7 bg-gradient-to-bl from-l_dark from-35% to-ligth_dark to-65% font-bold text-gray mr-5 cursor-pointer hover:text-green whitespace-nowrap">
                      PLAY GAME
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    );
  });
  return data;
};
/**
 * @returns : third component
 * top african indie game developers
 */
const Third = ({ data }) => {
  const [checker, setChecker] = useState(data[0]._id);
  return (
    <div className=' bg-[url("/src/assets/area_bg1.jpg")] bg-cover bg-center flex justify-center font-barlow text-white py-40'>
      <div className=" w-full md:w-5/6 flex justify-center">
        <div className=" flex flex-col items-center ">
          <div className="text-green font-bold mb-3">
            <EffectText words={"MEET AFRICAN GAME DEVELOPER"} />
          </div>
          <div className=" font-bold text-3xl sm:text-5xl mb-7 ">
            INDIE GAME DEVS
          </div>
          <div className=" h-0  border-t-8 border-t-green border-l-transparent border-l-8  border-r-transparent border-r-8 w-1/2 self-center mb-10"></div>
          <div className=" flex flex-col sm:flex-row items-center w-1/2 justify-around mb-20">
            <div className=" border-solid border-green border-2 hover:bg-green  mb-4 sm:mb-0 transition-all">
              <div className=" border-solid border-green border-2 mx-2 px-2 py-2 font-bold">
                LATEST
              </div>
            </div>
            <div className=" border-solid border-cream border-2 hover:bg-cream  transition-all">
              <div className=" border-solid border-cream border-2 mx-2 px-2 py-2 font-bold">
                GAMES
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-center mb-10">
            <div className="w-[50vw] border-t-[1px] border-t-green border-solid border-r-transparent border-r-[25vw]   border-l-transparent border-l-[25vw] mb-5 "></div>
            <div className=" flex flex-wrap justify-around lg:justify-between w-full md:w-1/2">
              <Creators
                setChecker={setChecker}
                checker={checker}
                Creators_Data={data}
              />
            </div>
            <div className="w-[50vw] border-t-[1px] border-t-green border-solid border-r-transparent border-r-[25vw]   border-l-transparent border-l-[25vw] my-5 "></div>
          </div>
          <div className="flex justify-center text-start">
            <Display checker={checker} Creators_Data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
