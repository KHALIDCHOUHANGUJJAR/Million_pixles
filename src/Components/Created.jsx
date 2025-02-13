/* eslint-disable react/prop-types */
import "react-phone-input-2/lib/style.css";
import { createImage } from "../Utils/Images";
import Button from "./Button";
import { useLocation, useNavigate } from "react-router";

const Created = ({
  heading,
  subHeading,
  paragraph,
  paragraph2,
  isShow,
  handleBut,
  buttonText,
}) => {
  const navigate = useNavigate();
  let location = useLocation();
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
          <h1 className="hf text-[3rem] 2xl:text-4xl font-poppins italic font-bold">
            {heading}
          </h1>
          <div
            className={`text-white bg-[#272727]  rounded-[1.5rem] md:p-8 2xl:p-10  p-4 shadow-2xl text-center 
       ${isShow ? "md:w-[60%] w-[90%]" : " w-[40%]"} 
      `}
          >
            <div className="h-full flex items-center flex-col">
              <h1 className="text-[1.5rem] 2xl:text-3xl font-semibold font-poppins mb-8">
                {subHeading}
              </h1>
              <p className="text-[0.9rem] 2xl:text-lg mb-5 text-[#E2E2E2] text-center font-poppins font-normal leading-normal">
                {paragraph}
              </p>
              <p className="text-[1rem] 2xl:text-lg mb-5 text-[#E2E2E2] text-center font-poppins font-normal leading-normal">
                {paragraph2}
              </p>

              <Button
                text={
                  location.pathname === "/cong" ? "View Dashboard" : buttonText
                }
                handleClick={() => {
                  if (location.pathname === "/cong") {
                    navigate("/dashboard");
                  } else {
                    handleBut();
                  }
                }}
              />
            </div>
          </div>

          <div className="flex items-center flex-col w-[60%] text-center mt-10">
            <h1 className="text-[2.3rem] font-poppins text-white italic font-semibold leading-[8.5vh] text-center">
              Wall Of Internet
            </h1>

            <p className="text-[0.9rem] text-[#E2E2E2] text-center font-poppins font-normal leading-normal">
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
