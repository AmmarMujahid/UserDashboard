import React from "react";
import Image from "next/image";
import HeroScoreCard from "./heroscorecard";
import { Update } from "./assets";

const Hero = () => {
  return (
    <section className="mx-[30px] my-[48px]">
      <div className="">
        <div className="bg-primaryColor text-white text-[14px] font-semibold px-[36px] py-[15px] rounded-t-2xl">
          Credit Score Ranking
        </div>

        <div className="bg-[#EEEFFF] flex gap-[100px] justify-between items-center px-[60px] py-[30px] rounded-b-2xl">
          <div
            className="flex flex-col items-center justify-center w-[166px] h-[160px]"
            style={{ backgroundImage: "url(/heroFrame.png)" }}
          >
            <div className="text-[24px] font-bold text-[#757575]">924</div>
            <span className="text-[9px] text-[#757575]">6 May, 2024</span>
            <h5 className="text-[13px] text-black">Your Score Good</h5>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-x-[60px] gap-y-[35px]">
            <HeroScoreCard />
            <HeroScoreCard />
            <HeroScoreCard />
            <HeroScoreCard />
          </div>

          <div className="flex flex-col gap-[8px] max-w-[380px] bg-[#D6D8FF] rounded-xl py-[20px] px-[22px]">
            <div className="flex justify-between">
              <h3 className="text-[14px] font-semibold text-primaryColor">
                Credit Score Ranking
              </h3>
              <Update />
            </div>
            <p className="text-[11px] text-[#414141]">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
            <button className="text-white bg-primaryColor px-[10px] py-[5px] rounded-md text-[9px] font-medium w-[84px]">
              See More . . .
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
