/* eslint-disable react/prop-types */
import "react-phone-input-2/lib/style.css";
import Button from "./Button";
import { useLocation, useNavigate } from "react-router";
import { createImage } from "../Utils/Images";

const Created = ({ heading, subHeading, paragraph, isShow, paragraph2 }) => {
  const location = useLocation();
  let naivgate = useNavigate();

  return (
    <div className="flex justify-center items-center w-full h-screen">
      {isShow && (
        <div className="hidden md:block w-[40%] h-[100vh]">
          <img
            src={createImage}
            alt="Login"
            className="w-full h-full object-fill shadow-lg"
          />
        </div>
      )}

      <div
        className={`bg-[#F1713D] h-screen flex items-center justify-center flex-col ${
          isShow ? "md:w-[60%] w-[100%]" : "w-[100vw]"
        }`}
      >
        <div className="flex items-center justify-center flex-col gap-10">
          <h1 className="text-3xl font-poppins italic font-bold">{heading}</h1>
          <div
            className={`text-white bg-black border-2 border-slate-700 rounded-xl md:p-8 p-4 shadow-2xl text-center 
    ${isShow ? "md:w-[60%] w-[90%]" : " w-[40%]"} 
  `}
          >
            <div className="h-full flex items-center flex-col">
              <h1 className="text-2xl font-semibold font-poppins mb-8">
                {subHeading}
              </h1>
              <p className="text-sm  mb-5 text-[#E2E2E2]">{paragraph}</p>
              <p className="text-sm  mb-5 text-[#E2E2E2]">{paragraph2}</p>
              <Button
                text={
                  location.pathname === "/create"
                    ? "Get Started"
                    : location.pathname === "/create2"
                    ? "Buy"
                    : "View Dashboard"
                }
                handleClick={() =>
                  location.pathname === "/create"
                    ? naivgate("/create2")
                    : location.pathname === "/create2"
                    ? naivgate("/pixels")
                    : naivgate("/dashboard")
                }
              />
            </div>
          </div>

          <div className="flex items-center flex-col w-[60%] text-center">
            <h1 className="text-3xl font-Poppins italic m-3">
              Wall Of Internet
            </h1>
            <p className="text-center font-Poppins ">
              Claim your space in the digital landscape! Wall of Internet lets
              you buy, own, and customize pixels on the most interactive online
              canvas. Showcase your creativity, promote your brand, or leave
              your mark forever—one pixel at a time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Created;
