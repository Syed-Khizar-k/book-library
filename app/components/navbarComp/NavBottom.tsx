
import React from "react";
import Links from "./Links";

const NavBottom = () => {
  return (
    <div className="w-full py-[15px] px-[62px] md:flex justify-center items-center hidden">
      <div className=" text-[#444444] md:flex text-[16px] font-[700] tracking-[2px] uppercase hidden">
        <Links />
      </div>
    </div>
  );
};

export default NavBottom;
