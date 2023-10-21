import React, { useState, useEffect } from "react";
import Top from "./cp/top";
import Second from "./cp/second";
import Maps from "./cp/map";
import Footer from "../home/footer";
import { AnimatePresence } from "framer-motion";
import Loading from "../../loading/loading";

const Contact = () => {
  const [load, setload] = useState(true);
  useEffect(() => {
    setload(false);
  }, []);
  return (
    <div>
      <AnimatePresence>{load && <Loading />}</AnimatePresence>
      {load || (
        <>
          <Top />
          <Second setload={setload} />
          <Maps />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Contact;
