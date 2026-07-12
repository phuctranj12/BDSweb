import React, { useEffect, useRef, useState } from 'react';
import '../../styles/contactFab.css';

const PHONE = '0977208988';
const ZALO_URL = 'https://zalo.me/0368598999';

// Phone glyph reused from the old CallButton.
const PhoneIcon = () => (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z" />
    </svg>
);

// Monochrome Zalo-style glyph: a rounded speech bubble with a stylised "Z".
// Line-art on purpose — matches the site's icon language and tints to brass via
// currentColor (no raster PNG, no off-tone brand blue).
const ZaloIcon = () => (
    <svg
        width="21"
        height="21"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M6 3.75h11A3.25 3.25 0 0 1 20.25 7v6A3.25 3.25 0 0 1 17 16.25h-6.4L6 19.75V16.2A3.25 3.25 0 0 1 3.75 13V7A3.25 3.25 0 0 1 6 3.75Z" />
        <path d="M9 8h5.4l-5.4 5h5.4" />
    </svg>
);

const ACTIONS = [
    { key: 'call', label: 'Gọi ngay', href: `tel:${PHONE}`, Icon: PhoneIcon, external: false },
    { key: 'zalo', label: 'Chat Zalo', href: ZALO_URL, Icon: ZaloIcon, external: true },
];

function ContactFab() {
    const [open, setOpen] = useState(false);
    const rootRef = useRef(null);
    const toggleRef = useRef(null);
    const menuRef = useRef(null);
    const firstItemRef = useRef(null);

    // While closed, `inert` removes the menu from BOTH the tab order and the
    // accessibility tree. aria-hidden alone would be an ARIA violation because
    // the <a href> items remain programmatically focusable.
    useEffect(() => {
        if (menuRef.current) menuRef.current.inert = !open;
    }, [open]);

    // Close on outside pointer / Escape. Escape returns focus to the toggle.
    useEffect(() => {
        if (!open) return undefined;

        const onPointerDown = (e) => {
            if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
        };
        const onKeyDown = (e) => {
            if (e.key === 'Escape') {
                setOpen(false);
                toggleRef.current?.focus();
            }
        };

        document.addEventListener('pointerdown', onPointerDown);
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('pointerdown', onPointerDown);
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [open]);

    // Move focus onto the first action when the menu opens.
    useEffect(() => {
        if (open) firstItemRef.current?.focus();
    }, [open]);

    return (
        <div className={`cfab${open ? ' is-open' : ''}`} ref={rootRef}>
            <ul id="cfab-menu" className="cfab__menu" ref={menuRef}>
                {ACTIONS.map((action, i) => {
                    const { key, label, href, Icon, external } = action;
                    return (
                        <li key={key} className="cfab__row" style={{ '--i': ACTIONS.length - 1 - i }}>
                            <a
                                ref={i === 0 ? firstItemRef : undefined}
                                className="cfab__item"
                                href={href}
                                aria-label={label}
                                tabIndex={open ? 0 : -1}
                                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                onClick={() => setOpen(false)}
                            >
                                <span className="cfab__label">{label}</span>
                                <span className="cfab__disc">
                                    <Icon />
                                </span>
                            </a>
                        </li>
                    );
                })}
            </ul>

            <button
                type="button"
                ref={toggleRef}
                className="cfab__toggle"
                aria-expanded={open}
                aria-controls="cfab-menu"
                aria-label={open ? 'Đóng liên hệ nhanh' : 'Liên hệ nhanh'}
                onClick={() => setOpen((o) => !o)}
            >
                {/* Two glyphs crossfade + rotate between closed (chat) and open (×). */}
                <svg className="cfab__ico cfab__ico--open" width="24" height="24" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
                <svg className="cfab__ico cfab__ico--close" width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
            </button>
        </div>
    );
}

export default ContactFab;
