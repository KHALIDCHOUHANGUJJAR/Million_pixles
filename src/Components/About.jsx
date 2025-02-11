"use client";

import { PlusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { pixlesImage } from "../Utils/Images";
import Contact from "./Contact";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex items-center flex-col">
      <div
        className="flex flex-col lg:flex-row items-center justify-between
       w-full min-h-screen p-4 xl:p-6 2xl:p-8 text-white gap-8 2xl:gap-12"
      >
        <div className="relative  flex flex-col gap-4 xl:gap-5 2xl:gap-10 w-full lg:w-[40%] 2xl:w-[35%] rounded-xl overflow-hidden">
          <div className="absolute top-[50px] left-[50px] w-[20vw] h-[20vw] bg-[#6b3f2b] opacity-30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[50px] right-[50px] w-[20vw] h-[20vw] bg-[#703a21] opacity-20 rounded-full blur-2xl animate-pulse"></div>

          <h3 className="text-[#B7552E] text-2xl xl:text-3xl 2xl:text-5xl font-bold z-10">
            About Us
          </h3>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-extrabold leading-tight z-10">
            Why Choose the <br /> Wall of Internet?
          </h1>
          <div className="w-full lg:w-[25vw] 2xl:w-[20vw] h-1 xl:h-1 2xl:h-3 bg-[#F7F8FA] z-10"></div>
          <p className="text-gray-300 text-base xl:text-lg 2xl:text-3xl leading-relaxed tracking-wide z-10">
            We're redefining digital ownership. The Wall of Internet is a
            platform where creativity meets innovation. By owning pixels, you
            become part of an ever-evolving artwork built by individuals
            worldwide. Our mission is to provide you with a canvas to express,
            create, and connect.
          </p>
        </div>

        <div className="p-4 flex flex-col gap-8 2xl:gap-8 w-full lg:w-[30%] 2xl:w-[32%]">
          <div className="w-full h-full bg-[#B7552E] rounded-2xl p-2 2xl:py-8 ">
            <div className="flex items-center justify-center p-3 2xl:p-6 gap-2 2xl:gap-4 2xl:text-2xl">
              <div className="text-black font-bold p-2 rounded-full bg-[#A86D5B] px-3 ">
                Ui
              </div>
              <h2 className="font-bold text-lg 2xl:text-2xl">Join Now</h2>
            </div>
            <div className=" p-2.5  px-10 2xl:text-xl">
              <p>Edit your pixles anytime- showcase imageLink or messages</p>
            </div>
          </div>

          <div className="p-6 2xl:p-6 border-2 border-[#343434]
           rounded-2xl shadow-md">
            <div className="flex items-center justify-between
             mb-5 2xl:mb-6">
              <div>
                <h1 className="text-xl 2xl:text-3xl font-semibold">
                  Pixels Available
                </h1>
                <p className="text-sm 2xl:text-xl ">Last Updated: Recent</p>
              </div>
              <RxArrowTopRight
                className="text-white bg-[#272727] p-2 
              rounded-full w-11 h-11 2xl:w-15 2xl:h-15"
              />
            </div>

            <div className="flex flex-col gap-4 2xl:gap-10 bg-[#272727] p-4 2xl:p-10 rounded-xl">
              <div className="flex items-center justify-between">
                <h2 className="text-lg 2xl:text-2xl font-medium">Pixels</h2>
                <button className="bg-[#B7552E] text-white px-4 py-1 2xl:px-6 2xl:py-2 rounded-full hover:bg-[#A14422] transition-all 2xl:text-xl">
                  Buy
                </button>
              </div>
              <h2 className="text-3xl 2xl:text-5xl font-bold">823,200</h2>
              <div className="flex items-center">
                <div className="w-[20%] lg:w-[12vw] 2xl:w-[12vw] p-2 2xl:p-3 rounded-2xl bg-[#B7552E] relative z-10"></div>
                <div className="w-[50%] lg:w-[13.5vw] 2xl:w-[12vw] p-2 2xl:p-3 rounded-2xl bg-[#704839] absolute left-[45%] lg:left-[49%] z-0"></div>
              </div>
              <button className="w-full border-2 border-[#B7552E] py-2 2xl:py-3 rounded-xl hover:bg-[#A14422] transition-all 2xl:text-xl">
                Send Feedback
              </button>
            </div>
          </div>
        </div>

        <div
          className="border-2 border-[#343434] w-full lg:w-[30%]
         2xl:w-[32%] shadow-2xl rounded-2xl p-3 2xl:p-5 flex flex-col  gap-[2vh] 2xl:gap-[3vh]"
        >
          <h2 className="text-2xl 2xl:text-4xl font-semibold">
            Welcome to your account
          </h2>
          <p className="text-md 2xl:text-xl text-[#FFF]">
            Here you can manage your pixels
          </p>
          <div className="flex items-center 2xl:justify-center gap-2">
            {["Manage Pixels", "Order Pixels", "My order History "].map(
              (label, index) => (
                <div
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`flex  border-2 
                  rounded-3xl text-center justify-center  2xl:px-10
                   xl:h-10.5 xl:w-[13vw] 
                   items-center border-gray-700 text-xs   ${
                     activeIndex === index
                       ? "bg-[#F1713D] text-[#FFFFFF] border-[#B55A37]"
                       : "text-[#828282] bg-[#272727]"
                   } cursor-pointer transition-all duration-300`}
                >
                  <PlusCircleOutlined className=" cursor-pointer" />
                  {label}
                </div>
              )
            )}
          </div>
          <h2 className="text-2xl 2xl:text-4xl font-semibold">
            Manage your pixels
          </h2>
          <p className="text-md 2xl:text-xl text-[#FFF]">
            Your blocks are shown on the grid below.
          </p>
          <div className="bg-[#272727] text-end p-2 2xl:p-4 rounded-l-2xl">
            <p className="text-xl 2xl:text-3xl">
              Pixels available: <span>823,200</span>
            </p>
            <img
              src={pixlesImage || "/placeholder.svg"}
              alt=""
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-[95%] h-1 2xl:h-2 bg-[#F7F8FA] z-10 my-8 2xl:my-12"></div>
      <Contact />
    </div>
  );
};

export default About;
