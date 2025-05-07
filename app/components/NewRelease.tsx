"use client";
import React from "react";
import Slider from "react-slick";
import newReleaseData from "./newRelease/newReleaseData";
import Image from "next/image";

const NewRelease = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
  };
  return (
    <section
      className="py-[15px] px-[62px] w-full mx-auto newrelease-sec relative flex justify-center items-center"
      id="new-releases">
      <div className="container">
        <div>
          <p className="text-center uppercase text-[13px] text-[#7A7A7A] font-[500]">
            some quality items
          </p>
          <div className="flex justify-center items-center">
            <div className="w-1/4 h-px bg-gray-300"></div>
            <h1 className="text-center capitalize text-[48px] text-[#393280] font-[600] py-[10px] px-[25px]">
              new release books
            </h1>
            <div className="w-1/4 h-px bg-gray-300"></div>
          </div>
        </div>
        <div className="newbooks-container w-full  ">
          <Slider
            {...settings}
            className="  border-b-1 border-[#E0E0E0] pb-[40px] flex justify-center">
            {newReleaseData.map((e, index) => {
              return (
                <div className="newbooks-card  px-3" key={index}>
                  <div className="img-sec h-[400px]  flex justify-center items-center  border-1 border-[#EAE8DF] cursor-pointer relative">
                    <Image
                      src={`/${e.img}`}
                      alt="header image"
                      width={318}
                      height={219}
                    />
                    <button className="w-[90%] absolute cursor-pointer bg-[#ED553B] text-[16px] text-[#FFFFFF] py-[5px] uppercase">
                      {e.btn}
                    </button>
                  </div>
                  <div className="text-sec text-center ">
                    <h1 className="text-[22px] font-[600] text-[#393280] py-[5px]">
                      {e.h1}
                    </h1>
                    <p className="text-[14px] text-[#888888]  py-[10px]">
                      {e.p}
                    </p>
                    <span className="text-[18px] font-[700] text-[#ED553B]">
                      {e.span}
                    </span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NewRelease;
