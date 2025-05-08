import React from "react";

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

        <section className="w-[75%] bg-amber-900">right section</section>
      </div>
    </section>
  );
};

export default ProductArea;
