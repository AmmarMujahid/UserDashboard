import React from "react";
import Image from "next/image";

const Activity = () => {
  return (
    <section className="bg-[#EFF0FF] px-[20px] py-[28px] rounded-2xl mx-[30px] my-[48px]">
      <div className="flex flex-col gap-[16px]">
        <div className="text-[24px] font-medium">Recent Activities</div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex justify-between items-center">
            <Image src="/BTC.png" alt="BTC" width={40} height={40} />
            <div className="text-[16px] font-medium text-[#707EAE] flex gap-[200px] justify-between items-center">
              <span>Bitcoin</span>
              <span>10:45:16 AM</span>
              <span>+1545,00</span>
            </div>
            <span className="text-[16px] font-medium text-[#00DEA3]">
              Completed
            </span>
          </div>

          <div className="flex justify-between">
            <Image src="/ETM.png" alt="BTC" width={40} height={40} />
            <div className="text-[16px] font-medium text-[#707EAE] flex gap-[200px] justify-between items-center">
              <span>Ethereum</span>
              <span>09:15:31 AM</span>
              <span>+5649,00</span>
            </div>
            <span className="text-[16px] font-medium text-[#868CFF]">
              Pending
            </span>
          </div>

          <div className="flex justify-between">
            <Image src="/LTC.png" alt="BTC" width={40} height={40} />
            <div className="text-[16px] font-medium text-[#707EAE] flex gap-[200px] justify-between items-center">
              <span>LTC</span>
              <span>09:01:12 AM</span>
              <span>+4547,00</span>
            </div>
            <span className="text-[16px] fon00DEA3t-medium text-[#00DEA3]">
              Completed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
