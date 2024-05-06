// /* eslint-disable react/display-name */
// import React from "react";
// import Image from "next/image";

// const CoinCard = ({ children }) => {
//   return (
//     <div className="border-[1px] border-[#D8D8D8] rounded-2xl bg-white p-[28px]">
//       <div className="grid grid-cols-2 grid-rows-2">{children}</div>
//     </div>
//   );
// };

// CoinCard.displayName = "CoinCard";

// CoinCard.Logo = ({ children, ...props }) => {
//   const { className, ...rest } = props;
//   return (
//     <span
//       className={`text-[20px] leading-0.3 self-start ${className}`}
//       {...rest}
//     >
//     <Image src={children} alt="Currency" width={40} height={40} />
//     </span>
//   );
// };

// CoinCard.Exchange = ({ children, ...props }) => {
//   const { className, ...rest } = props;
//   return (
//     <div className="justify-self-end">
//       <span
//         className={`text-[20px] font-semibold leading-0.30 text-[#72A70] ${className}`}
//         {...rest}
//       >
//         {children}
//       </span>
//     </div>
//   );
// };

// CoinCard.Value = ({ children, ...props }) => {
//   const { className, ...rest } = props;
//   return (
//     <span
//       className={`text-[56px] leading-0.72 self-end ${className}`}
//       {...rest}
//     >
//       {children}
//     </span>
//   );
// };

// CoinCard.Delta = ({ children, ...props }) => {
//   const { className, ...rest } = props;
//   return (
//     <div className={`justify-self-end self-end ${className}`} {...rest}>
//       {children}
//     </div>
//   );
// };

// CoinCard.Graph = ({ children, ...props }) => {
//   const { className, ...rest } = props;
//   return (
//     <div className={`justify-self-end self-end ${className}`} {...rest}>
//       {children}
//     </div>
//   );
// };

// export default CoinCard;
