
import '../../styles/bodyIntro.css';
import { useNavigate } from 'react-router-dom';
import Image from '../assets/image/LK1.jpg';
import Image1 from '../assets/image/lk1.jpeg';
import Image2 from '../assets/image/lk2.png';
import Image3 from '../assets/image/lk3.png';
import Image4 from '../assets/image/lk4.png';
import Image5 from '../assets/image/lk5.png';
import Image6 from '../assets/image/lk6.png';
import Image7 from '../assets/image/chiaLo.jpeg';
const data = [
    {
        title: "BẤT ĐỘNG SẢN BẮC NINH",
        address: "Huyện Gia Bình, Thành phố Bắc Ninh",
        area: "200 m2",
        imageUrl: "https://www.nvd.org.vn/wp-content/uploads/clhbds1.jpg",
        price: 10.87,
        describe: "Bất động sản tọa lạc tại Huyện Gia Bình, Thành phố Bắc Ninh, là một lựa chọn lý tưởng cho các nhà đầu tư hoặc gia đình đang tìm kiếm không gian sống yên tĩnh và tiện nghi. Với diện tích rộng 200 m², khu đất mang lại không gian thoải mái để xây dựng nhà ở hoặc phát triển các dự án thương mại. Vị trí thuận lợi, nằm gần các tuyến đường chính, giúp kết nối dễ dàng với các khu vực trung tâm và các tiện ích xung quanh như chợ, trường học và bệnh viện. Giá bán của bất động sản này là 10.87 tỷ đồng, một mức giá hợp lý so với tiềm năng phát triển trong khu vực. Đây là cơ hội tuyệt vời cho những ai đang tìm kiếm một tài sản có giá trị và khả năng sinh lời cao trong tương lai gần."
    },
    {
        title: "BẤT ĐỘNG SẢN BẮC NINH",
        address: "Huyện Quế Võ, Thành phố Bắc Ninh",
        area: "458 m2",
        imageUrl: "https://www.tapdoantrananh.com.vn/uploads/files/2022/02/17/bat-dong-san-dep-2.jpg",
        price: 23.0,
        describe: "Bất động sản tọa lạc tại Huyện Gia Bình, Thành phố Bắc Ninh, là một lựa chọn lý tưởng cho các nhà đầu tư hoặc gia đình đang tìm kiếm không gian sống yên tĩnh và tiện nghi. Với diện tích rộng 200 m², khu đất mang lại không gian thoải mái để xây dựng nhà ở hoặc phát triển các dự án thương mại. Vị trí thuận lợi, nằm gần các tuyến đường chính, giúp kết nối dễ dàng với các khu vực trung tâm và các tiện ích xung quanh như chợ, trường học và bệnh viện. Giá bán của bất động sản này là 10.87 tỷ đồng, một mức giá hợp lý so với tiềm năng phát triển trong khu vực. Đây là cơ hội tuyệt vời cho những ai đang tìm kiếm một tài sản có giá trị và khả năng sinh lời cao trong tương lai gần."
    },
    {
        title: "BẤT ĐỘNG SẢN BẮC NINH",
        address: "Huyện Quế Võ, Thành phố Bắc Ninh",
        area: "271 m2",
        imageUrl: "https://www.kiena.vn/vi-vn/images/autosize-730x0/upload/media/M6138b03f60e2a/lac-quan.png",
        price: 12.16,
        describe: "Bất động sản tọa lạc tại Huyện Gia Bình, Thành phố Bắc Ninh, là một lựa chọn lý tưởng cho các nhà đầu tư hoặc gia đình đang tìm kiếm không gian sống yên tĩnh và tiện nghi. Với diện tích rộng 200 m², khu đất mang lại không gian thoải mái để xây dựng nhà ở hoặc phát triển các dự án thương mại. Vị trí thuận lợi, nằm gần các tuyến đường chính, giúp kết nối dễ dàng với các khu vực trung tâm và các tiện ích xung quanh như chợ, trường học và bệnh viện. Giá bán của bất động sản này là 10.87 tỷ đồng, một mức giá hợp lý so với tiềm năng phát triển trong khu vực. Đây là cơ hội tuyệt vời cho những ai đang tìm kiếm một tài sản có giá trị và khả năng sinh lời cao trong tương lai gần."
    },
    {
        title: "BẤT ĐỘNG SẢN BẮC NINH",
        address: "Huyện Tiên Du, Thành phố Bắc Ninh",
        area: "150 m2",
        imageUrl: "https://baoxaydung.com.vn/stores/news_dataimages/vananh/012019/30/15/155018baoxaydung_10.jpg",
        price: 8.16, describe: "Bất động sản tọa lạc tại Huyện Gia Bình, Thành phố Bắc Ninh, là một lựa chọn lý tưởng cho các nhà đầu tư hoặc gia đình đang tìm kiếm không gian sống yên tĩnh và tiện nghi. Với diện tích rộng 200 m², khu đất mang lại không gian thoải mái để xây dựng nhà ở hoặc phát triển các dự án thương mại. Vị trí thuận lợi, nằm gần các tuyến đường chính, giúp kết nối dễ dàng với các khu vực trung tâm và các tiện ích xung quanh như chợ, trường học và bệnh viện. Giá bán của bất động sản này là 10.87 tỷ đồng, một mức giá hợp lý so với tiềm năng phát triển trong khu vực. Đây là cơ hội tuyệt vời cho những ai đang tìm kiếm một tài sản có giá trị và khả năng sinh lời cao trong tương lai gần."
    },
    {
        title: "BẤT ĐỘNG SẢN BẮC NINH",
        address: "Huyện Yên Phong, Thành phố Bắc Ninh",
        area: "300 m2",
        imageUrl: "https://i.pinimg.com/736x/22/7d/8c/227d8c5a4dbaa83eb151e0d057f23436.jpg",
        price: 15.6,
        describe: "Bất động sản tọa lạc tại Huyện Gia Bình, Thành phố Bắc Ninh, là một lựa chọn lý tưởng cho các nhà đầu tư hoặc gia đình đang tìm kiếm không gian sống yên tĩnh và tiện nghi. Với diện tích rộng 200 m², khu đất mang lại không gian thoải mái để xây dựng nhà ở hoặc phát triển các dự án thương mại. Vị trí thuận lợi, nằm gần các tuyến đường chính, giúp kết nối dễ dàng với các khu vực trung tâm và các tiện ích xung quanh như chợ, trường học và bệnh viện. Giá bán của bất động sản này là 10.87 tỷ đồng, một mức giá hợp lý so với tiềm năng phát triển trong khu vực. Đây là cơ hội tuyệt vời cho những ai đang tìm kiếm một tài sản có giá trị và khả năng sinh lời cao trong tương lai gần."
    },
    {
        title: "BẤT ĐỘNG SẢN BẮC NINH",
        address: "Huyện Thuận Thành, Thành phố Bắc Ninh",
        area: "500 m2",
        imageUrl: "https://media.vneconomy.vn/w800/images/upload/2022/03/18/f6164824-48ef-4a28-a509-c7040975cde4.jpg",
        price: 30.2,
        describe: "Bất động sản tọa lạc tại Huyện Gia Bình, Thành phố Bắc Ninh, là một lựa chọn lý tưởng cho các nhà đầu tư hoặc gia đình đang tìm kiếm không gian sống yên tĩnh và tiện nghi. Với diện tích rộng 200 m², khu đất mang lại không gian thoải mái để xây dựng nhà ở hoặc phát triển các dự án thương mại. Vị trí thuận lợi, nằm gần các tuyến đường chính, giúp kết nối dễ dàng với các khu vực trung tâm và các tiện ích xung quanh như chợ, trường học và bệnh viện. Giá bán của bất động sản này là 10.87 tỷ đồng, một mức giá hợp lý so với tiềm năng phát triển trong khu vực. Đây là cơ hội tuyệt vời cho những ai đang tìm kiếm một tài sản có giá trị và khả năng sinh lời cao trong tương lai gần."
    }
];

