import { Company } from "./Company";
import { assets } from "../assets/asset";

export const SocialProof = () => {
  return (
    <div className="  flex flex-col justify-around items-center py-24 border-b border-slate-300">
      <div className="max-w-[1280px] flex flex-col justify-center sm:px-8 items-center gap-8">
        <h1>Join 4,000+ companies already growing</h1>
       <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-6 sm:gap-8">
          <Company image={assets.bolshift} name={"Bolshift"} />
          <Company image={assets.lightbox} name={"Lightbox"} />
          <Company image={assets.featherdew} name={"FeatherDev"} />
          <Company image={assets.spherule} name={"Spherule"} />
          <Company image={assets.globalbank} name={"GlobalBank"} />
          <Company image={assets.nlietz} name={"Nietzsche"} />
        </div>
      </div>
    </div>
  );
};
