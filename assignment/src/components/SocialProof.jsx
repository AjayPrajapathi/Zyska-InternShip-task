import { Company } from "./Company";
import { assets } from "../assets/asset";

export const SocialProof = () => {
  return (
    <div className=" h-[836px] flex flex-col justify-around items-center">
      <div className="h-[104] flex flex-col justify-center items-center gap-8">
        <h1>Join 4,000+ companies already growing</h1>
        <div className="flex">
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
