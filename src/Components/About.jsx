import { RxArrowTopRight } from "react-icons/rx";
import { AboutImage } from "../Utils/Images";
import Contact from "./Contact";

const About = () => {
  return (
    <div className="flex items-center flex-col justify-center h-full">
      <div className="w-full flex items-center justify-center p-10">
        <div
          className="relative  flex flex-col gap-4 xl:gap-[5vh] justify-between 
        2xl:gap-[12vh] w-full lg:w-[50%]  rounded-xl overflow-hidden"
        >
          <h3
            className="text-text2-200 font-nunito text-[2.625rem] font-normal 
            not-even:not-first-of-type:leading-[6.25vh] tracking-[-0.005rem] z-10"
          >
            About Us
          </h3>

          <div className="relative flex flex-col gap-4 2xl:gap-10">
            <div
              className="absolute top-[50px] 2xl:top-[50%] left-[50px] w-[20vw] h-[20vw]
           bg-[#6b3f2b] opacity-30 rounded-full blur-3xl animate-pulse"
            ></div>
            <div
              className="absolute bottom-[50px] right-[50px] 2xl:right-[90px] w-[20vw] h-[20vw]
           bg-[#703a21] opacity-20 rounded-full blur-2xl animate-pulse"
            ></div>
            <h1
              className="text-[#F7F8FA] font-nunito text-[3.5rem]  font-normal 
               leading-[4.8rem] tracking-[-0.005rem] 2xl:tracking-[0.05rem] z-10"
            >
              Why Choose the <br /> Wall of Internet?
            </h1>

            <div className="w-full lg:w-[25vw] 2xl:w-[20vw] h-1 xl:h-1  bg-[#F7F8FA] z-10"></div>
            <p
              className="text-[#FFF] font-poppins text-[1.125rem] font-normal 
            leading-[1.80rem] 2xl:leading-[2.5rem] tracking-[0.375rem] 2xl:tracking-[0.390rem] z-10"
            >
              We're redefining digital ownership. The Wall of Internet is a
              platform where creativity meets innovation. By owning pixels, you
              become part of an ever-evolving artwork built by individuals
              worldwide. Our mission is to provide you with a canvas to express,
              create, and connect.
            </p>
          </div>
        </div>

        <div className=" grid grid-cols-2 items-center  w-[50%] ">
          <div className="p-4 flex flex-col gap-8 2xl:gap-8 w-[100%]   ">
            <div className="w-full h-full bg-text2-200 rounded-2xl  py-2 2xl:py-6 2xl:p-4 flex items-center flex-col justify-center ">
              <div className="flex items-center justify-center p-2 2xl:p-2 gap-2  2xl:text-2xl">
                <div className="text-black font-bold p-2 rounded-full bg-[#A86D5B] px-3 ">
                  Ui
                </div>
                <h2 className="font-bold text-lg 2xl:text-2xl">Join Now</h2>
              </div>
              <div className="px-4 text-xl 2xl:text-2xl  ">
                <p>
                  Edit your pixles anytime- showcase image, Links, or messages
                </p>
              </div>
            </div>

            <div
              className="p-5 2xl:p-6 border-2 border-[#343434]
           rounded-2xl shadow-md"
            >
              <div
                className="flex items-center justify-between
             mb-5 2xl:mb-6"
              >
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
                  <button className="bg-text2-200 text-white px-4 py-1 2xl:px-6 2xl:py-2 rounded-full hover:bg-[#A14422] transition-all 2xl:text-xl">
                    Buy
                  </button>
                </div>
                <h2 className="text-3xl 2xl:text-4xl font-bold">823,200</h2>

                <div className="w-full bg-[#443028] rounded-full h-2.5 dark:bg-[#724f41]">
                  <div
                    className="bg-text2-200 h-2.5 rounded-full"
                    style={{ width: "57%" }}
                  ></div>
                </div>

                <button className="w-full border-2 border-text2-200 py-2 2xl:py-3 rounded-xl hover:bg-[#A14422] transition-all 2xl:text-xl">
                  Send Feedback
                </button>
              </div>
            </div>
          </div>

          <img
            src={AboutImage}
            alt="aboutImage"
            className="w-[100%]  object-fill h-[91%] 2xl:h-[95%] "
          />
        </div>
      </div>
      <div className="w-[95%] h-1  bg-[#F7F8FA] z-10 my-8 2xl:my-12"></div>
      <Contact />
    </div>
  );
};

export default About;
