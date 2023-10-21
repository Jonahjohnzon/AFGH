import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { filterbar } from "../../test/testapi";
import EffectText from "../../EffectText";
import { game, cate } from "../../../feature/menu/slice";
import { useDispatch, useSelector } from "react-redux";
import Box from "../../home/cp/box";

const Filterslide = ({ temp, setSlide }) => {
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
    setSlide(false);
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
    setSlide(false);
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
    setSlide(false);
  };
  const Check = (x, et) => {
    setColora("");
    setColorb("");
    setColorc("");
    dispatch(cate(null));
    if (x.target.checked) {
      const newgame = [];
      dispatch(game(newgame));

      const newgames = temp.filter(
        (e) => e.category.toUpperCase() == et.toUpperCase(),
      );
      console.log(newgames);
      dispatch(game(newgame.concat(newgames)));
      setSlide(false);
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
    <div className="">
      <div className=" flex justify-center items-center">
        <div className=" w-[80%]">
          {/*logo*/}
          <div className=" flex mb-6">
            <div className=" w-[20%] 2xl:w-1/6 flex items-center">
              <img src="/src/assets/logo_.png" className=" w-[30%] mr-3" />
              <p className=" font-extrabold text-4xl tracking-widest">
                AF<span className=" text-green">G</span>C
              </p>
            </div>
            <div className="flex justify-end w-full items-center">
              <div
                className=" transition-all duration-500 cursor-pointer fill-gray hover:fill-black hover:bg-green rounded-full "
                onClick={() => setSlide(false)}
              >
                <svg
                  className="w-[20px] h-[20px] m-[20px]"
                  viewBox="0 0 307.164 307.164"
                  enable-background="new 0 0 307.164 307.164"
                >
                  <g>
                    <path d="m193.307,126.847c40.828-33.225 75.857-73.173 103.504-118.246 0.598-0.975 0.419-2.236-0.426-3.006-0.845-0.77-2.118-0.83-3.032-0.144-9.58,7.185-24.574,17.651-39.701,25.109-19.557,9.641-40.571,13.577-51.19,15.055-4.476,0.623-8.461,3.156-10.929,6.941-5.225,8.016-15.351,23.039-28.405,39.984 6.044,7.515 12.568,15.213 19.406,22.654 3.755,4.085 7.343,7.965 10.773,11.653z" />
                    <path d="m115.393,147.168c-17.296,18.396-29.524,30.808-36.563,37.816l-3.183-3.183c-3.906-3.904-10.236-3.904-14.143,0-3.905,3.905-3.905,10.237 0,14.143l1.405,1.405c-3.597-0.354-7.317,0.844-10.071,3.598-3.232,3.232-4.311,7.791-3.263,11.921-4.131-1.048-8.69,0.031-11.922,3.262-3.232,3.232-4.311,7.792-3.263,11.922-4.13-1.047-8.69,0.031-11.921,3.262-2.991,2.991-4.14,7.119-3.466,10.992l-1.932-1.932c-3.906-3.904-10.236-3.904-14.143,0-3.905,3.905-3.905,10.237 0,14.143l42.193,42.192c1.608,1.607 3.716,2.619 5.977,2.868l23.146,2.55c0.372,0.041 0.741,0.061 1.107,0.061 5.031,0 9.363-3.789 9.927-8.906 0.605-5.489-3.354-10.43-8.845-11.034l-19.653-2.165-14.243-14.243c0.712,0.124 1.432,0.195 2.153,0.195 3.199,0 6.398-1.221 8.839-3.661 3.232-3.232 4.311-7.791 3.263-11.921 1.011,0.257 2.046,0.399 3.083,0.399 3.199,0 6.398-1.221 8.839-3.661 3.232-3.232 4.311-7.791 3.263-11.922 1.011,0.256 2.045,0.398 3.082,0.398 3.199,0 6.398-1.221 8.839-3.661 2.755-2.755 3.953-6.475 3.599-10.071l2.814,2.814 2.166,19.653c0.563,5.118 4.895,8.906 9.927,8.906 0.366,0 0.735-0.02 1.107-0.061 5.49-0.605 9.45-5.545 8.845-11.034l-2.55-23.145c-0.249-2.261-1.261-4.368-2.868-5.977l-5.84-5.84 41.007-41.007c-9.115-6.05-18.025-12.416-26.712-19.076z" />
                    <path d="m304.235,240.375c-3.906-3.904-10.236-3.904-14.143,0l-1.932,1.932c0.674-3.873-0.475-8.001-3.466-10.992-3.232-3.232-7.79-4.31-11.921-3.262 1.048-4.131-0.03-8.691-3.262-11.922-3.232-3.232-7.79-4.31-11.92-3.263 1.047-4.13-0.031-8.689-3.263-11.921-1.167-1.167-2.512-2.048-3.943-2.657-1.946-0.828-4.057-1.146-6.13-0.941l1.406-1.406c3.905-3.905 3.905-10.237 0-14.143-3.906-3.904-10.236-3.904-14.143,0l-3.183,3.183c-9.534-9.492-28.572-28.879-56.844-59.64-25.939-28.223-47.365-59.759-55.859-72.788-2.468-3.786-6.453-6.319-10.929-6.942-10.619-1.478-31.633-5.414-51.19-15.055-15.128-7.456-30.122-17.923-39.702-25.107-0.425-0.319-0.927-0.476-1.428-0.476-0.577,0-1.152,0.209-1.604,0.621-0.845,0.77-1.024,2.031-0.426,3.006 36.374,59.301 85.515,109.744 143.847,147.654l2.486,1.615 49.381,49.381-5.84,5.84c-1.607,1.608-2.619,3.716-2.868,5.977l-.068,.62-2.481,22.526c-0.606,5.489 3.354,10.43 8.845,11.034 0.372,0.041 0.741,0.061 1.107,0.061 5.031,0 9.363-3.788 9.927-8.906l1.29-11.707 4.632-4.632c0.609,1.431 1.489,2.775 2.656,3.942 2.44,2.44 5.64,3.661 8.839,3.661 1.037,0 2.072-0.142 3.083-0.399-1.048,4.131 0.03,8.69 3.262,11.922 2.441,2.441 5.64,3.661 8.839,3.661 1.037,0 2.071-0.142 3.082-0.398-1.048,4.13 0.031,8.689 3.263,11.921 2.44,2.44 5.64,3.661 8.839,3.661 0.721,0 1.441-0.071 2.154-0.195l-14.243,14.243-19.653,2.165c-5.49,0.604-9.45,5.545-8.845,11.034 0.563,5.118 4.895,8.906 9.927,8.906 0.366,0 0.735-0.021 1.107-0.061l23.146-2.55c2.261-0.249 4.368-1.261 5.977-2.868l42.192-42.192c3.904-3.906 3.904-10.238-0.001-14.143z" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <form className=" mb-[6vh]">
            <div className="flex item">
              <input
                type="text"
                className=" bg-transparent border-solid border-[0.01em] w-full h-14 rounded-s-full border-gray pl-5 font-bold placeholder:font-normal "
                placeholder="Search"
                onChange={(e) => Search(e.target.value)}
              />
              <div
                className=" border-solid border-[0.1em] px-5 flex items-center flex-1 rounded-e-full border-gray"
                onClick={() => setSlide(false)}
              >
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
                    setSlide(false);
                    dispatch(cate(null));
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
                      setSlide(false);
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
                          className=" mr-14 mb-5 w-28 whitespace-nowrap cursor-pointer"
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
                    <Box no={8} />
                    <Box no={8} />
                    <Box no={8} />
                    <Box no={8} />
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

export default Filterslide;
