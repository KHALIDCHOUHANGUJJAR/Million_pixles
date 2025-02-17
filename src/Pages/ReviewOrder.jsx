import { useState } from "react";
import Button from "../Components/Button";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function ReviewOrder() {
  const [isNext, setisNext] = useState(null);
  const handleNext = () => {
    setisNext(!isNext);
  };
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full md:flex-row overflow-hidden min-h-screen">
      <div className="w-full md:w-[60%] bg-[#272727] p-6 min-h-screen">
        <div className="p- 2xl:p-4 md:w-[60%]  2xl:py-1 ">
          <h1 className="text-white text-[1.5rem] 2xl:text-3xl  font-semibold pb-4 2xl:pb-6 border-b border-[#D0CFCF] ">
            Review Your Order
          </h1>

          <div className="mt-8 2xl:mt-02  mb-6 text-white space-y-5 2xl:space-y-10">
            <h2 className="text-xl 2xl:text-2xl ">Pixels Details</h2>

            <div className="2xl:space-y-10 ">
              <div className="border-b pb-4 2xl:pb-6 mt-3  border-white/20">
                <p className="text-gray-400 mb-1 2xl:mb-2 2xl:text-xl">
                  Selected Block
                </p>
                <p>300 x 500</p>
              </div>

              <div className="border-b pb-4 2xl:pb-6 mt-3  border-white/20">
                <p className="text-gray-400 mb-1 2xl:mb-2 2xl:text-xl">
                  Pixels Count
                </p>
                <p>2000 Pixels</p>
              </div>

              <div className="border-b pb-4 2xl:pb-6 mt-3  border-white/20">
                <p className="text-gray-400 mb-1 2xl:mb-2 2xl:text-xl">
                  Pixels Location
                </p>
                <p>Y.10786p X.7894p</p>
              </div>

              <div className="border-b pb-4 2xl:pb-6 mt-3  border-white/20">
                <p className="text-gray-400 mb-1 2xl:mb-2 2xl:text-xl">
                  Price Per Pixels
                </p>
                <p>1$.12</p>
              </div>

              <div className="border-b pb-4 2xl:pb-6 mt-3  border-white/20">
                <p className="text-gray-400 mb-1 2xl:mb-2 2xl:text-xl">
                  Total Price
                </p>
                <p>$2000</p>
              </div>
            </div>
          </div>

          <Button
            text={"Back"}
            handleClick={() => navigate("/pixels")}
            icon={<FaChevronLeft />}
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center  md:w-[50%] bg-[#F1713D] p-6 min-h-screen">
        <div className="flex justify-between items-center mb-8 2xl:mb-16">
          <div className="flex items-start justify-center w-full mt-4 2xl:mt-10  mb-2">
            <div className="flex items-center flex-col justify-between">
              <div className="flex items-center justify-center p-4 md:p-2 2xl:w-10   2xl:h-10 w-6   h-6 rounded-full border-2   text-center">
                1
              </div>
              <h1 className="text-sm font-semibold">Buy Pixel</h1>
            </div>
            <div className="w-[8vw] border-1 2xl:border-2 border-white/20 "></div>
            <div className="flex items-center flex-col justify-between">
              <div className="flex items-center justify-center p-4 md:p-2 2xl:w-10  2xl:h-10 w-6   h-6 rounded-full border-2 bg-black border-black   text-center">
                2
              </div>
              <h1 className=" font-semibold text-black text-sm">
                Confirm Order
              </h1>
            </div>
            <div className="w-[8vw] border-1 2xl:border-2 border-white/20 "></div>
            <div className="flex items-center flex-col justify-between">
              <div className="flex items-center justify-center p-4 md:p-2 2xl:w-10  2xl:h-10 w-6   h-6 rounded-full border-2   text-center">
                3
              </div>
              <h1 className="text-sm font-semibold">Payment</h1>
            </div>
          </div>
        </div>

        <div
          className={`bg-white rounded-lg p-6 2xl:p-8 md:w-[27vw] 2xl:w-[25vw] shadow-lg ${
            isNext && "hidden"
          } transform transition-all duration-100000 ease-in-out`}
        >
          <div className="mb-6">
            <h3 className="text-xl 2xl:text-2xl text-black font-bold mb-4">
              Order Summary
            </h3>

            <div className="space-y-2 2xl:space-y-8 mb-4 2xl:mb-6  text-black">
              <div className="flex border-b-2 2xl:text-xl 2xl:pb-6 2xl:mt-8  mt-3 border-black/25 pb-4 italic flex-col justify-between">
                <span className="text-[1.25rem] font-medium leading-[1.25rem] text-[#272727] capitalize">
                  Pixel Price
                </span>
                <span>$2.50 Per Pixel</span>
              </div>
              <div className="flex flex-col 2xl:pb-6 2xl:mt-8  mt-3 2xl:text-xl justify-between border-b-2 border-black/25 pb-4">
                <span className="text-[1.25rem] font-medium leading-[1.25rem] text-[#272727] capitalize">
                  Total Cost
                </span>
                <span>100 Pixels x $2.50 = $250.00</span>
              </div>

              <div className="flex flex-col 2xl:pb-6 2xl:mt-8  mt-3 2xl:text-xl justify-between border-b-2 border-black/25 pb-4">
                <span className="text-[1.25rem] font-medium leading-[1.25rem] text-[#272727] capitalize">
                  Additional Fees
                </span>
                <span>Tax: $5.00</span>
              </div>
              <div className="flex flex-col 2xl:pb-6 2xl:mt-8  mt-3 2xl:text-xl justify-between  border-b-2 border-black/25 pb-4">
                <span className="text-[1.25rem] font-medium leading-[1.25rem] text-[#272727] capitalize">
                  Total Amount
                </span>
                <span>$55.00</span>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full mt-6 px-6 2xl:px-10 py-3 2xl:py-5 2xl:text-2xl bg-[#F1713D]
               text-white rounded-[1rem] hover:bg-[#F1713D]/90 transition-colors"
            >
              Payment method
            </button>
          </div>
        </div>

        <div
          className={`bg-white w-full p-0.5 rounded-lg  text-black ${
            !isNext && "hidden"
          } transform transition-all duration-500 ease-in-out`}
        >
          <div className=" px-4 mb-2 flex flex-col gap-1">
            <h2 className="text-[#F1713D] text-[1.4rem] font-bold leading-[150%]">
              Terms and Conditions
            </h2>

            <h4 className="text-[#132F41] text-[1.122rem] font-bold leading-[150%]">
              Your Agreement
            </h4>
          </div>
          <div
            className="px-4 overflow-y-scroll h-[50vh]
              "
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#3DA29A #ffff",
            }}
          >
            {" "}
            <p className="text-[17px] font-medium leading-[150%] text-[#6B6B6B] font-['Roboto_Flex'] text-justify">
              December 16, 2013 <br /> Welcome to www.lorem-ipsum.info. This
              site is provided as a service to our visitors and may be used for
              informational purposes only. Because the Terms and Conditions
              contain legal obligations, please read them carefully. <br />{" "}
              <span className="font-semibold">1. YOUR AGREEMENT</span> <br /> By
              using this Site, you agree to be bound by, and to comply with,
              these Terms and Conditions. If you do not agree to these Terms and
              Conditions, please do not use this site. PLEASE NOTE: We reserve
              the right, at our sole discretion, to change, modify or otherwise
              alter these Terms and Conditions at any time. Unless otherwise
              indicated, amendments will become effective immediately. Please
              review these Terms and Conditions periodically. Your continued use
              of the Site following the posting of changes and/or modifications
              will constitute your acceptance of the revised Terms and
              Conditions and the reasonableness of these standards for notice of
              changes. For your information, this page was last updated as of
              the date at the top of these terms and conditions. <br />{" "}
              <span className="font-semibold">2. PRIVACY</span> <br /> Please
              review our Privacy Policy, which also governs your visit to this
              Site, to understand ou
            </p>
          </div>
          <div className="flex items-center px-3 w-full gap-1 ">
            <input
              type="checkbox"
              className="mr-2 w-5 h-5 accent-orange-500"
              required
            />
            <p className="text-[1rem] text-black font-medium leading-[130%] text-justify w-full">
              I confirm that I have read and accept the terms and conditions and
              privacy policy
            </p>
          </div>
          <div className="w-full flex items-center justify-end">
            <div className="flex items-center gap-10 p- justify-end px-3 p-3 w-full">
              <button
                onClick={handleNext}
                className="text-[#F1713D] cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => navigate("/payment")}
                className="flex w-[10rem] p-[1.3vh] justify-center items-center gap-[0.625rem] bg-[#F1713D] text-white rounded-[7.25px]"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
