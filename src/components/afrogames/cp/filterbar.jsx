import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { filterbar } from "../../test/testapi";
import EffectText from "../../EffectText";
import { cate, game } from "../../../feature/menu/slice";
import { useDispatch, useSelector } from "react-redux";
import Box from "../../home/cp/box";

const Filterbar = ({ temp }) => {
  const dispatch = useDispatch();
  const catea = useSelector((state) => state.menu.cate);
  const [colora, setColora] = useState("none");
  const [colorb, setColorb] = useState("none");
  const [colorc, setColorc] = useState("none");
  const Topseller = () => {
    setColora("rgba(0,255,124,0.2)");
    setColorb("");
    setColorc("");
    const newgame = temp.filter((e) => e.sale > 0);
    dispatch(game(newgame));
  };
  const Alpha = () => {
    setColorb("rgba(0,255,124,0.2)");
    setColora("");
    setColorc("");
    const newgame = [...temp].sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    });
    dispatch(game(newgame));
  };
  const Rate = () => {
    setColorc("rgba(0,255,124,0.2)");
    setColorb("");
    setColora("");
    const newgame = [...temp].sort((a, b) => {
      const rateA = a.rate;
      const rateB = b.rate;

      if (rateA > rateB) return -1;
      if (rateA < rateB) return 1;
      return 0;
    });

    dispatch(game(newgame));
  };
  const Check = (x, et) => {
    setColora("");
    setColorb("");
    setColorc("");
    if (x.target.checked) {
      const newgame = [];
      dispatch(game(newgame));
      const newgames = temp.filter(
        (e) => e.category.toUpperCase() == et.toUpperCase(),
      );
      dispatch(game(newgame.concat(newgames)));
    }
  };
  const Search = (search) => {
    setColora("");
    setColorb("");
    setColorc("");
    const newgames = temp.filter((e) => e.title.includes(search.toUpperCase()));
    dispatch(game(newgames));
  };
  return (
    <div className=" hidden 2xl:block  fixed h-full w-[450px] bg-dak left-0  top-0 pt-28 font-barlow text-white">
      <div className=" flex justify-center ">
        <div className=" w-[80%] ">
          {/*logo*/}
          <div className="mb-10 w-[20%] 2xl:w-1/6 flex items-center">
            <img src="/assets/logo_.png" className=" w-[30%] mr-3" />
            <p className=" font-extrabold text-4xl tracking-widest">
              AF<span className=" text-green">G</span>C
            </p>
          </div>
          <form className=" mb-[6vh]">
            <div className="flex item">
              <input
                type="text"
                className=" bg-transparent border-solid border-[0.01em] w-full h-14 rounded-s-full border-gray pl-5 font-bold placeholder:font-normal "
                placeholder="Search"
                onChange={(e) => Search(e.target.value)}
              />
              <div className=" border-solid border-[0.1em] px-5 flex items-center flex-1 rounded-e-full border-gray">
                <BiSearch
                  size={20}
                  className=" hover:text-cream text-green cursor-pointer transition-all duration-500"
                />
              </div>
            </div>
          </form>
          <div>
            <div className="  mb-[6vh]">
              <div className=" flex items-end justify-between mb-3">
                <h1 className=" text-3xl font-bold">
                  <EffectText words={"SORT BY :"} />
                </h1>
                <h1
                  className=" text-green font-bold  cursor-pointer hover:text-cream "
                  onClick={() => {
                    setColora("");
                    setColorb("");
                    setColorc("");
                    dispatch(game(temp));
                  }}
                >
                  Clear X
                </h1>
              </div>
              <div>
                <ul className=" flex justify-between ">
                  <li
                    className="rounded-s-md  w-full border-[1px] border-solid border-green py-2 flex justify-center cursor-pointer  hover:bg-green bg-opacity-40 hover:bg-opacity-20"
                    onClick={Topseller}
                    style={{ backgroundColor: colora }}
                  >
                    Top Sellers
                  </li>
                  <li
                    className="w-full border-[1px] border-solid border-green  py-2 flex justify-center cursor-pointer  hover:bg-green bg-opacity-40 hover:bg-opacity-20"
                    onClick={Alpha}
                    style={{ backgroundColor: colorb }}
                  >
                    Alphabetical
                  </li>
                  <li
                    className="rounded-e-md  w-full border-[1px] border-solid border-green  py-2 flex justify-center cursor-pointer  hover:bg-green hover:bg-opacity-20"
                    onClick={Rate}
                    style={{ backgroundColor: colorc }}
                  >
                    Rating
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <div className=" flex items-end justify-between mb-3">
                  <h1 className=" text-3xl font-bold">
                    <EffectText words={"Filter BY :"} />
                  </h1>
                  <h1
                    className=" text-green font-bold cursor-pointer hover:text-cream"
                    onClick={() => {
                      setColora("");
                      setColorb("");
                      setColorc("");
                      dispatch(cate(null));
                      dispatch(game(temp));
                    }}
                  >
                    Clear X
                  </h1>
                </div>
                <div>
                  <div className=" text-green font-bold mb-8">GENRE</div>
                  <div className=" flex flex-wrap justify-between">
                    {filterbar.map((e) => {
                      return (
                        <div
                          key={e.id}
                          className=" mr-14 mb-5 w-28 whitespace-nowrap "
                        >
                          <div className=" flex items-center ">
                            <input
                              id={e.cate}
                              type="radio"
                              checked={catea === e.cate}
                              name="category"
                              className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-green before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-green checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-green checked:after:bg-green checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-green checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                              onChange={(x) => {
                                Check(x, e.cate);
                                dispatch(cate(e.cate));
                              }}
                            />
                            <label className=" cursor-pointer" htmlFor={e.cate}>
                              {e.cate}
                            </label>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div>
                <div className="   h-20">
                  <div className=" pt-3">
                    <Box no={5} />
                    <Box no={8} />
                    <Box no={8} />
                    <Box no={5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filterbar;
