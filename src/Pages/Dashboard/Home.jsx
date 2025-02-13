import { RiQuestionnaireLine } from "react-icons/ri";
import { RxArrowTopRight } from "react-icons/rx";
import { leftbarText } from "../../Utils/text";
import Canvas from "../../Components/Canvas";
const Home = () => {
  return (
    <div className="flex flex-col   w-full">
      <div className="flex  items-center  ">
        <div className=" w-[80%]  h-full flex flex-col 2xl:gap-2">
          <div className=" p-3">
            <h1
              className="xl:text-2xl 2xl:text-3xl font-bold"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              Manage Your Pixels
            </h1>

            <p className="xl:text-sm 2xl:text-lg text-[#c4baba] font-semibold flex gap-1 w-full text-center">
              Your block are shown on the grid below.{" "}
              <RiQuestionnaireLine className="text-2xl " />{" "}
            </p>
          </div>
          <div className="ml-1 2xl:p-4 p-2  ">
            <Canvas />
          </div>
        </div>
        <div className="w-[30%] h-full  p-1 2xl:p-4 text-white">
          <div className=" flex flex-col justify-between p-2 2xl:p-3">
            <div
              className="bg-[#171717] p-4 space-y-4 flex flex-col items-center justify-between   2xl:p-4 rounded-lg
             border-2 border-[#252323] "
            >
              <h2
                className="2xl:text-xl flex items-center
               xl:gap-5 2xl:gap-6 font-medium font-poppins "
              >
                Here You Can <br /> Manage Your Pixels.
                <RxArrowTopRight
                  className=" rounded-full bg-[#272727]
                 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11 2xl:p-2 p-1.5 text-center "
                />
              </h2>
              <div className=" 2xl:mt-2  xl:space-y-2 2xl:space-y-5  ">
                {leftbarText.map((i, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between
                       border-2 border-[#4b4747] bg-[#272727]
                        px-3 2xl:px-4  xl:py-0.5 2xl:p-1 rounded-3xl  "
                    >
                      <span className="xl:text-sm 2xl:text-md">
                        {i.textHeading}
                      </span>
                      <div
                        className="flex items-center xl:text-sm 2xl:text-md bg-[#333333] p-1 px-1
                       rounded-4xl gap-1 border-2 border-[#2C2C2C]"
                      >
                        <span
                          className="bg-[#F1713D] flex items-stretch text-sm  px-2
                          text-white  rounded-full"
                        >
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
          <div className="flex  items-center justify-center">
            <div className="bg-[#F1713D] text-white p-4  text-center w-[94%] rounded-lg 2xl:mt-10 2xl:p-6 mt-2   ">
              <h3 className="text-md font-poppins 2xl:p-2 font-semibold flex items-center gap-2 justify-center">
                Here Is What You Can Do
                <RiQuestionnaireLine className="text-xl " />{" "}
              </h3>
              <p
                className="xl:text-xs 2xl:text-md italic font-poppins text-start 
             bg-[#171717] rounded-2xl p-1  2xl:p-6 flex items-center"
              >
                Order: Choose And Order New Pixels. <br /> Manage: Manage Pixels Owned
                By You. View Your Order History <br /> Edit Your Personal Details,
                Change Your Password.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
