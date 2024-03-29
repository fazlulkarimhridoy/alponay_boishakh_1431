import { useRef, useState } from 'react';

const DrawingCanvas = () => {
    const canvasRef = useRef(null);
    const [color, setColor] = useState('#000000');
    const [strokeSize, setStrokeSize] = useState(5);

    const draw = (event) => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        context.strokeStyle = color;
        context.lineWidth = strokeSize;
        context.lineCap = 'round';

        const clientX = event.clientX || event.touches[0].clientX;
        const clientY = event.clientY || event.touches[0].clientY;

        context.lineTo(clientX, clientY);
        context.stroke();
        context.beginPath();
        context.moveTo(clientX, clientY);
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
                style={{ border: '2px solid black' }}
            />
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
                <button onClick={clearCanvas}>Clear</button>
                <button onClick={saveDrawing}>Save</button>
            </div>
        </div>
    );
};

export default DrawingCanvas;