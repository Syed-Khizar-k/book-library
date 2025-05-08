import Link from "next/link";
import React from "react";
const links = [
  { text: "Home", link: "/" },
  { text: "about us", link: "#about" },
  { text: "books", link: "/products" },
  { text: "new release", link: "#new-releases" },
  { text: "contact us", link: "/" },
  { text: "blog", link: "/" },
];
const Links = () => {
  return (
    <>
      {links.map((e, index) => {
        return (
          <Link
            href={e.link}
            key={index}
            className="border-r-2 border-[#D1D1D1] px-[20px] hover:text-[#ed553b]">
            {e.text}
          </Link>
        );
      })}
    </>
  );
};

export default Links;
