import Image from "next/image";
import React from "react";

const CategCardData = [
  {
    id: 1,
    img: "./categ1.png",
    h1: "Higher Education",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptate vero eum fugit ipsum hic. Quaerat molestiae cupiditate quos deleniti!",
  },
  {
    id: 2,
    img: "./categ2.png",
    h1: "Management Books",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptate vero eum fugit ipsum hic. Quaerat molestiae cupiditate quos deleniti!",
  },
  {
    id: 3,
    img: "./catg3.png",
    h1: "Engineering Books",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptate vero eum fugit ipsum hic. Quaerat molestiae cupiditate quos deleniti!",
  },
];

const CategCard = () => {
  return (
    <>
      {CategCardData.map((e) => {
        return (
          <div className="col-span-4  " key={e.id}>
            <div
              style={{ position: "relative", width: "100%", height: "224px" }}
              className="rounded-lg">
              <Image
                src={`/${e.img}`}
                alt="header image"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg" // or 'contain' based on your need
              />
            </div>
            <div className="text-center">
              <h1 className="text-[24px] text-[#393280] font-[600] py-[10px]">
                {e.h1}
              </h1>
              <p className="text-[16px] text-[#393280B2]">{e.p}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CategCard;
