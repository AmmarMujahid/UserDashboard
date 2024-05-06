import React from "react";
import { Copyright } from "./assets";

const Footer = () => {
  return (
    <div className="bg-primaryColor flex gap-[12px] justify-center items-center py-[21px]">
      <Copyright />
      <span className="text-[14px] text-white font-semibold">
        Dashboard, All rights reserved
      </span>
    </div>
  );
};

export default Footer;
