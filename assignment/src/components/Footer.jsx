
import { assets, footerList } from "../assets/asset.js";
import { FooterList } from "./FooterList";

export const Footer = () => {
  return (
    <div className="px-4 sm:px-8 py-8 bg-gray-100">
      {/* Footer Lists */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-16 pt-8 pb-12">
        <FooterList list={footerList.product} heading="Product" />
        <FooterList list={footerList.company} heading="Company" />
        <FooterList list={footerList.resources} heading="Resources" />
        <FooterList list={footerList.useCases} heading="Use Cases" />
        <FooterList list={footerList.social} heading="Social" />
        <FooterList list={footerList.legal} heading="Legal" />
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 gap-4">
        {/* Logo */}
        <img 
          src={assets.logo} 
          alt="Logo" 
          className="w-[84px] h-[42px]" 
        />
        
        {/* Copyright Text */}
        <p className="text-customBlack text-center sm:text-left text-sm sm:text-base">
          @2077 Zysk technologies all rights reserved
        </p>
      </div>
    </div>
  );
};
