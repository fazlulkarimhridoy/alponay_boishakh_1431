import { useEffect, useRef, useState } from "react";

const DrawingCanvas = () => {
  const canvasRef = useRef(null);
  const [color, setColor] = useState("#000000");
  const [strokeSize, setStrokeSize] = useState(5);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isEraser, setIsEraser] = useState(false);

  const startDrawing = (event) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const offsetX = event.touches
      ? event.touches[0].clientX - rect.left
      : event.clientX - rect.left;
    const offsetY = event.touches
      ? event.touches[0].clientY - rect.top
      : event.clientY - rect.top;

    context.beginPath();
    context.moveTo(offsetX, offsetY);
    console.log("startdrawing");
  };

  const draw = (event) => {
    if (!isDrawing) return;
    // console.log("updraw")
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.strokeStyle = color;
    context.lineWidth = strokeSize;
    context.lineCap = "round";
    const rect = canvas.getBoundingClientRect();

    const offsetX = event.touches
      ? event.touches[0].clientX - rect.left
      : event.clientX - rect.left;
    const offsetY = event.touches
      ? event.touches[0].clientY - rect.top
      : event.clientY - rect.top;

    // this is extra
    //   context.stroke();
    // this is extra
    // if (isEraser) {
    //   // Eraser functionality
    //   context.clearRect(event.clientX - 10, event.clientY - 10, 20, 20);
    // }
    context.lineTo(offsetX, offsetY);
    context.stroke();
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    //   console.log("downdraw")
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const saveDrawing = () => {
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "drawing.png";
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height="600px"
        onMouseDown={startDrawing}
        onTouchStart={startDrawing}
        onMouseMove={draw}
        onTouchMove={draw}
        onMouseUp={() => setIsDrawing(false)}
        onTouchEnd={() => setIsDrawing(false)}
        style={{ border: "2px solid black" }}
      />
      <div className="flex flex-row items-center justify-center gap-10">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="range"
          value={strokeSize}
          onChange={(e) => setStrokeSize(e.target.value)}
          min="1"
          max="80"
        />
        <button onClick={clearCanvas}>Clear</button>
        <button onClick={saveDrawing}>Save</button>
      </div>
    </div>
  );
};

export default DrawingCanvas;
