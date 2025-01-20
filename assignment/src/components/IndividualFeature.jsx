import React from "react";
export const IndividualFeature = ({ image, heading, details }) => {
  return (
    <div className="w-full sm:w-[384px] h-auto sm:h-[178px] flex flex-col justify-center items-center gap-5 px-4 sm:px-0">
      {/* Image Container */}
      <div className="border border-slate-300 rounded-lg px-4 py-4 flex justify-center items-center">
        <img
          src={image}
          alt={heading}
          className="h-6 w-6 sm:h-[18px] sm:w-[18px]" 
        />
      </div>

      {/* Heading */}
      <h1 className="text-base sm:text-xl text-darkBlack font-semibold text-center">
        {heading}
      </h1>

      {/* Details */}
      <p className="text-sm sm:text-[16px] text-customBlack text-center leading-relaxed">
        {details}
      </p>
    </div>
  );
};
