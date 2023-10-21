import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Button = ({ Name, link }) => {
  const [numb, setnumb] = useState(436);
  const Animate = () => {
    setnumb(0);

    setTimeout(() => {
      setnumb(436);
    }, [1000]);
  };

  return (
    <Link to={link}>
      {" "}
      <a
        className="text-[14px] !text-[#fff] tracking-[0.5px] font-bold  cursor-pointer"
        onMouseOver={Animate}
      >
        <div
          className=" relative svg-icon !fill-transparent  !stroke-[#45f882]"
          id="svg-6"
          data-svg-icon="assets/img/icons/shape.svg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%" }}
            viewBox="0 0 188 61"
          >
            <path
              className="cls-1 transition-all ease-linear duration-1000"
              d="M874,554.154L893.08,524h146.67L1060,552.843,1039.75,583H893.08Z"
              transform="translate(-873 -523)"
              style={{ strokeDasharray: `${numb}, 438`, strokeDashoffset: 0 }}
            ></path>
          </svg>
          <div className=" w-full h-full sm:text-base text-[10px] flex justify-center items-center absolute top-0 left-0">
            <span>{Name}</span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Button;
