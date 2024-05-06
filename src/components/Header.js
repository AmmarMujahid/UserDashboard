import React from "react";
import { HeaderIcon } from "./assets";

const Header = () => {
  return (
    <div className="flex gap-[8px] py-[21px] px-[38px] bg-lightColor shadow-xl">
      <HeaderIcon />
      <span className="text-[14px] font-semibold">Your Account Details</span>
    </div>
  );
};

export default Header;
