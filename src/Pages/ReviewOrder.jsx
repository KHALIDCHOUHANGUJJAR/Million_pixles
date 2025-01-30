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
    <div className="flex flex-col w-full md:flex-row min-h-screen">
      <div className="w-full md:w-[60%] bg-[#272727] p-6 min-h-screen">
        <div className="p-2 w-[60%]">
          <h1 className="text-white text-2xl font-semibold pb-4 border-b ">
            Review Your Order
          </h1>

          <div className="mt-8 mb-10 text-white space-y-8">
            <h2 className="text-xl ">Pixels Details</h2>

            <div className="space-y6">
              <div className="border-b pb-4 border-white/20">
                <p className="text-gray-400 mb-1">Selected Block</p>
                <p>300 x 500</p>
              </div>

              <div className="border-b pb-4 border-white/20">
                <p className="text-gray-400 mb-1">Pixels Count</p>
                <p>2000 Pixels</p>
              </div>

              <div className="border-b pb-4 border-white/20">
                <p className="text-gray-400 mb-1">Pixels Location</p>
                <p>X: 157Px Y: 284Px</p>
              </div>

              <div className="border-b pb-4 border-white/20">
                <p className="text-gray-400 mb-1">Price Per Pixels</p>
                <p>$2</p>
              </div>

              <div className="border-b pb-4 border-white/20">
                <p className="text-gray-400 mb-1">Total Price</p>
                <p>$2000</p>
              </div>
            </div>
          </div>

          <Button text={"Back"} handleClick={() => navigate("/pixels")} icon={<FaChevronLeft />} />
        </div>
      </div>

      <div className="w-full flex flex-col items-center  md:w-[50%] bg-[#F1713D] p-6 min-h-screen">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-start justify-center w-full">
            <div className="flex items-center flex-col justify-between">
              <div className="flex items-center justify-center p-3 w-4 h-4 rounded-full border-2   text-center">
                1
              </div>
              <h1 className="font-semibold">Buy Pixel</h1>
            </div>
            <div className="w-[8vw] border-1 border-white/20 "></div>
            <div className="flex items-center flex-col justify-between">
              <div className="flex items-center justify-center p-3 w-4 h-4 rounded-full border-2 bg-black border-black   text-center">
                2
              </div>
              <h1 className="font-semibold text-black">Confirm Order</h1>
            </div>
            <div className="w-[8vw] border-1 border-white/20 "></div>

            <div className="flex items-center  flex-col justify-between">
              <div className="flex items-center justify-center p-3 w-4 h-4 rounded-full border-2  border-white text-center">
                3
              </div>
              <h1 className="font-semibold">Payment</h1>
            </div>
          </div>
        </div>

        <div
          className={`bg-white rounded-lg p-6 w-[23vw] shadow-lg ${
            isNext && "hidden"
          } transform transition-all duration-100000 ease-in-out`}
        >
          <div className="mb-6">
            <h3 className="text-xl text-black font-bold mb-4">Order Summary</h3>

            <div className="space-y-2 mb-4  text-black">
              <div className="flex border-b-2 border-black/25 pb-4 flex-col justify-between">
                <span>Pixel Price</span>
                <span>$2.50 Per Pixel</span>
              </div>
              <div className="flex flex-col justify-between border-b-2 border-black/25 pb-4">
                <span>Total Cost</span>
                <span>100 Pixels x $2.50 = $250.00</span>
              </div>

              <div className="flex flex-col justify-between border-b-2 border-black/25 pb-4">
                <span>Additional Fees</span>
                <span>Tax: $5.00</span>
              </div>
              <div className="flex flex-col justify-between  border-b-2 border-black/25 pb-4">
                <span>Total Amount</span>
                <span>$55.00</span>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full mt-6 px-6 py-3 bg-[#F1713D] text-white rounded hover:bg-[#F1713D]/90 transition-colors"
            >
              Payment method
            </button>
          </div>
        </div>

        <div
          className={`bg-white w-full p-1 rounded-lg  text-black ${
            !isNext && "hidden"
          } transform transition-all duration-500 ease-in-out`}
        >
          <div className=" px-4 mb-4">
            <h2 className="text-[#F1713D] text-xl font-black ">
              Terms and Conditions
            </h2>
            <h4 className=" font-bold">Your Agreement</h4>
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
            <p className="text-md">
               December 16, 2013{" "}
              <br /> Welcome to www.lorem-ipsum.info. This site is provided as a
              service to our visitors and may be used for informational purposes
              only. Because the Terms and Conditions contain legal obligations,
              please read them carefully. <br />{" "}
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
            <p className="text-sm ml- font-bold w-full ">
              I confirm that I have read and accept the terms and conditions and
              privacy policy
            </p>
          </div>
          <div className="w-full flex items-center justify-end">
            <div className="flex items-center gap-10 p- justify-end px-3 p-3 w-full">
              <button onClick={handleNext} className="text-[#F1713D]">
                Cancel
              </button>
              <Button text={"Next"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
