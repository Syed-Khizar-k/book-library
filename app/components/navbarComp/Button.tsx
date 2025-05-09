import Link from "next/link";
import React from "react";
interface btn {
  text: string;
  slug: string;
}
const Button = (props: btn) => {
  return (
    <Link
      href={`/products/${props.slug}`}
      className="text-[16px] font-[400] text-[#393280] border border-[#393280] py-[10px] px-[20px] cursor-pointer hover:text-[white] hover:border-white hover:bg-[#393280] transition-all duration-500 ease-in-out rounded-md">
      {props.text} &nbsp; ➜
    </Link>
  );
};

export default Button;