function BodyIntro2() {
    const navigate = useNavigate();

    const handleViewDetails = (item) => {
        navigate('/BDS-detail2', { state: { property: item } });
    };
    return (
        <div class="bds-tp-container">
            <h2 class="bds-tp-title">BẤT ĐỘNG SẢN CHO THUÊ</h2>
            <div class="bds-tp-content">
                <div class="bds-tp-column-container">
                    {data.map((item, index) => (
                        <div key={index} class="bds-tp-column">
                            <div class="card">
                                <div class="logo">BĐS nổi bật</div>
                                <a href="">
                                    <img class="card-img" onClick={() => handleViewDetails(item)}
                                        src={item.imageUrl}
                                        data-srcset={item.dataSrcset || ""}
                                        alt={item.title} />
                                </a>
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="card-title">
                                            <a class="" href="" onClick={() => handleViewDetails(item)}>{item.title}</a>
                                        </div>
                                        <p class="card-address">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-geo-alt" viewBox="0 0 16 16">
                                                <path
                                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                            </svg>

                                            {item.address}
                                        </p>
                                        <div class="card-item-name">Liền Kề {item.stt}
                                        </div>
                                        <div class="card-infor-container">
                                            <div className='card-infor-col1'>
                                                <div class="card-infor">Tổng diện tích: {item.area}</div>
                                                <div class="card-infor">Giá thuê : {item.price} triệu/tháng </div>
                                            </div>
                                            <a href="" class="card-btn">
                                                <button onClick={() => handleViewDetails(item)}>Xem chi tiết</button>
                                            </a>

                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    );
}

export default BodyIntro2;
