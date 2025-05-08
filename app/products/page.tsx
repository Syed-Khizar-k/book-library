"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomFooter from "../components/footerComp/BottomFooter";
import Breadcrumb from "../components/BreadCrumb";
import ProductArea from "../components/ProductArea";


const page = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <ProductArea/>
      <Footer />
      <BottomFooter />
    </>
  );
};

export default page;
