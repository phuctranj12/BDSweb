import React from 'react';
import zaloIcon from '../assets/image/zalo.png';
import '../../styles/zaloButton.css';

const ZALO_URL = 'https://zalo.me/0368598999';

/** Single tap, not double-click. See the note in CallButton. */
const ZaloButton = () => (
    <a
        className="fab fab--zalo"
        href={ZALO_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nhắn tin qua Zalo"
    >
        <img src={zaloIcon} alt="" width="26" height="26" />
        <span className="fab__tip">Chat Zalo</span>
    </a>
);

export default ZaloButton;
