import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const prefersReduced = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * A React Router <Link> that also handles the "already here" case.
 *
 * Navigating to the route you are already on is a no-op in the router, so the
 * global ScrollToTop (which keys on pathname change) never runs — the page just
 * sits there and feels frozen. Common in the footer, where many links point at
 * the same page (e.g. every service → /DichVu, every policy → /Policy).
 *
 * When the target equals the current path we cancel the dead navigation and
 * smooth-scroll to the top instead, so the click always does something visible.
 * Cross-route clicks fall through to the normal Link + ScrollToTop.
 */
function ScrollLink({ to, onClick, ...rest }) {
    const { pathname } = useLocation();

    const handleClick = (e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;

        const target = typeof to === 'string' ? to.split(/[?#]/)[0] : to?.pathname;
        if (target === pathname) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: prefersReduced() ? 'instant' : 'smooth' });
        }
    };

    return <Link to={to} onClick={handleClick} {...rest} />;
}

export default ScrollLink;
