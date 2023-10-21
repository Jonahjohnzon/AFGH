import React, { useEffect, useState } from "react";
import Top from "./cp/top";
import Second from "./cp/second";
import Third from "./cp/third";
import Footer from "../home/footer";
import { AnimatePresence } from "framer-motion";
import Loading from "../../loading/loading";

const About = () => {
  const [load, setload] = useState(true);
  useEffect(() => {
    setload(false);
  }, []);
  return (
    <div className=" overflow-x-hidden">
      <AnimatePresence>{load && <Loading />}</AnimatePresence>
      {load || (
        <>
          <Top />
          <Second />
          <Third />
          <Footer />
        </>
      )}
    </div>
  );
};

export default About;
