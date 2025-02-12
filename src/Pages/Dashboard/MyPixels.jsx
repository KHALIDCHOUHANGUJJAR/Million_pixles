import { AiOutlineEdit } from "react-icons/ai";
import { BsExclamationCircleFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { RxArrowTopRight } from "react-icons/rx";
import { UseEditContext } from "../../Context/Context";
import { leftbarText, pixelOrders } from "../../Utils/text";

const MyPixels = () => {
  const { activeEditId, handleEdit } = UseEditContext();
  return (
    <div className="w-full   text-white">
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex  justify-center flex-col gap-1.5 ">
          <h1 className="text-2xl 2xl:text-3xl font-semibold px-6 ">
            {activeEditId ? "Edit Pixles" : "Order Pixles"}
          </h1>
          <div
            className={`flex items-center justify-center ${
              activeEditId ? "hidden" : "block"
            }`}
          >
            <div
              className="bg-[#171717] flex items-center
            border-2 border-[#353030] justify-between p-1 2xl:p-2 w-[98%] rounded-full px-8 2xl:px-10 "
            >
              <h2 className="2xl:text-2xl flex items-center  font-medium">
                Here You Can <br /> Manage Your Pixels.
              </h2>
              <div>
                <div
                  className="mt-1 2xl:mt-2 px-4 p flex items-center gap-1.5 2xl:gap-7 justify-between
                 rounded-2xl 2xl:rounded-3xl "
                >
                  {leftbarText.map((i, index) => {
                    if (index === 1) return null;
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between gap-5
                         border-2 border-[#4b4747] bg-[#272727]
                          px-3 xl:py-0.5 2xl:py-2 rounded-3xl 2xl:rounded-full text-sm"
                      >
                        <span className="xl:text-sm 2xl:text-md">
                          {index === 2 ? "Total Clicked" : i.textHeading}
                        </span>
                        <div
                          className="flex items-center xl:text-sm 2xl:text-md
                         bg-[#333333] p-1 px-2 rounded-4xl gap-1 border-2 border-[#2C2C2C]"
                        >
                          <span
                            className="bg-[#F1713D] 
                          w-[3vw] flex justify-center text-sm 
                           text-white  rounded-full"
                          >
                            {i.textSubHeading}
                          </span>
                          {i.textSubHeading2}
                        </div>
                      </div>
                    );
                  })}
                  <RxArrowTopRight
                    className="text-xl rounded-full bg-[#272727]
                   xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 text-center "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-1">
          {pixelOrders.map((order) => (
            <div key={order.id}>
              <div
                className={` rounded-xl p-0.5 2xl:p-4  px-4 flex flex-col justify-between sm:flex-row items-start sm:items-center ${
                  activeEditId === order.id ? "hidden" : "flex"
                }`}
              >
                <div className="flex items-center">
                  <div className="w-full sm:w-[15%] ">
                    <img
                      src={order.image || "/placeholder.svg"}
                      alt="Pixel preview"
                      className="h-24 md:h-20 2xl:h-[12vh] object-cover rounded-lg"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 w-full">
                    {order.dates.map((date, idx) => (
                      <div
                        key={idx}
                        className="space-y-1 2xl:space-y-3 text-center"
                      >
                        <h3 className="text-gray-400 font-medium 2xl:font-semibold">
                          {date}
                        </h3>
                        <p className="text-sm 2xl:text-xl text-gray-500">
                          Position: {order.positions[idx]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end items-center w-full sm:w-auto">
                  <button
                    className="p-2 hover:bg-[#272727] rounded-full transition-colors"
                    onClick={() => handleEdit(order.id)}
                  >
                    <FiEdit className="w-5 h-5 2xl:w-10 2xl:h-10" />
                  </button>
                </div>
              </div>

              <div className="px-4">
                {activeEditId === order.id && (
                  <div className="mt-2 bg-[#171717] rounded-xl p-3 flex flex-col  sm:flex-row gap-6 ">
                    <div className="flex flex-col items-center justify-between gap-5">
                      <div className=" border-2 rounded-xl border-dashed border-gray-500 p-3">
                        <img
                          src="/Assets/Images/images.jpeg"
                          alt=""
                          className="w-[50vw] h-32 2xl:h-[23vh] rounded-2xl "
                        />
                      </div>

                      <div
                        className="flex items-center
                     justify-between h-full p- border-2 
                     border-dashed rounded-2xl border-gray-500
                      p-1.5 bg-[#272727]"
                      >
                        <img
                          src="/Assets/Images/images.jpeg"
                          alt=""
                          className="w-[5vw] h-[5vh] rounded "
                        />
                        <input
                          type="file"
                          className="  border-gray-600 rounded-lg p-2 w-full text-sm text-white "
                        />
                      </div>
                    </div>

                    <div className="flex flex-col justify-between w-full sm:w-[40vw] h-[35vh] ">
                      <div className="text-center sm:text-left ">
                        <h2 className="text-lg font-semibold text-white">
                          12/Jan/2025
                        </h2>
                        <p className="text-gray-400">Position: X:10, Y:20</p>
                      </div>

                      <div className="flex text-start text-sm">
                        <p className="text-sm text-[#FFF]">
                          Please upload an image with a maximum size of 10x10
                          pixels. Ensure your file meets the size limit to
                          proceed.
                        </p>
                      </div>
                    </div>

                    <div className="hidden sm:block w-0.5 bg-gray-600"></div>

                    <div className="flex flex-col w-full sm:w-1/1  justify-center space-y-4 relative">
                      <div>
                        <label className="text-white text-sm">Text</label>
                        <AiOutlineEdit className="absolute left-[86%] top-[33%] 2xl:top-[38%] 2xl:text-3xl text-2xl" />

                        <input
                          type="text"
                          placeholder="Write here"
                          className="w-full p-2 2xl:p-4 bg-[#272727]  border border-gray-600 rounded-lg text-white"
                        />
                      </div>
                      <div className="w-full ">
                        <label className="text-white text-sm">URL 🔗</label>
                        <AiOutlineEdit className=" absolute left-[86%] top-[68%] 2xl:top-[64%] text-2xl 2xl:text-3xl" />
                        <input
                          type="url"
                          placeholder="Write here"
                          className="w-full p-2 2xl:p-4 bg-[#272727] border border-gray-600 rounded-lg text-white"
                        />
                      </div>
                    </div>

                    <div className="w-full ">
                      <div className="w-full flex justify-end ">
                        <button
                          onClick={handleEdit}
                          className="flex items-center justify-center rounded-full bg-[#F1713D] p-2 px-4 gap-3 text-xl cursor-pointer "
                        >
                          Save Change{" "}
                          <span>
                            <FiEdit />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={activeEditId ? "hidden" : "block"}>
          <div className="bg-[#814127] w-[100%] px-6 p-2 2xl:p-1 2xl:px-5 2xl:rounded-3xl rounded-2xl ">
            <div className="flex items-center justify-between w-full 2xl:text-2xl">
              <div className="flex items-center justify-center gap-1.5 ">
                {" "}
                <BsExclamationCircleFill className="w-5 h-5" />
                <span>Important Note:</span>
              </div>
              <div className="">
                <input
                  type="checkbox"
                  className="accent-amber-700 py-4 w-5 h-5"
                />
              </div>
            </div>
            <div className="text-center mt-1.5 2xl:text-2xl">
              <p>
                Please note that “not sent” , might be because target is not
                valid mobile or international number or your settings are
                configured not be send this Message type by SMS.
              </p>
              <p>
                Device sending is limited to avoid bans , these limits are
                gradually reduced to mitigate that risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPixels;
