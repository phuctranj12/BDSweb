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
import Image6 from '../assets/image/news6.jpg';
import { useNavigate } from 'react-router-dom'; // Thay vì useHistory, dùng useNavigate

const News = () => {
    const navigate = useNavigate();
    const newsList = [
        {
            id: 1,
            title: "Thị trường BĐS 2025 khởi sắc",
            image: Image1,
            content: "Năm 2025 được kỳ vọng là năm bùng nổ trở lại của thị trường bất động sản nhờ chính sách tài chính và pháp lý hỗ trợ...",
            detail: "Theo dự báo, thị trường bất động sản Việt Nam năm 2025 sẽ chứng kiến sự phục hồi mạnh mẽ. Chính phủ và các địa phương đang tập trung tháo gỡ các vướng mắc pháp lý cho các dự án, đặc biệt là các dự án trọng điểm và quy mô lớn. Phân khúc căn hộ chung cư dự kiến sẽ tiếp tục dẫn dắt nguồn cung mới. Giá bán sơ cấp dự kiến tăng bình quân 10% – 15% trên toàn thị trường. Giá bán thứ cấp không còn tình trạng cắt lỗ và dần tăng trở lại 5% – 10% ở hầu hết các phân khúc. Giá thuê tiếp tục đà tăng ổn định trong khoảng 5% – 10%. Niềm tin thị trường được dự báo tiếp tục được cải thiện và củng cố, thể hiện qua mức độ quan tâm, tìm hiểu và xuống tiền mua dự án của khách hàng. Chính phủ tiếp tục tập trung tháo gỡ vướng mắc pháp lý cho các dự án bất động sản. Nguồn vốn đầu tư vào bất động sản được kỳ vọng tiếp tục tăng. Các chủ đầu tư tập trung chuẩn bị nguồn sản phẩm và đẩy mạnh công tác kinh doanh. Các đơn vị môi giới tăng tốc chuẩn bị nguồn lực cho chu kỳ mới. Tất cả đã sẵn sàng để chờ đón nhịp phục hồi mạnh mẽ trở lại của thị trường bất động sản Việt Nam. ([batdongsan.com.vn](https://batdongsan.com.vn/phan-tich-danh-gia/thi-truong-bat-dong-san-2025-se-dien-bien-theo-kich-ban-nao-cd-hcm-826972?utm_source=chatgpt.com))",
        },
        {
            id: 2,
            title: "Giá nhà TP.HCM tăng mạnh",
            image: Image2,
            content: "Giá đất nền và căn hộ tại TP.HCM đang tăng trở lại do tín hiệu tích cực từ thị trường và quy hoạch mới...",
            detail: "Thị trường bất động sản trung tâm TP.HCM dự kiến sẽ tiếp tục tăng trưởng trong năm 2025, với mức tăng giá có thể dao động từ 12-20%, tùy thuộc vào vị trí và mức độ hoàn thiện của từng dự án. Khu vực quận Bình Thạnh, Quận 1 và Quận 3 sẽ tiếp tục có mức tăng giá mạnh hơn so với mặt bằng chung, nhờ hưởng lợi từ các công trình hạ tầng trọng điểm như Metro số 3B, đại lộ Phạm Văn Đồng mở rộng và cầu vượt Bình Lợi. Nguồn cung căn hộ mới được dự báo ở mức thấp trong năm nay, dù nhiều dự án đã được triển khai từ giai đoạn trước. Điều này dẫn đến việc giá trị bất động sản khu vực trung tâm có xu hướng tăng mạnh hơn so với những khu vực khác. ([tienphong.vn](https://tienphong.vn/bat-dong-san-trung-tam-tphcm-2025-du-bao-xu-huong-va-trien-vong-post1719494.tpo?utm_source=chatgpt.com))",
        },
        {
            id: 3,
            title: "Xu hướng đầu tư năm 2025",
            image: Image3,
            content: "Các chuyên gia nhận định nhà phố và bất động sản xanh sẽ trở thành xu hướng trong năm tới...",
            detail: "Xu hướng bất động sản năm 2025 sẽ tập trung vào việc tăng 'xanh hóa' và dịch chuyển ra vùng ngoại vi. Phân khúc tầm trung tiếp tục khan hiếm ở TPHCM và Hà Nội, mức giá bán phổ thông hầu như biến mất. Bên cạnh đó, xu hướng phát triển dự án ở vùng ngoại vi đô thị tăng tốc hơn. Hà Nội có nguồn cung phân khúc trung cấp tăng mạnh so với năm ngoái khoảng 200%, đến từ các dự án mở bán xuyên suốt năm như The Sola Park, Lumi Hanoi hay Capital Elite. TPHCM cũng tích cực gỡ vướng pháp lý cho các dự án nhà ở thương mại bị đình trệ, một số đã quay lại thị trường như Metro Star, Lavida Plus hay D-Homme. Các dự án cao cấp mới cũng được giới thiệu, như Masteri Grand View, Opus One, Eaton Park. Trong năm 2024, thành phố cũng tăng tốc quy trình cấp sổ, hơn 43.000 căn hộ được hoàn tất cấp sổ hồng tính đến tháng 12-2024. ([sgtt.thesaigontimes.vn](https://sgtt.thesaigontimes.vn/xu-huong-bat-dong-san-2025-tang-xanh-hoa-va-dich-chuyen-ra-vung-ngoai-vi/?utm_source=chatgpt.com))",
        },
        {
            id: 4,
            title: "Chính sách vay mua nhà mới",
            image: Image4,
            content: "Ngân hàng công bố chính sách vay ưu đãi lãi suất thấp cho người mua nhà lần đầu trong năm 2025...",
            detail: "Chính phủ đã có những chính sách tích cực để thúc đẩy thị trường bất động sản phát triển ổn định và bền vững trong những năm tới. Trong năm 2024, Chính phủ sẽ tiếp tục áp dụng các chính sách hỗ trợ tín dụng cho thị trường bất động sản, đặc biệt là cho các dự án nhà ở xã hội và nhà ở cho người có thu nhập thấp. Một trong những chính sách nổi bật là việc tiếp tục triển khai chương trình hỗ trợ vay vốn ưu đãi cho các dự án nhà ở giá rẻ. Điều này giúp giải quyết nhu cầu nhà ở cho một lượng lớn người dân tại các thành phố lớn như Hà Nội và TP.HCM, đồng thời thúc đẩy thị trường bất động sản phát triển một cách ổn định. ([doanhnghiephoinhap.vn](https://doanhnghiephoinhap.vn/nhung-xu-huong-nao-se-dan-dat-thi-truong-bat-dong-san-2025-90531.html?utm_source=chatgpt.com))",
        },
        {
            id: 5,
            title: "Phân khúc nghỉ dưỡng hồi phục",
            image: Image5,
            content: "Khu nghỉ dưỡng cao cấp ven biển ghi nhận lượng khách tăng mạnh nhờ du lịch nội địa phát triển...",
            detail: "Nhờ sự phục hồi của ngành du lịch, phân khúc bất động sản nghỉ dưỡng trong năm 2025 được đánh giá là một kênh đầu tư hấp dẫn và đầy triển vọng. Những điểm đến như Phú Quốc, Đà Nẵng, Nha Trang hay Hạ Long tiếp tục trở thành tâm điểm thu hút các dự án nghỉ dưỡng quy mô lớn. Khách hàng ngày càng quan tâm đến trải nghiệm cá nhân hóa và không gian sống xanh, thân thiện với môi trường. Những dự án tích hợp công nghệ thông minh, ứng dụng năng lượng tái tạo và thiết kế theo phong cách bền vững sẽ có sức hấp dẫn cao hơn. Ngoài ra, mô hình nghỉ dưỡng kết hợp chăm sóc sức khỏe cũng đang trở thành một xu hướng mới, mở ra nhiều cơ hội cho các nhà phát triển dự án. ([kinhtedouong.vn](https://kinhtedouong.vn/tiem-nang-cho-phan-khuc-bat-dong-san-nghi-duong-trong-nam-2025-104471.html?utm_source=chatgpt.com))",
        },
        {
            id: 6,
            title: "Quá ít dự án nhà ở mới được đầu tư",
            image: Image6,
            content: "Thông tin được ông Nguyễn Văn Đính - chủ tịch Hội Môi giới bất động sản Việt Nam - đưa ra tại hội thảo ...",
            detail: "Quá ít dự án nhà ở mới được đầu tư. Thông tin được ông Nguyễn Văn Đính - chủ tịch Hội Môi giới bất động sản Việt Nam - đưa ra tại hội thảo Dòng tiền chảy vào bất động sản phía Nam, nhận diện cơ hội đầu tư, do tạp chí điện tử Bất Động Sản Việt Nam phối hợp với Viện Nghiên cứu bất động sản Việt Nam, Hội Môi giới bất động sản Việt Nam (VARS) tổ chức ngày 31-10 tại Hà Nội.\n\nTrình bày báo cáo thị trường bất động sản, nhà ở Việt Nam 9 tháng của năm 2024, ông Đính cho biết nguồn cung nhà ở các tỉnh vùng TP.HCM đạt khoảng 11.000 sản phẩm.\n\nNguồn cung 9 tháng hầu hết đến từ giai đoạn tiếp theo của các dự án cũ, trong đó 69% là căn hộ, 24% là biệt thự, nhà liền kề.\n\nNếu tính riêng trong quý 3 năm nay, nguồn cung bất động sản tại các tỉnh vùng TP.HCM chỉ đạt 2.073 sản phẩm, trong đó nguồn cung nhà ở TP.HCM chiếm 70% nguồn cung toàn vùng.\n\nTỉ lệ hấp thụ nguồn cung nhà mới tại các tỉnh vùng TP.HCM 9 tháng đạt khoảng 55%, tương đương khoảng 6.000 sản phẩm được giao dịch thành công.\n\nVề giá bán bình quân cụm mẫu dự án (những dự án được VARS khảo sát để thực hiện báo cáo) ở TP.HCM tăng từ 49,2 triệu đồng/m2 lên 64,2 triệu đồng/m2, phản ánh mức tăng 30,6% so với cuối năm 2023.\n\nNhu cầu căn hộ dưới 2 tỉ đồng rất lớn. Phân tích nhu cầu nhà ở khu vực TP.HCM, ông Lê Như Thạch, chủ tịch Tập đoàn Bcons, cho hay nhu cầu sở hữu căn hộ có giá dưới 2 tỉ đồng tại TP.HCM rất lớn, trong khi nguồn cung căn hộ mới năm 2024 hạn chế. Điều này đẩy giá bán nhà lên cao, khiến nhiều người rơi vào tình trạng khó khăn trong tìm kiếm nơi an cư phù hợp.\n\nMỗi năm TP.HCM cần thêm khoảng 50.000 căn hộ để đáp ứng nhu cầu ở của người dân, trong đó 60-70% có nhu cầu mua nhà giá rẻ. Vì vậy, rất cần những giải pháp phát triển nhà ở phù hợp với khả năng tài chính. Đáng tiếc là thị trường đang thiếu hụt nghiêm trọng dự án nhà ở giá rẻ, khiến nhiều người gặp khó trong tìm kiếm nơi an cư, ông Thạch nói thêm.\n\nNhận định về triển vọng bất động sản vùng TP.HCM giai đoạn 2024 - 2030, ông Đính cho rằng có 2 yếu tố vĩ mô tạo sức bật.\n\nĐó là động lực từ phát triển kinh tế của TP.HCM trong vai trò một trung tâm kinh tế lớn nhất cả nước, có tỉ lệ đô thị hóa cao.\n\nVà sức bật từ hạ tầng hiện đại, kết nối thuận tiện khi hàng loạt dự án hạ tầng trọng điểm đang được triển khai để kết nối TP.HCM với các tỉnh trong vùng.\n\nTuy nhiên, do quỹ đất khu vực trung tâm TP.HCM ngày càng khan hiếm nên nhu cầu mua bất động sản sẽ dịch chuyển đáng kể sang các tỉnh thành vùng ven như Long An, Bình Dương, Đồng Nai, Bà Rịa - Vũng Tàu, ông Đính nói.\n\nÔng Đính cũng dự báo trong ngắn hạn, nguồn cung nhà ở khu vực TP.HCM sẽ tăng trưởng mạnh vào quý 4-2024, với nhiều lựa chọn có mức giá phù hợp hơn. Nguồn cung mới chủ yếu được đóng góp từ các tỉnh, thành phố ven TP.HCM như Bình Dương, Đồng Nai, Long An.\n\nCòn trung hạn nguồn cung nhà ở được bổ sung đáng kể nhờ các dự án mắc kẹt được tháo gỡ, cùng những dự án quy mô lớn dự kiến triển khai trong 2 năm tới."
        }
    ];

    // Hàm điều hướng khi click vào tin tức
    const handleNewsClick = (newsId) => {
        const selectedNews = newsList.find(item => item.id === newsId);
        navigate(`/NewsDetailContent/${newsId}`, { state: { news: selectedNews, newsList: newsList } });
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
