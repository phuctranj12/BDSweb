import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/slide.css';

import slideImage1 from '../assets/image/Bds1.jpg';
import slideImage2 from '../assets/image/LK1.jpg';
import slideImage3 from '../assets/image/s4.JPG';

const BACKDROPS = [
    { img: slideImage1, alt: 'Toàn cảnh khu đô thị về đêm' },
    { img: slideImage2, alt: 'Dãy nhà liền kề đã hoàn thiện' },
    { img: slideImage3, alt: 'Hạ tầng nội khu dự án' },
];

const AUTOPLAY_MS = 7000;

/* The wordmark, split so each glyph can animate on its own.
   `wonk: true` marks the flourished italic word — Vietnamese's lowercase
   preposition "ở" plays the same role the italic ampersand does in the
   reference design. */
const WORDMARK = [
    [
        { text: 'KHU NHÀ' },
        { text: 'ở', wonk: true },
    ],
    [{ text: 'ĐẠI VI' }],
];

const PROPERTY_TYPES = ['Đất nền liền kề', 'Nhà phố', 'Căn hộ', 'Đất thổ cư'];
const LOCATIONS = ['Tiên Du', 'Từ Sơn', 'TP. Bắc Ninh', 'Yên Phong'];
const PRICES = ['Dưới 2 tỷ', '2 – 4 tỷ', '4 – 7 tỷ', 'Trên 7 tỷ'];

/** Renders the wordmark with one <span> per glyph, numbered continuously across
 *  every line and word so the stagger reads as a single phrase, not three. */
function Wordmark() {
    let index = 0;

    return (
        <h1 className="hero__wordmark">
            {WORDMARK.map((line, li) => (
                <span className="hero__line" key={li}>
                    {line.map((word, wi) => (
                        <span
                            className={word.wonk ? 'hero__word hero__word--wonk' : 'hero__word'}
                            key={wi}
                        >
                            {Array.from(word.text).map((char, ci) => {
                                const delay = index++ * 42;
                                return char === ' ' ? (
                                    <span className="hero__space" key={ci}>
                                        &nbsp;
                                    </span>
                                ) : (
                                    <span
                                        className="hero__char"
                                        key={ci}
                                        style={{ animationDelay: `${260 + delay}ms` }}
                                        aria-hidden="true"
                                    >
                                        {char}
                                    </span>
                                );
                            })}
                        </span>
                    ))}
                </span>
            ))}
            {/* The split glyphs are aria-hidden; this carries the real name. */}
            <span className="u-sr-only">Khu nhà ở Đại Vi</span>
        </h1>
    );
}

function Slide() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const [filters, setFilters] = useState({ type: '', location: '', price: '' });
    const navigate = useNavigate();
    const glowRef = useRef(null);

    const goTo = useCallback((i) => setActive((i + BACKDROPS.length) % BACKDROPS.length), []);
    const next = useCallback(() => goTo(active + 1), [active, goTo]);
    const prev = useCallback(() => goTo(active - 1), [active, goTo]);

    useEffect(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (paused || reduced) return undefined;

        const id = setInterval(next, AUTOPLAY_MS);
        return () => clearInterval(id);
    }, [paused, next]);

    /* The one parallax element on the page: a radial firelight wash that drifts
       at ~22% of scroll speed. rAF-throttled, transform-only, and skipped
       entirely for reduced-motion users. */
    useEffect(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const el = glowRef.current;
        if (reduced || !el) return undefined;

        let raf = 0;
        const onScroll = () => {
            if (raf) return;
            raf = requestAnimationFrame(() => {
                el.style.transform = `translate3d(0, ${window.scrollY * 0.22}px, 0)`;
                raf = 0;
            });
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    const onKeyDown = (e) => {
        if (e.key === 'ArrowRight') next();
        if (e.key === 'ArrowLeft') prev();
    };

    const onSearch = (e) => {
        e.preventDefault();
        const params = new URLSearchParams(Object.entries(filters).filter(([, v]) => v));
        navigate(`/DuAn${params.toString() ? `?${params}` : ''}`);
    };

    return (
        <section className="hero on-dark" aria-label="Giới thiệu dự án">
            <div
                className="hero__stage"
                role="region"
                aria-roledescription="carousel"
                aria-label="Ảnh dự án"
                tabIndex={0}
                onKeyDown={onKeyDown}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onFocus={() => setPaused(true)}
                onBlur={() => setPaused(false)}
            >
                <div className="hero__backdrops">
                    {BACKDROPS.map((b, i) => (
                        <img
                            key={b.img}
                            className={`hero__img${i === active ? ' is-active' : ''}`}
                            src={b.img}
                            alt=""
                            loading={i === 0 ? 'eager' : 'lazy'}
                            decoding="async"
                        />
                    ))}
                </div>

                <div className="hero__scrim" />
                <div className="hero__glow" ref={glowRef} aria-hidden="true" />

                <div className="hero__content u-container">
                    <p className="hero__eyebrow">Est. 2008 · Tiên Du, Bắc Ninh</p>

                    <Wordmark />

                    <p className="hero__tagline">
                        235 thửa đất ở ven sông. Pháp lý minh bạch.
                    </p>

                    <div className="hero__actions">
                        <button
                            type="button"
                            className="u-btn u-btn--ghost-light hero__cta"
                            onClick={() => navigate('/LienHe')}
                        >
                            Đặt lịch xem đất
                            <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                        </button>

                        <button type="button" className="hero__link" onClick={() => navigate('/DuAn')}>
                            Xem dự án
                        </button>
                    </div>
                </div>

                <div className="hero__controls u-container">
                    <span className="hero__caption">Khu nhà ở ven sông</span>

                    <div className="hero__dots">
                        {BACKDROPS.map((b, i) => (
                            <button
                                key={b.img}
                                type="button"
                                aria-label={`Ảnh ${i + 1} trên ${BACKDROPS.length}`}
                                aria-current={i === active}
                                className={`hero__dot${i === active ? ' is-active' : ''}`}
                                onClick={() => goTo(i)}
                            />
                        ))}
                    </div>

                    <span className="hero__scroll-cue" aria-hidden="true">
                        Cuộn
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                            <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                        </svg>
                    </span>
                </div>
            </div>

            {/* Search card overlaps the hero's bottom edge. */}
            <div className="u-container">
                <form className="hero-search" onSubmit={onSearch}>
                    <div className="hero-search__field">
                        <label htmlFor="f-type">Loại bất động sản</label>
                        <select
                            id="f-type"
                            value={filters.type}
                            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                        >
                            <option value="">Tất cả loại hình</option>
                            {PROPERTY_TYPES.map((t) => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                    </div>

                    <div className="hero-search__field">
                        <label htmlFor="f-loc">Khu vực</label>
                        <select
                            id="f-loc"
                            value={filters.location}
                            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                        >
                            <option value="">Mọi khu vực</option>
                            {LOCATIONS.map((l) => (
                                <option key={l} value={l}>{l}</option>
                            ))}
                        </select>
                    </div>

                    <div className="hero-search__field">
                        <label htmlFor="f-price">Mức giá</label>
                        <select
                            id="f-price"
                            value={filters.price}
                            onChange={(e) => setFilters({ ...filters, price: e.target.value })}
                        >
                            <option value="">Mọi mức giá</option>
                            {PRICES.map((p) => (
                                <option key={p} value={p}>{p}</option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className="u-btn u-btn--accent hero-search__submit">
                        Tìm kiếm
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Slide;
