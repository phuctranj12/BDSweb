import React from 'react';
import '../../styles/AboutUsPage.css';
import TeamMemberCard from './TeamMemberCard';
import member1 from '../assets/image/LK1.jpg';
import member2 from '../assets/image/LK1.jpg';
import member3 from '../assets/image/LK1.jpg';

const AboutUsPage = () => {
    return (
        <div className="about-container">
            <header className="about-header">
                <h1>Về Chúng Tôi</h1>
                <p>
                    Chúng tôi là công ty bất động sản hàng đầu, cam kết mang đến giải pháp tối ưu cho khách hàng.
                </p>
            </header>

            <section className="about-section">
                <h2>Sứ mệnh</h2>
                <p>
                    Kết nối con người với không gian sống mơ ước, góp phần kiến tạo cộng đồng văn minh và hiện đại.
                </p>
            </section>

            <section className="about-section">
                <h2>Tầm nhìn</h2>
                <p>
                    Trở thành thương hiệu bất động sản uy tín hàng đầu tại Việt Nam và khu vực.
                </p>
            </section>

            <section className="about-section">
                <h2>Giá trị cốt lõi</h2>
                <ul className="core-values">
                    <li>Uy tín</li>
                    <li>Chuyên nghiệp</li>
                    <li>Khách hàng là trung tâm</li>
                    <li>Liên tục đổi mới</li>
                </ul>
            </section>

            <section className="about-section">
                <h2>Đội ngũ nhân sự</h2>
                <p>Chúng tôi là tập thể chuyên nghiệp, giàu kinh nghiệm và luôn đổi mới để phục vụ khách hàng tốt nhất.</p>
                <div className="team-list">
                    <TeamMemberCard
                        name="Nguyễn Văn A"
                        role="Giám đốc điều hành"
                        image={member1}
                    />
                    <TeamMemberCard
                        name="Trần Thị B"
                        role="Trưởng phòng Kinh doanh"
                        image={member2}
                    />
                    <TeamMemberCard
                        name="Lê Văn C"
                        role="Kỹ sư phát triển hệ thống"
                        image={member3}
                    />
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;
