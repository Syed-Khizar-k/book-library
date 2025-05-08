import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const NavHead = () => {
  const linksData = [
    { text: "account", link: "/" },
    { text: "cart", link: "/" },
    { text: "wishlist", link: "/" },
  ];

  return (
    <div className="w-full  flex justify-center items-center ">
      <div className="container py-[15px] px-[35px]">
        <div className="flex justify-between items-center w-full border-b-2 border-[#E0E0E0] pb-[15px]">
          <div className="md:w-[60%] w-[30%] flex justify-between items-center relative">
            <div className="h-[86px] w-[86px] rounded-full bg-[url('/rforread.png')] bg-cover bg-center"></div>

            <input
              type="search"
              className="w-[600px] p-[10px] placeholder-[#898686] rounded-xl bg-[#F6F6F6] outline-none text-[#898686] hidden md:block "
              placeholder="search books..."
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="text-gray-400 h-[18px] absolute right-0 pr-[40px] hidden md:block"
            />
          </div>
          <div className="md:w-[35%] w-[65%] text-[#393280] md:flex justify-end text-[14px] uppercase hidden ">
            {linksData.map((e, index) => {
              return (
                <Link
                  href={e.link}
                  key={index}
                  className="border-r-2 border-[#D1D1D1] px-[20px]">
                  {e.text}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavHead;
