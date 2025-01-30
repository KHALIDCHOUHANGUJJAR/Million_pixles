import "react-phone-input-2/lib/style.css";
import { createImage } from "../Utils/Images";
import Button from "./Button";
import { useLocation } from "react-router";

const Created = ({ heading, subHeading, paragraph }) => {
const loaction = useLocation()
  return (
    <div className="flex justify-center items-center  w-full h-screen">
      <div className="hidden md:block w-[40%] h-[100vh]">
        <img
          src={createImage}
          alt="Login"
          className="w-full h-full object-fill shadow-lg"
        />
      </div>
      <div className="  bg-[#F1713D] h-screen  md:w-[60%] w-[100%]  flex items-center justify-center flex-col  ">
        <div className="flex items-center justify-center flex-col  gap-10">
          <h1 className="text-3xl font-serif ">{heading}</h1>

          <div
            className="text-white bg-black md:w-[60%] w-[90%] 
           border-2 border-slate-700  rounded-xl md:p-8 p-4 shadow-2xl text-center  "
          >
            <div className=" h-full flex items-center flex-col">
              <h1 className="text-2xl font-bold mb-8">{subHeading}</h1>
              <p className="text-sm font-semibold mb-5">{paragraph}</p>
              <Button text={loaction.pathname === "/create" ? "Get Started" : "Buy"} />

            </div>
          </div>

          <div className="flex  items-center flex-col w-[60%] text-center">
            <h1 className="text-3xl font-serif m-3 ">Wall Of Internet</h1>
            <p>
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
