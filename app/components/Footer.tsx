import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faBlogger,
} from "@fortawesome/free-brands-svg-icons";
import LatestBlog from "./footerComp/LatestBlog";


const blogData = [
  {
    image: "/catg3.png",
    title: "Nostrud exercitation",
    description:
      "Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "05-12-25",
  },
  {
    image: "/categ2.png",
    title: "Reprehenderit in voluptate",
    description:
      "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "06-12-25",
  },
];

const Footer = () => {
  return (
    <footer className="w-full py-[15px] px-[62px] flex justify-center items-center bg-gradient-to-br from-[#FCECEC] to-[#F6FFFE]">
      <div className="container flex justify-center px-[62px] gap-5 ">
        <div className="first-half w-[30%]">
          <div className="h-[86px] w-[86px] rounded-full bg-[url('/rforread.png')] bg-cover bg-center"></div>
          <p className="py-4">
            Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.{" "}
          </p>
          <div className=" w-[full] h-[30px] my-3 flex justify-between  text-[#ED553B]">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faBlogger} />
          </div>
        </div>
        <div className="center-part w-[30%] px-[62px] ">
          <h1 className="text-[24px] font-[600] text-[#ED553B] py-2">
            Company
          </h1>
          <ul className="text-[18px] font-[600] flex flex-col gap-3 py-3 text-[#263238]">
            <li>Home</li>
            <li>About us</li>
            <li>Ebook</li>
            <li>Books</li>
            <li>New Release</li>
          </ul>
        </div>
        <div className="r-part w-[40%] ">
          <h1 className="text-[24px] font-[600] text-[#ED553B] py-2 ">
            LATEST NEWS
          </h1>
          {blogData.map((item, index) => {
            return (
              <LatestBlog
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            );
          })}
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
