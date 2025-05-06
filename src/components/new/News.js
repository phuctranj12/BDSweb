import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/news.css";
import Image1 from '../assets/image/news1.jpg';
import Image2 from '../assets/image/news2.jpg';
import Image3 from '../assets/image/news3.jpg';
import Image4 from '../assets/image/news4.jpg';
import Image5 from '../assets/image/news5.jpg';
import { useNavigate } from 'react-router-dom'; // Thay vì useHistory, dùng useNavigate

const newsList = [
    {
        id: 1,
        title: "Thị trường BĐS 2025 khởi sắc",
        image: Image1,
        content: "Năm 2025 được kỳ vọng là năm bùng nổ trở lại của thị trường bất động sản nhờ chính sách tài chính và pháp lý hỗ trợ...",
        detail: "Chi tiết tin tức về thị trường bất động sản 2025 sẽ phát triển như thế nào...",
    },
    {
        id: 2,
        title: "Giá nhà TP.HCM tăng mạnh",
        image: Image2,
        content: "Giá đất nền và căn hộ tại TP.HCM đang tăng trở lại do tín hiệu tích cực từ thị trường và quy hoạch mới...",
        detail: "Chi tiết tin tức về sự phát triển của thị trường nhà đất tại TP.HCM...",
    },
    {
        id: 3,
        title: "Xu hướng đầu tư năm 2025",
        image: Image3,
        content: "Các chuyên gia nhận định nhà phố và bất động sản xanh sẽ trở thành xu hướng trong năm tới...",
        detail: "Chi tiết về xu hướng đầu tư bất động sản 2025 và những điều cần lưu ý...",
    },
    {
        id: 4,
        title: "Chính sách vay mua nhà mới",
        image: Image4,
        content: "Ngân hàng công bố chính sách vay ưu đãi lãi suất thấp cho người mua nhà lần đầu trong năm 2025...",
        detail: "Chi tiết về các chính sách vay mua nhà mới sẽ hỗ trợ người dân như thế nào...",
    },
    {
        id: 5,
        title: "Phân khúc nghỉ dưỡng hồi phục",
        image: Image5,
        content: "Khu nghỉ dưỡng cao cấp ven biển ghi nhận lượng khách tăng mạnh nhờ du lịch nội địa phát triển...",
        detail: "Chi tiết về sự phục hồi của phân khúc nghỉ dưỡng và xu hướng du lịch nội địa...",
    },
];

const News = () => {
    const navigate = useNavigate(); // Sử dụng useNavigate

    // Hàm điều hướng khi click vào tin tức
    const handleNewsClick = (newsId) => {
        const selectedNews = newsList.find(item => item.id === newsId);
        navigate(`/NewsDetailContent/${newsId}`, { state: selectedNews }); // Truyền dữ liệu qua state
    };

    return (
        <div className="news-carousel-container">
            <h2 className="news-title">Bản tin bất động sản</h2>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="mySwiper"
            >
                {newsList.map((item) => (
                    <SwiperSlide key={item.id} onClick={() => handleNewsClick(item.id)}>
                        <div className="news-card-carousel">
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default News;
