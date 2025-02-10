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
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "#ffff";
      ctx.lineWidth = 0.4;

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

      ctx.fillStyle = "#0000";
      ctx.fillRect(0, 9, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(255, 255, 0, 0.2)";
      ctx.fillRect(canvas.width * 0.6, canvas.height * 0.3, 200, 150);
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

      if (
        startX < restrictedX + restrictedWidth &&
        startX + Math.abs(endX - startX) > restrictedX &&
        startY < restrictedY + restrictedHeight &&
        startY + Math.abs(endY - startY) > restrictedY
      ) {
        if (!toastShown) {
          toast.error(
            "The selected area is restricted. Please select a smaller area."
          );
          toastShown = true;
        }
        return;
      }

      if (toastShown) {
        toastShown = false;
      }

      drawGrid();

      const width = Math.abs(endX - startX);
      const height = Math.abs(endY - startY);

      if (width > 1000 || height > 1000) {
        return;
      }

      ctx.fillStyle = "rgba(241, 113, 61, 0.3)";
      ctx.fillRect(startX, startY, width, height);
      ctx.strokeStyle = "#EBFA171A";
      ctx.lineWidth = 2;
      ctx.strokeRect(startX, startY, width, height);

      updatePixelDetails(width, height, startX, startY);
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
          isCollapsed ? "w-[90%]  " : " md:w-[70%] w-[100%] bg-[#F1713D]"
        }  flex flex-col transition-all`}
      >
        <div
          className={`w-full p-2 flex items-start ${
            isCollapsed ? "hidden" : "block"
          }`}
        >
          <div className=" md:w-[4vw] 2xl:w-[5vw] md:h-[8vh] 2xl:h-[9vh] w-[15vw] h-[8vh] bg-white rounded-full"></div>
        </div>

        <div className="flex flex-col flex-grow items-center justify-start p-2">
          <div
            className={`flex items-center justify-between px-6 mb-2 w-full ${
              isCollapsed ? " hidden" : "block"
            }`}
          >
            <h1 className="text-2xl 2xl:text-3xl  font-bold flex items-center gap-2">
              Select Pixel <IoIosInformationCircleOutline className="text-md" />
            </h1>
            <div className="flex items-center gap-1.5
             bg-[#B7552E] text-white text-sm  2xl:text-xl 2xl:p-3 rounded p-2">
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
              className="w-full h-full cursor-crosshair"
            />
          </div>

          <div
            className={`flex items-center justify-between w-full mt-4  ${
              isCollapsed ? " hidden" : "block"
            }`}
          >
            <div className="flex ml-6 items-center justify-between gap-4
             w-fit">
              <h2 className="flex items-center gap-1.5 2xl:text-xl">
                <FaCircle className="text-green-600" />
                Available Pixels
              </h2>
              <h2 className="flex items-center gap-1.5 2xl:text-xl">
                <FaCircle className="text-yellow-500" />
                Reserved blocks
              </h2>
            </div>
            <div className="flex gap-2">
              <button className="bg-gray-700 flex items-center
               gap-1.5 text-white px-4 py-2 2xl:text-xl rounded-md text-sm">
                <FaCircleQuestion /> How It Works
              </button>
              <button
                onClick={handleClick}
                className="bg-gray-700 text-white 2xl:text-xl px-4 py-2 rounded-md text-sm"
              >
                View Whole Canvas
              </button>
            </div>
          </div>
        </div>
      </div>
      <BiCollapseHorizontal
        onClick={handleClick}
        className={`absolute h-[4vh] w-[2vw] rounded-lg top-[20%] bg-[#272727] z-10 text-4xl text-white ${
          isCollapsed ? "left-[89%]" : "left-[68.9%]"
        }`}
      />

      <div
        className={`h-screen ${
          isCollapsed ? "w-[10%]" : "w-[30%]"
        } bg-[#272727] p-6 z-0 relative text-white flex flex-col transition-all`}
      >
        <h2 className="text-2xl 2xl:text-3xl 2xl:p-3 font-bold border-b text-center border-gray-600 pb-2">
          Pixels Details
        </h2>
        <div
          className={`flex flex-col justify-center
             h-full space-y-3 p-2 2xl:p-4 ${isCollapsed ? " hidden" : "block"}`}
          id="pixelsDetails"
        >
          <div
            className="border-2 p-6 2xl:space-y-10  flex  flex-col justify-center
           border-[#2F2F2F] rounded-2xl"
          >
            <p className="flex justify-between flex-col border-b gap-1.5 2xl:gap-6 border-gray-600 pb-2">
              <span className="font-bold">Selected Block:</span>
              <span id="selectedBlock">0 x 0</span>
            </p>
            <p className="flex justify-between flex-col border-b gap-1.5 2xl:gap-6 py-2 border-gray-600 pb-2">
              <span className="font-bold">Pixels Count:</span>
              <span id="pixelsCount">0 Pixels</span>
            </p>
            <p className="flex justify-between flex-col border-b gap-1.5 2xl:gap-6 py-2 border-gray-600 pb-2">
              <span className="font-bold">Pixels Location:</span>
              <span id="pixelsLocation">Y: 0px X: 0px</span>
            </p>
            <p className="flex justify-between border-b flex-col gap-1.5 2xl:gap-6 py-2 border-gray-600 pb-2">
              <span className="font-bold">Price Per:</span>
              <span id="pricePerPixel">$0.00</span>
            </p>
            <button
              onClick={() => navigate("/review")}
              className="w-full bg-[#F1713D] text-white font-bold 
              py-2 2xl:p-4 2xl:text-xl mt-4 rounded-md hover:bg-[#d85c2b] transition"
            >
              Confirm Selection
            </button>
          </div>
        </div>

        {isCollapsed ? (
          <div className="flex mt-[20vh] items-center justify-center h-full ">
            <div className="rotate-90">
              <Button text={"View Details"} handleClick={handleClick} />
            </div>
          </div>
        ) : (
          <p className="text-xs 2xl:text-lg text-gray-400 mt-auto text-center px-4 ">
            Claim your space in the digital landscape! Wall of internet lets you
            buy, own, and customize pixels on the most interactive online
            canvas. Showcase your creativity, promote your brand, or leave your
            mark forever—one pixel at a time!
          </p>
        )}
        <div
          className={` ${
            isCollapsed
              ? "  flex flex-col gap-2 "
              : " flex justify-center gap-3 text-xs 2xl:text-lg text-gray-400 mt-4"
          }`}
        >
          <Link to={"#"} className="hover:text-gray-200 underline">
            FAQ
          </Link>
          <Link to="#" className="hover:text-gray-200 underline">
            Help & Support
          </Link>
          <Link to={"#"} className="hover:text-gray-200 underline">
            Privacy & Policy
          </Link>
          <Link to={"#"} className="hover:text-gray-200 underline">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};
