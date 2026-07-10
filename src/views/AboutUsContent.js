import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/aboutUs.css';
import Image1 from '../components/assets/image/s1.JPG';
import Image2 from '../components/assets/image/s3.JPG';
import News from '../components/new/News';
import BodyIntro from '../components/bdsIntroBody/body';

const COMPANY_INFO = [
    { label: 'Mã số thuế', value: '2300324841', tabular: true },
    { label: 'Địa chỉ', value: 'Lô F26, Khu đô thị Phú Điền, Phố chùa Dận, Phường Đình Bảng, TP. Từ Sơn, Bắc Ninh' },
    { label: 'Người đại diện', value: 'Tạ Thị Minh Lộc · Nguyễn Trọng Đại' },
    { label: 'Điện thoại', value: '0913 390 979', tabular: true },
    { label: 'Ngày hoạt động', value: '20/05/2008' },
    { label: 'Quản lý bởi', value: 'Chi cục Thuế khu vực Từ Sơn – Yên Phong' },
    { label: 'Loại hình', value: 'Công ty TNHH 2 thành viên trở lên ngoài NN' },
    { label: 'Tình trạng', value: 'Đang hoạt động (đã được cấp GCN ĐKTT)' },
];

const VALUES = [
    { title: 'Uy tín', body: 'Pháp lý minh bạch, thông tin trung thực, cam kết đúng như đã nói.' },
    { title: 'Chuyên nghiệp', body: 'Quy trình rõ ràng từ tư vấn, xem đất đến công chứng sang tên.' },
    { title: 'Khách hàng là trung tâm', body: 'Chúng tôi tư vấn theo nhu cầu thật của bạn, không đẩy hàng.' },
    { title: 'Liên tục đổi mới', body: 'Cập nhật thị trường, công nghệ và quy định pháp luật mỗi ngày.' },
];

const INDUSTRIES = [
    ['0810', 'Khai thác đá, cát, sỏi, đất sét'],
    ['4100', 'Xây dựng nhà các loại'],
    ['4210', 'Xây dựng công trình đường sắt và đường bộ'],
    ['4220', 'Xây dựng công trình công ích'],
    ['4290', 'Xây dựng công trình kỹ thuật dân dụng khác'],
    ['4311', 'Phá dỡ'],
    ['4312', 'Chuẩn bị mặt bằng'],
    ['4321', 'Lắp đặt hệ thống điện'],
    ['4322', 'Lắp đặt hệ thống cấp, thoát nước, lò sưởi và điều hoà không khí'],
    ['4329', 'Lắp đặt hệ thống xây dựng khác'],
    ['4330', 'Hoàn thiện công trình xây dựng'],
    ['4390', 'Hoạt động xây dựng chuyên dụng khác'],
    ['5210', 'Kho bãi và lưu giữ hàng hoá'],
    ['5224', 'Bốc xếp hàng hoá'],
    ['6810', 'Kinh doanh bất động sản, quyền sử dụng đất thuộc chủ sở hữu, chủ sử dụng hoặc đi thuê', true],
    ['6820', 'Tư vấn, môi giới, đấu giá bất động sản, đấu giá quyền sử dụng đất', true],
    ['7110', 'Hoạt động kiến trúc và tư vấn kỹ thuật có liên quan'],
    ['7410', 'Hoạt động thiết kế chuyên dụng'],
];

