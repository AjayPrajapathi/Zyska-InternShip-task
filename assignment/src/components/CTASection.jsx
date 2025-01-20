import React from "react";
export const CTASection = () => {
  return (
    <div className="flex flex-col justify-center items-center py-24 gap-16 bg-bgColor ">
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="font-semibold text-4xl">Start your free trial</h1>
        <p className="text-customBlack">
          Join over 4,000+ startups already growing with Untitled.
        </p>
      </div>
      <div className="flex gap-3">
        <button className="rounded-xl border border-slate-200 py-3 px-5 gap-2">
          Learn More
        </button>
        <button className="rounded-xl border border-customRed bg-customRed py-3 px-5 gap-2 text-white">
          Get started
        </button>
      </div>
    </div>
  );
};
