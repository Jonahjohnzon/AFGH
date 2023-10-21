import React, { useEffect, useState } from "react";
import Top from "./cp/top";
import Second from "./cp/second";
import Third from "./cp/third";
import Fourth from "./cp/fourth";
import Fifth from "./cp/fifth";
import Footer from "./footer";
import Loading from "../../loading/loading";
import { AnimatePresence } from "framer-motion";

const Home = () => {
  const [load, setload] = useState(true);
  const [data, setData] = useState("");
  const Data = async () => {
    const info = await fetch("https://afgc.onrender.com/get?limit=10", {
      method: "GET",
    });
    try {
      const jsoninfo = await info.json();
      setData(jsoninfo);
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
  return (
    <div className=" overflow-x-hidden">
      <AnimatePresence>{load && <Loading />}</AnimatePresence>
      {load || (
        <>
          <Top />
          <Second datas={data[1]?.g?.slice(0, 3)} />
          <Third data={data[1]?.g?.slice(-3)} />
          <Fourth data={data[3]?.p.slice(-7)} />
          <Fifth data={data[0]?.t.slice(-3)} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
