"use client";
import React, { useState } from "react";
import newReleaseData from "./newReleaseComp/newReleaseData";
import NewReleasesBookCard from "./newReleaseComp/NewReleasesBookCard";

const ProductArea = () => {
  //use state for product cards
  const [productCards, setProductCards] = useState(newReleaseData);
  //sorted function A-Z
  const sortFunc = () => {
    const sorted = [...productCards].sort((a, b) => a.h1.localeCompare(b.h1));
    setProductCards(sorted);
  };
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Store index of opened item

  const toggle = (index: number) => {
    // Toggle logic
    setOpenIndex(openIndex === index ? null : index);
  };
  // const data = [
  //   { text: "Price" },
  //   { text: "Availability" },
  //   { text: "Color" },
  //   { text: "Author" },
  //   { text: "Published" },
  // ];
  return (
    <section className="w-full flex justify-center items-center py-8 px-18">
      <div className="container flex">
        <aside className="w-[25%] px-8 py-2 sticky top-28 h-fit">
          <ul className="text-blue text-[16px]">
            <li className="flex justify-between items-center font-[700] border-b-2 border-gray py-1.5">
              <span className="py-2.5">Price</span>
              <span
                className="text-[20px] cursor-pointer"
                onClick={() => toggle(0)}>
                {openIndex === 0 ? <>-</> : <>+</>}
              </span>
            </li>
            <div
              className={`transition-all duration-600 ease-in-out overflow-hidden ${
                openIndex === 0
                  ? "max-h-40 opacity-100 py-2"
                  : "max-h-0 opacity-0 py-0"
              }`}>
              {openIndex === 0 && (
                <div>
                  <div className="flex gap-2 justify-center py-2">
                    ${" "}
                    <input
                      type="text"
                      className="w-[30%] border border-gray outline-none"
                    />
                    <span>To</span>${" "}
                    <input
                      type="text"
                      className=" w-[30%] border border-gray outline-none"
                    />
                  </div>
                  <button className="bg-blue w-full py-2 text-white cursor-pointer">
                    Filter
                  </button>
                </div>
              )}
            </div>

            {/* first component closed */}

            <li className="flex justify-between items-center font-[700] border-b-2 border-gray py-1.5">
              <span className="py-2.5">Availability</span>
              <span
                className="text-[20px] cursor-pointer"
                onClick={() => toggle(1)}>
                {openIndex === 1 ? <>-</> : <>+</>}
              </span>
            </li>
            <div
              className={`transition-all duration-600 ease-in-out overflow-hidden ${
                openIndex === 1
                  ? "max-h-40 opacity-100 py-2"
                  : "max-h-0 opacity-0 py-0"
              }`}>
              {openIndex === 1 && (
                <div>
                  <div className="flex gap-5 justify-center">
                    <input type="checkbox" /> YES
                    <input type="checkbox" /> NO
                  </div>
                  <button className="bg-blue w-full py-2 text-white cursor-pointer">
                    Filter
                  </button>
                </div>
              )}
            </div>
            {/* second component closed  */}

            <li className="flex justify-between items-center font-[700] border-b-2 border-gray py-1.5">
              <span className="py-2.5">Colour</span>
              <span
                className="text-[20px] cursor-pointer"
                onClick={() => toggle(2)}>
                {openIndex === 2 ? <>-</> : <>+</>}
              </span>
            </li>
            <div
              className={`transition-all duration-600 ease-in-out overflow-hidden ${
                openIndex === 2
                  ? "max-h-40 opacity-100 py-2"
                  : "max-h-0 opacity-0 py-0"
              }`}>
              {openIndex === 2 && (
                <div>
                  <div className="py-2">
                    Colour :{" "}
                    <input
                      type="text"
                      className=" w-[70%] border border-gray outline-none"
                    />
                  </div>
                  <button className="bg-blue w-full py-2 text-white cursor-pointer">
                    Filter
                  </button>
                </div>
              )}
            </div>
            {/* third component closed  */}

            <li className="flex justify-between items-center font-[700] border-b-2 border-gray py-1.5">
              <span className="py-2.5">Author</span>
              <span
                className="text-[20px] cursor-pointer"
                onClick={() => toggle(3)}>
                {openIndex === 3 ? <>-</> : <>+</>}
              </span>
            </li>
            <div
              className={`transition-all duration-600 ease-in-out overflow-hidden ${
                openIndex === 3
                  ? "max-h-40 opacity-100 py-2"
                  : "max-h-0 opacity-0 py-0"
              }`}>
              {openIndex === 3 && (
                <div>
                  <div className="py-2">
                    Name :{" "}
                    <input
                      type="text"
                      className=" w-[70%] border border-gray outline-none"
                    />
                  </div>
                  <button className="bg-blue w-full py-2 text-white cursor-pointer">
                    Filter
                  </button>
                </div>
              )}
            </div>
            {/* fourth component closed  */}
            <li className="flex justify-between items-center font-[700] border-b-2 border-gray py-1.5">
              <span className="py-2.5">Published</span>
              <span
                className="text-[20px] cursor-pointer"
                onClick={() => toggle(4)}>
                {openIndex === 4 ? <>-</> : <>+</>}
              </span>
            </li>
            <div
              className={`transition-all duration-600 ease-in-out overflow-hidden ${
                openIndex === 4
                  ? "max-h-40 opacity-100 py-2"
                  : "max-h-0 opacity-0 py-0"
              }`}>
              {openIndex === 4 && (
                <div>
                  <div>
                    <label htmlFor="date" className="font-bold">
                      From :
                    </label>{" "}
                    <input type="date" />
                  </div>
                  <div>
                    <label htmlFor="date" className="font-bold">
                      To:{" "}
                    </label>
                    <input type="date" />
                  </div>
                  <button className="bg-blue w-full py-2 text-white cursor-pointer">
                    Filter
                  </button>
                </div>
              )}
            </div>
            {/* fifth component closed  */}
          </ul>
        </aside>

        <section className="w-[75%] px-14">
          <div className="w-full flex justify-between items-center">
            <div className="flex font-[700] gap-25 text-blue text-[16px] py-6 justify-between items-center">
              <div>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    sortFunc();
                  }}>
                  Sort by: Alphabetically, A-Z
                </span>
              </div>
              <div>Showing 1-12 of 26 result</div>
              <div>Show: 12</div>
            </div>

            <div>
              <button>Hi</button>
              <button>World</button>
            </div>
          </div>

          <div className="grid grid-cols-12">
            {productCards.map((item, index) => {
              return (
                <NewReleasesBookCard
                  key={index}
                  image={item.img}
                  heading={item.h1}
                  text={item.p}
                  span={item.span}
                  button={item.btn}
                  slug={item.slug}
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
