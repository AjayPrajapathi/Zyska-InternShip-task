import React from "react";
import { assets } from "../assets/asset.js";

export const Navbar = () => {
  return (
    <header className="h-20 navbar navbar-expand-lg navbar-light bg-light flex justify-between items-center border-b border-slate-300">
      <div className="container flex justify-between max-w-[1440px] px-8 gap-10">
        <div className="container flex justify-center items-center max-w-[528px] gap-10">
          <img src={assets.logo} className=""/>
          {/* Hides the navbar links for small screens */}
          <ul className="max-w-[402px]  justify-between items-center hidden sm:flex gap-3">
            <li>Home</li>
            <li className="flex justify-between items-center">
              Products
              <span>
                <img src={assets.chevranDown} />
              </span>
            </li>
            <li className="flex justify-between items-center">
              Resources
              <span>
                <img src={assets.chevranDown} />
              </span>
            </li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="flex items-center">
          {/* Avatar shown only on screens larger than sm */}
          <img src={assets.productUser} className="hidden sm:block" />
          
          {/* Burger icon shown only on small screens */}
          <img src={assets.burgerIcon} className="block sm:hidden" />
        </div>
      </div>
    </header>
  );
};
