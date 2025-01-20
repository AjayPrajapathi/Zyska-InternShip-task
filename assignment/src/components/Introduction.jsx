import { assets } from "../assets/asset.js";
import { Image } from "./Image";

export const Introduction = () => {
  return (
    <div className=" flex flex-col  px-8 justify-center items-center pt-24 gap-12  mx-auto">
      <p
        className=" rounded-2xl border border-customRed  text-customRed   pt-[4px] pl-[4px] pb-[6px] pr-[10px] bg-red-50
           "
      >
        <span className="border border-red-500 rounded-2xl py-1 bg-white px-[10px]">
          New Feature
        </span>
        &nbsp; Check out the team dashboard 
      </p>
      <h1 className="font-bold text-[50px]  text-center">
        Beautiful analytics to grow smarter
      </h1>

      <div className="font-normal text-[20px] max-w-[768px] flex flex-col text-customBlack justify-center text-center items-center">
        <p>
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className="flex gap-3 justify-center items-center">
        <button className="flex px-5 py-3 border border-b-slate-300 gap-2 rounded-3xl ">
          <img src={assets.play} />
          <span>Demo</span>
        </button>
        <button className="px-5 py-3 bg-customRed gap-2 rounded-3xl text-white">
          Sign up
        </button>
      </div>
      <Image />
    </div>
  );
};
