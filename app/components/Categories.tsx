import React from "react";
import Tagtext from "./categoriesComp/Tagtext";
import CategCard from "./categoriesComp/CategCard";
import Button from "./navbarComp/Button";

const Categories = () => {
  return (
    <section className="py-[30px] w-full categories jkl  px-[120px] flex justify-center items-center">
      <div className="container ">
        <div className="categ-top flex w-full">
          <div className="left-side-categ w-[50%]">
            <Tagtext text="Categories"></Tagtext>
            <h1 className="text-[32px] font-[700] text-[#393280]">
              Explore our Top Categories
            </h1>
          </div>
          <div className="right-side-categ w-[50%]">
            <p className="text-[#393280B2]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus
              ut magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero
              ipsum ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              feugiat amet, libero ipsum..
            </p>
          </div>
        </div>
        <div className="categories-cards grid grid-cols-12 gap-x-6 py-[50px] ">
          <CategCard></CategCard>
        </div>
        <div className="text-center">
          <Button text="VIEW MORE"></Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
