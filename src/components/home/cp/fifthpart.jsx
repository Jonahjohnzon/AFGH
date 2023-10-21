import React from "react";
import Tab from "../../Tab";
import EffectText from "../../EffectText";

const Fifthpart = ({ data }) => {
  return (
    <div className=" font-barlow flex justify-center">
      <div className="w-5/6">
        <div className="flex flex-col items-center">
          <h6 className=" text-green font-bold mb-5 ">
            <EffectText words={"EVENTS LIST"} />
          </h6>
          <h1 className=" font-bold text-3xl mb:text-5xl mb-5">
            UPCOMING MATCHES
          </h1>
          <div className=" h-0  border-t-8 border-t-green border-l-transparent border-l-8  border-r-transparent border-r-8 w-32 self-center mb-20"></div>
        </div>
        <div className=" flex flex-col items-center w-full">
          {data.map((e) => {
            return <Tab data={e} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Fifthpart;
