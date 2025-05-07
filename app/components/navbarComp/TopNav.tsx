import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faBlogger,
} from "@fortawesome/free-brands-svg-icons";
const TopNav = () => {
  return (
    <div className="bg-[#393280] w-[100%] md:flex  items-center justify-center hidden ">
      <div className="container justify-between flex items-center py-[15px] px-[35px] text-[#ffff]">
        <div className="flex items-center gap-2 ">
          <FontAwesomeIcon icon={faPhone} className="h-[15px]" />
          <span> +92 328 0562360</span>
        </div>
        <div className="text-[18px] w-[200px] h-[20px] flex justify-end gap-8">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faBlogger} />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
