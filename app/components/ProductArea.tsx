"use client";
import React, { useState } from "react";

const ProductArea = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Store index of opened item

  const toggle = (index: number) => {
    // Toggle logic
    setOpenIndex(openIndex === index ? null : index);
  };
  const data = [
    { text: "Price" },
    { text: "Availability" },
    { text: "Color" },
    { text: "Author" },
    { text: "Published" },
  ];
  return (
    <section className="w-full flex justify-center items-center py-8 px-18">
      <div className="container flex">
        <aside className="w-[25%] px-8">
          <ul className="text-blue text-[16px]">
            {data.map((e, index) => (
              <React.Fragment key={index}>
                <li className="flex justify-between items-center font-[700] border-b-2 border-gray py-1.5">
                  <span className="py-2.5">{e.text}</span>
                  <span
                    className="text-[20px] cursor-pointer"
                    onClick={() => toggle(index)}>
                    {openIndex === index ? <>-</> : <>+</>}
                  </span>
                </li>
                <div
                  className={`transition-all duration-600 ease-in-out overflow-hidden ${
                    openIndex === index
                      ? "max-h-40 opacity-100 py-2"
                      : "max-h-0 opacity-0 py-0"
                  }`}>
                  {openIndex === index && <div>hello</div>}
                </div>
              </React.Fragment>
            ))}
          </ul>
        </aside>

        <section className="w-[75%] bg-amber-900">right section</section>
      </div>
    </section>
  );
};

export default ProductArea;
