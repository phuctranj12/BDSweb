import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import '../../styles/header.css';

const NAV_ITEMS = [
    { to: '/DuAn', label: 'Bất động sản' },
    { to: '/TuVan', label: 'Tư vấn' },
    { to: '/DichVu', label: 'Dịch vụ' },
    { to: '/AboutUs', label: 'Về chúng tôi' },
    { to: '/LienHe', label: 'Liên hệ' },
];

const HOTLINE = '0977208988';

function Header() {
    const { pathname } = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const drawerRef = useRef(null);
    const toggleRef = useRef(null);

    const isHome = pathname === '/';
    // Over the home hero the bar is transparent and the wordmark is hidden —
    // the hero already shouts the name. Past 60px it blurs in, and the small
    // wordmark fades up into the gap.
    const solid = scrolled || !isHome;

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close the drawer whenever the route changes.
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // While the drawer is open: lock body scroll, let Escape dismiss it, move
    // focus inside, trap Tab within it, and return focus to the toggle on close.
    // (The drawer is a full-screen opaque panel, so there is no "outside" region
    // to tap — Escape / a nav link / the toggle are the dismiss paths.)
    useEffect(() => {
        if (!menuOpen) return undefined;

        const drawer = drawerRef.current;
        // Capture the toggle node now; the cleanup restores focus to this exact
        // element (it's always mounted, so the ref won't have moved).
        const toggle = toggleRef.current;
        const focusable = () =>
            drawer
                ? Array.from(
                      drawer.querySelectorAll(
                          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
                      )
                  )
                : [];

        const onKeyDown = (e) => {
            if (e.key === 'Escape') {
                setMenuOpen(false);
                return;
            }
            if (e.key !== 'Tab') return;

            const items = focusable();
            if (items.length === 0) return;
            const first = items[0];
            const last = items[items.length - 1];

            // Keep Tab cycling inside the drawer instead of leaking to the page.
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKeyDown);
        // Send focus to the first item so screen-reader / keyboard users land
        // inside the panel they just opened.
        focusable()[0]?.focus();

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKeyDown);
            // Restore focus to the control that opened the drawer.
            toggle?.focus();
        };
    }, [menuOpen]);

    return (
        <header className={`site-header${solid ? ' is-solid' : ''}${menuOpen ? ' is-open' : ''}`}>
            <div className="site-header__inner">
                <Link to="/" className="brand" aria-label="Trường Phát — về trang chủ">
                    <span className="brand__name">Trường Phát</span>
                    <span className="brand__sub">Bất động sản</span>
                </Link>

                <nav className="site-nav" aria-label="Điều hướng chính">
                    <ul className="site-nav__list">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.to}>
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) =>
                                        isActive ? 'site-nav__link is-active' : 'site-nav__link'
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="site-header__actions">
                    <a className="header-hotline" href={`tel:${HOTLINE}`}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z" />
                        </svg>
                        <span className="tabular">{HOTLINE}</span>
                    </a>

                    <Link to="/LienHe" className="u-btn u-btn--primary header-cta">
                        Đặt lịch xem đất
                    </Link>

                    <button
                        ref={toggleRef}
                        type="button"
                        className="nav-toggle"
                        aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-drawer"
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        <span className="nav-toggle__bar" />
                        <span className="nav-toggle__bar" />
                    </button>
                </div>
            </div>

            <div id="mobile-drawer" className="mobile-drawer" hidden={!menuOpen} ref={drawerRef}>
                <nav aria-label="Điều hướng di động">
                    <ul className="mobile-drawer__list">
                        {NAV_ITEMS.map((item, i) => (
                            <li key={item.to} style={{ '--i': i }}>
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) =>
                                        isActive ? 'mobile-drawer__link is-active' : 'mobile-drawer__link'
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="mobile-drawer__foot">
                    <a className="u-btn u-btn--outline" href={`tel:${HOTLINE}`}>
                        Gọi {HOTLINE}
                    </a>
                    <Link to="/LienHe" className="u-btn u-btn--primary">
                        Đặt lịch xem đất
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
