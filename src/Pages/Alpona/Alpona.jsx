import { useEffect, useRef, useState } from "react";
import DrawingCanvas from "../../components/DrawingCanvas";
import img from "/DarkBG-01.png";
const Alpona = () => {
  const canvasRef = useRef(null);
  const [color, setColor] = useState("#ffffff");
  const [strokeSize, setStrokeSize] = useState(5);
  const [eraseSize, setEraseSize] = useState(10);
  const [isDrawing, setIsDrawing] = useState(false);
  const [selectedTool, setSelectedTool] = useState("brush");
  const [prevMouseX, setPrevMouseX] = useState(100);
  const [prevMouseY, setPrevMouseY] = useState(100);
  const [finalMouseX, setFinalMouseX] = useState(100);
  const [finalMouseY, setFinalMouseY] = useState(100);

  const startDrawing = (event) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    const rect = canvas.getBoundingClientRect();
    const offsetX = event.touches
      ? event.touches[0].clientX - rect.left
      : event.clientX - rect.left;

    const offsetY = event.touches
      ? event.touches[0].clientY - rect.top
      : event.clientY - rect.top;
    setPrevMouseX(offsetX);
    setPrevMouseY(offsetY);
    console.log(selectedTool);
    context.beginPath();
    if (selectedTool === "line") {
      context.moveTo(prevMouseX, prevMouseY);
      context.stroke();
    } else {
      context.moveTo(offsetX, offsetY);
    }
  };

  const draw = (event) => {
    if (!isDrawing) return;

    console.log(prevMouseX, prevMouseY);
    // console.log("updraw");
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

    if (selectedTool === "eraser") {
      const radius = eraseSize;
      eraseWithCircle(context, offsetX, offsetY, radius);
    } else if (selectedTool === "line") {
      // context.beginPath();
      // context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      context.moveTo(prevMouseX, prevMouseY);

      context.lineTo(offsetX, offsetY);
      // context.stroke();
    } else if (selectedTool === "circle") {
      context.beginPath();
      let radius = Math.sqrt(
        Math.pow(prevMouseX - offsetX, 2) + Math.pow(prevMouseY - offsetY, 2)
      );
      context.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI); // creating circle according to the mouse pointer

      context.stroke();
    } else {
      context.lineTo(offsetX, offsetY);
      context.stroke();
      context.beginPath();
      context.moveTo(offsetX, offsetY);
    }

    // setPrevMouseX(offsetX);
    // setPrevMouseY(offsetY);
    // console.log("downdraw");
  };

  const straightLine = (event) => {
    // console.log(selectedTool);
    // const canvas = canvasRef.current;
    // const context = canvas.getContext("2d");
    // context.lineCap = "round";
    const rect = canvas.getBoundingClientRect();

    const offsetX = event.touches
      ? event.touches[0].clientX - rect.left
      : event.clientX - rect.left;
    const offsetY = event.touches
      ? event.touches[0].clientY - rect.top
      : event.clientY - rect.top;

    context.beginPath();

    // console.log(prevMouseX, prevMouseY);
    console.log(prevMouseX, prevMouseY);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.moveTo(prevMouseX, prevMouseY);
    // context.moveTo(prevMouseX, prevMouseY);
    // console.log(sprevMouseX, sprevMouseX);
    // context.lineTo(sprevMouseX, sprevMouseX);
    console.log(offsetX, offsetY);
    context.lineTo(offsetX, offsetY);
    context.lineCap = "round";
    context.stroke();
  };
  // draw a line
  const drawLine = (info) => {
    const { x, y, x1, y1 } = info;

    context.beginPath();
    context.moveTo(x, y);
    // context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.lineTo(x1, y1);
    context.strokeStyle = color;
    context.lineWidth = strokeSize;
    context.stroke();
  };
  const stopDrawing = (event) => {
    setIsDrawing(false);
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
    context.moveTo(prevMouseX, prevMouseY);
    context.lineTo(offsetX, offsetY);
    context.stroke();

    // const canvas = canvasRef.current;
    canvas.removeEventListener("mousemove", draw);
    canvas.removeEventListener("mouseup", stopDrawing);
    canvas.removeEventListener("touchmove", draw);
    canvas.removeEventListener("touchend", stopDrawing);
  };
  // Add event listeners
  // canvas.addEventListener("mousedown", startDrawing);
  // canvas.addEventListener("mousemove", draw);
  // canvas.addEventListener("mouseup", stopDrawing);
  //   var prevMouseX, prevMouseY;

  // console.log(prevMouseX, prevMouseY);

  const eraseWithCircle = (context, x, y, radius) => {
    // const canvas = canvasRef.current;
    // const context = canvas.getContext("2d");
    context.save();
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    context.clip();
    context.lineCap = "round";
    context.globalCompositeOperation = "destination-out"; // Set the eraser mode
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.restore();
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

  const handleEraserClick = () => {
    setSelectedTool("eraser");
  };
  const handleSizeSlider = () => {
    console.log("ehll");
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <section className="h-dvh">
      {/* <!-- navbar --> */}
      <div className="py-6 relative w-full bg-[url('/alponatopbg.png')] flex items-center justify-between ">
        <div className="opacity-0  items-center gap-6 text-white">
          <img
            className="w-[64px] md:w-[120px]"
            src="/Boishakh-Logo_new.png"
            alt="boishakhi-logo-2"
          />
        </div>
        <div className="ms-12 flex items-center gap-6 text-white">
          <img
            className="w-[64px] md:w-28"
            src="/Boishakh-Logo_new.png"
            alt="boishakhi-logo-2"
          />
        </div>
        <button className="mr-12 rounded-sm  save-img text-base md:text-2xl bg-white font-semibold text-[#4B01A9] ">
          <div className="relative flex items-center px-7 py-3">
            <img
              className="absolute -left-2 -bottom-1 w-4 md:w-[45px]"
              src="/bracket.png"
              alt="button-bracket"
            />
            <span className="ms-3">সাবমিট</span>
          </div>
        </button>
        <img
          className="w-full absolute -bottom-5"
          src="/Alponatopdesign.png"
          alt="Alponatopdesign"
        />
      </div>
      {/* <!-- toolbar --> */}
      <div className="options bg-[#FFF7E9] flex items-center justify-between lg:px-10 pt-7 pb-3">
        <button
          type="button"
          className=" flex flex-col justify-center items-center"
          onClick={clearCanvas}
        >
          <div
            id="clear-canvas"
            className="option tool border-none cursor-pointer flex items-center bg-[url('/btnbg.png')] bg-cover"
          >
            <img
              className="w-[30px]   md:w-[50px] shadow-inner  p-[2px] lg:p-2 rounded-md "
              src="/Clear-01.png"
              alt="clear-canvas"
            />
          </div>
          <h2 className="text-xs  font-normal">মুছে ফেলুন</h2>
        </button>

        <button
          type="button"
          className="dropdown  dropdown-bottom flex flex-col justify-center items-center"
          tabIndex={0}
          role="button"
          onClick={handleEraserClick}
        >
          <div
            id="eraser"
            className="option tool border-none cursor-pointer flex justify-center items-center bg-[url('/btnbg.png')] bg-cover"
          >
            <img
              className="w-[30px]   md:w-[50px] shadow-inner  p-[2px] lg:p-2 rounded-md "
              src="/Eraser-02.png"
              alt="eraser"
            />
          </div>
          <h2 className="text-xs font-normal">ইরেজার</h2>
          <ul
            tabIndex={10}
            className="dropdown-content z-[1] menu p-1 shadow bg-[#662E91] rounded-sm w-32 mt-1"
          >
            <div className="bg-[#CAE6FF] flex items-center py-1 rounded-md border border-black">
              <input
                type="range"
                min="1"
                max="15"
                value={eraseSize}
                onChange={(e) => setEraseSize(e.target.value)}
                className="range range-accent  range-xs"
              />
            </div>
          </ul>
        </button>

        <button
          type="button"
          className="dropdown  dropdown-bottom flex flex-col justify-center items-center"
          tabIndex={0}
          role="button"
        >
          <div
            id="brush"
            className="option tool border-none cursor-pointer flex justify-center items-center bg-[url('/btnbg.png')] bg-cover"
            onClick={() => setSelectedTool("brush")}
          >
            <img
              className="w-[30px]   md:w-[50px] shadow-inner  p-[2px] lg:p-2 rounded-md "
              src="/Brush-2.png"
              alt="brush"
            />
          </div>
          <h2 className="text-xs font-normal">ব্রাশ</h2>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-1 shadow bg-[#662E91] rounded-sm w-32 mt-1"
          >
            <div className="bg-[#CAE6FF] flex items-center py-1 rounded-md border border-black">
              <input
                type="range"
                min="1"
                max="15"
                value={strokeSize}
                onChange={(e) => setStrokeSize(e.target.value)}
                className="range range-accent  range-xs"
              />
            </div>
          </ul>
        </button>

        <button
          type="button"
          className="dropdown  dropdown-bottom flex flex-col justify-center items-center"
          tabIndex={1}
          role="button"
        >
          <div
            id="shape"
            className="option tool border-none cursor-pointer flex justify-center items-center bg-[url('/btnbg.png')] bg-cover"
          >
            <img
              className="w-[30px]   md:w-[50px] shadow-inner  p-[2px] lg:p-2 rounded-md "
              src="/Shape-01.png"
              alt="shape"
            />
          </div>
          <h2 className="text-xs font-normal">আকৃতি</h2>
          <ul
            tabIndex={1}
            className="dropdown-content z-[1] menu p-1 shadow bg-[#662E91] rounded-sm w-40 mt-1"
          >
            <div className="bg-[#CAE6FF] flex items-center gap-1 md:gap-3  rounded-md border border-black">
              <div
                className="p-2 hover:bg-red-700"
                onClick={() => setSelectedTool("line")}
              >
                <img
                  id="line"
                  className="option tool w-[10px] md:w-[20px]"
                  src="/Line-6.png"
                  alt="line-6"
                />
              </div>
              <img
                id="circle"
                className="option tool w-[10px] md:w-[20px]"
                src="/circle.svg"
                alt="ellips-2"
              />
              <img
                id="linearrow"
                className="option tool w-[10px] md:w-[25px] rotate-45"
                src="/right-arrow.png"
                alt="Rectangle-24"
              />
              <img
                id="rectangle"
                className="option tool w-[10px] md:w-[20px]"
                src="/Rectangle-24.png"
                alt="Rectangle-24"
              />
            </div>
          </ul>
        </button>

        <button
          type="button"
          className="dropdown dropdown-bottom flex flex-col justify-center items-center"
          tabIndex={3}
          role="button"
        >
          <div
            id="shape"
            className=" border border-gray-500 rounded-sm option tool  cursor-pointer flex justify-center items-center shadow-inner  bg-white bg-cover "
          >
            <img
              className="w-[30px] p-1   md:w-[50px] shadow-inner   rounded-md "
              src="/Semetry-02.png"
              alt="sematry"
            />
          </div>
          <h2 className="text-xs font-normal">সিমেট্রি</h2>
          <ul
            tabIndex={3}
            className="dropdown-content hidden z-[1] menu p-1 shadow bg-[#662E91] rounded-sm w-40 mt-1"
          >
            <div className="bg-[#CAE6FF] flex items-center gap-1 md:gap-3 p-1.5 md:p-3.5 rounded-md border border-black">
              <img
                id="rectangle"
                className="option tool w-[10px] md:w-[20px]"
                src="/Rectangle-24.png"
                alt="Rectangle-24"
              />
            </div>
          </ul>
        </button>

        <div
          type="button"
          className="dropdown dropdown-bottom flex flex-col justify-center items-center"
          tabIndex={4}
          role="button"
        >
          <div
            id="shape"
            className="  rounded-sm option tool  cursor-pointer flex justify-center items-center shadow-inner  bg-white bg-cover "
          >
            <img
              id="scbg"
              data-dropdown-toggle="chooseColor"
              data-dropdown-placement="bottom"
              className="w-[30px] cursor-pointer md:w-[50px] p-2 rounded-md border border-black"
              src="/ColorDrum.png"
              alt="color"
              style={{ backgroundColor: color }}
            />
          </div>
          <h2 className="text-xs font-normal">রঙ</h2>
          <ul
            tabIndex={4}
            className="dropdown-content  z-[1] menu p-1 shadow bg-[#662E91] rounded-sm w-52 mt-1"
          >
            <div className="bg-[#CAE6FF] flex items-center gap-1 md:gap-3 p-1.5 md:p-3.5 rounded-md ">
              <div className="inline-flex  gap-3">
                <div className="colors myCodeisbefor grid grid-cols-5 items-center justify-center gap-[1px] md:gap-1 lg:gap-2">
                  <button
                    onClick={handleColorChange}
                    value={"black"}
                    className="option myCodeisbefor bg-[#000] w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-5 lg:h-5 rounded-full border border-black"
                  ></button>
                  <button
                    onClick={handleColorChange}
                    value={"#FF7F26"}
                    className="option myCodeisbefor bg-[#FF7F26] w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-5 lg:h-5 rounded-full border border-black"
                  ></button>
                  <button
                    onClick={handleColorChange}
                    value={"#E51D24"}
                    className="option selected myCodeisbefor bg-[#E51D24] w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-5 lg:h-5 rounded-full border border-black"
                  ></button>
                  <button
                    onClick={handleColorChange}
                    value={"#00ACEC"}
                    className="option myCodeisbefor bg-[#00ACEC] w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-5 lg:h-5 rounded-full border border-black"
                  ></button>
                  <button
                    onClick={handleColorChange}
                    value={"#008A2F"}
                    className="option myCodeisbefor bg-[#008A2F] w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-5 lg:h-5 rounded-full border border-black"
                  ></button>
                  <button
                    onClick={handleColorChange}
                    value={"#FF007A"}
                    className="option myCodeisbefor bg-[#FF007A] w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-5 lg:h-5 rounded-full border border-black"
                  ></button>
                  <button
                    onClick={handleColorChange}
                    value={"#26FFFF"}
                    className="option myCodeisbefor bg-[#26FFFF] w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-5 lg:h-5 rounded-full border border-black"
                  ></button>
                  <button
                    onClick={handleColorChange}
                    value={"#CC00FF"}
                    className="option myCodeisbefor bg-[#CC00FF] w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-5 lg:h-5 rounded-full border border-black"
                  ></button>
                  <button
                    onClick={handleColorChange}
                    value={"#FFFFFF"}
                    className="option myCodeisbefor bg-[#FFFFFF] w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-5 lg:h-5 rounded-full border border-black"
                  ></button>
                  <button
                    onClick={handleColorChange}
                    value={"#FFF626"}
                    className="option myCodeisbefor bg-[#FFF626] w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-5 lg:h-5 rounded-full border border-black"
                  ></button>
                </div>

                <div className="relative">
                  <label
                    htmlFor="color-picker"
                    className="relative cursor-pointer"
                  >
                    <img
                      src="/ColorWheel.png"
                      alt=""
                      className="w-14 object-cover cursor-pointer"
                    />
                    <span className="absolute cursor-pointer top-1 -right-2 w-5 h-5 flex justify-center items-center bg-white rounded-full border-2 border-black">
                      <img src="/+.png" alt="" />
                    </span>
                  </label>
                  <input
                    type="color"
                    id="color-picker"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    value={color}
                    onChange={handleColorChange}
                  />
                </div>
              </div>
            </div>
          </ul>
        </div>

        <div className="options flex items-center gap-3">
          <button
            type="button"
            className=" "
            // onClick={handleUndoClick}
          >
            <img
              className="w-[20px] md:w-[30px] option tool"
              id="undo"
              src="/undo.png"
              alt="undo"
            />
          </button>

          <button
            type="button"
            className=""
            // onClick={handleRedoClick}
          >
            <img
              className="w-[20px] md:w-[30px] option tool"
              id="redo"
              src="/redo-01.png"
              alt="redo"
            />
          </button>
        </div>
      </div>

      {/* <!-- canvas board --> */}
      <div className="h-[640px]  bg-[#f9a61a] p-5">
        <canvas
          className=" bg-[url('/DarkBG-01.png')] rounded-lg shadow-inner shadow-neutral-500"
          ref={canvasRef}
          width={window.innerWidth - 60}
          height={"600px"}
          onMouseDown={startDrawing}
          onTouchStart={startDrawing}
          onMouseMove={draw}
          onTouchMove={draw}
          onMouseUp={stopDrawing}
          onTouchEnd={stopDrawing}
        />
      </div>
    </section>
  );
};

export default Alpona;
