import { useEffect, useRef, useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaCircle, FaCircleQuestion } from "react-icons/fa6";
import { BiCollapseHorizontal } from "react-icons/bi";
import Button from "../Components/Button";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

export const SelectPixels = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const canvasRef = useRef(null);
  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let isDrawing = false;
    let startX, startY, endX, endY;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const drawGrid = () => {
      ctx.fillStyle = "#272727";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "#ffff";
      ctx.lineWidth = 0.5;

      const cellSize = 15;
      for (let x = 0; x <= canvas.width; x += cellSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y <= canvas.height; y += cellSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      const restrictedX = canvas.width * 0.6;
      const restrictedY = canvas.height * 0.12;
      const restrictedWidth = 200;
      const restrictedHeight = 150;

      ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
      ctx.fillRect(restrictedX, restrictedY, restrictedWidth, restrictedHeight);
    };

    const updatePixelDetails = (width, height, x, y) => {
      const selectedBlock = document.getElementById("selectedBlock");
      const pixelsCount = document.getElementById("pixelsCount");
      const pixelsLocation = document.getElementById("pixelsLocation");
      const pricePerPixel = document.getElementById("pricePerPixel");

      const pixelCount = Math.abs(width * height);

      selectedBlock.textContent = `${Math.abs(width)} x ${Math.abs(height)}`;
      pixelsCount.textContent = `${pixelCount} Pixels`;
      pixelsLocation.textContent = `Y: ${Math.round(y)}px X: ${Math.round(
        x
      )}px`;
      pricePerPixel.textContent = `$${(pixelCount * 0.01).toFixed(2)}`;
    };

    const startDrawing = (e) => {
      isDrawing = true;
      const rect = canvas.getBoundingClientRect();
      startX = e.clientX - rect.left;
      startY = e.clientY - rect.top;

      startX = Math.floor(startX / 20) * 20;
      startY = Math.floor(startY / 20) * 20;

      endX = startX;
      endY = startY;
    };

    let toastShown = false;

    const draw = (e) => {
      if (!isDrawing) return;

      const rect = canvas.getBoundingClientRect();
      endX = e.clientX - rect.left;
      endY = e.clientY - rect.top;

      endX = Math.floor(endX / 20) * 20;
      endY = Math.floor(endY / 20) * 20;

      const restrictedX = canvas.width * 0.6;
      const restrictedY = canvas.height * 0.12;
      const restrictedWidth = 200;
      const restrictedHeight = 150;

      const width = endX - startX;
      const height = endY - startY;

      if (
        Math.min(startX, endX) < restrictedX + restrictedWidth &&
        Math.max(startX, endX) > restrictedX &&
        Math.min(startY, endY) < restrictedY + restrictedHeight &&
        Math.max(startY, endY) > restrictedY
      ) {
        if (!toastShown) {
          toast.error(
            "The selected area is restricted. Please select a different area."
          );
          toastShown = true;
        }
        return;
      }

      if (toastShown) {
        toastShown = false;
      }

      drawGrid();

      ctx.fillStyle = "rgba(241, 113, 61, 0.3)";
      ctx.fillRect(
        Math.min(startX, endX),
        Math.min(startY, endY),
        Math.abs(width),
        Math.abs(height)
      );
      ctx.strokeStyle = "#EBFA171A";
      ctx.lineWidth = 2;
      ctx.strokeRect(
        Math.min(startX, endX),
        Math.min(startY, endY),
        Math.abs(width),
        Math.abs(height)
      );

      updatePixelDetails(
        Math.abs(width),
        Math.abs(height),
        Math.min(startX, endX),
        Math.min(startY, endY)
      );
    };

    const stopDrawing = () => {
      isDrawing = false;
    };

    drawGrid();

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseleave", stopDrawing);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseleave", stopDrawing);
    };
  }, []);

  return (
    <div className="flex md:flex-row flex-col w-full h-screen">
      <div
        className={`h-screen ${
          isCollapsed ? "w-[90%]  " : " md:w-[70%] w-[100%] bg-orange-500"
        }  flex flex-col transition-all`}
      >
        <div
          className={`w-full p-2 flex items-start ${
            isCollapsed ? "hidden" : "block"
          }`}
        >
          <div className="w-[3rem] 2xl:w-[3rem] h-[7vh] 2xl:h-[3rem]  bg-text-200 rounded-full"></div>
        </div>

        <div className="flex flex-col flex-grow items-center justify-start p-">
          <div
            className={`flex items-center justify-between px-6 mb-2 w-full ${
              isCollapsed ? " hidden" : "block"
            }`}
          >
            <h1 className="text-[1.3rem] 2xl:text-[2rem] font-bold flex items-center gap-2">
              Select Pixel{" "}
              <IoIosInformationCircleOutline className="text-[1.7rem]" />
            </h1>

            <div
              className="inline-flex items-center gap-[0.625rem] bg-text2-200
             text-text-200 text-[0.85rem] 2xl:text-[1rem] 2xl:p-3 rounded p-[0.3rem]"
            >
              <IoIosInformationCircleOutline />
              Use Cursor To Select An Area
            </div>
          </div>

          <div
            className={` bg-[#5a4b4b] r overflow-hidden ${
              isCollapsed ? " w-full h-full" : "w-fit h-[70vh]"
            }`}
          >
            <canvas
              ref={canvasRef}
              className={`*:w-full 2xl:w-[66vw]  h-full cursor-crosshair ${isCollapsed? "2xl:w-full ":""}`}
            />
          </div>

          <div
            className={`flex items-center justify-between w-full mt-4   ${
              isCollapsed ? " hidden" : "block"
            }`}
          >
            <div
              className="flex ml-6 items-center justify-between gap-4
             w-fit"
            >
              <h2 className="flex items-center gap-1.5 2xl:text-xl">
                <FaCircle className="text-green-600" />
                Available Pixels
              </h2>
              <h2 className="flex items-center gap-1.5 2xl:text-xl">
                <FaCircle className="text-yellow-500" />
                Reserved blocks
              </h2>
            </div>
            <div className="flex gap-2 px-8">
              <button
                className="bg-[#272727] flex items-center
               gap-1.5 text-text-200 px-5 py-3 2xl:text-xl rounded-[1.34rem] text-sm"
              >
                <FaCircleQuestion /> How It Works
              </button>
              <button
                onClick={handleClick}
                className="bg-[#272727] text-text-200 2xl:text-xl px-4 py-2 rounded-[1.34rem] text-sm"
              >
                View Whole Canvas
              </button>
            </div>
          </div>
        </div>
      </div>
      <BiCollapseHorizontal
        onClick={handleClick}
        className={`absolute h-[4vh] w-[2vw] rounded-lg top-[9%] 2xl:top-[6%] bg-[#272727] z-10 text-4xl text-text-200 ${
          isCollapsed ? "left-[84.5%] top-[2%]" : "left-[68.9%]"
        }`}
      />

      <div
        className={`h-screen ${
          isCollapsed ? "w-[15%]" : "w-[30%]"
        } bg-[#272727] p-6 2xl:p-10 z-0 relative text-text-200 flex flex-col transition-all`}
      >
        <h2
          className={`
          text-2xl 2xl:text-3xl 2xl:p-3 font-bold border-b text-center border-text-2 pb-2 ${
            isCollapsed ? "text-[20px] 2xl:text-xl mt-12 font-normal " : "text-2xl 2xl:text-3xl"
          }
          `}
        >
          Pixels Details
        </h2>
        <div
          className={`flex flex-col justify-center
             h-full  p-2 2xl:p-4 ${isCollapsed ? " hidden" : "block"}`}
          id="pixelsDetails"
        >
          <div
            className=" p-3 2xl:space-y-4  flex  flex-col justify-center
          rounded-[1.25rem] border-2 border-[#343434]"
          >
            <p className="flex justify-between flex-col border-b gap-1 2xl:gap-6 border-text-2 pb-2">
              <span className="font-semibold">Selected Block</span>
              <span id="selectedBlock">0 x 0</span>
            </p>
            <p className="flex justify-between flex-col border-b gap-1.5 2xl:gap-6 py-2 border-text-2 pb-2">
              <span className="font-semibold">Pixels Count</span>
              <span id="pixelsCount">0 Pixels</span>
            </p>
            <p className="flex justify-between flex-col border-b gap-1.5 2xl:gap-6 py-2 border-text-2 pb-2">
              <span className="font-semibold">Pixels Location</span>
              <span id="pixelsLocation">Y. 0px X. 0px</span>
            </p>
            <p className="flex justify-between border-b flex-col gap-1.5 2xl:gap-6 py-2 border-text-2 pb-2">
              <span className="font-semibold">Price Per</span>
              <span id="pricePerPixel">$0.00</span>
            </p>
            <button
              onClick={() => navigate("/review")}
              className="w-full bg-orange-500 text-text-200 font-bold 
              py-2 2xl:p-4 2xl:text-xl mt-4 rounded-[1rem] hover:bg-text2-200 transition"
            >
              Confirm Selection
            </button>
          </div>
        </div>

        {isCollapsed ? (
          <div className="flex   items-center justify-center h-full ">
            <div className="rotate-90 ">
              <Button text={"View Details"} handleClick={handleClick} />
            </div>
          </div>
        ) : (
          <p className="text-[0.875rem]  text-[#E2E2E2] text-center font-[Poppins]">
            Claim your space in the digital landscape! Wall of Internet lets you
            buy, own, and customize pixels on the most interactive online
            canvas. Showcase your creativity, promote your brand, or leave your
            mark forever—one pixel at a time!
          </p>
        )}
        <div
          className={` ${
            isCollapsed
              ? "  flex flex-col gap-3 text-sm "
              : " flex justify-center gap-3 text-xs 2xl:text-md text-[#E2E2E2] mt-10"
          }`}
        >
          <Link to={"#"} className="hover:text-gray-200  underline italic">
            FAQ
          </Link>
          <Link to="#" className="hover:text-gray-200  underline italic">
            Help & Support
          </Link>
          <Link to={"#"} className="hover:text-gray-200 underline italic">
            Privacy & Policy
          </Link>
          <Link to={"#"} className="hover:text-gray-200   underline italic">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};
