import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import '../../styles/bodyIntro.css';

// Bản vẽ quy hoạch tổng thể, dùng làm ảnh lớn ở trang chi tiết.
import Image7 from '../assets/image/chiaLo.jpeg';

// Card thumbnails.
import Img3 from '../assets/image/DuAn3.jpg';
import Img4 from '../assets/image/DuAn4.jpeg';
import Img5 from '../assets/image/DuAn5.jpg';
import Img6 from '../assets/image/DuAn6.jpeg';
import Img7 from '../assets/image/DuAn7.JPG';
import Img8 from '../assets/image/DuAn8.jpg';


const data = [
    {
        stt: 1,
        title: "BẤT ĐỘNG SẢN BẮC NINH",
        address: "Thôn Đại Vi , Xã Đại Đồng , Huyện Thiên Du",
        area: "3204 m2",
        imageUrl: Img4,
        imageUrl3: Image7,
        soLo: 30,
        describe: "Liền kề LK1 gồm 30 lô đất trên tổng diện tích 3.204 m², chia thành hai loại: 26 lô chuẩn 100 m² và 4 lô góc rộng 151 m² tại các vị trí LK1-1, 15, 16 và 30. Cơ cấu đơn giản, dễ lựa chọn — lô chuẩn phù hợp với gia đình trẻ, lô góc dành cho ai cần mặt tiền rộng để vừa ở vừa kinh doanh. LK1 có hạ tầng hoàn thiện, đường nội khu rộng rãi và kết nối thuận tiện tới các tiện ích xung quanh."
    },
    {
        stt: 2,
        title: "BẤT ĐỘNG SẢN BẮC NINH",
        address: "Thôn Đại Vi , Xã Đại Đồng , Huyện Thiên Du",
        area: "6152,4 m2",
        imageUrl: Img5,
        imageUrl3: Image7,
        soLo: 59,
        describe: "Liền kề LK2 là phân khu lớn nhất dự án: 59 lô đất trên 6.152,4 m², diện tích trải dài từ 98 m² đến 224,1 m². Phần lớn là 51 lô chuẩn 100 m², bên cạnh đó có lô LK2-32 rộng 224,1 m² — lô lớn nhất toàn dự án. Sự đa dạng này cho phép người mua chọn đúng nhu cầu, từ tổ ấm gia đình đến biệt thự sân vườn. LK2 nằm ở vị trí thuận lợi, gần các trung tâm thương mại và trường học."


    },
    {
        stt: 3,
        title: "BẤT ĐỘNG SẢN BẮC NINH",
        address: "Thôn Đại Vi , Xã Đại Đồng , Huyện Thiên Du",
        // Trước ghi "405,3 m2" — sai 10 lần. Bảng phân lô LK3 cộng ra 4053 m².
        area: "4053 m2",
        imageUrl: Img6,
        imageUrl3: Image7,
        soLo: 39,
        describe: "Liền kề LK3 gồm 39 lô đất trên 4.053 m², diện tích từ 92,1 m² đến 157,9 m². Xương sống của phân khu là 31 lô chuẩn 100 m², cùng hai lô góc 155,5 m² và các lô đặc biệt LK3-19 (157,9 m²), LK3-20 (92,1 m²). Đây là khu vực có không gian sống trong lành, gần các mảng xanh, phù hợp với những ai yêu thích sự yên tĩnh và gần gũi thiên nhiên."
    },
    {
        stt: 4,
        title: "BẤT ĐỘNG SẢN BẮC NINH",
        address: "Thôn Đại Vi , Xã Đại Đồng , Huyện Thiên Du",
        area: "3852.05 m2",
        imageUrl: Img7,
        imageUrl3: Image7,
        soLo: 40,
        describe: "Liền kề LK4 gồm 40 lô đất trên 3.852,05 m², diện tích từ 86,25 m² đến 127,9 m². Đây là phân khu có nhiều lô diện tích vừa và nhỏ nhất, với 16 lô 99 m² và 10 lô 90,75 m² — rất thích hợp cho gia đình trẻ hoặc các cặp đôi đang tìm nơi xây dựng ngôi nhà đầu tiên. LK4 nằm gần công viên, trường học và khu mua sắm, mang lại cuộc sống hàng ngày thuận tiện."
    },
    {
        stt: 5,
        title: "BẤT ĐỘNG SẢN BẮC NINH",
        address: "Thôn Đại Vi , Xã Đại Đồng , Huyện Thiên Du",
        area: "5414.3 m2",
        imageUrl: Img3,
        imageUrl3: Image7,
        soLo: 54,
        describe: "Liền kề LK5 gồm 54 lô đất trên 5.414,3 m², diện tích từ 87,65 m² đến 155,5 m². Phân khu có cơ cấu phong phú nhất với 14 loại diện tích khác nhau, trong đó 22 lô chuẩn 100 m² và 10 lô 89,65 m². LK5 nằm ở vị trí trung tâm, giao thông thuận lợi, kết nối nhanh tới siêu thị, trường học và bệnh viện — vừa đáp ứng nhu cầu ở, vừa là lựa chọn tiềm năng cho nhà đầu tư."
    },
    {
        stt: 6,
        title: "BẤT ĐỘNG SẢN BẮC NINH",
        address: "Thôn Đại Vi , Xã Đại Đồng , Huyện Thiên Du",
        area: "1263.8 m2",
        imageUrl: Img8,
        imageUrl3: Image7,
        soLo: 13,
        describe: "Liền kề LK6 gồm 13 lô đất trên 1.263,8 m², diện tích từ 80,3 m² đến 119 m². Mỗi lô một diện tích riêng, không lô nào trùng lô nào — phân khu nhỏ gọn, riêng tư và yên tĩnh nhất dự án. LK6 nằm tách biệt đôi chút so với các khu liền kề khác, thích hợp cho gia đình trẻ hoặc cá nhân muốn đầu tư với mức chi phí hợp lý."
    }
];
function BodyIntro() {
    const navigate = useNavigate();
    const revealRef = useReveal();

    const handleViewDetails = (item) => {
        navigate('/BDS-detail', { state: { property: item } });
    };

    return (
        <section className="lots u-section" ref={revealRef}>
            <div className="u-container">
                <header className="lots__head" data-reveal>
                    <div>
                        <p className="u-eyebrow">Dự án đang mở bán</p>
                        <h2 className="lots__title">
                            Khu nhà <span className="u-wonk">ở</span> Thôn Đại Vi
                        </h2>
                    </div>
                    <p className="lots__intro">
                        Sáu phân khu liền kề với 235 thửa đất ở, diện tích từ 80,3 m² đến 224,1 m².
                        Hạ tầng đã nghiệm thu, sổ đỏ từng lô.
                    </p>
                </header>

                <ul className="lots__grid" data-reveal-stagger>
                    {data.map((item) => (
                        <li key={item.stt} className="lot-card" data-reveal>
                            <div className="lot-card__media u-media">
                                <img
                                    src={item.imageUrl}
                                    alt={`Phối cảnh phân khu Liền kề ${item.stt}, ${item.address}`}
                                    loading="lazy"
                                    decoding="async"
                                    width="800"
                                    height="600"
                                />
                                <span className="lot-card__badge">Liền kề {item.stt}</span>
                            </div>

                            <div className="lot-card__body">
                                <h3 className="lot-card__title">
                                    {/* Stretched hit area: the whole card is one target. */}
                                    <button
                                        type="button"
                                        className="lot-card__link"
                                        onClick={() => handleViewDetails(item)}
                                    >
                                        Liền kề {item.stt}
                                    </button>
                                </h3>

                                <p className="lot-card__address">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                    {item.address}
                                </p>

                                <dl className="lot-card__stats">
                                    <div>
                                        <dt>Tổng diện tích</dt>
                                        <dd className="tabular">{item.area}</dd>
                                    </div>
                                    <div>
                                        <dt>Số lô đất</dt>
                                        <dd className="tabular">{item.soLo}</dd>
                                    </div>
                                </dl>

                                <span className="lot-card__cue" aria-hidden="true">
                                    Xem chi tiết
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default BodyIntro;
