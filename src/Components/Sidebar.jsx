import { HomeOutlined } from "@ant-design/icons";
import { CiLogin, CiSettings } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="h-screen xl:w-[20%]  fixed z-10  2xl:w-[20%]  bg-[#171717] rounded-r-4xl  text-white  flex flex-col items-center">
      <div className="flex flex-col p-3 justify-between w-[18vw] 2xl:w-[16vw] h-full">
        <div>
          <h2 className=" text-3xl 2xl:text-4xl mb-10  font-semibold text-center py-1  border-gray-700">
            <span className="text-[#F1713D]">Wall</span>ofinternet
          </h2>

          <nav
            className=" bg-[#272727] text-[#777777] 
          shadow-2xl border-2 border-[#413e3e] rounded-xl p-2 flex flex-col gap-1.5
           xl:py-2 2xl:py-6"
          >
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `flex items-center xl:py-1.5 2xl:py-4.5 px-6 hover:bg-gray-700 ${
                  isActive ? "bg-[#F1713D] text-[#FFFFFF] rounded-2xl" : ""
                } text-lg font-bold`
              }
            >
              <HomeOutlined className=" text-xl mr-2" /> Home
            </NavLink>

            <NavLink
              to="/MyPixels"
              className={({ isActive }) =>
                `flex items-center xl:py-1.5 2xl:py-4.5 px-6 hover:bg-gray-700 ${
                  isActive ? "bg-[#F1713D]  text-[#FFFFFF] rounded-2xl" : ""
                } text-lg font-bold`
              }
            >
              <HomeOutlined className=" text-xl mr-2" /> My Pixels
            </NavLink>

            <NavLink
              to="/buy-sell"
              className={({ isActive }) =>
                `flex items-center xl:py-1.5 2xl:py-4.5 px-6 hover:bg-gray-700 ${
                  isActive ? "bg-[#F1713D]  text-[#FFFFFF] rounded-2xl" : ""
                } text-lg font-bold`
              }
            >
              <HomeOutlined className=" text-xl mr-2" /> Buy & Sell
            </NavLink>

            <NavLink
              to="/support"
              className={({ isActive }) =>
                `flex items-center xl:py-1.5 2xl:py-4.5 px-6   w-full hover:bg-gray-700 ${
                  isActive ? "bg-[#F1713D] rounded-2xl text-[#FFFFFF]" : ""
                } text-lg font-bold`
              }
            >
              <HomeOutlined className=" text-xl mr-2" /> Support Help
            </NavLink>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex items-center xl:py-1.5 2xl:py-5.5 px-6 hover:bg-gray-700 ${
                  isActive ? "bg-[#F1713D]  text-[#FFFFFF] rounded-2xl" : ""
                } text-lg font-bold`
              }
            >
              <HomeOutlined className=" text-xl mr-2" /> Profile
            </NavLink>
          </nav>

          <div
            className="mt-2 2xl:mt-6  p-1 2xl:p-2
             rounded-2xl bg-[#272727] border-2
           border-[#413e3e] shadow-2xl
            text-[#777777] 2xl:py-6"
          >
            <div className="flex items-center gap-3 2xl:py-3 py-2 px-4   rounded-xl">
              <IoMdNotificationsOutline className="text-2xl" />
              <h1 className="text-lg font-bold">Notifications</h1>
            </div>
            <div className="flex items-center gap-3 2xl:py-3 py-2 px-4 bg-[#272727] rounded-xl">
              <CiSettings className="text-2xl" />
              <h1 className="text-lg font-bold">Settings</h1>
            </div>
          </div>
        </div>

        <div className=" 2xl:mb-24 mb-8">
          <button
            className="w-full flex items-center gap-1 shadow-2xl
           border-2 border-[#413e3e]  p-4 xl:py-3 2xl:py-4 bg-[#272727]
            text-[#777777] font-black py-3 rounded-3xl 2xl:rounded-4xl"
          >
            <CiLogin className="text-2xl font-black " />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
