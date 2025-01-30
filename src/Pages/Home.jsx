import { BellOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { LuCrown } from "react-icons/lu";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { useState } from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { leftbarText } from "../Utils/text";
import { RiQuestionnaireLine } from "react-icons/ri";
import PixelCanvas from "../Components/Canvas";
import Canvas from "../Components/Canvas";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="flex flex-col  h-screen w-full">
      <header className="flex  flex-col w-full p-2 h-[20vh] bg-[#111111]">
        <div className=" flex justify-between p-3 w-full  ">
          <div>
            <h1 className="text-2xl font-bold">Welcome to your account</h1>
            <p className="text-[#c4baba] font-semibold">
              Here you can manage your pixels
            </p>
          </div>
          <div className="flex border-2 text-[#8a8686] font-semibold rounded-3xl text-center p-4 h-12 items-center border-gray-700">
            <LuCrown />
            Pro Member
          </div>
          <div className="flex ">
            <div className="flex  ">
              <div
                className="bg-[#A86D5B] h-[3vw] text-center flex 
            items-center justify-center w-10 rounded-full text-black border-[#696464]  relative"
              >
                CM
              </div>
              <div
                className="bg-[#A86D5B] h-[3vw] text-center flex left-[72%]
            items-center justify-center w-10 rounded-full text-black absolute "
              >
                SH
              </div>
              <div
                className=" flex gap-2 border-2 text-[#8a8686] font-semibold
             rounded-3xl text-center p-4 h-12 items-center border-gray-700"
              >
                Invited
                <PlusCircleOutlined />
              </div>
            </div>
            <div className="ml-11 flex border-2 justify-between gap-3 text-[#8a8686] font-semibold rounded-3xl text-center p-4 h-12 items-center border-gray-700">
              <BellOutlined className="text-2xl text-white" />
              <IoIosInformationCircleOutline className="text-2xl text-white" />
              <IoIosContact className="text-4xl rounded-full text-white bg-[#2EBC96]" />
            </div>
          </div>
        </div>
        <div className=" flex items-center  justify-between ">
          <div className="flex items-center gap-4">
            {["Manage Pixels", "Order Pixels", "Edit", "My order History "].map(
              (label, index) => (
                <div
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`flex gap-2 border-2 text-[#8a8686] font-semibold rounded-3xl text-center p-4 h-12 items-center border-gray-700 text-lg font-semibold ${
                    activeIndex === index
                      ? "bg-[#F1713D] text-[#FFFFFF] border-[#B55A37]"
                      : "bg-transparent text-[#8a8686]"
                  } cursor-pointer transition-all duration-300`}
                >
                  <PlusCircleOutlined />
                  {label}
                </div>
              )
            )}
          </div>
          <p className=" text-[#dad5d5] font-semibold p-3">
            Question? Email us: info1millionpixels.com{" "}
          </p>
        </div>
      </header>
      <div className="flex  items-center mt-3 ">
        <div className=" w-[80%] h-full">
          <div className=" p-4">
            <h1 className="text-2xl font-bold">Mange Your Pixels</h1>
            <p className="text-[#c4baba] font-semibold flex gap-1 w-full text-center">
              Your block are shown on the grid below{" "}
              <RiQuestionnaireLine className="text-2xl " />{" "}
            </p>
          </div>
          <div className="h0vh]">
            <Canvas />

          </div>
        </div>
        <div className="w-[30%] h-full  p-1 text-white">
          <div className="h-[70%] flex flex-col justify-between">
            <div className="bg-[#171717] p-2 rounded-lg border-2 border-[#252323]">
              <h2 className="flex items-center gap-4 font-semibold">
                Here You Can <br /> Manage Your Pixels.
                <RxArrowTopRight className="text-xl rounded-full bg-[#272727] w-10 h-10 text-center " />
              </h2>
              <div className="mt-1 space-y-2">
                {leftbarText.map((i, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between border-2 border-[#4b4747] bg-[#272727] px-6 py-1.5 rounded-3xl"
                    >
                      <span>{i.textHeading}</span>
                      <div className="flex items-center text-sm bg-[#333333] p-1 px-3 rounded-4xl gap-1 border-2 border-[#2C2C2C]">
                        <span className="bg-[#F1713D] flex items-stretch text-sm p-1 text-white  rounded-full">
                          {i.textSubHeading}
                        </span>
                        {i.textSubHeading2}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="bg-[#F1713D] text-white p-2 text-center rounded-lg  ">
            <h3 className="text-lg font-semibold flex items-center gap-2 justify-center">
              Here Is What You Can Do
              <RiQuestionnaireLine className="text-2xl " />{" "}
            </h3>
            <p className="text-sm mt-0 text-start bg-[#171717] rounded-2xl p-1">
              Order: Choose And Order New Pixels. <br />
              Manage: Manage Pixels Owned By You. <br />
              View Your Order History. <br />
              Edit Your Personal Details, Change Your Password.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
