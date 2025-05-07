import React from "react";
import Button from "./navbarComp/Button";
import Image from "next/image";
const FeaturedBook = () => {
  return (
    <section
      className="w-full py-[15px] px-[62px] flex items-center justify-center"
      id="featured">
      <div className="container ">
        <div className="featured-container flex justify-center items-center">
          <div className="featured-img">
            <Image
              src="/featuredbook.png"
              alt="featured-book"
              className="h-[500px] w-[370px]"
              height={602}
              width={414}
            />
          </div>
          <div className="featured-text w-[50%]">
            <h1 className="text-[48px] text-[#393280] font-[600] py-[20px]">
              Featured Book
            </h1>
            <span>{""}</span>
            <p className="uppercase text-[13px] text-[#888888]">
              by timbur hood
            </p>
            <h2 className="text-[28px] text-[#393280] font-[600] capitalize py-[10px]">
              Birds gonna be happy
            </h2>
            <p className=" text-[16px] text-[#888888] py-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              feugiat amet, libero ipsum enim pharetra hac.
            </p>
            <h3 className="text-[23px] text-[#ED553B] font-[700] py-[10px]">
              $ 45.00
            </h3>
            <Button text="view more"></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBook;
