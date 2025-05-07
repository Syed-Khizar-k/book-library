import React from "react";
import Link from "next/link";
const BottomFooter = () => {
  return (
    <div className="container px-[62px] py-[10px] flex justify-between text-[14px] ">
      <p className="px-[62px]">
        © 2022 Arihant. All Rights Reserved. Privacy | Terms of Service
      </p>
      <p>
        {" "}
        <Link href={"/privacy"} className="text-[#ED553B]">
          Privacy
        </Link>{" "}
        | Terms of Service
      </p>
    </div>
  );
};

export default BottomFooter;
