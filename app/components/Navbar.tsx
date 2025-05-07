import React from "react";

import TopNav from "./navbarComp/TopNav";
import NavHead from "./navbarComp/NavHead";
import NavBottom from "./navbarComp/NavBottom";
const Navbar = () => {
  return (
    <nav>
      <TopNav />
      <NavHead />
      <NavBottom />
    </nav>
  );
};

export default Navbar;
