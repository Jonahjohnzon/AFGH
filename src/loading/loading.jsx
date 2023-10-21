import React from "react";
import ReactLoading from "react-loading";
import { motion } from "framer-motion";

const Loading = () => {
  const slide = {
    exit: {
      opacity: 1,
      y: "-100%",
      transition: {
        duration: 1,
        delay: 0.1,
      },
    },
  };
  return (
    <motion.div
      variants={slide}
      exit="exit"
      className=" bg-[#0F151B] h-[100%] w-[100%] flex justify-center items-center fixed z-50 top-0"
    >
      <ReactLoading type="bars" height={"5%"} width={"5%"} />
    </motion.div>
  );
};

export default Loading;
