
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
        stt: 1,
        title: "BẤT ĐỘNG SẢN BẮC NINH",
        address: "Thôn Đại Vi , Xã Đại Đồng , Huyện Thiên Du",
        area: "3204 m2",
        imageUrl: Image,
        imageUrl2: Image1,
        imageUrl3: Image7,
        soLo: 30,
        describe: "Liền kề LK1 bao gồm 30 lô đất có diện tích đa dạng, từ những lô có diện tích nhỏ khoảng 151 m² cho đến những lô lớn hơn lên đến 224.1 m². Đây là khu vực có nhiều lựa chọn cho các nhu cầu khác nhau, từ các gia đình nhỏ đến các nhà đầu tư mong muốn sở hữu lô đất rộng hơn để xây dựng công trình lớn. LK1 được thiết kế với hệ thống hạ tầng hiện đại, đường sá rộng rãi và kết nối thuận tiện đến các tiện ích xung quanh. Khu vực này được đánh giá cao về tiềm năng phát triển và phù hợp cho cả mục đích ở và đầu tư dài hạn."
    },
    {
        stt: 2,
        title: "BẤT ĐỘNG SẢN BẮC NINH",
        address: "Thôn Đại Vi , Xã Đại Đồng , Huyện Thiên Du",
        area: "6152,4 m2",
        imageUrl: Image,
        imageUrl2: Image2,
        imageUrl3: Image7,
        soLo: 59,
        describe: "Liền kề LK2 gồm 59 lô đất, với diện tích trải dài từ 98.5 m² đến 224.1 m², tạo nên một lựa chọn phong phú cho người mua. Đây là một khu vực được thiết kế dành riêng cho những ai tìm kiếm không gian sống rộng rãi, thoải mái. LK2 có vị trí thuận lợi, gần các trung tâm thương mại, trường học, và các khu vực tiện ích khác, giúp nâng cao chất lượng cuộc sống cho cư dân. Với sự đa dạng trong diện tích và giá trị đất tăng cao, LK2 là lựa chọn lý tưởng cho cả nhu cầu ở và đầu tư bất động sản."


    },
    {
        stt: 3,
        title: "BẤT ĐỘNG SẢN BẮC NINH",
        address: "Thôn Đại Vi , Xã Đại Đồng , Huyện Thiên Du",
        area: "405,3 m2",
        imageUrl: Image,
        imageUrl2: Image3,
        imageUrl3: Image7,
        soLo: 39,
        describe: "Liền kề LK3 bao gồm 39 lô đất với diện tích từ 98 m² đến 155.5 m². Khu vực này được quy hoạch với các lô đất vừa phải, phù hợp cho các gia đình muốn xây dựng ngôi nhà ấm cúng hoặc các nhà đầu tư tìm kiếm các lô đất có giá trị hợp lý. LK3 có hệ thống đường giao thông kết nối thuận lợi, dễ dàng di chuyển đến các khu vực xung quanh. Đây là khu vực có không gian sống trong lành, gần các khu vực xanh mát, phù hợp cho những ai yêu thích không gian yên tĩnh, gần gũi với thiên nhiên."
    },
    {
        stt: 4,
        title: "BẤT ĐỘNG SẢN BẮC NINH",
        address: "Thôn Đại Vi , Xã Đại Đồng , Huyện Thiên Du",
        area: "3852.05 m2",
        imageUrl: Image,
        imageUrl2: Image4,
        imageUrl3: Image7,
        soLo: 40,
        describe: "Liền kề LK4 bao gồm 40 lô đất với diện tích từ 86.85 m² đến 127.9 m². Đây là khu vực có nhiều lô đất diện tích nhỏ, rất thích hợp cho những gia đình nhỏ hoặc các cặp đôi trẻ đang tìm kiếm nơi xây dựng ngôi nhà đầu tiên. LK4 có vị trí thuận lợi gần các tiện ích công cộng như công viên, trường học và khu mua sắm, giúp cuộc sống hàng ngày trở nên thuận tiện và tiện nghi hơn. Ngoài ra, LK4 còn có hệ thống an ninh đảm bảo, mang lại sự an toàn cho cư dân và tạo môi trường sống lý tưởng."
    },
    {
        stt: 5,
        title: "BẤT ĐỘNG SẢN BẮC NINH",
        address: "Thôn Đại Vi , Xã Đại Đồng , Huyện Thiên Du",
        area: "5414.3 m2",
        imageUrl: Image,
        imageUrl2: Image5,
        imageUrl3: Image7,
        soLo: 54,
        describe: "Liền kề LK5 có 54 lô đất với diện tích từ 89.65 m² đến 130.5 m², phù hợp cho các gia đình có nhu cầu sử dụng không gian sống vừa đủ và tiện nghi. LK5 nằm ở vị trí trung tâm, với hệ thống giao thông thuận lợi và kết nối nhanh chóng đến các khu tiện ích như siêu thị, trường học, và bệnh viện. Khu vực này mang lại không gian sống thoải mái với các dịch vụ tiện ích đa dạng xung quanh, đáp ứng đầy đủ nhu cầu hàng ngày của cư dân. LK5 còn được đánh giá là một lựa chọn tiềm năng cho các nhà đầu tư nhờ vị trí đắc địa và sự phát triển bền vững."
    },
    {
        stt: 6,
        title: "BẤT ĐỘNG SẢN BẮC NINH",
        address: "Thôn Đại Vi , Xã Đại Đồng , Huyện Thiên Du",
        area: "1263.8 m2",
        imageUrl: Image,
        imageUrl2: Image6,
        imageUrl3: Image7,
        soLo: 13,
        describe: "Liền kề LK6 bao gồm 13 lô đất với diện tích từ 85.9 m² đến 107.7 m², là một khu vực nhỏ gọn nhưng vô cùng lý tưởng cho những ai thích không gian riêng tư và yên tĩnh. LK6 có vị trí cách biệt một chút so với các khu liền kề khác, tạo nên không gian sống thoải mái, tránh xa sự ồn ào và náo nhiệt của thành phố. Với diện tích lô đất vừa phải, LK6 thích hợp cho các gia đình trẻ hoặc các cá nhân muốn đầu tư vào bất động sản với mức chi phí hợp lý. Khu vực này có tiềm năng phát triển cao và là lựa chọn tuyệt vời cho cả ở và đầu tư dài hạn."
    }
];
function BodyIntro() {
    const navigate = useNavigate();

    const handleViewDetails = (item) => {
        navigate('/BDS-detail', { state: { property: item } });
    };
    return (
        <div class="bds-tp-container">
            <h2 class="bds-tp-title"><a href='/DuAn'>DỰ ÁN KHU NHÀ Ở THÔN ĐẠI VI</a></h2>
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
                                                <div class="card-infor">Số lô đất : {item.soLo} </div>
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

export default BodyIntro;
