import React from "react";
import Image from "next/image";
import {
  BTCGraph,
  LTCGraph,
  ETMGraph,
  BNBGraph,
  Exchange,
  IncIcon,
  DecIcon,
} from "./assets";

const Coins = () => {
  return (
    <section className="mx-[30px]">
      <div className="flex gap-[25px] items-center">
        <div className="flex items-center  max-w-[255px] max-h-[178px] bg-[#E9E9E9] px-[24px] py-[21px] rounded-2xl">
          <div className="flex flex-col">
            <Image
              src="/BTC.png"
              alt="BTC"
              width={40}
              height={40}
              className="mb-[12px]"
            />
            <div className="flex gap-[5px] items-center">
              <span>BTC</span>
              <Exchange />
              <span>USD</span>
            </div>
            <span className="text-[24px] font-medium">9784.79</span>
            <span className="flex gap-[5px] items-center text-[14px] font-medium text-[#DEA000]">
              <IncIcon />
              7.2%
            </span>
          </div>
          <div>
            <BTCGraph />
          </div>
        </div>

        <div className="flex items-center gap-[16px] max-w-[255px] max-h-[178px] bg-[#E9E9E9] px-[24px] py-[21px] rounded-2xl">
          <div className="flex flex-col">
            <Image
              src="/LTC.png"
              alt="BTC"
              width={40}
              height={40}
              className="mb-[12px]"
            />
            <div className="flex gap-[5px] items-center">
              <span>LTC</span>
              <Exchange />
              <span>USD</span>
            </div>
            <span className="text-[24px] font-medium">8741.19</span>
            <span className="flex gap-[5px] items-center text-[14px] font-medium text-[#F23985]">
              <DecIcon />
              5.2%
            </span>
          </div>
          <div>
            <LTCGraph />
          </div>
        </div>

        <div className="flex items-center gap-[16px] max-w-[255px] max-h-[178px] bg-[#E9E9E9] px-[24px] py-[21px] rounded-2xl">
          <div className="flex flex-col">
            <Image
              src="/ETM.png"
              alt="BTC"
              width={40}
              height={40}
              className="mb-[12px]"
            />
            <div className="flex gap-[5px] items-center">
              <span>ETM</span>
              <Exchange />
              <span>USD</span>
            </div>
            <span className="text-[24px] font-medium">4567.16</span>
            <span className="flex gap-[5px] items-center text-[14px] font-medium text-[#00DEA3]">
              <IncIcon />
              6.5%
            </span>
          </div>
          <div>
            <ETMGraph />
          </div>
        </div>

        <div className="flex items-center gap-[16px] max-w-[255px] max-h-[178px] bg-[#E9E9E9] px-[24px] py-[21px] rounded-2xl">
          <div className="flex flex-col">
            <Image
              src="/BNB.png"
              alt="BTC"
              width={40}
              height={40}
              className="mb-[12px]"
            />
            <div className="flex gap-[5px] items-center">
              <span>BNB</span>
              <Exchange />
              <span>USD</span>
            </div>
            <span className="text-[24px] font-medium">6547.79</span>
            <span className="flex gap-[5px] items-center text-[14px] font-medium text-[#00DEA3]">
              <IncIcon />
              9.5%
            </span>
          </div>
          <div>
            <BNBGraph />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coins;
