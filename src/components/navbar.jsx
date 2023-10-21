import React, { useEffect, useCallback, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { PiNotePencilBold } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import { BiMenu } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { openmenu, secondopen } from "../feature/menu/slice";
import { Link } from "react-router-dom";

/*
Navbar - navbar component 
*/
const Navbar = () => {
  const dispatch = useDispatch();
  const [y, setY] = useState(0);
  const [show, setshow] = useState(true);
  const [color, setcolor] = useState(true);
  const variant = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: -80 },
    exit: { opacity: 0, y: -80 },
  };
  const handleNavigation = useCallback(
    /**
     * Get scroll direction for navbar animation
     */
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        if (window.scrollY <= 10) {
          setcolor(true);
        } else {
          setcolor(false);
        }
        setshow(true);
      } else if (y < window.scrollY) {
        setshow(false);
      }
      setY(window.scrollY);
    },
    [y],
  );
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={variant}
          animate="visible"
          initial="hidden"
          exit="hidden"
          className={` fixed top-0 w-full flex justify-center text-white   font-barlow z-40`}
          style={
            color ? { background: "none" } : { backgroundColor: "#181F2A" }
          }
        >
          <div className=" w-[90%] 2xl:w-5/6">
            <section className=" w-full flex justify-between items-center pt-4 pb-3 md:pt-0">
              {/*logo*/}
              <div className=" w-[20%] 2xl:w-1/6 flex items-center">
                <img src="/assets/logo_.png" className=" w-[30%] mr-3" />
                <p className=" font-extrabold text-4xl tracking-widest">
                  AF<span className=" text-green">G</span>C
                </p>
              </div>
              {/*menu*/}
              <div className=" hidden lg:block w-[45%] 2xl:w-[30%]  ">
                <ul className=" flex justify-between font-bold">
                  <Link to="/">
                    <li className=" group hover:text-green cursor-pointer relative w-fit">
                      {" "}
                      <div className=" w-12 absolute left-0 opacity-0 bg-green h-[1px] top-1/2 group-hover:-rotate-45 group-hover:opacity-100 transition-all"></div>
                      HOME
                    </li>
                  </Link>
                  <Link to="/about">
                    <li className=" group hover:text-green cursor-pointer relative">
                      <div className=" w-12 absolute left-[20%] opacity-0 bg-green h-[1px] top-1/2 group-hover:-rotate-45 group-hover:opacity-100 transition-all"></div>
                      ABOUT US
                    </li>
                  </Link>
                  <Link to="/afrogames">
                    <li className=" group hover:text-green cursor-pointer relative">
                      <div className=" w-12 absolute left-[30%] right-1/2 opacity-0 bg-green h-[1px] top-1/2 group-hover:-rotate-45 group-hover:opacity-100 transition-all"></div>
                      AFROGAMES
                    </li>
                  </Link>
                  <Link to="/contact">
                    <li className=" group hover:text-green cursor-pointer relative">
                      <div className=" w-12 absolute left-[20%] right-0 opacity-0 bg-green h-[1px] top-1/2 group-hover:-rotate-45 group-hover:opacity-100 transition-all"></div>
                      CONTACT
                    </li>
                  </Link>
                  <li className="group  cursor-pointer relative text-text ">
                    COMIKAL
                    <div className=" group-hover:block absolute top-5 hidden -right-20 bg-white text-black p-2 rounded-md">
                      Coming Soon!
                    </div>
                  </li>
                </ul>
              </div>
              {/*profile*/}
              <div className=" w-[50%] lg:w-[30%] 2xl:w-2/6 flex justify-end ">
                <div className=" flex w-[90%] 2xl:w-[59%] justify-between items-center">
                  <div>
                    <BiSearch className=" text-2xl hover:text-green cursor-pointer hidden md:block" />
                  </div>
                  <div className="group w-[180px] h-[50px] md:flex flex-col hidden justify-center cursor-pointer ">
                    <div className="group-hover:border-t-[1px] transition-all w-[180px] border-t-green border-t-[20px] border-r-[30px] border-r-transparent border-l-[30px] border-l-transparent rotate-180"></div>
                    <div className=" group-hover:border-t-[1px] transition-all  w-[180px] border-t-green border-t-[20px] border-r-[30px] border-r-transparent border-l-[30px] border-l-transparent relative">
                      <Link to="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMVkjNhRpxTtRHTZZpnvzKZLqbldttjFqvRJrrTwqGJBZJRBCXQSltdnWBNzWSNBwljpQrM">
                        <div className=" absolute bottom-2  w-full">
                          <div className=" flex items-center font-bold transition-all  text-dark group-hover:text-white">
                            <span>
                              <PiNotePencilBold className="text-lg mr-2" />
                            </span>
                            <div>~SUBSCRIBE</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="group text-white h-[28px] md:flex flex-col justify-between cursor-pointer hidden"
                    onClick={() => dispatch(openmenu(true))}
                  >
                    <div className=" w-[50px] flex justify-start">
                      <div className="group-hover:w-full h-[2px] bg-white w-1/2 transition-all"></div>
                    </div>
                    <div className=" w-[50px]">
                      <div className="w-full h-[2px] bg-white"></div>
                    </div>
                    <div className=" w-[50px] flex justify-end">
                      <div className="group-hover:w-full h-[2px] bg-white w-1/2 transition-all"></div>
                    </div>
                  </div>
                  <div
                    className=" text-green border-green border-2 border-solid lg:hidden"
                    onClick={() => dispatch(secondopen(true))}
                  >
                    <BiMenu className=" text-4xl mx-1" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
