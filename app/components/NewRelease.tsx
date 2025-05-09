"use client";
import React from "react";
import Slider from "react-slick";
import newReleaseData from "./newReleaseComp/newReleaseData";

import NewReleasesBookCard from "./newReleaseComp/NewReleasesBookCard";

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
            {newReleaseData.map((item, index) => {
              return (
                <NewReleasesBookCard
                  key={index}
                  image={item.img}
                  heading={item.h1}
                  text={item.p}
                  button={item.btn}
                  span={item.span}
                  slug={item.slug}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NewRelease;
