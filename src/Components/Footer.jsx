import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      className="flex md:flex-row flex-col  items-center gap-[3vh] md:items-end
     justify-end md:gap-[20%] w-full p-4 mt-5 px-24"
    >
      <h1 className="text-center font-normal text-lg 2xl:text-2xl">
        © 2025 Wall Of Internet. All Rights Reserved.{" "}
      </h1>
      <div className="flex items-center justify-center shrink-0 md:justify-end gap-4 md:gap-5 2xl:gap-8 order-1 md:order-2">
        <TiSocialFacebook className="w-8 h-6 md:w-9 md:h-9 2xl:w-10 2xl:h-10 bg-[#24150F] text-text2-200 rounded-full p-1.5 md:p-2 2xl:p-3 hover:bg-text2-200 hover:text-[#24150F] transition-colors duration-300" />
        <FaTwitter className="w-8 h-6 md:w-9 md:h-9 2xl:w-10 2xl:h-10 bg-[#24150F] text-text2-200 rounded-full p-1.5 md:p-2 2xl:p-3 hover:bg-text2-200 hover:text-[#24150F] transition-colors duration-300" />
        <FaLinkedinIn className="w-8 h-6 md:w-9 md:h-9 2xl:w-10 2xl:h-10 bg-[#24150F] text-text2-200 rounded-full p-1.5 md:p-2 2xl:p-3 hover:bg-text2-200 hover:text-[#24150F] transition-colors duration-300" />
      </div>
    </div>
  );
};

export default Footer;
