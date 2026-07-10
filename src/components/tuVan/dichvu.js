import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import '../../styles/dichvu.css';

const SERVICES = [
    {
        title: 'Mua bán nhà đất',
        body: 'Mạng lưới liên kết rộng khắp, từ phân khúc nhà ở đến đất đầu tư. Đội ngũ tư vấn đồng hành suốt quá trình, đảm bảo thủ tục thuận lợi và minh bạch.',
        icon: (
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
        ),
    },
    {
        title: 'Dịch vụ môi giới',
        body: 'Đội ngũ môi giới giàu kinh nghiệm, hiểu rõ thị trường địa phương. Chúng tôi kết nối bạn với những giao dịch hiệu quả, tiết kiệm thời gian và tối ưu lợi nhuận.',
        icon: (
            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
        ),
    },
    {
        title: 'Hỗ trợ cho thuê',
        body: 'Từ căn hộ, nhà riêng đến mặt bằng kinh doanh — chúng tôi tìm khách thuê hoặc mặt bằng phù hợp nhanh chóng, với hợp đồng rõ ràng và đáng tin cậy.',
        icon: (
            <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 1.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m3 0v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5M7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5M4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5M10.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM6 16v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16z" />
        ),
    },
    {
        title: 'Thẩm định giá',
        body: 'Thực hiện bởi chuyên gia giàu kinh nghiệm, cung cấp giá trị chính xác và khách quan. Giúp bạn nhìn rõ giá trị thực của tài sản trước khi quyết định.',
        icon: (
            <path d="M8 0a.5.5 0 0 1 .5.5v.518A7 7 0 0 1 14.982 7.5h.518a.5.5 0 0 1 0 1h-.518A7 7 0 0 1 8.5 14.982v.518a.5.5 0 0 1-1 0v-.518A7 7 0 0 1 1.018 8.5H.5a.5.5 0 0 1 0-1h.518A7 7 0 0 1 7.5 1.018V.5A.5.5 0 0 1 8 0m0 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2m0 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
        ),
    },
    {
        title: 'Tư vấn đầu tư',
        body: 'Phân tích thị trường và chiến lược đầu tư thông minh, giúp bạn tối ưu hoá lợi nhuận đồng thời giảm thiểu rủi ro trong trung và dài hạn.',
        icon: (
            <path d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07" />
        ),
    },
    {
        title: 'Hỗ trợ pháp lý',
        body: 'Từ kiểm tra quy hoạch, sổ đỏ đến công chứng và sang tên. Chúng tôi rà soát mọi giấy tờ để giao dịch của bạn diễn ra an toàn và đúng pháp luật.',
        icon: (
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M6.854 7.146a.5.5 0 1 0-.708.708L7.293 9l-1.147 1.146a.5.5 0 0 0 .708.708L8 9.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 9l1.147-1.146a.5.5 0 0 0-.708-.708L8 8.293z" />
        ),
    },
];

function DichVu() {
    const revealRef = useReveal();

    return (
        <>
            <header className="page-head">
                <div className="u-container">
                    <p className="u-eyebrow">Dịch vụ</p>
                    <h1 className="page-head__title">
                        Đồng hành trọn hành trình <span className="u-wonk">bất động sản</span>
                    </h1>
                    <p className="page-head__lead">
                        Từ lúc bạn bắt đầu tìm hiểu cho đến khi cầm sổ đỏ trong tay — Công ty TNHH
                        Trường Phát Từ Sơn cung cấp đầy đủ dịch vụ dưới một đầu mối duy nhất.
                    </p>
                </div>
            </header>

            <section className="services u-section" ref={revealRef}>
                <div className="u-container">
                    <ul className="services__grid" data-reveal-stagger>
                        {SERVICES.map((service) => (
                            <li key={service.title} className="service-card" data-reveal>
                                <span className="service-card__icon" aria-hidden="true">
                                    <svg width="22" height="22" viewBox="0 0 16 16" fill="currentColor">
                                        {service.icon}
                                    </svg>
                                </span>
                                <h2 className="service-card__title">{service.title}</h2>
                                <p className="service-card__body">{service.body}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="services__cta on-dark" data-reveal>
                        <h2>Không chắc bạn cần dịch vụ nào?</h2>
                        <p>Gọi cho chúng tôi, tư vấn ban đầu hoàn toàn miễn phí.</p>
                        <Link to="/LienHe" className="u-btn u-btn--ghost-light">
                            Liên hệ tư vấn
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DichVu;
