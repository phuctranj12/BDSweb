import React from 'react';
import '../../styles/callButton.css';

const PHONE = '0977208988';

/**
 * The previous version was draggable and only fired on double-click, so a single
 * tap — what everyone actually does — did nothing. It is now a plain link.
 */
const CallButton = () => (
    <a
        className="fab fab--call"
        href={`tel:${PHONE}`}
        aria-label={`Gọi hotline ${PHONE}`}
    >
        <svg width="22" height="22" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z" />
        </svg>
        <span className="fab__tip">Gọi ngay</span>
    </a>
);

export default CallButton;