function AboutUsContent() {
    return (
        <>
            <header className="page-head">
                <div className="u-container">
                    <p className="u-eyebrow">Về chúng tôi</p>
                    <h1 className="page-head__title">Công ty TNHH Trường Phát Từ Sơn</h1>
                    <p className="page-head__lead">
                        Thành lập ngày 20/05/2008, chúng tôi hoạt động trong lĩnh vực xây dựng và
                        bất động sản tại Bắc Ninh, với sứ mệnh kết nối con người với không gian
                        sống mơ ước.
                    </p>
                </div>
            </header>

            <div className="u-container">
                <figure className="about__banner u-media">
                    <img
                        src={Image1}
                        alt="Toàn cảnh dự án khu nhà ở do Trường Phát Từ Sơn đầu tư"
                        loading="lazy"
                        decoding="async"
                    />
                </figure>
            </div>

            {/* Mission + vision */}
            <section className="u-section">
                <div className="u-container about__pillars">
                    <div>
                        <h2 className="about__pillar-title">Sứ mệnh</h2>
                        <p className="u-lead">
                            Kết nối con người với không gian sống mơ ước, góp phần kiến tạo cộng
                            đồng văn minh và hiện đại.
                        </p>
                    </div>
                    <div>
                        <h2 className="about__pillar-title">Tầm nhìn</h2>
                        <p className="u-lead">
                            Trở thành thương hiệu bất động sản uy tín hàng đầu tại Bắc Ninh và khu
                            vực đồng bằng Bắc Bộ.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core values */}
            <section className="about__values-section">
                <div className="u-container">
                    <p className="u-eyebrow">Giá trị cốt lõi</p>
                    <h2 className="about__section-title">Điều chúng tôi không đánh đổi</h2>

                    <ul className="about__values">
                        {VALUES.map((value, i) => (
                            <li key={value.title}>
                                <span className="about__value-num tabular">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <h3>{value.title}</h3>
                                <p>{value.body}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Registration details */}
            <section className="u-section">
                <div className="u-container">
                    <p className="u-eyebrow">Hồ sơ pháp lý</p>
                    <h2 className="about__section-title">Thông tin doanh nghiệp</h2>

                    <dl className="about__info">
                        {COMPANY_INFO.map((row) => (
                            <div key={row.label}>
                                <dt>{row.label}</dt>
                                <dd className={row.tabular ? 'tabular' : undefined}>{row.value}</dd>
                            </div>
                        ))}
                    </dl>

                    <a
                        className="about__doc"
                        href="/TruongPhatInfor.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                            <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z" />
                        </svg>
                        Giấy chứng nhận đăng ký doanh nghiệp
                        <span className="u-sr-only">(mở tab mới, tệp PDF)</span>
                    </a>
                </div>
            </section>

            {/* Trading floor */}
            <section className="about__floor">
                <div className="u-container about__floor-inner">
                    <figure className="u-media about__floor-media">
                        <img
                            src={Image2}
                            alt="Sàn giao dịch bất động sản Thanh Quỳnh"
                            loading="lazy"
                            decoding="async"
                        />
                    </figure>

                    <div>
                        <p className="u-eyebrow">Đơn vị thành viên</p>
                        <h2 className="about__section-title">Sàn giao dịch Thanh Quỳnh</h2>
                        <div className="prose about__floor-prose">
                            <p>
                                Sàn giao dịch bất động sản Thanh Quỳnh chuyên cung cấp dịch vụ mua
                                bán, cho thuê và đầu tư bất động sản, đáp ứng nhu cầu của cá nhân và
                                doanh nghiệp tại khu vực Bắc Ninh.
                            </p>
                            <p>
                                Với đội ngũ giàu kinh nghiệm và am hiểu sâu sắc thị trường địa
                                phương, Thanh Quỳnh cam kết mang đến những giải pháp đầu tư an toàn,
                                hiệu quả và bền vững — từ tư vấn pháp lý đến hỗ trợ thủ tục mua bán.
                            </p>
                        </div>
                        <Link to="/LienHe" className="u-btn u-btn--primary about__floor-cta">
                            Liên hệ với sàn
                        </Link>
                    </div>
                </div>
            </section>

            {/* Registered industries */}
            <section className="u-section">
                <div className="u-container">
                    <p className="u-eyebrow">Đăng ký kinh doanh</p>
                    <h2 className="about__section-title">Ngành nghề kinh doanh</h2>

                    <div className="about__table-scroll">
                        <table className="about__table">
                            <caption className="u-sr-only">
                                Danh sách ngành nghề kinh doanh đã đăng ký của Công ty TNHH Trường Phát Từ Sơn
                            </caption>
                            <thead>
                                <tr>
                                    <th scope="col">Mã</th>
                                    <th scope="col">Ngành nghề</th>
                                </tr>
                            </thead>
                            <tbody>
                                {INDUSTRIES.map(([code, name, primary]) => (
                                    <tr key={code} className={primary ? 'is-primary' : undefined}>
                                        <td className="tabular">{code}</td>
                                        <td>{name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <BodyIntro />
            <News />
        </>
    );
}

export default AboutUsContent;
