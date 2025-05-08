"use client";
import React from "react";

import TopNav from "./navbarComp/TopNav";
import NavHead from "./navbarComp/NavHead";
import NavBottom from "./navbarComp/NavBottom";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav>
      <TopNav />
      <NavHead />
      {pathname !== "/" ? <></> : <NavBottom />}
    </nav>
  );
};

export default Navbar;
