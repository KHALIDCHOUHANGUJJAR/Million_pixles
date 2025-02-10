import { FaTrashAlt } from "react-icons/fa";

import { FaPen } from "react-icons/fa";
import { orders } from "../../Utils/text";

export default function OrderHistory() {
  return (
    <div className="flex  w-full flex-col bg-[#111111] p-4 text-white">
      <div className="mb-6 flex flex-col gap-4">
        <h1 className="text-xl font-semibold md:text-2xl xl:text-3xl">
          Order History
        </h1>
        <div className="rounded-xl bg-[#272727] p-3 md:p-2 2xl:p-4 ">
          <h2 className="text-lg font-medium text-gray-200 md:text-xl px-2">
            History
          </h2>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg "> 
        <table className="w-full border-collapse text-left text-sm l ">
          <thead>
            <tr className="border-b border-[#2a2a2a]">
              <th className="whitespace-nowrap px-4 py-4 2xl:py-5 2xl:px-5 2xl:text-xl font-black text-gray-400 ">
                Date & Time
              </th>
              <th className="whitespace-nowrap px-4 py-4 2xl:py-5 2xl:px-5 2xl:text-xl font-black text-gray-400">
                Order ID
              </th>
              <th className="whitespace-nowrap px-4 py-4 2xl:py-5 2xl:px-5 2xl:text-xl font-black text-gray-400">
                Pixel Count
              </th>
              <th className="whitespace-nowrap px-4 py-4 2xl:py-5 2xl:px-5 2xl:text-xl font-black text-gray-400">
                Order Price
              </th>
              <th className="whitespace-nowrap px-4 py-4 2xl:py-5 2xl:px-5 2xl:text-xl font-black text-gray-400">
                Pixel Positions
              </th>
              <th className="whitespace-nowrap px-4 py-4 2xl:py-5 2xl:px-5 2xl:text-xl font-black text-gray-400">
                Order Status
              </th>
              <th className="whitespace-nowrap px-4 py-4 2xl:py-5 2xl:px-5 2xl:text-xl font-black text-gray-400">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className=" overflow-y-scroll">
            {orders.map((order, index) => (
              <tr
                key={index}
                className={`border-b border-[#2a2a2a] text-sm  ${
                  index % 2 === 0 ? "bg-[#111111]" : "bg-[#111111]"
                }`}
              >
                <td className="whitespace-nowrap px-4 py-4.5 2xl:py-8 text-[#636364]">
                  {order.dateTime}
                </td>
                <td className="whitespace-nowrap px-4 py-4.5 text-[#636364]">
                  {order.orderId}
                </td>
                <td className="whitespace-nowrap px-4 py-4.5 text-[#636364]">
                  {order.pixelCount}
                </td>
                <td className="whitespace-nowrap px-4 py-4.5 text-[#636364]">
                  {order.orderPrice}
                </td>
                <td className="whitespace-nowrap px-4 py-4.5 text-[#636364]">
                  {order.pixelPositions}
                </td>
                <td className="whitespace-nowrap px-4 py-4.5">
                  <span
                    className={`rounded-md  px-2 py-2 2xl:py-3 2xl:px-3  cursor-pointer  text-xs font-bold ${
                      order.status === "Completed"
                        ? "bg-[#24CC63] text-white"
                        : "bg-[#FF3C23] text-white"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-3 2xl:py-5  ">
                  <div className="flex items-center gap-2 ">
                    <button className="rounded-md 2xl:p-4  cursor-pointer text-green-500 hover:bg-green-500/10">
                      <FaTrashAlt className="h-4 w-4" />
                    </button>
                    <button className="rounded-md p-1 cursor-pointer  hover:bg-green-500/10">
                      <FaPen className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
