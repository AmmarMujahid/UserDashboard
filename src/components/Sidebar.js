import React from "react";
import Image from "next/image";
import {
  Compare,
  DashboardIcon,
  HomeLoan,
  InterestingSaving,
  Learn,
  MyAccount,
  MyApplications,
  PersonalLoan,
  ReferandEarn,
  Revenue,
} from "./assets";
import Link from "next/link";

const sidebarLink = {
  primaryItems: [
    { title: "Dashboard", id: "#dashboard", logo: <DashboardIcon /> },
    { title: "Refer & Earn", id: "#referandearn", logo: <ReferandEarn /> },
    { title: "Revenue", id: "#revenue", logo: <Revenue /> },
    { title: "My Account", id: "#myaccount", logo: <MyAccount /> },
    {
      title: "My Applications",
      id: "#myapplications",
      logo: <MyApplications />,
    },
  ],

  secondaryItems: [
    { title: "Learn", id: "#learn", logo: <Learn /> },
    {
      title: "Interesting Saving",
      id: "#interestingsaving",
      logo: <InterestingSaving />,
    },
    { title: "Home Loan", id: "#homeloan", logo: <HomeLoan /> },
    { title: "Personal Loan", id: "#personalloan", logo: <PersonalLoan /> },
  ],
};

const Sidebar = () => {
  return (
    <div className="fixed bg-primaryDimColor w-80 h-screen overflow-auto">
      <div className="">
        <div className="bg-primaryColor px-[80px] py-[40px] flex flex-col items-center gap-[8px]">
          <Image
            src="/sidebarUser.png"
            alt="Sidebar User"
            width={101}
            height={108}
            className="rounded-full"
          />
          <div className="text-[14px] font-semibold text-white flex flex-col items-center gap-[4px]">
            <span>USER PROFILE</span>
            <span>ID : 14253658613</span>
          </div>
        </div>

        <ul className="flex flex-col px-[25px] py-[41px] gap-[20px] text-white text-[14px] font-semibold">
          {sidebarLink.primaryItems.map((link) => (
            <li key={link.id} className="flex gap-[12px]">
              <span>{link.logo}</span>
              <Link href={link.id}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-[8px] px-[25px] py-[12px] text-[14px] text-white font-bold bg-primaryColor">
          <Compare />
          <span>COMPARE</span>
        </div>

        <ul className="flex flex-col px-[25px] py-[52px] gap-[20px] text-white text-[14px] font-semibold">
          {sidebarLink.secondaryItems.map((link) => (
            <li key={link.id} className="flex gap-[12px]">
              <span>{link.logo}</span>
              <Link href={link.id}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
