import { assets } from "../assets/asset";

export const Introduction = () => {
  return (

      <div className=" flex flex-col  px-8 justify-center items-center  h-[300px] mx-auto gap-8">
        <p
          className="h-8 w-[355px] rounded-2xl border border-customRed  text-customRed  gap-3 pt-[4px] pl-[4px] pb-[6px] pr-[10px] bg-red-50
           "
        >
          <span className="border border-red-500 rounded-2xl py-[2px] bg-white px-[10px]">
            New Feature
          </span>
          &nbsp; Check out the team dashboard
        </p>
        <h1 className="font-bold text-[50px] ">
          Beautiful analytics to grow smarter
        </h1>

        <div className="font-normal text-[20px] flex flex-col text-customBlack justify-center  items-center">
          <p>
            Powerful, self-serve product and growth analytics to help you
            convert, engage,
          </p>
          <p> and retain more users. Trusted by over 4,000 startups.</p>
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
      </div>
 
  );
};
