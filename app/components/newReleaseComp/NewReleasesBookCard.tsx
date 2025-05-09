import Image from "next/image";
import Link from "next/link";
import React from "react";
interface jv {
  image: string;
  button: string;
  heading: string;
  text: string;
  span: string;
  slug: string;
}

const NewReleasesBookCard = ({
  image,
  button,
  heading,
  text,
  span,
  slug,
}: jv) => {
  return (
    <>
      <div className="newbooks-card  px-3 col-span-4 relative">
        <div className="img-sec flex justify-center items-center  border-1 border-[#EAE8DF] cursor-pointer relative">
          <Link href={`/products/${slug}`}>
            <Image
              src={`${image}`}
              alt="header image"
              width={318}
              height={219}
            />
          </Link>

          <button className="w-[90%] absolute cursor-pointer bg-[#ED553B] text-[16px] text-[#FFFFFF] py-[5px] uppercase">
            {button}
          </button>
        </div>
        <div className="text-sec text-center ">
          <h1 className="text-[22px] font-[600] text-[#393280] py-[5px]">
            {heading}
          </h1>
          <p className="text-[14px] text-[#888888]  py-[10px]">{text}</p>
          <span className="text-[18px] font-[700] text-[#ED553B]">{span}</span>
        </div>
      </div>
    </>
  );
};

export default NewReleasesBookCard;
