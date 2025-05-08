import React from "react";
import newReleaseData from "./newReleaseComp/newReleaseData";
import NewReleasesBookCard from "./newReleaseComp/NewReleasesBookCard";

const ProductArea = () => {
  return (
    <section className="w-full flex justify-center items-center py-8 px-18">
      <div className="container flex ">
        <aside className="w-[25%]  px-8">
          <ul className="text-blue text-[16px]">
            <li className="flex justify-between items-center font-[700]  border-b-2 border-gray">
              <span className=" py-2.5">Price</span> <span>+</span>
            </li>
            <li className="flex justify-between items-center font-[700]  border-b-2 border-gray">
              <span className=" py-2.5">Price</span> <span>+</span>
            </li>
            <li className="flex justify-between items-center font-[700]  border-b-2 border-gray">
              <span className=" py-2.5">Price</span> <span>+</span>
            </li>
            <li className="flex justify-between items-center font-[700]  border-b-2 border-gray">
              <span className=" py-2.5">Price</span> <span>+</span>
            </li>
            <li className="flex justify-between items-center font-[700]  border-b-2 border-gray">
              <span className=" py-2.5">Price</span> <span>+</span>
            </li>
            <li className="flex justify-between items-center font-[700]  border-b-2 border-gray">
              <span className=" py-2.5">Price</span> <span>+</span>
            </li>
          </ul>
        </aside>

        <section className="w-[75%] px-14">
          <div className="w-full flex justify-between">
            <div>
              <div className="flex text-base font-bold gap-45 text-[#393280]">
                <div>Sort by: Alphabetically, A-Z</div>
                <div>Showing 1-12 of 26 result</div>
                <div>Show: 12</div>
              </div>
            </div>
            <div>
              <button>Hi</button>
              <button>World</button>
            </div>
          </div>

          <div className="flex flex-wrap">
            {newReleaseData.map((item, index) => {
              return (
                <NewReleasesBookCard
                key={index}
                  image={item.img}
                  heading={item.h1}
                  text={item.p}
                  span={item.span}
                  button={item.btn}
                />
              );
            })}
          </div>

          <div></div>
        </section>
      </div>
    </section>
  );
};

export default ProductArea;
