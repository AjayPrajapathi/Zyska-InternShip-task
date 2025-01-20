import React from "react";
import { Questions } from "./Questions";
import { assets, faqList } from "../assets/asset.js";

export const FAQSection = () => {
  return (
    <div className="flex flex-col justify-center items-center py-12 sm:py-[96px] gap-8 sm:gap-16">
      {/* FAQ Heading */}
      <div className="flex flex-col gap-3 sm:gap-5 mx-auto justify-center items-center px-4">
        <h1 className="text-2xl sm:text-4xl text-darkBlack text-center">
          Frequently asked questions
        </h1>
        <p className="text-customBlack text-base sm:text-xl text-center">
          Everything you need to know about the product and billing.
        </p>
      </div>

      {/* FAQ Questions */}
      <div className="px-4 sm:px-8 gap-8 sm:gap-16 flex flex-col justify-center items-center w-full">
        <Questions list={faqList} />
      </div>

      {/* Images Section */}
      <div className="relative flex items-center justify-center px-4">
        {/* First Image (on top) */}
        <img
          src={assets.firstImage}
          alt="First"
          height="56px"
          width="56px"
          className="z-10"
        />

        {/* Second Image (to the right, behind the first image) */}
        <img
          src={assets.secondImage}
          alt="Second"
          height="48px"
          width="48px"
          className="absolute z-0 top-2 sm:right-10 right-4"
        />

        {/* Third Image (to the left, behind the first image) */}
        <img
          src={assets.thirdImage}
          alt="Third"
          height="48px"
          width="48px"
          className="absolute z-0 top-2 sm:left-10 left-4"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-4 sm:gap-8 px-4">
        <div className="flex flex-col justify-center items-center gap-1 sm:gap-2 text-center">
          <h1 className="text-lg sm:text-[20px] font-bold">
            Still have questions?
          </h1>
          <p className="text-customBlack text-sm sm:text-[18px]">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>

        <button className="bg-customRed text-white rounded-lg px-5 py-3 w-[120px] sm:w-[134px] h-[40px] sm:h-[48px]">
          Get in touch
        </button>
      </div>
    </div>
  );
};
