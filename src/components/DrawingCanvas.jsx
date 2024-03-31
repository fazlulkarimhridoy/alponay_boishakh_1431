import { useRef, useState, useEffect } from 'react';
import BgImage from "../assets/BgImage1.png"
import Logo from "../assets/Boishakh-Logo.png"

const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    top: 0,
    left: 0,
    border: '2px solid black'
}

const DrawingCanvas = () => {
    const canvasRef = useRef(null);
    const [color, setColor] = useState('#000000');
    const [strokeSize, setStrokeSize] = useState(5);
    const [isEraser, setIsEraser] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const logoImage = new Image();
        logoImage.src = Logo;
        logoImage.onload = () => {
            const imageWidth = 250;
            const imageHeight = 170;

            const padding = 4;
            const x = padding;
            const y = padding;

            context.drawImage(logoImage, x, y, imageWidth, imageHeight);
        };
    }, []);

    const draw = (event) => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        if (isEraser) {
            // Eraser functionality
            context.clearRect(event.clientX - 10, event.clientY - 10, 20, 20);
        } else {
            // Drawing functionality
            context.strokeStyle = color;
            context.lineWidth = strokeSize;
            context.lineCap = 'round';

            const clientX = event.clientX || event.touches[0].clientX;
            const clientY = event.clientY || event.touches[0].clientY;

            context.lineTo(clientX, clientY);
            context.stroke();
            context.beginPath();
            context.moveTo(clientX, clientY);
        }
    };

    const startDrawing = (event) => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        context.beginPath();
        context.moveTo(event.clientX || event.touches[0].clientX, event.clientY || event.touches[0].clientY);

        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('touchmove', draw);
        canvas.addEventListener('touchend', stopDrawing);
    };

    const stopDrawing = () => {
        const canvas = canvasRef.current;
        canvas.removeEventListener('mousemove', draw);
        canvas.removeEventListener('mouseup', stopDrawing);
        canvas.removeEventListener('touchmove', draw);
        canvas.removeEventListener('touchend', stopDrawing);
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    };

    const saveDrawing = () => {
        const canvas = canvasRef.current;
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'drawing.png';
        link.click();
    };

    return (
        <div className='flex flex-col items-center justify-center gap-10 overflow-hidden'>
            <canvas
                ref={canvasRef}
                width={window.innerWidth}
                height="600px"
                onMouseDown={startDrawing}
                onTouchStart={startDrawing}
                style={bgImage}
            >
            </canvas>
            <div className='flex flex-row items-center justify-center gap-10'>
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
                <button onClick={() => setIsEraser(!isEraser)}>
                    {
                        isEraser
                            ? 'Draw'
                            : 'Eraser'
                    }
                </button>
                <button onClick={clearCanvas}>Clear</button>
                <button onClick={saveDrawing}>Save</button>
            </div>
        </div>
    );
};

export default DrawingCanvas;
