"use client";
import React from "react";
import Slider from "react-slick";
import HeaderData from "./headerComp/HeaderData";
import Button from "./navbarComp/Button";
import Image from "next/image";

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };
  interface bkl {
    p: string;
    img: string;
    h1: string;
    btn: string;
    slug: string;
  }
  return (
    <section className="w-full flex items-center justify-center">
      <Slider
        {...settings}
        className=" container pt-[100px] mb-[100px] h-[screen]">
        {HeaderData.map((e: bkl, index) => {
          return (
            <div
              className="w-full flex-col-reverse md:flex-row flex-wrap justify-between  items-center text-black header-container "
              key={index}>
              <div className="left-side-header md:py-[15px] px-4.5 md:px-[62px] md:w-[50%]">
                <h1 className="md:text-[60px] text-[38px] font-[600] text-[#393280] uppercase">
                  {e.h1}
                </h1>
                <p className="md:text-[22px] text-[16px] font-[500] text-[#393280CC] my-[20px]">
                  {e.p}
                </p>
                <Button text={e.btn} slug={e.slug}></Button>
              </div>
              <div className="right-side-header md:w-[50%] ">
                <Image
                  src={`${e.img}`}
                  alt="header image"
                  width={413}
                  height={507}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Header;
