import React from 'react';
import useReveal from '../../hooks/useReveal';
import '../../styles/duan.css';
import chiaLo from '../assets/image/chiaLo.jpeg';
import DuAn1 from '../assets/image/DuAn1.jpg';
import LK1 from '../assets/image/LK1.jpg';

const FACTS = [
    { term: 'Tên dự án', value: 'Khu nhà ở thôn Đại Vi, xã Đại Đồng, huyện Tiên Du' },
    { term: 'Chủ đầu tư', value: 'Công ty TNHH Trường Phát Từ Sơn' },
    { term: 'Địa điểm', value: 'Xã Đại Đồng, huyện Tiên Du, tỉnh Bắc Ninh' },
    { term: 'Tổng diện tích', value: '59.935,5 m²' },
    { term: 'Diện tích đất ở', value: '23.939,5 m² — 235 thửa' },
    { term: 'Hạ tầng kỹ thuật', value: 'Đã nghiệm thu ngày 24/10/2024' },
];

const HIGHLIGHTS = [
    {
        title: 'Thiết kế hiện đại và hợp lý',
        body: 'Lô đất từ 80 m² đến hơn 200 m², phù hợp cho nhà ở gia đình lẫn biệt thự. Thiết kế mở với không gian xanh và ánh sáng tự nhiên dồi dào.',
    },
    {
        title: 'Công viên cây xanh và hồ nước',
        body: 'Công viên trung tâm với lối đi bộ và khu vui chơi trẻ em. Cảnh quan hồ nước điều hoà không khí cho toàn khu dân cư.',
    },
    {
        title: 'Tiện ích nội khu đầy đủ',
        body: 'Sân thể thao, khu tập luyện, bãi đỗ xe và khu sinh hoạt cộng đồng — tất cả trong khoảng cách đi bộ.',
    },
    {
        title: 'Giao thông nội khu thông minh',
        body: 'Đường nội khu rộng rãi, kết nối liên hoàn giữa các phân khu và ra thẳng trục đường chính của khu vực.',
    },
    {
        title: 'Hạ tầng kỹ thuật đồng bộ',
        body: 'Cấp thoát nước, điện ngầm, chiếu sáng công cộng và an ninh bảo vệ 24/7 đã hoàn thiện và nghiệm thu.',
    },
    {
        title: 'Pháp lý minh bạch',
        body: 'Dự án đã hoàn tất thủ tục pháp lý và đấu giá quyền sử dụng đất. Sổ đỏ từng lô, quyền sở hữu rõ ràng.',
    },
];

function DuAn() {
    const revealRef = useReveal();

    return (
        <article className="project" ref={revealRef}>
            <header className="project__head">
                <div className="u-container">
                    <p className="u-eyebrow">Bắc Ninh · Tiên Du</p>
                    <h1 className="project__title">
                        Dự án Khu nhà <span className="u-wonk">ở</span> Thôn Đại Vi
                    </h1>
                    <p className="project__lead">
                        235 thửa đất ở trên tổng diện tích 59.935,5 m². Hạ tầng kỹ thuật đã hoàn
                        thiện và nghiệm thu, pháp lý minh bạch, sẵn sàng bàn giao.
                    </p>
                </div>
            </header>

            <div className="u-container">
                {/* Asymmetric gallery, echoing the reference layout. */}
                <div className="project__gallery">
                    <figure className="project__gallery-main u-media">
                        <img
                            src={chiaLo}
                            alt="Bản đồ quy hoạch chia lô toàn bộ dự án Khu nhà ở thôn Đại Vi"
                            loading="lazy"
                            decoding="async"
                        />
                    </figure>
                    <div className="project__gallery-side">
                        <figure className="u-media">
                            <img src={DuAn1} alt="Phối cảnh tổng thể khu nhà ở" loading="lazy" decoding="async" />
                        </figure>
                        <figure className="u-media">
                            <img src={LK1} alt="Phối cảnh dãy nhà liền kề" loading="lazy" decoding="async" />
                        </figure>
                    </div>
                </div>

                {/* Facts + narrative sit side by side on desktop. */}
                <div className="project__layout">
                    <aside className="project__facts">
                        <h2 className="project__facts-title">Thông tin chung</h2>
                        <dl>
                            {FACTS.map((fact) => (
                                <div key={fact.term}>
                                    <dt>{fact.term}</dt>
                                    <dd>{fact.value}</dd>
                                </div>
                            ))}
                        </dl>

                        <div className="project__docs">
                            <a href="/VanBanChuyenNhuong.pdf" target="_blank" rel="noopener noreferrer">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                                    <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z" />
                                </svg>
                                Văn bản chuyển nhượng
                                <span className="u-sr-only">(mở tab mới, tệp PDF)</span>
                            </a>
                            <a href="/QuyetDinhTrungDauGia.pdf" target="_blank" rel="noopener noreferrer">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                                    <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z" />
                                </svg>
                                Quyết định trúng đấu giá
                                <span className="u-sr-only">(mở tab mới, tệp PDF)</span>
                            </a>
                        </div>
                    </aside>

                    <div className="project__body prose">
                        <section>
                            <h2>Tổng quan quy hoạch</h2>
                            <p>
                                Dự án được quy hoạch tổng thể với nhiều khu vực chức năng đa dạng.
                                Khu đất được chia lô rõ ràng với diện tích từng lô cụ thể, giúp khách
                                hàng dễ dàng lựa chọn vị trí phù hợp. Thiết kế hướng đến sự hài hoà
                                giữa không gian sống và thiên nhiên, với công viên cây xanh, hồ nước,
                                lối đi bộ cùng các tiện ích công cộng phục vụ cư dân.
                            </p>
                        </section>

                        <section>
                            <h2>Điểm nổi bật</h2>
                            <ul className="project__highlights" data-reveal-stagger>
                                {HIGHLIGHTS.map((item, i) => (
                                    <li key={item.title} data-reveal>
                                        <span className="project__highlight-num tabular">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <h3>{item.title}</h3>
                                        <p>{item.body}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2>Tiềm năng đầu tư</h2>
                            <p>
                                Xã Đại Đồng, huyện Tiên Du đang trong giai đoạn phát triển mạnh về
                                kinh tế và hạ tầng, với vị trí chiến lược kết nối thuận tiện đến các
                                vùng lân cận và thành phố lớn. Sở hữu đất tại dự án không chỉ là cơ
                                hội sở hữu một bất động sản giá trị mà còn là cơ hội đầu tư sinh lời
                                trong dài hạn.
                            </p>
                        </section>

                        <section>
                            <h2>Môi trường sống</h2>
                            <p>
                                Dự án hướng đến một khu dân cư xanh, sạch, đẹp với đầy đủ tiện nghi
                                và an ninh đảm bảo. Cư dân được tận hưởng không gian sống thoáng đãng
                                với công viên, hồ nước và lối đi nội bộ phủ đầy cây xanh — nơi để ở,
                                để thư giãn và để gắn kết cộng đồng.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default DuAn;
