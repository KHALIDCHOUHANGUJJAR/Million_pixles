import { NavLink } from "react-router-dom";
import { MdOutlineMicNone } from "react-icons/md";
import { CiSettings, CiLogin } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HomeOutlined, SearchOutlined } from "@ant-design/icons";

function Sidebar() {
  return (
    <div className="h-screen w-[25%] bg-[#171717] rounded-r-4xl  text-white p-3 flex flex-col">
      <div className="flex flex-col p-2 justify-between h-full">
        <div>
          <h2 className="text-3xl font-semibold text-center py-1  border-gray-700">
            <span className="text-orange-500">Wall</span>ofinternet
          </h2>

          <div className="flex items-center gap-2  mt-4">
            <input
              type="text"
              placeholder="Search"
              className="relative w-full shadow-2xl  px-10 py-2 border-2 bg-[#272727]  border-[#413e3e] rounded-3xl  focus:outline-none "
            />
            <SearchOutlined className="text-xl text-[#fffff] absolute left-[2.5%] " />
            <button className="p-3 rounded-full bg-[#272727] border-2 border-[#413e3e] ">
              <MdOutlineMicNone className="text-xl text-[#fffff] " />
            </button>
          </div>
          <br />
          <nav className="mt-2 bg-[#272727] text-[#777777] shadow-2xl border-2 border-[#413e3e] rounded-xl p-2 py-3">
            <NavLink
              to="/Home"
              className={({ isActive }) =>
                `flex items-center py-2 px-6 hover:bg-gray-700 ${
                  isActive ? "bg-[#B55A37] text-[#FFFFFF] rounded-2xl" : ""
                } text-lg font-semibold`
              }
            >
              <HomeOutlined className=" text-xl mr-2" /> Home
            </NavLink>

            <NavLink
              to="/MyPixels"
              className={({ isActive }) =>
                `flex items-center py-2 px-6 hover:bg-gray-700 ${
                  isActive ? "bg-[#B55A37]  text-[#FFFFFF] rounded-2xl" : ""
                } text-lg font-semibold`
              }
            >
              <HomeOutlined className=" text-xl mr-2" /> My Pixels
            </NavLink>

            <NavLink
              to="/buy-sell"
              className={({ isActive }) =>
                `flex items-center py-2 px-6 hover:bg-gray-700 ${
                  isActive ? "bg-[#B55A37]  text-[#FFFFFF] rounded-2xl" : ""
                } text-lg font-semibold`
              }
            >
              <HomeOutlined className=" text-xl mr-2" /> Buy & Sell
            </NavLink>

            <NavLink
              to="/support"
              className={({ isActive }) =>
                `flex items-center py-2 px-6   w-full hover:bg-gray-700 ${
                  isActive ? "bg-[#B55A37] rounded-2xl text-[#FFFFFF]" : ""
                } text-lg font-semibold`
              }
            >
              <HomeOutlined className=" text-xl mr-2" /> Support Help
            </NavLink>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex items-center py-2 px-6 hover:bg-gray-700 ${
                  isActive ? "bg-[#B55A37]  text-[#FFFFFF] rounded-2xl" : ""
                } text-lg font-semibold`
              }
            >
              <HomeOutlined className=" text-xl mr-2" /> Profile
            </NavLink>
          </nav>

          <div className="mt-2  p-1 rounded-2xl bg-[#272727] border-2 border-[#413e3e] shadow-2xl text-[#777777]">
            <div className="flex items-center gap-3 py-3 px-4   rounded-xl">
              <IoMdNotificationsOutline className="text-2xl" />
              <h1 className="text-lg font-bold">Notifications</h1>
            </div>
            <div className="flex items-center gap-3 py-3 px-4 bg-[#272727] rounded-xl">
              <CiSettings className="text-2xl" />
              <h1 className="text-lg font-bold">Settings</h1>
            </div>
          </div>
        </div>

        <div>
          <button className="w-full flex items-center gap-1 shadow-2xl border-2 border-[#413e3e]  p-4 bg-[#272727] text-[#777777] font-black py-3 rounded-3xl">
            <CiLogin className="text-2xl font-black " />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
