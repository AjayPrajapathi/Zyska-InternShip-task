import { featureList } from "../assets/asset";
import { IndividualFeature } from "./IndividualFeature";


export const Features = () => {

  return (
    <div className="h-[836px] gap-16 py-[96px]">
      <div className="h-[160px] w-[768px] flex flex-col justify-center items-center mx-auto gap-12">
        <h1 className="text-customRed  font-bold text-xl">Features</h1>
        <h1 className="text-4xl text-darkBlack font-bold">
          Analytics that feels like it’s from the future
        </h1>
        <div className="flex flex-col justify-center items-center text-customBlack text-xl ">
          <p>
            Powerful, self-serve product and growth analytics to help you
            convert, engage,
          </p>
          <p> and retain more users. Trusted by over 4,000 startups.</p>
        </div>
      </div>

      {/* <div className="h-[420px] w-[1280px] px-8 gap-16 flex flex-wrap  "> */}
      <div className="h-[420px] w-[1280px] px-8 grid grid-cols-3 mt-12 gap-8 mx-auto ">
        {featureList.map((feature,index)=> <IndividualFeature key={index} image={feature.image} heading={feature.heading} details={feature.details}/>)}
      

      </div>
    </div>
  );
};
