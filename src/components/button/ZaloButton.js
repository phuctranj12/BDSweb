import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import zaloIcon from '../assets/image/zalo.png';
import '../../styles/zaloButton.css';

const ZaloButton = () => {
    const [dragging, setDragging] = useState(false);
    const dragPosition = useRef({ x: 0, y: 0 });

    const handleStart = (e, data) => {
        setDragging(false);
        dragPosition.current = { x: data.x, y: data.y };
    };

    const handleStop = (e, data) => {
        const dx = Math.abs(data.x - dragPosition.current.x);
        const dy = Math.abs(data.y - dragPosition.current.y);
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Nếu kéo quá 5px thì coi như là drag
        if (distance > 5) {
            setDragging(true);
        } else {
            setDragging(false);
        }
    };

    const handleDoubleClick = () => {
        if (!dragging) {
            window.open('https://zalo.me/0368598999', '_blank');
        }
    };

    return (
        <Draggable
            onStart={handleStart}
            onStop={handleStop}
            bounds="body"
        >
            <div
                onDoubleClick={handleDoubleClick}
                className="zalo-button"
            >
                <img src={zaloIcon} alt="Zalo" className="zalo-icon" />
            </div>
        </Draggable>
    );
};

export default ZaloButton;
