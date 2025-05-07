"use client";
import React from "react";
import Slider from "react-slick";
import CountdownTimer from "./salesSecComp/CountDownTimer";
import SaleSecdata from "./salesSecComp/saleSecdata";
import Image from "next/image";

const Salesection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };
  return (
    <section
      className="sale-section py-[15px] px-[62px] flex items-center justify-center  "
      id="book">
      <div className="container">
        <Slider {...settings} className=" h-[screen]">
          {SaleSecdata.map((e, index) => {
            return (
              <div
                className="sale-sec-container w-full flex justify-center   flex-nowrap items-center header-container py-[15px] px-[62px] bg-[#FCEBEA]  rounded-xl"
                key={index}>
                <div className="sec-text w-[50%]">
                  <h1 className="text-[45px] text-[#463C74] font-[700]">
                    {e.h1}
                  </h1>
                  <h1 className="text-[45px] text-[#463C74] font-[700]">
                    {e.h11}
                  </h1>
                  <p className="text-[18px] text-[#393280]">{e.p}</p>
                  <div className="text-left">
                    <CountdownTimer></CountdownTimer>
                  </div>
                </div>

                <div className="sec-img w-[50%]">
                  <Image
                    src={`/${e.img}`}
                    alt="header image"
                    width={488}
                    height={632}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Salesection;
