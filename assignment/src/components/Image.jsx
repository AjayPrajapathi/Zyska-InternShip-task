import { assets } from "../assets/asset.js";

export const Image = () => {
  return (
    <div>
      <img
        src={assets.image}
        width="1216px"
        height="688px"
        className="rounded-t-2xl  mx-auto border-t-8 border-l-8 border-r-8 border-black"
      />
    </div>
  );
};
