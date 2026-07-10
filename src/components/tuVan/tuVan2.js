import React from 'react';
import '../../styles/tuvan2.css';

const STEPS = [
    {
        title: 'Lựa chọn & đăng ký dịch vụ',
        body: 'Đăng ký qua form trên trang web hoặc gọi trực tiếp tới hotline của công ty.',
    },
    {
        title: 'Xác nhận & ký hợp đồng',
        body: 'Nhân viên chăm sóc khách hàng liên hệ trong vòng 24 giờ để xác nhận dịch vụ và thống nhất hợp đồng.',
    },
    {
        title: 'Triển khai dịch vụ',
        body: 'Công ty tiến hành triển khai đúng phạm vi và tiến độ đã ký kết với khách hàng.',
    },
    {
        title: 'Đánh giá & kết thúc',
        body: 'Phản hồi của bạn được tiếp nhận để chúng tôi hoàn thiện và nâng cao chất lượng dịch vụ.',
    },
];

function TuVan2() {
    return (
        <>
            <header className="page-head">
                <div className="u-container">
                    <p className="u-eyebrow">Tư vấn</p>
                    <h1 className="page-head__title">Quy trình tư vấn</h1>
                    <p className="page-head__lead">
                        Bốn bước rõ ràng, không phát sinh bất ngờ. Bạn luôn biết chuyện gì sẽ diễn
                        ra tiếp theo.
                    </p>
                </div>
            </header>

            <section className="steps u-section">
                <div className="u-container">
                    <ol className="steps__list">
                        {STEPS.map((step, i) => (
                            <li key={step.title} className="step">
                                <span className="step__num tabular" aria-hidden="true">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <h2 className="step__title">{step.title}</h2>
                                <p className="step__body">{step.body}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>
        </>
    );
}

export default TuVan2;
