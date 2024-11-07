// import '../../styles/slide.css';

// function Slide() {

//     return (
//         <div className="anh-truot">
//             <div className="slider">
//                 <div className="list">
//                     <div className="item">
//                         <img src="https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg" alt="" />
//                         <div className="anh-truot-noidung">
//                             <button><a href="Register.php">Đăng ký ngay</a></button>
//                         </div>
//                         <div className="anh-truot-text">
//                             <div className="anh-text">
//                                 <div className="text-small" style={{ paddingBottom: '5px' }}>Mừng ngày</div>
//                                 <div className="text-big">QUỐC TẾ PHỤ NỮ</div>
//                                 <div className="text-small" style={{ fontSize: '20px', marginTop: '10px' }}>NHẬN HÀNG NGÀN ƯU ĐÃI</div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="item">
//                         <img src="https://photo2.tinhte.vn/data/attachment-files/2021/07/5557920_CV.jpg" alt="" />
//                         <div className="anh-truot-noidung" style={{ padding: '550px 0 0 100px' }}>
//                             <button><a href="Register.php">Đăng ký ngay</a></button>
//                         </div>
//                         <div className="anh-truot-text" style={{ padding: '380px 0 0 100px' }}>
//                             <div className="anh-text">
//                                 <div className="text-small">GÓI HỘI VIÊN THÁNG</div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="item">
//                         <img src="https://mona.solutions/wp-content/uploads/2016/12/hoc_nhiep_anh.jpg" alt="" />
//                         <div className="anh-truot-noidung" style={{ padding: '550px 0 0 100px' }}>
//                             <button><a href="Register.php">Mở App Primechess Chơi Ngay</a></button>
//                         </div>
//                         <div className="anh-truot-text" style={{ padding: '250px 0 0 100px' }}>
//                             <div className="anh-text">
//                                 <div className="text-big">CỜ TÝ PHÚ PRIME FITNESS</div>
//                                 <div className="text-small" style={{ fontSize: '20px', marginTop: '30px' }}>SĂN MẢNH GHÉP, TRÚNG QUÀ TO</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="buttons">
//                     <button id="prev"> &lt; </button>
//                     <button id="next"> &gt; </button>
//                 </div>
//                 <ul className="dots">
//                     <li className="active"></li>
//                     <li></li>
//                     <li></li>
//                 </ul>
//             </div>
//             <script src="test.js"></script>
//         </div>
//     );
// }

// export default Slide;
import React, { useState, useEffect } from 'react';
import '../../styles/slide.css';
import slideImage1 from '../assets/image/s2.jpg';
import slideImage2 from '../assets/image/s3.png.webp';
import slideImage3 from '../assets/image/s1.jpg';
function Slide() {
    const [active, setActive] = useState(0); // Biến trạng thái lưu chỉ số slide hiện tại
    const slides = [
        {
            img: slideImage1,
            textBig: "HOMESTAY",
            textSmall: "Bắc Ninh",
            buttonText: "Liên hệ",
            link: "Register.php",
        },
        {
            img: slideImage2,
            textBig: "HOMESTAY",
            buttonText: "Liên hệ",
            link: "Register.php",
        },
        {
            img: slideImage3,
            textBig: "HOMESTAY",
            textSmall: "",
            buttonText: "Liên hệ",
            link: "Register.php",
        },
    ];

    const lengthItems = slides.length;

    const handleNext = () => {
        setActive((prev) => (prev + 1) % lengthItems);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + lengthItems) % lengthItems);
    };



    const handleDotClick = (index) => {
        setActive(index);
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="anh-truot">
            <div className="slider">
                <div className="list" style={{ left: `-${active * 100}%` }}>
                    {slides.map((slide, index) => (
                        <div className="item" key={index}>
                            <img src={slide.img} alt="" />
                            <div className="anh-truot-noidung" style={{ padding: '550px 0 0 100px' }}>
                                <button>
                                    <a href={slide.link}>{slide.buttonText}</a>
                                </button>
                            </div>
                            <div className="anh-truot-text" style={{ padding: '250px 0 0 100px' }}>
                                <div className="anh-text">
                                    <div className="text-small" style={{ paddingBottom: '5px' }}>BẤT ĐỘNG SẢN</div>
                                    <div className="text-big">{slide.textBig}</div>
                                    {slide.textSmall && (
                                        <div className="text-small" style={{ fontSize: '20px', marginTop: '10px' }}>
                                            {slide.textSmall}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div className="buttons">
                    <button id="prev" onClick={handlePrev}> &lt; </button>
                    <button id="next" onClick={handleNext}> &gt; </button>
                </div> */}
                <ul className="dots">
                    {slides.map((_, index) => (
                        <li key={index} className={index === active ? 'active' : ''} onClick={() => handleDotClick(index)}></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Slide;
