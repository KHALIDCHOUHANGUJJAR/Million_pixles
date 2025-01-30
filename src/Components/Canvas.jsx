import { useEffect, useRef,  } from "react";

const Canvas = () => {
const canvasRef = useRef(null);

useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");
  let isDrawing = false;
  let startX, startY, endX, endY;

  const  resizeCanvas = ()=> {
    const container = canvas.parentElement;
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const  drawGrid=()=> {  
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#ffff";
    ctx.lineWidth = 0.5;

    const cellSize = 20;
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
    ctx.fillRect(0, 0, canvas.width, canvas.height);

  }

  const  updatePixelDetails=(width, height, x, y)=> {
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
  }

  const  startDrawing = (e)=> {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    startX = e.clientX - rect.left;
    startY = e.clientY - rect.top;
    endX = startX;
    endY = startY;
  }

  const  draw =(e)=> {
      if (!isDrawing) return;

    const rect = canvas.getBoundingClientRect();
    endX = e.clientX - rect.left;
    endY = e.clientY - rect.top;

    drawGrid();

    ctx.fillStyle = "rgba(241, 113, 61, 0.3)";
    ctx.fillRect(startX, startY, endX - startX, endY - startY);
    ctx.strokeStyle = "#EBFA171A";
    ctx.lineWidth = 2;
    ctx.strokeRect(startX, startY, endX - startX, endY - startY);

    updatePixelDetails(endX - startX, endY - startY, startX, startY);
  }

  const  stopDrawing =(  )=> {
    isDrawing = false;
  }

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
    
    <div className="w-full h-[64vh] bg-[#3b3131] rounded-lg overflow-hidden">
    <canvas ref={canvasRef} className="w-full h-full  cursor-crosshair" />
  </div>
  );
};

export default Canvas;
