import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/datlich.css';

const ACTIONS = [
    {
        title: 'Yêu cầu tư vấn',
        body: 'Tư vấn về các dịch vụ mua bán và cho thuê bất động sản tại Bắc Ninh.',
        cta: 'Liên hệ ngay',
        icon: (
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z" />
        ),
    },
    {
        title: 'Đặt lịch tham quan',
        body: 'Đặt lịch hẹn để trực tiếp xem và tham quan dự án bất động sản tại Bắc Ninh.',
        cta: 'Đặt lịch ngay',
        icon: (
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
        ),
    },
];

function DatLich() {
    return (
        <section className="booking u-section">
            <div className="u-container">
                <ul className="booking__grid">
                    {ACTIONS.map((action) => (
                        <li key={action.title} className="booking-card">
                            <span className="booking-card__icon" aria-hidden="true">
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                                    {action.icon}
                                </svg>
                            </span>
                            <h2 className="booking-card__title">{action.title}</h2>
                            <p className="booking-card__body">{action.body}</p>
                            <Link to="/LienHe" className="u-btn u-btn--primary booking-card__cta">
                                {action.cta}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default DatLich;
