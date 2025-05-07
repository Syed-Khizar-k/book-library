import React from "react";
import Tagtext from "./categoriesComp/Tagtext";
import Image from "next/image";

const Ebooksecion = () => {
  return (
    <section className="w-full py-[15px] px-[62px] flex justify-center items-center ebook jkl my-[50px]">
      <div className="container flex">
        <div className="w-[50%] py-[15px] px-[62px] bg-gradient-to-br from-[#FCECEC] to-[#F6FFFE] ">
          <Tagtext text="ebook"></Tagtext>
          <h1 className="text-[30px] font-[800] text-[#38426C] ">
            Access, Read, Practice & Engage with Digital Content (eBook){" "}
          </h1>
          <p className="text-[18px] text-[#393280B2] py-[25px] leading-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut
            magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
          <form className="w-full flex py-[20px]">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-[80%] p-[10px] rounded-l-lg outline-none bg-white"
            />
            <button
              className="w-[20%] bg-[#ED553B] rounded-r-lg text-[20px] text-[#ffff] font-[700] cursor-pointer"
              type="submit">
              Login
            </button>
          </form>
        </div>
        <div className="w-[50%]">
          <Image src="/ebook.png" alt="book image" height={552} width={684} />
        </div>
      </div>
    </section>
  );
};

export default Ebooksecion;
