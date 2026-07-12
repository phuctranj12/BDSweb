import React from 'react';
import useReveal from '../../hooks/useReveal';
import '../../styles/manifesto.css';

/**
 * Full-bleed dark "spotlight" band that sits between two light sections to give
 * the home page vertical rhythm — a quiet editorial breath before the listings.
 * Pure statement, no CTA: the project's promise in one line.
 */
function Manifesto() {
    const revealRef = useReveal();

    return (
        <section className="manifesto on-dark" aria-label="Cam kết dự án" ref={revealRef}>
            <div className="u-container manifesto__inner">
                <p className="u-eyebrow" data-reveal>
                    Vì sao chọn Đại Vi
                </p>
                <blockquote className="manifesto__quote u-reveal-mask" data-reveal>
                    Pháp lý minh bạch, hạ tầng đã nghiệm thu, sổ đỏ từng lô —
                    <span className="u-wonk"> nền móng </span>
                    cho một mái ấm bền vững, không chỉ một giao dịch.
                </blockquote>
                <p className="manifesto__attribution tabular" data-reveal>
                    Trường Phát · Est. 2008 · Tiên Du, Bắc Ninh
                </p>
            </div>
        </section>
    );
}

export default Manifesto;
