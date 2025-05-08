import React, { useEffect, useState } from 'react';
import { FaPhone } from 'react-icons/fa';
import Draggable from 'react-draggable';
import '../../styles/callButton.css';

const CallButton = () => {
    const [isVibrating, setIsVibrating] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [clickTimeout, setClickTimeout] = useState(null);  // Để xử lý việc double-click

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVibrating(true);
            setTimeout(() => setIsVibrating(false), 1000);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const handleDoubleClick = () => {
        if (!isDragging) {  // Kiểm tra nếu không đang kéo
            window.location.href = 'tel:0782423245';
        }
    };

    const handleClick = () => {
        if (clickTimeout) {
            clearTimeout(clickTimeout);  // Clear timeout nếu có click trước đó
        }

        setClickTimeout(setTimeout(() => {
            // Nếu click không phải là double-click, không làm gì
        }, 300));  // Thời gian chờ để phân biệt single-click và double-click
    };

    return (
        <Draggable
            bounds="body"
            onStart={() => setIsDragging(true)}
            onStop={() => setIsDragging(false)}
        >
            <div className="call-wrapper">
                <div
                    onClick={handleClick}  // Thêm handleClick để kiểm soát single-click
                    onDoubleClick={handleDoubleClick}  // Xử lý double-click
                    className={`call-button ${isVibrating ? 'vibrating' : ''}`}
                >
                    <FaPhone className="call-icon" />
                </div>
            </div>
        </Draggable>
    );
};

export default CallButton;
