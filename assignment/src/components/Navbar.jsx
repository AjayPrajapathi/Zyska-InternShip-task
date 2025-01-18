import { assets } from "../assets/asset";

export const Navbar = () => {
  return (
    <header className=" h-20 navbar navbar-expand-lg navbar-light bg-light flex justify-between items-center">
      <div className="container flex justify-between w-[1440px] px-8 gap-10">
        <div className="container flex justify-between items-center w-[528px]  gap-10">
          <img src={assets.logo} />
          <ul className="w-[402px] h-[32px] flex justify-between">
            <li>Home</li>
            <li className="flex justify-between items-center">
              Products{" "}
              <span>
                <img src={assets.chevranDown} />
              </span>
            </li>
            <li className="flex justify-between items-center">
              Resources{" "}
              <span>
                <img src={assets.chevranDown} />
              </span>
            </li>
            <li>Pricing</li>
          </ul>
        </div>
        <img src={assets.avatar}></img>
      </div>
    </header>
  );
};
