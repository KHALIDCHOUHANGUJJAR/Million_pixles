import { BellOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { IoIosContact, IoIosInformationCircleOutline } from "react-icons/io";
import { LuCrown } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { UseEditContext } from "../Context/Context";

const Header = () => {
  const navigate = useNavigate();

  const { handleEdit, activeEditId } = UseEditContext();
  const routes = {
    "Manage Pixels": "/home",
    "Order Pixels": "/MyPixels",
    "Edit Pixels": handleEdit,
    "My order History": "/history",
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index, route) => {
    if (route === handleEdit) {
      handleEdit(activeEditId === null ? index : null);
      setActiveIndex(index === activeIndex ? null : index);

      if (activeEditId === null) {
        navigate("/MyPixels");
      }
    } else {
      setActiveIndex(index);
      navigate(route);
    }
  };

  return (
    <div>
      <header className="flex flex-col w-full 2xl:w-[100%] p-5 h-[20vh] bg-body-400  gap-2">
        <div className="flex justify-between w-full mb-1 2xl:mb-4">
          <div>
            <h1 className="text-2xl 2xl:text-4xl font-bold">
              Welcome to your account
            </h1>
            <p className="text-[#c4baba] 2xl:text-2xl">
              Here you can manage your pixels.
            </p>
          </div>
          <div
            className="2xl:p-4 flex border-2 text-[#8a8686] font-semibold rounded-3xl hover:bg-gray-700 cursor-pointer
           text-center p-1 text-md 2xl:text-xl h-10  gap-1 text-sm items-center border-gray-700 bg-body2-400 px-3"
          >
            <LuCrown className="2xl:text-xl text-lg" />
            Pro Member
          </div>
          <div className="flex gap-10">
            <div className="flex ">
              <div
                className="bg-[#A86D5B] xl:h-[2.5vw] 2xl:h-[2.6vw] text-center flex items-center justify-center
                w-9 2xl:w-12 rounded-full text-black border-[#696464] -mr-[6px]"
              >
                CM
              </div>

              <div
                className="bg-[#A86D5B] xl:h-[2.5vw] 2xl:h-[2.6vw] text-center flex items-center justify-center 
                 w-9 2xl:w-12 rounded-full text-black border-[#696464]   "
              >
                SH
              </div>
              <div
                className="2xl:p-4 flex border-2 text-[#8a8686] font-semibold hover:bg-gray-700 cursor-pointer
              2xl:rounded-4xl
              rounded-3xl text-center p-1 text-md 2xl:text-xl h-10 text-sm items-center border-gray-700 bg-body2-400 px-3"
              >
                Invited
                <PlusCircleOutlined className=" ml-0.5" />
              </div>
            </div>
            <div
              className="ml-11 flex border-2 justify-between gap-3 text-[#8a8686]  cursor-pointer
            font-semibold rounded-3xl text-center xl:p-4 2xl:p-4 h-10 items-center hover:bg-gray-700 bg-body2-400 border-gray-700 px-3"
            >
              <BellOutlined className="xl:text-2xl 2xl:text-3xl text-text-2" />
              <IoIosInformationCircleOutline className="xl:text-2xl 2xl:text-3xl text-text-2" />
              <IoIosContact className="xl:text-3xl 2xl:text-3xl rounded-full text-text-2 bg-[#2EBC96]" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 2xl:gap-2">
            {Object.entries(routes).map(([label, path], index) => (
              <div key={index}>
                {label === "Edit Pixels" ? (
                  <div
                    onClick={() => handleClick(index, handleEdit)}
                    className={`flex gap-2 border-2 text-[#8a8686]
                    2xl:rounded-4xl rounded-3xl text-center xl:p-2 px-8 2xl:p-5  h-10 
                    items-center 2xl:text-lg text-sm border-gray-700  font-semibold  hover:bg-gray-700 ${
                      activeIndex === index
                        ? "bg-orange-500 text-text-200 border-text2-200"
                        : "bg-body2-400 text-[#8a8686]"
                    } cursor-pointer transition-all duration-300`}
                  >
                    <PlusCircleOutlined />
                    {label}
                  </div>
                ) : (
                  <Link
                    to={path}
                    key={index}
                    onClick={() => handleClick(index, path)}
                    className={`flex gap-2 border-2 text-[#8a8686]
                    2xl:rounded-4xl rounded-3xl text-center xl:p-2 px-8 2xl:p-5  h-10 
                    items-center 2xl:text-lg text-sm border-gray-700  font-semibold hover:bg-gray-700 ${
                      activeIndex === index
                        ? "bg-orange-500 text-text-200 border-text2-200"
                        : "bg-body2-400 text-[#8a8686]"
                    } cursor-pointer transition-all duration-300`}
                  >
                    <PlusCircleOutlined />
                    {label}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <p className="text-[#dad5d5] font-semibold p-1">
            Questions? Email us: info@1millionpixel.com{" "}
          </p>
        </div>
      </header>
    </div>
  );
};

export default Header;
