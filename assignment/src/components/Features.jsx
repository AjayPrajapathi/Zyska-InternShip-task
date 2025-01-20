import React from "react";
import { featureList } from "../assets/asset.js";
import { IndividualFeature } from "./IndividualFeature";

export const Features = () => {
  return (
    <div className="gap-16 py-[96px]">
      <div className="max-w-[1216px] flex flex-col justify-center items-center mx-auto gap-12">
        <h1 className="text-customRed font-bold text-xl">Features</h1>
        <h1 className="text-4xl text-darkBlack font-bold">
          Analytics that feels like it from the future
        </h1>
        <div className="max-w-[768px] flex flex-col justify-center items-center text-center text-customBlack text-xl">
          <p>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
      </div>

      <div className=" w-full px-8  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-8 mx-auto">
        {featureList.map((feature, index) => (
          <IndividualFeature
            key={index}
            image={feature.image}
            heading={feature.heading}
            details={feature.details}
          />
        ))}
      </div>
    </div>
  );
};
